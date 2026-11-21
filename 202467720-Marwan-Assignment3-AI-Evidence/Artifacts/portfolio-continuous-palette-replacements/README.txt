CONTINUOUS MOSAIC PALETTE — REPLACEMENTS

Copy these into the root of your EXISTING React/Vite portfolio project:

  src/components/ArchiveMosaic.jsx  (replace)
  src/styles/global.css             (replace)
  tests/ambientPalette.test.js     (optional new regression test)

The decorative mosaic now uses a single, spatially continuous background
palette painted by .mosaic-plane. Each decorative square remains transparent
except for its unique procedural line art and border. Colors therefore blend
slowly across square and module boundaries without abrupt color grouping.

Light theme: muted sea-glass / stone, subtle vertical light variation.
Dark theme: low-contrast slate / forest graphite.

Technical notes:
- No new JS libraries, canvas painting, or per-square color computation.
- The global gradient is 2200px high and repeats vertically with matching
  colors at the top/bottom so there is no hard seam at the loop boundary.
- The original achievements, images, navigation, mosaic geometry, scroll
  behavior, mobile layout and auto-hide floating controls are unchanged.

Run available tests in the project root:
  npm test
