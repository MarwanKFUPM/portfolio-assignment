# Literary API integration & image optimization

## Where the feature appears

The **Authors & quotations** explorer is rendered on:

- `/writing`
- `/archive/writing` (Poetry & Essays)
- `/archive/lit-club` (Literature Club)

The rest of the portfolio, existing content, Arabic translations, and procedural tiling remain unchanged. The explorer works in English and Arabic. Quotes are displayed **in their source language, English**, rather than being automatically translated.

## External APIs (no credentials required)

1. **Wikiquote (MediaWiki Action API)** — requests the selected author's page as wikitext and extracts a limited number of short, first-level quotations. Endpoint: `https://en.wikiquote.org/w/api.php?action=parse&page=...&prop=wikitext&format=json&origin=*`. Each quote links to its author page on Wikiquote. Community-edited sources may have disputed attributions; the UI links to the original page for verification. The parser deliberately skips sections labeled misattributed, disputed, unsourced, etc., and does not invent fallback quotes.
2. **Open Library author search** — retrieves the selected author's name, birth/death dates (when present), notable work, and a profile link. Endpoint: `https://openlibrary.org/search/authors.json?q=...&limit=5`. Only an exact-name match is accepted to avoid attaching an unrelated biography.

The two requests run in parallel and can fail independently. The UI shows a retry action, an explicit empty/error state, and source links. Requests are only made when a literary page is opened and an author is selected, not for all authors at once. A session-level cache avoids repeat requests for the same author. Each request can be aborted after 12 seconds or on navigation. No API keys are stored.

**Stateful features:** selected author, quote pagination, saved-quote view, and per-quote favorites. Favorites persist locally under `living-archive-literary-favorites-v1` (up to 40 entries). They are browser-local, not synchronized to a server.

**Author choices:** edit `LITERARY_AUTHORS` in `src/lib/literaryApis.js`. Use the correct English Wikiquote page title and the Open Library search name.

**Source documentation:**
- https://www.mediawiki.org/wiki/API:Parsing_wikitext
- https://www.mediawiki.org/wiki/API:Cross-site_requests
- https://openlibrary.org/developers/api
- https://openlibrary.org/dev/docs/api/search

## Responsive image delivery

- `public/optimized/` contains pre-generated WebP variants of all **nine** raster source images in the supplied project, at widths up to their native resolution.
- `src/data/optimizedImages.json` maps original image URLs to the available WebP widths.
- `src/lib/imageAssets.js` produces `srcSet`/`sizes` attributes so the browser downloads an appropriately sized image for the portrait, project thumbnails, archive tiles, and detail images.
- Archive tiles use real `<img>` elements instead of CSS-only background images, enabling browser-native responsive image selection and lazy loading. The mosaic already virtualizes offscreen tiles, which further limits decode and memory work.
- The transition overlay uses a resized image where available. SVGs remain vector files, and originals remain as fallbacks.
- Image decoding is asynchronous, and below-the-fold/detail imagery is lazy-loaded. The above-the-fold portrait retains high fetch priority.

To regenerate variants after adding or replacing artwork:

```bash
python -m pip install Pillow
python scripts/optimize-images.py
```

This is a **development-time** script, not a runtime dependency. Commit or deploy the generated `public/optimized/` images and the updated `src/data/optimizedImages.json` alongside the code. New images continue to work without optimization, but running the script gives them responsive variants.

## Integration

Copy the replacement files to the same relative paths in your project. **Do not delete** your original `public/art/` or `public/portrait.png`; the optimized images are additional files. The code expects the latest bilingual `src/data/achievements.js` and `src/content/localizeEntry.js` from the prior translation update.

Run:

```bash
npm test
npm run build
```

Note: Live browser API requests require an internet connection and can be affected by remote API outages or rate limits. Automated tests use mock responses and do not validate the external service's current uptime.
