# Marwan's Living Archive

An interactive personal portfolio built with **React and Vite**. Instead of a traditional page with a static project gallery, it combines a readable, independently scrolling portfolio with a full-screen **living mosaic** of projects, interests, writing, and other moments worth exploring.

The mosaic is made of genuine squares. Its geometry varies procedurally, its colors flow continuously across the canvas, and its entries open into detailed pages through a shared flashback-style navigation transition.

> **Project status:** An evolving personal website. Some archive entries and illustrations are intentionally labeled examples; they should be replaced with verified content before treating the site as a finished public record.

## Getting started

**Requirements:** Node.js 20+ recommended, npm, and network access for the initial dependency installation.

```bash
npm install
npm run dev
```

Open the local address printed by Vite (typically `http://localhost:5173`). To build and preview a production version:

```bash
npm run build
npm run preview
```

Run the automated layout and behavior tests with:

```bash
npm test
```

The project uses client-side routes such as `/projects` and `/archive/writing`. When deploying, configure your hosting provider to serve `index.html` as the fallback for these paths so direct visits and page refreshes work.

## The experience

### Portfolio Mode

- A centered, vertically scrollable editorial page presents the introduction, projects, writing, and contact details.
- The surrounding mosaic occupies the **entire viewport**, including the space behind the three floating controls. Its square tiles meet the portfolio's side edges without a separate header or outer frame.
- Project and archive squares are clickable. Decorative squares are not.
- The mosaic scrolls passively, allowing visitors to encounter entries beyond the first screen without having to move it themselves.

### Archive Mode

- The **Archive** control makes the central portfolio recede while the mosaic reorganizes into an edge-to-edge, scrollable square gallery.
- The same archive content stays available; selecting an entry opens its detail view.
- The mosaic is an *orderly asymmetric square tiling*, **not** a mathematically perfect squared square. Repeated square sizes are intentional so the collection can grow freely.
- A temporary growth-demo dock can add or remove four clearly labeled example entries at a time. These additions are not saved to the achievement data file.

### Smaller screens

- On phones, tablets, and narrow or short windows, Portfolio Mode uses **two visible vertical rails of squares** around a narrower reading panel.
- The rails scroll automatically. In Archive Mode, the squares reconfigure into an edge-to-edge grid with a column count adapted to the viewport.
- On smaller rails, images take priority over tiny, unreadable captions; the full title and details remain available after opening an entry.
- The responsive layout adapts when the window is resized or a device changes orientation.

## Geometry: varied, but stable

The tiling system is implemented in `src/lib/mosaicLayout.js`.

- **Square-only geometry:** Every tile retains a 1:1 aspect ratio, including decorative filler.
- **Procedural variation:** A seeded generator rotates square formations, subdivides some squares into four children, and sometimes merges eligible children back into a larger square.
- **No repeated rigid template:** The generator varies the arrangements of neighboring square regions rather than repeating an identical module everywhere.
- **Readable achievement placement:** Desktop achievement entries occupy suitable larger squares; small subdivisions remain decorative.
- **Session-stable topology:** A layout seed is created once when the React app mounts. Resizing the browser, rotating a device, and entering or exiting Archive Mode do **not** reroll the underlying square formations. A full page reload can generate a different arrangement.
- **Responsive projection:** The same generated geometry is positioned and scaled for the available desktop space; compact layouts intentionally use simplified side streams and grids.

When achievements are added, the layout allocates further square regions as needed. It is not constrained to a fixed number of entries per row or to a perfect-square solution.

## Passive scrolling and motion

Automatic movement is controlled by `src/lib/autoScroll.js` and applied in `src/components/ArchiveMosaic.jsx`.

| Behavior | Current setting |
| --- | --- |
| Pause before automatic motion resumes | **2 seconds** after interaction |
| Scrolling direction | Downward |
| Cruising speed | About **25.3 px/second** |
| Ease into motion | **900 ms** |
| Ease out on non-manual pause | **650 ms** |
| Approaching the bottom | Slows gently before the endpoint |
| Return to the top | **2-second eased rewind**, followed by another downward pass |
| Direct touch/wheel input | Takes control immediately |
| Reduced-motion preference | Disables automatic movement |

To tune these, edit `SCROLL_RESUME_DELAY_MS`, `SCROLL_SPEED_PX_PER_MS`, `START_EASE_DURATION_MS`, `STOP_EASE_DURATION_MS`, and `REWIND_DURATION_MS` in `src/lib/autoScroll.js`.

The navigation animation is separate from the background scroll. Clicking an archive entry or internal page button triggers a brief zoom/flashback handoff; internal navigation uses the browser History API so Back and Forward remain available.

## Floating controls

Three circular controls hover directly over the collage, without a conventional navigation bar:

1. **Appearance:** Toggle light and dark mode.
2. **Language:** Switch the supported English/Arabic interface text.
3. **Archive:** Enter or leave Archive Mode.

The controls fade out after **3 seconds of inactivity** and reappear on pointer, touch, wheel, or keyboard interaction. They do not block the collage while hidden. Keyboard focus is also considered when hiding them.

Theme and language preferences are stored locally in the browser. The language switch covers supported UI strings and entry titles/summaries; longer entry descriptions remain in their supplied language unless translated separately.

## Managing achievements

Edit **`src/data/achievements.js`** to add, update, or remove real entries. Each entry has a stable `id`, a title, a category, an image, text, and optional links.

