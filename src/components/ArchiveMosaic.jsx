import React, { useMemo } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import Icon from './Icons.jsx';

function ArchiveTile({ tile, onOpen, lang, index }) {
  const { entry, pixels, x, y, decorative } = tile;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    '--tile-tone': `var(--tile-tone-${index % 6})`,
  };
  if (decorative) {
    return <div className={`mosaic-tile mosaic-tile--ambient ambient-${index % 6}`} style={style} aria-hidden="true"><div className="ambient-mark" /></div>;
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button
      key={entry.id}
      type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style}
      onClick={(event) => onOpen(entry, event.currentTarget)}
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
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive), [entries, viewport, archive]);
  const geometry = layout.tiles;
  return (
    <div className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''}`} aria-label="Interactive archive collage">
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {geometry.map((tile, index) => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} index={index}/>)}
      </div>
    </div>
  );
}
