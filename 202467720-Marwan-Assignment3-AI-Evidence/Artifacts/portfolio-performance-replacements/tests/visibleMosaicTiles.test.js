import test from 'node:test';
import assert from 'node:assert/strict';
import { visibleMosaicTiles } from '../src/lib/visibleMosaicTiles.js';

test('only keeps tiles near viewport and preserves order', () => {
  const tiles = Array.from({ length: 1000 }, (_, i) => ({ id: i, y: i * 100, pixels: 100 }));
  const shown = visibleMosaicTiles(tiles, 50000, 800, 200);
  assert.ok(shown.length <= 15);
  assert.ok(shown.some(t => t.id === 500));
  assert.ok(shown.every(t => t.y + t.pixels >= 49800 && t.y <= 51000));
  assert.deepEqual(shown.map(t=>t.id), [...shown.map(t=>t.id)].sort((a,b)=>a-b));
});

test('renders the beginning and end of long archives without retaining distant tiles', () => {
  const tiles = Array.from({ length: 2000 }, (_, i) => ({ id: i, y: i * 72, pixels: 72 }));
  assert.ok(visibleMosaicTiles(tiles,0,800).some(t=>t.id===0));
  assert.ok(visibleMosaicTiles(tiles,140000,800).some(t=>t.id===1950));
  assert.ok(visibleMosaicTiles(tiles,0,800).length < 25);
});
