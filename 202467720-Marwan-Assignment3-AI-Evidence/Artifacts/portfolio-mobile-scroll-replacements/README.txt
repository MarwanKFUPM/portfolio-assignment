MOBILE SIDE-RAIL + SCROLL REWIND PATCH

Replace only these existing files in your React/Vite project:
  src/components/ArchiveMosaic.jsx
  src/lib/autoScroll.js
  src/lib/mosaicLayout.js
  src/styles/global.css

Optional updated regression tests:
  tests/autoScroll.test.js
  tests/mosaicLayout.test.js

Do not replace any other files. The layout follows Design A (balanced
symmetrical rails), as illustrated in mobile-layout-three-options.png.

Changes:
- iPhone-like widths reserve approximately 14-15% on each side of the
  paper panel for a full, visible row of square image previews.
- Rails use genuine square tiles whose widths exactly match the visible
  rail. Tiles begin at the top instead of being initially clipped above it.
- The centered page switches to a compact, single-column hero with
  a portrait underneath and full-width navigation links.
- In Archive Mode, existing tiles still collapse into a 2-4-column grid.
- Autoscroll remains downward at the previous 33%-boosted speed, pauses
  for 2 seconds after interaction, and returns to top with a 2-second
  quintic ease-in-out, rendered via requestAnimationFrame.
- All motion continues to honor prefers-reduced-motion.

Dependencies unchanged. Run npm test, npm run dev.
