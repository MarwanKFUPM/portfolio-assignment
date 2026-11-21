import React, { useEffect, useMemo, useRef } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import Icon from './Icons.jsx';
import { createAmbientBackground } from '../lib/ambientPattern.js';

function ArchiveTile({ tile, onOpen, lang, index }) {
  const { entry, pixels, x, y, decorative } = tile;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    '--tile-tone': `var(--tile-tone-${index % 6})`,
    ...(decorative ? { '--ambient-art': createAmbientBackground(tile.id) } : {}),
  };
  if (decorative) {
    return (
      <div
        className={`mosaic-tile mosaic-tile--ambient ${tile.hidden ? 'mosaic-tile--concealed' : ''}`}
        style={style} data-side={tile.side} aria-hidden="true"
      ><div className="ambient-mark" /></div>
    );
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button
      type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style}
      onClick={(event) => onOpen(entry, event.currentTarget)}
      data-side={tile.side}
      data-entry-id={entry.id}
      title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}
    >
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
}

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen }) {
  const scrollRef = useRef(null);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive), [entries, viewport, archive]);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [archive, layout.metrics.compact]);
  return (
    <div
      ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label="Interactive archive collage"
      style={{ '--stream-negative': `${-Math.max(104, Math.min(170, viewport.width * 0.27)) * 0.85}px`, '--stream-positive': `${Math.max(104, Math.min(170, viewport.width * 0.27)) * 0.85}px` }}
    >
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {layout.tiles.map((tile, index) => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} index={index} />)}
      </div>
    </div>
  );
}
