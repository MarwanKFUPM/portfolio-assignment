/**
 * A frame-rate-independent auto-scroll state machine.
 * Speed eases in from rest, eases out before the bottom, and eases out when
 * a non-manual interaction pauses it. Direct scrolling cancels immediately
 * so animation never fights a user's finger, wheel or scrollbar.
 */
export const SCROLL_RESUME_DELAY_MS = 2000;
export const SCROLL_SPEED_PX_PER_MS = 0.019 * (4 / 3);
export const REWIND_DURATION_MS = 2000;
export const START_EASE_DURATION_MS = 900;
export const STOP_EASE_DURATION_MS = 650;
export const END_EASE_DISTANCE_PX = 24;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const smoothstep = t => t * t * (3 - 2 * t);
const smootherstep = t => t * t * t * (t * (t * 6 - 15) + 10);

export function initialAutoScrollState(position = 0) {
  return {
    position,
    phase: 'down',
    startElapsed: 0,
    velocity: 0,
    rewindFrom: 0,
    rewindElapsed: 0,
  };
}

/**
 * Request a stop at the current visible position. Use immediate=true for
 * user-initiated scrolling; otherwise, coast to rest in 650 ms.
 */
export function pauseAutoScroll(state, position = state.position, immediate = false) {
  const p = Math.max(0, position);
  if (immediate || state.phase === 'paused' || Math.abs(state.velocity || 0) < 1e-7) {
    return { ...state, phase: 'paused', position: p, velocity: 0 };
  }
  if (state.phase === 'stopping') return state;
  return {
    ...state,
    phase: 'stopping',
    position: p,
    stopFrom: p,
    stopElapsed: 0,
    stopVelocity: state.velocity,
  };
}

/** Resume at zero speed from where the user left the archive. */
export function resumeAutoScroll(state) {
  if (state.phase !== 'paused') return state;
  return {
    ...initialAutoScrollState(state.position),
  };
}

export function advanceAutoScroll(state, elapsedMs, maximum) {
  const max = Math.max(0, maximum);
  const delta = clamp(Number.isFinite(elapsedMs) ? elapsedMs : 0, 0, 100);
  const position = clamp(state.position, 0, max);

  if (max <= 40) return { ...initialAutoScrollState(position), phase: 'paused' };
  if (state.phase === 'paused') return { ...state, position, velocity: 0 };

  if (state.phase === 'stopping') {
    const elapsed = Math.min(STOP_EASE_DURATION_MS, (state.stopElapsed || 0) + delta);
    const t = elapsed / STOP_EASE_DURATION_MS;
    // A continuous velocity v(t) = v0 * (1 - t) gives a graceful stop.
    const displacement = (state.stopVelocity || 0) * STOP_EASE_DURATION_MS * (t - 0.5 * t * t);
    const next = clamp(state.stopFrom + displacement, 0, max);
    if (t >= 1 || (next === max && (state.stopVelocity || 0) > 0)) {
      return { ...state, phase: 'paused', position: next, velocity: 0, stopElapsed: elapsed };
    }
    return { ...state, position: next, stopElapsed: elapsed,
      velocity: (state.stopVelocity || 0) * (1 - t) };
  }

  if (state.phase === 'rewind') {
    const elapsed = Math.min(REWIND_DURATION_MS, state.rewindElapsed + delta);
    const t = elapsed / REWIND_DURATION_MS;
    if (t >= 1) return initialAutoScrollState(0);
    const next = clamp(state.rewindFrom * (1 - smootherstep(t)), 0, max);
    // Derivative of smootherstep, used if a hover interrupts the rewind.
    const speed = -state.rewindFrom * (30 * t * t * (1 - t) * (1 - t)) / REWIND_DURATION_MS;
    return { ...state, position: next, rewindElapsed: elapsed, velocity: speed };
  }

  if (state.phase === 'brake') {
    const elapsed = Math.min(state.brakeDuration, state.brakeElapsed + delta);
    const t = elapsed / state.brakeDuration;
    if (t >= 1) {
      return { ...state, position: max, phase: 'rewind', velocity: 0,
        rewindFrom: max, rewindElapsed: 0 };
    }
    // Ease-out quadratic with initial slope matching the cruise velocity.
    const next = state.brakeFrom + state.brakeDistance * (2 * t - t * t);
    const speed = (2 * state.brakeDistance / state.brakeDuration) * (1 - t);
    return { ...state, position: clamp(next, 0, max), brakeElapsed: elapsed, velocity: speed };
  }

  // Moving downward: increase velocity smoothly from zero to cruise speed.
  const previousElapsed = state.startElapsed ?? 0;
  const nextElapsed = Math.min(START_EASE_DURATION_MS, previousElapsed + delta);
  const before = smoothstep(previousElapsed / START_EASE_DURATION_MS);
  const after = smoothstep(nextElapsed / START_EASE_DURATION_MS);
  // Trapezoidal integration keeps motion similar across refresh rates.
  const traveled = delta * SCROLL_SPEED_PX_PER_MS * (before + after) / 2;
  const next = clamp(position + traveled, 0, max);
  const speed = after * SCROLL_SPEED_PX_PER_MS;
  const remaining = max - next;
  if (remaining <= END_EASE_DISTANCE_PX && speed > 0.0001) {
    // Distance = velocity * duration / 2 for a linear ease to zero.
    const duration = Math.max(280, 2 * remaining / speed);
    return { ...state, position: next, phase: 'brake', velocity: speed,
      startElapsed: nextElapsed, brakeFrom: next, brakeDistance: remaining,
      brakeElapsed: 0, brakeDuration: duration };
  }
  return { ...state, position: next, startElapsed: nextElapsed, velocity: speed };
}
