import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import { visibleMosaicTiles } from '../lib/visibleMosaicTiles.js';
import Icon from './Icons.jsx';
import { createAmbientBackground } from '../lib/ambientPattern.js';

// The artwork generator is costly when hundreds of SVG backgrounds are encoded.
// Generate once per tile identity, only when the tile enters the viewport.
const artworkCache = new Map();
function artworkFor(id) {
  if (!artworkCache.has(id)) {
    if (artworkCache.size > 900) artworkCache.delete(artworkCache.keys().next().value);
    artworkCache.set(id, createAmbientBackground(id));
  }
  return artworkCache.get(id);
}

const ArchiveTile = memo(function ArchiveTile({ tile, onOpen, lang }) {
  const { entry, pixels, x, y, decorative } = tile;
  const tone = tile.globalModuleIndex ?? tile.moduleIndex ?? tile.row ?? 0;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    '--tile-tone': `var(--tile-tone-${Math.abs(tone) % 6})`,
    ...(decorative ? { '--ambient-art': artworkFor(tile.id) } : {}),
  };
  if (decorative) {
    return <div className="mosaic-tile mosaic-tile--ambient" style={style} aria-hidden="true" />;
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style} onClick={event => onOpen(entry, event.currentTarget)}
      data-side={tile.side} data-entry-id={entry.id} title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}>
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
});

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen, layoutSeed = 1 }) {
  const scrollRef = useRef(null);
  const pauseUntil = useRef(0);
  const lastTime = useRef(0);
  const direction = useRef(1);
  const [viewTop, setViewTop] = useState(0);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive, layoutSeed), [entries, viewport.width, viewport.height, archive, layoutSeed]);
  const viewportHeight = viewport.height;

  const syncWindow = useCallback((force = false) => {
    const top = scrollRef.current?.scrollTop ?? 0;
    // Recalculate the visible set only after crossing a 120px bucket.
    const bucket = Math.floor(top / 120) * 120;
    setViewTop(previous => force || previous !== bucket ? bucket : previous);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollTop = 0;
    syncWindow(true);
    lastTime.current = 0;
    direction.current = 1;
  }, [archive, layout.metrics.compact, syncWindow]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pause = () => { pauseUntil.current = performance.now() + 7000; };
    const scroll = () => syncWindow();
    const hoverEntry = event => {
      if (event.target.closest?.('.mosaic-tile--entry')) pause();
    };
    element.addEventListener('wheel', pause, { passive: true });
    element.addEventListener('touchstart', pause, { passive: true });
    element.addEventListener('pointerdown', pause, { passive: true });
    element.addEventListener('pointerover', hoverEntry, { passive: true });
    element.addEventListener('focusin', pause);
    element.addEventListener('scroll', scroll, { passive: true });
    // ~25 fps is enough for this slow motion and avoids a 60 fps React workload.
    const timer = window.setInterval(() => {
      const time = performance.now();
      const delta = lastTime.current ? Math.min(time - lastTime.current, 100) : 0;
      lastTime.current = time;
      if (document.hidden || reduce.matches || time < pauseUntil.current) return;
      const max = element.scrollHeight - element.clientHeight;
      if (max <= 40) return;
      const next = element.scrollTop + direction.current * delta * 0.019;
      if (next >= max) { element.scrollTop = max; direction.current = -1; }
      else if (next <= 0) { element.scrollTop = 0; direction.current = 1; }
      else element.scrollTop = next;
    }, 40);
    return () => {
      window.clearInterval(timer);
      element.removeEventListener('wheel', pause);
      element.removeEventListener('touchstart', pause);
      element.removeEventListener('pointerdown', pause);
      element.removeEventListener('pointerover', hoverEntry);
      element.removeEventListener('focusin', pause);
      element.removeEventListener('scroll', scroll);
    };
  }, [syncWindow]);

  const visible = useMemo(() => visibleMosaicTiles(layout.tiles, viewTop, viewportHeight), [layout.tiles, viewTop, viewportHeight]);
  return (
    <div ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label="Interactive archive collage">
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {visible.map(tile => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} />)}
      </div>
    </div>
  );
}
