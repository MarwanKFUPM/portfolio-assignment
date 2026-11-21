Portfolio Scroll Easing Update

Copy the src/ files from this ZIP over the corresponding files in your current React/Vite project.
The tests/ files replace existing scroll-related tests; your achievement data and CSS are unchanged.

Behavior:
- Autoscroll resumes after 2 seconds of inactivity.
- Automatic downward motion accelerates smoothly over 900ms.
- Hover/focus pauses decelerate over 650ms.
- Direct wheel/touch/pointer input cancels immediately so manual scrolling is never overridden.
- Scroll decelerates for the last 24px before the bottom, then performs the existing 2-second eased rewind.
- Movement gently ramps up again at the top.
- The same code works in Portfolio and Archive modes on desktop, tablet and mobile, and respects reduced-motion preferences.

To adjust the timings, edit constants in src/lib/autoScroll.js:
START_EASE_DURATION_MS, STOP_EASE_DURATION_MS, END_EASE_DISTANCE_PX, REWIND_DURATION_MS.

Run: npm test
