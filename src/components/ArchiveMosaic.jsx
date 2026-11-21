import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import { visibleMosaicTiles } from '../lib/visibleMosaicTiles.js';
import { advanceAutoScroll, initialAutoScrollState, pauseAutoScroll, resumeAutoScroll, SCROLL_RESUME_DELAY_MS } from '../lib/autoScroll.js';
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
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
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
  const scrollState = useRef(initialAutoScrollState());
  const lastWrittenPosition = useRef(0);
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
    scrollState.current = pauseAutoScroll(initialAutoScrollState(), 0, true);
    lastWrittenPosition.current = 0;
    pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
  }, [archive, layout.metrics.compact, syncWindow]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Hover/focus ease the current velocity down. Direct scrolling/touch
    // takes control immediately, so our animation never fights the gesture.
    const pause = event => {
      pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
      const manual = ['wheel', 'touchstart', 'pointerdown'].includes(event?.type);
      scrollState.current = pauseAutoScroll(scrollState.current, element.scrollTop, manual);
      if (manual) lastWrittenPosition.current = element.scrollTop;
    };
    const scroll = () => {
      // iOS can continue a touch gesture via momentum scroll after touchend.
      // Re-sync that position without replacing auto-generated subpixel offsets.
      if (performance.now() < pauseUntil.current &&
          Math.abs(element.scrollTop - lastWrittenPosition.current) > 1) {
        scrollState.current = pauseAutoScroll(scrollState.current, element.scrollTop, true);
        lastWrittenPosition.current = element.scrollTop;
      }
      syncWindow();
    };
    const hoverEntry = event => {
      if (event.target.closest?.('.mosaic-tile--entry')) pause(event);
    };
    element.addEventListener('wheel', pause, { passive: true });
    element.addEventListener('touchstart', pause, { passive: true });
    element.addEventListener('pointerdown', pause, { passive: true });
    element.addEventListener('pointerover', hoverEntry, { passive: true });
    element.addEventListener('focusin', pause);
    element.addEventListener('scroll', scroll, { passive: true });
    // Animate only the scroll position. React updates the visible-tile set
    // in 120px buckets, not on every requestAnimationFrame callback.
    let frame = 0;
    const tick = time => {
      const delta = lastTime.current ? Math.min(time - lastTime.current, 100) : 0;
      lastTime.current = time;
      if (!document.hidden && !reduce.matches) {
        const max = element.scrollHeight - element.clientHeight;
        if (max > 40) {
          if (time >= pauseUntil.current && scrollState.current.phase === 'paused') {
            scrollState.current = resumeAutoScroll(scrollState.current);
          }
          const next = advanceAutoScroll(scrollState.current, delta, max);
          scrollState.current = next;
          if (Math.abs(element.scrollTop - next.position) >= 0.5) {
            // Keep fractional progress in state rather than rereading rounded
            // scrollTop values (important for mobile Safari).
            lastWrittenPosition.current = next.position;
            element.scrollTop = next.position;
          }
        }
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
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
