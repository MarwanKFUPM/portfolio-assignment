Square tiling mutation patch — replace files in your existing React project

Copy:
  src/App.jsx
  src/components/ArchiveMosaic.jsx
  src/lib/mosaicLayout.js
  tests/mosaicLayout.test.js

No new packages are required. Keep your existing CSS, asset, data, and procedural
artwork files. The new layout generator does NOT replace the decorative designs
inside the ambient squares.

Behavior
- Seeded square formations replace the repeated 5x5 tiling template.
- Rotates complete square regions in quarter turns; subdivides and sometimes
  merges 2x2 sibling square groups. Exact tile boundaries are preserved.
- New seeded formations are created as achievements require more modules.
- Seed is selected exactly once per React application load. Resize, orientation
  changes, theme/language toggles, navigation and Archive Mode do not reseed.
- Existing procedural module geometry is regenerated deterministically from
  the same seed and module ID, so it remains unchanged through desktop reflow.
- Compact mode retains the agreed two side streams and unified grid. That is a
  different responsive projection, not a new random generation; returning to
  desktop restores its original seeded formations.
- A full browser refresh may create a new seed and thus a new arrangement.

Run: npm test
