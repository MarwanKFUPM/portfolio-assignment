# Marwan's Living Archive — React redesign

A responsive React/Vite redesign of the supplied SWE363 portfolio, featuring a centered, independently scrolling portfolio surrounded by an interactive **square-only collage**. The three circular controls float directly over the collage (no conventional navbar).

## Start

Requires Node.js 20.19+ or 22.12+ and npm, with network access for initial installation.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173). To create production files:

```bash
npm run build
npm run preview
```

To run geometry tests without installing dependencies:

```bash
npm test
```

For production hosting, configure the server to fall back to `index.html` for app routes such as `/archive/writing` and `/projects`.

## Features

- A fixed, centered and vertically scrollable portfolio with a full-viewport, independently scrollable mosaic behind it.
- Genuine square tiles — no arbitrary rectangular achievement cards in the collage.
- Tiles align exactly with both side edges of the central portfolio; their layout reassembles when Archive Mode opens.
- Archive Mode builds one continuous 10-unit-wide (desktop) square grid, without a compulsory mathematically perfect squared-square solution.
- Floating circular controls for theme, English/Arabic UI, and archive expansion.
- Clicking a collage item or internal navigation link uses the same cinematic zoom transition and updates the URL using the History API; browser Back works.
- Respect for reduced-motion preferences, keyboard focus states, image alt text, and touch input.
- An Archive Mode demonstration dock adds/removes four **clearly labeled example** entries so you can see expansion and reflow.
- Uses the portrait image from the original portfolio. Achievement art is locally authored SVG illustration, **not purported project screenshots**.

## Your content and example content

`src/data/achievements.js` is the sole source of archive entries. The first six come directly from the material in your supplied portfolio: Portfolio Website, E-Commerce Website, Mobile App UI, Analytics Dashboard, Poetry & Essays (with the existing Substack link), and Classics & Reading (an interest, not an award). The next **four** are explicitly marked placeholders: Research Notebook, A Talk Worth Sharing, Personal Library, and Creative Experiment. Add real images/screenshots and real working URLs as they become available.

Each item can contain:

```js
{
  id: 'new-project',
  title: 'Your achievement',
  category: 'Development',
  summary: 'One-sentence summary',
  body: 'Detailed story',
  image: '/art/your-image.jpg',
  meta: 'Year · Tools',
  links: [{ label: 'Open project', href: 'https://example.com' }],
  sample: false,
}
```

Place new pictures under `public/art/` and reference them as `/art/your-image.jpg`. Remove any existing item object to delete it. Demo-generated entries are temporary and reset on reload.

The original contact form could not actually send messages, so it has **not** been replaced with another fake form. LinkedIn and Substack are working external links from the source material. An email integration can be added when a verified destination is provided.

## Layout geometry and growth

The layout is designed around one complete 5×5-unit module per side, using the square side lengths **3, 2, 2, 2, 1, 1, 1, 1**. Their areas total 25 units², and the set tiles the entire 5×5 module without overlap or gaps.

- **Portfolio Mode:** two five-unit-wide wings touch the central page exactly at its left and right edges; its center remains free. Some outer squares may be clipped on narrow viewports.
- **Desktop Archive Mode:** the central page recedes, the wings slide together to become 10 units wide, and the same tile elements remain interactive.
- **Mobile Archive Mode:** the two five-unit wings stack vertically so text remains usable.
- **Growing:** Each five-unit-tall row pair can hold up to 16 archive entries (eight slots per wing). Entries 1–16 require one tier; 17–32 require two; 33–48 require three, and so on. Unused slots are subtle, **non-interactive decorative squares**, not fabricated achievements. Width is held constant in each mode while height increases; the mosaic is scrollable when it grows.

A picture of this behavior is in `docs/mosaic-growth.png` and `docs/mosaic-growth.svg`.

## File map

```text
src/
  App.jsx                        state, navigation, transitions
  components/
    ArchiveMosaic.jsx            square tiles / click-to-open
    PortfolioPanel.jsx           about, projects, writing, contact, details
    FloatingControls.jsx         global circular controls
    TransitionLayer.jsx          flashback handoff
    Icons.jsx                    reusable SVG icons
  content/translations.js        EN/AR UI strings
  data/achievements.js           editable archive content
  hooks/useViewport.js           responsive dimensions
  lib/mosaicLayout.js            pure, tested tiling and positioning
  styles/global.css              shared layout, motion, themes
public/
  portrait.png                   original uploaded image
  art/*.svg                      local illustrative cover artwork
tests/mosaicLayout.test.js       deterministic geometry tests
docs/mosaic-growth.*             growth diagram
```

## Notes and limitations

- The imagery for the four original source projects is an **illustration**, since actual screenshots were not provided.
- Browser transitions are built as a reusable React overlay, rather than using the experimental cross-document View Transitions API. That keeps the navigation behavior consistent across React routes.
- The archive deliberately permits repeated square sizes. It is square-only, not a perfect squared square.
- English/Arabic toggling translates the main UI and card headings/summaries. Original English-only entry bodies remain in English until translated.
- Fonts load from Google Fonts when available; system and Georgia fallbacks remain usable offline **after installing dependencies**.
