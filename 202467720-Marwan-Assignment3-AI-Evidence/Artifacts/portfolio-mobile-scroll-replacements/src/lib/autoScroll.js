/**
 * Archive autoscroll is an inexpensive, deterministic state machine.
 * It always advances downward, briefly rewinds to the top, then repeats.
 */
export const SCROLL_RESUME_DELAY_MS = 2000;
export const SCROLL_SPEED_PX_PER_MS = 0.019 * (4 / 3); // 33⅓% faster than before
export const REWIND_DURATION_MS = 2000;

export function initialAutoScrollState() {
  return { position: 0, phase: 'down', rewindFrom: 0, rewindElapsed: 0 };
}

export function advanceAutoScroll(state, elapsedMs, maximum) {
  const max = Math.max(0, maximum);
  const delta = Math.max(0, Math.min(elapsedMs, 100));
  const position = Math.min(max, Math.max(0, state.position));

  if (max <= 40) return { ...initialAutoScrollState(), position };

  if (state.phase === 'rewind') {
    const rewindElapsed = Math.min(REWIND_DURATION_MS, state.rewindElapsed + delta);
    const progress = rewindElapsed / REWIND_DURATION_MS;
    // Quintic smootherstep: zero velocity at both ends of the 2-second
    // return. This avoids the abrupt initial snap of a quadratic rewind.
    if (progress >= 1) return initialAutoScrollState();
    const eased = progress * progress * progress * (progress * (progress * 6 - 15) + 10);
    const remaining = 1 - eased;
    return {
      position: Math.min(max, state.rewindFrom * remaining),
      phase: 'rewind', rewindFrom: state.rewindFrom, rewindElapsed,
    };
  }

  const next = Math.min(max, position + delta * SCROLL_SPEED_PX_PER_MS);
  if (next >= max) {
    return { position: max, phase: 'rewind', rewindFrom: max, rewindElapsed: 0 };
  }
  return { position: next, phase: 'down', rewindFrom: 0, rewindElapsed: 0 };
}
