Portfolio mobile header + auto-hide controls correction

Copy these TWO source files into your existing React project, preserving paths:
  src/components/FloatingControls.jsx
  src/styles/global.css

Optional regression test:
  tests/mobileControls.test.js

Changes:
- Removes the oversized ~76px reserved top padding on mobile/compact pages.
- Floating controls fade away after 3 seconds without input on ALL screen sizes.
- Pointer movement, taps/touch movement, wheel and keyboard activity reveal controls.
- Programmatic automatic mosaic scrolling does not count as user activity.
- Hidden controls cannot intercept touches or clicks on achievement squares.
- Keyboard focus keeps the controls visible for accessibility.

No new dependencies or changes to other components.
Run: npm test
