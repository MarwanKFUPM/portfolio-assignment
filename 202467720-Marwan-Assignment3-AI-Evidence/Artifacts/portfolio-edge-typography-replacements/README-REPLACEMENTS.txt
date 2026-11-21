Portfolio edge coverage and achievement typography patch

Copy into the existing React project, preserving paths:
  src/lib/mosaicLayout.js
  src/styles/global.css
  tests/mosaicLayout.test.js

Fixes:
- Desktop square wings span both outer viewport edges exactly.
- Narrow windows use side columns wide enough to cover their outside gutters.
- Tiles fill vertical space in Portfolio and Archive Mode.
- Achievements are placed only in structurally larger squares (>=2 grid units)
  while smaller squares remain decorative. This is stable across resizing.
- Achievement text scales with its actual square size using CSS container units,
  has better line breaks and stronger minimum font sizes.

Run: npm test

Note: Desktop/compact mode changes at a calculated width to preserve a
readable minimum for achievement squares. CSS container queries require a
modern browser.
