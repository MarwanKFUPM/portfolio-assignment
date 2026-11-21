// Deliberately keep only squares around the visible scroll window in the DOM.
// This makes the DOM size bounded even if the archive has hundreds of entries.
export function visibleMosaicTiles(tiles, scrollTop, viewportHeight, overscan = 350) {
  const low = Math.max(0, scrollTop - overscan);
  const high = scrollTop + viewportHeight + overscan;
  return tiles.filter(tile => tile.y + tile.pixels >= low && tile.y <= high);
}

