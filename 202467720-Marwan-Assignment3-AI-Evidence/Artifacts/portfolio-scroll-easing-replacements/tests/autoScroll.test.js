import test from 'node:test';
import assert from 'node:assert/strict';
import {
  advanceAutoScroll, initialAutoScrollState, pauseAutoScroll, resumeAutoScroll,
  SCROLL_RESUME_DELAY_MS, SCROLL_SPEED_PX_PER_MS, REWIND_DURATION_MS,
  START_EASE_DURATION_MS, STOP_EASE_DURATION_MS,
} from '../src/lib/autoScroll.js';

function run(state, duration, max = 2000, step = 50) {
  let result = state;
  for (let elapsed = 0; elapsed < duration; elapsed += step) {
    result = advanceAutoScroll(result, Math.min(step, duration - elapsed), max);
  }
  return result;
}

test('preserves 2-second inactivity delay, scroll speed and rewind duration', () => {
  assert.equal(SCROLL_RESUME_DELAY_MS, 2000);
  assert.equal(REWIND_DURATION_MS, 2000);
  assert.ok(Math.abs(SCROLL_SPEED_PX_PER_MS - 0.019 * (4 / 3)) < 1e-12);
});

test('smoothly accelerates from rest without jumping to full speed', () => {
  let state = initialAutoScrollState();
  const velocities = [];
  for (let elapsed = 0; elapsed < START_EASE_DURATION_MS; elapsed += 50) {
    state = advanceAutoScroll(state, 50, 2000);
    velocities.push(state.velocity);
  }
  assert.ok(velocities[0] > 0);
  assert.ok(velocities[0] < 0.1 * SCROLL_SPEED_PX_PER_MS);
  for (let i = 1; i < velocities.length; i++) assert.ok(velocities[i] >= velocities[i - 1]);
  assert.ok(Math.abs(state.velocity - SCROLL_SPEED_PX_PER_MS) < 1e-9);
  assert.ok(state.position > 0);
  assert.ok(state.position < START_EASE_DURATION_MS * SCROLL_SPEED_PX_PER_MS);
});

test('hover/focus eases velocity down to a complete stop', () => {
  const running = run(initialAutoScrollState(), START_EASE_DURATION_MS + 500);
  let state = pauseAutoScroll(running, running.position, false);
  assert.equal(state.phase, 'stopping');
  const first = advanceAutoScroll(state, 50, 2000);
  assert.ok(first.position > state.position);
  assert.ok(first.velocity < running.velocity && first.velocity > 0);
  const rest = run(first, STOP_EASE_DURATION_MS - 50);
  assert.equal(rest.phase, 'paused');
  assert.equal(rest.velocity, 0);
  assert.ok(rest.position > running.position);
  assert.ok(Math.abs(run(rest, 500).position - rest.position) < 1e-10);
});

test('manual user input cancels scroll immediately and starts again gently', () => {
  const running = run(initialAutoScrollState(), 1200);
  const stopped = pauseAutoScroll(running, 400, true);
  assert.equal(stopped.position, 400);
  assert.equal(stopped.phase, 'paused');
  assert.equal(stopped.velocity, 0);
  const resumed = resumeAutoScroll(stopped);
  assert.equal(resumed.position, 400);
  const moved = advanceAutoScroll(resumed, 40, 2000);
  assert.ok(moved.position >= 400);
  assert.ok(moved.velocity < SCROLL_SPEED_PX_PER_MS * 0.1);
});

test('slowly brakes at bottom, then smoothly rewinds over 2 seconds', () => {
  let state = { ...initialAutoScrollState(1978),
    startElapsed: START_EASE_DURATION_MS, velocity: SCROLL_SPEED_PX_PER_MS };
  state = advanceAutoScroll(state, 50, 2000);
  assert.equal(state.phase, 'brake');
  const first = advanceAutoScroll(state, 50, 2000);
  assert.ok(first.velocity > 0 && first.velocity < SCROLL_SPEED_PX_PER_MS);
  let previousVelocity = first.velocity;
  state = first;
  for (let i = 0; i < 100 && state.phase === 'brake'; i++) {
    state = advanceAutoScroll(state, 50, 2000);
    assert.ok(state.velocity <= previousVelocity + 1e-10);
    previousVelocity = state.velocity;
  }
  assert.equal(state.phase, 'rewind');
  assert.equal(state.position, 2000);
  const midpoint = run(state, 1000, 2000);
  assert.ok(Math.abs(midpoint.position - 1000) < 1e-6);
  const finished = run(midpoint, 1000, 2000);
  assert.equal(finished.phase, 'down');
  assert.equal(finished.position, 0);
  assert.equal(finished.velocity, 0);
  assert.ok(advanceAutoScroll(finished, 50, 2000).position > 0);
});

test('short archives remain stationary and large frame deltas are clamped', () => {
  const short = advanceAutoScroll(initialAutoScrollState(), 100, 20);
  assert.equal(short.phase, 'paused');
  assert.equal(short.position, 0);
  const one = advanceAutoScroll(initialAutoScrollState(), 10000, 2000);
  const two = advanceAutoScroll(initialAutoScrollState(), 100, 2000);
  assert.deepEqual(one, two);
});

test('a pause during the rewind decelerates upward', () => {
  const running = advanceAutoScroll({ ...initialAutoScrollState(1000),
    phase: 'rewind', rewindFrom: 1000, rewindElapsed: 750 }, 50, 1000);
  assert.ok(running.velocity < 0);
  let state = pauseAutoScroll(running, running.position);
  assert.equal(state.phase, 'stopping');
  state = advanceAutoScroll(state, 50, 1000);
  assert.ok(state.position < running.position);
  state = run(state, STOP_EASE_DURATION_MS, 1000);
  assert.equal(state.phase, 'paused');
});
