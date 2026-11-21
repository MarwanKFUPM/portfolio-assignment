Archive automatic scrolling — replacement files

Copy the files in src/ into the matching folders of your existing React portfolio project.
Existing data, styling, and layout files remain unchanged.

Changes:
- Auto-scroll resumes after 2 seconds of inactivity (including initial display).
- Moves downward at 25.33 pixels/second, 33.33% faster than the previous 19 px/s.
- At the bottom, performs a 400 ms upward rewind to the top, then continues downward.
- Pauses for wheel, touch, pointer and focus activity. Manual interactions interrupt the rewind.
- Honors reduced-motion preferences.

Included:
  src/components/ArchiveMosaic.jsx (replace)
  src/lib/autoScroll.js (new)
  tests/autoScroll.test.js (new)

Run tests with: npm test
