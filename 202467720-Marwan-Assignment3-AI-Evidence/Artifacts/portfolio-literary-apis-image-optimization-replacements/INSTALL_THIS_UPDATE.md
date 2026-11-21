# Literary API + responsive image update

This is a **replacement-file patch**, not a full project ZIP. Apply it on top of the previous **complete Arabic translations** update. It does not replace `src/data/achievements.js` or any of your authored descriptions.

## Install

Copy the files from this ZIP into your project at the same relative paths, allowing the listed files to be replaced. Keep your original `public/art/` and `public/portrait.png` intact; this patch adds `public/optimized/` alongside them.

## Added pages and behavior

- `/writing`: Authors & quotations explorer
- `/archive/writing`: the same explorer under Poetry & Essays
- `/archive/lit-club`: the same explorer under Literature Club
- Author selection, next/previous quote, save/remove favorite, saved-only view
- Public Wikiquote + Open Library requests, no API keys, graceful failure
- Bilingual UI; English source quotes remain untranslated
- Responsive WebP variants for nine raster images, browser `srcSet` selection, lazy loading, async decode

## Files

Updated: `src/components/ArchiveMosaic.jsx`, `src/components/PortfolioPanel.jsx`, `src/components/TransitionLayer.jsx`, `src/content/translations.js`, `src/styles/global.css`.

New: `src/components/LiteraryExplorer.jsx`, `src/lib/literaryApis.js`, `src/lib/imageAssets.js`, `src/data/optimizedImages.json`, `public/optimized/*.webp`, `scripts/optimize-images.py`, `tests/literaryApis.test.js`, `tests/optimizedImages.test.js`, `docs/LITERARY_APIS_AND_IMAGES.md`.

## Validation

- New API tests: **6/6 passed** with mocked responses.
- Image asset tests: **2/2 passed**.
- Existing translation tests: **6/6 passed**.
- Full test suite: **36/40 passed**; the same four auto-scroll tests fail in the untouched uploaded baseline (not introduced by this patch).
- All 16 JavaScript/JSX source files parsed successfully with Babel.
- A Vite production build could not be run in this Linux environment because the uploaded dependencies contain Windows-only Rollup native binaries. Run `npm install` and `npm run build` in your own project.
- Live API responses were not tested from this environment because outbound DNS/network access is unavailable. API endpoint formats were checked against official documentation.

For further details and maintenance instructions, see `docs/LITERARY_APIS_AND_IMAGES.md`.
