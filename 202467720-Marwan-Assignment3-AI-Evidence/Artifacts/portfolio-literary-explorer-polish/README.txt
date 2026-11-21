LITERARY EXPLORER — EDITORIAL UI POLISH

Apply this ZIP on top of the previously provided literary API/image optimization patch.
Replace the files at these exact paths:
  src/components/LiteraryExplorer.jsx
  src/styles/global.css

What changed
- Redesigned native-looking author dropdown as a styled selector.
- Reorganized filters and saved quotes into a compact controls panel.
- Gave author name, dates, notable work and Open Library link better hierarchy.
- Added a spacious quotation card using the site's editorial serif typography.
- Redesigned save/source actions with the site's pill button and underline link vocabulary.
- Moved quote position into the card and replaced text-heavy pagination with navigation and a thin progress line.
- Added subtle fade-and-rise between quotes, a loading indicator, hover and active states.
- Responsive stacked controls on narrow viewports; RTL navigation arrows; reduced-motion support.
- Uses existing global CSS variables (--paper, --paper-soft, --ink, --muted, --paper-line, --accent),
  so it follows both the light and dark themes without an isolated palette.
- Keeps the same Wikiquote/Open Library API implementation, favorites storage and English/Arabic strings.

The replacement global.css is the full stylesheet, not a short addendum; replacing
it is important so all literary styles are present alongside the portfolio styles.
No API data, achievement text, images, tiling logic, or other components were changed.

Verification
- New JSX parsed successfully with @babel/parser.
- 14 relevant API, image, translation tests passed (the tested API and image modules are unchanged).
- CSS inspected in Chromium at 980px and 390px in light/dark modes. Controls are custom-styled,
  and neither quote card nor selector controls overflow the panel.
- No live API calls or full production build were performed for this CSS-focused update.