```js
{
  id: 'new-project',
  category: 'Development',
  title: 'My New Project',
  summary: 'A concise explanation of the work.',
  body: 'The longer story, technical decisions, and results.',
  image: '/art/new-project.jpg',
  meta: '2026 · React · CSS',
  links: [
    { label: 'View project', href: 'https://example.com' },
  ],
  sample: false,
}
```

Images placed in `public/art/` can be referenced as `/art/filename.jpg`, `.png`, `.webp`, or `.svg`. Use real photographs and screenshots where possible. Replace `example.com` with a working destination; omit `links` or use an empty array when no verified URL exists.

Entries may also have `titleAr`, `categoryAr`, and `summaryAr` for translated labels. Keep IDs unique and stable so links such as `/archive/new-project` remain dependable.

The original React prototype includes entries adapted from the earlier portfolio (software projects, writing, and reading interests), plus **four explicitly marked sample entries**. The demo dock creates additional temporary samples. **An interest or sample must not be presented as an award or completed achievement.**

### Content and contact notes

- Some early project covers are locally created SVG illustrations rather than genuine project screenshots.
- The portfolio's contact page links to public profiles; it does not pretend to send messages through a nonfunctional contact form.
- Replace example copy, placeholder metadata, and unverified imagery as the archive develops.

## Customizing the appearance

Most of the visual design lives in **`src/styles/global.css`**.

| What to change | Where to look |
| --- | --- |
| Light-mode color field | `:root` → `--mosaic-horizontal`, `--mosaic-vertical` |
| Dark-mode color field | `:root[data-theme="dark"]` → the same variables |
| Rate of vertical color variation | `.mosaic-plane` → `background-size` (currently `100% 2200px`) |
| Tile outlines, typography, image treatment | `.mosaic-tile`, `.tile-title`, `.tile-visual` |
| Portfolio width and spacing | `.portfolio-panel` and `computeMetrics()` in `mosaicLayout.js` |
| Floating-button appearance and position | `.floating-controls`, `.orb-button` |
| Floating-button idle delay | `CONTROLS_IDLE_MS` in `FloatingControls.jsx` (currently `3000`) |
| Decorative pattern artwork | `src/lib/ambientPattern.js` |

**Color design:** The decorative squares use a shared continuous gradient beneath the tiles, rather than unrelated color palettes assigned to groups. Changing the gradient stops adjusts the color landscape without changing the tiling geometry.

## Performance approach

The site is designed to remain usable as the archive expands:

- Procedural formations are generated deterministically and cached by module/seed.
- Only tiles near the visible scroll window are mounted; distant decorative squares do not remain in the DOM.
- Decorative SVG artwork is cached per tile identity.
- React updates the visible set in scroll-position buckets rather than on every animation frame.
- Resize handling is delayed to avoid repeatedly rebuilding the layout during continuous zoom or resizing.
- Automatic motion changes the mosaic's **scroll position**, not the transform of every individual tile.

These are architectural optimizations, **not a guarantee of a particular frame rate**. Test large real-world datasets, image sizes, and the target browsers before release.

## Project structure

```text
src/
  App.jsx                       App state, routes, archive mode, navigation
  components/
    ArchiveMosaic.jsx           Tiles, visible-window rendering, scrolling
    PortfolioPanel.jsx          Home, projects, writing, contact, entry pages
    FloatingControls.jsx        Theme, language, and archive buttons
    TransitionLayer.jsx         Zoom/flashback navigation overlay
    Icons.jsx                   Shared icons
  content/
    translations.js             English/Arabic interface strings
  data/
    achievements.js             Archive entries and demo samples
  hooks/
    useViewport.js              Responsive viewport measurements
  lib/
    mosaicLayout.js             Square geometry and responsive projection
    visibleMosaicTiles.js       Viewport-based tile selection
    ambientPattern.js           Procedural decorative SVGs
    autoScroll.js               Easing, pauses, looping/rewind behavior
  styles/
    global.css                  Themes, layout, typography, animation
public/
  portrait.png                  Portfolio portrait
  art/                          Project and sample images/illustrations
tests/
  *.test.js                     Geometry, scrolling, and behavior checks
docs/
  mosaic-growth.*               Early growth illustration (historical)
```

**Note on `docs/mosaic-growth.*`:** The included diagram was made for an earlier fixed-module iteration and should be treated as a historical illustration, **not a specification of the current procedural layout**.

## Accessibility and deployment checklist

Before publishing, verify the following on the actual devices and browsers you intend to support:

- [ ] Light and dark themes are legible, including decorative tiles and text contrast.
- [ ] Mobile portrait, mobile landscape, tablets, and narrow desktop windows show usable side rails or the complete archive grid.
- [ ] The collage scrolls and rewinds smoothly without preventing manual touch or wheel navigation.
- [ ] Floating controls can be revealed and reached with keyboard and touch input.
- [ ] `prefers-reduced-motion` is respected.
- [ ] Each real project has correct content, images, alt text, and functioning links.
- [ ] Temporary example entries are removed or remain clearly labeled.
- [ ] Direct URLs and browser Back/Forward work after deployment.
- [ ] A production build completes with `npm run build`.

---

*Built as a portfolio that can grow with its owner: a readable introduction in the foreground and an explorable archive of work and ideas around it.*
