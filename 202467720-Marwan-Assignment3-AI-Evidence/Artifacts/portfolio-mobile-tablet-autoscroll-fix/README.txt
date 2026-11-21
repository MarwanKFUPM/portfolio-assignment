Mobile / tablet auto-scroll correction
======================================

Copy the contents of this folder into your existing React project, preserving
paths and replacing the three implementation files. tests/mobileScroll.test.js
is an optional, newly added regression test.

Updated:
  src/components/ArchiveMosaic.jsx
    - Maintain fractional auto-scroll progress rather than rounding it away
      by rereading scrollTop every animation frame on mobile Safari.
    - Track the latest user scroll position during touch/wheel interaction so
      autoplay resumes from the correct place.

  src/lib/mosaicLayout.js
    - Give the paired small-screen side rails enough vertical extent for a
      meaningful passive scrolling loop.

  src/styles/global.css
    - Remove the compact portfolio mode overflow:hidden rule that prevented
      mobile/tablet side-rail scrolling.
    - Enable native vertical touch scrolling on the background.

New optional test:
  tests/mobileScroll.test.js

Unchanged:
  src/lib/autoScroll.js
    - 2-second inactivity delay, established scroll rate, 2-second eased
      rewind, and downward direction all preserved.

Run: npm test
Note: 24 automated tests passed. No actual phone/browser build was run here.
