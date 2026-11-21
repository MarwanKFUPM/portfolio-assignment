import test from 'node:test';
import assert from 'node:assert/strict';
import {
  advanceAutoScroll, initialAutoScrollState,
  SCROLL_RESUME_DELAY_MS, SCROLL_SPEED_PX_PER_MS, REWIND_DURATION_MS,
} from '../src/lib/autoScroll.js';

test('resume delay is two seconds and down-scroll is 33% faster', () => {
  assert.equal(SCROLL_RESUME_DELAY_MS, 2000);
  assert.ok(Math.abs(SCROLL_SPEED_PX_PER_MS - 0.019 * (4 / 3)) < 1e-12);
  const moved = advanceAutoScroll(initialAutoScrollState(), 100, 500);
  assert.equal(moved.phase, 'down');
  assert.ok(Math.abs(moved.position - 100 * SCROLL_SPEED_PX_PER_MS) < 1e-9);
});

test('scrolls downward, rewinds quickly at the bottom, and resumes downward', () => {
  let state = { ...initialAutoScrollState(), position: 498 };
  state = advanceAutoScroll(state, 100, 500);
  assert.equal(state.position, 500);
  assert.equal(state.phase, 'rewind');
  state = advanceAutoScroll(state, 100, 500);
  assert.ok(state.position < 500 && state.position > 0);
  for (let t = 100; t < REWIND_DURATION_MS; t += 100) state = advanceAutoScroll(state, 100, 500);
  assert.deepEqual(state, initialAutoScrollState());
  state = advanceAutoScroll(state, 40, 500);
  assert.equal(state.phase, 'down');
  assert.ok(state.position > 0);
});

test('never runs backward during the default phase', () => {
  let state = initialAutoScrollState();
  for (let i = 0; i < 1000; i++) {
    const next = advanceAutoScroll(state, 40, 800);
    if (state.phase === 'down' && next.phase === 'down') assert.ok(next.position >= state.position);
    state = next;
  }
});

test('clamps elapsed time, handles short archives and viewport changes', () => {
  let state = advanceAutoScroll(initialAutoScrollState(), 10000, 500);
  assert.ok(state.position <= 100 * SCROLL_SPEED_PX_PER_MS + 1e-9);
  state = advanceAutoScroll({ ...initialAutoScrollState(), position: 600 }, 40, 350);
  assert.ok(state.position <= 350);
  state = advanceAutoScroll(state, 40, 20);
  assert.equal(state.phase, 'down');
  assert.ok(state.position <= 20);
});
