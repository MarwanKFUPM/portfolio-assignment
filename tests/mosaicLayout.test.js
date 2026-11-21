import test from 'node:test';
import assert from 'node:assert/strict';
import { SQUARE_PATTERN, createMosaicSlots, layoutMosaic } from '../src/lib/mosaicLayout.js';

const makeEntries = n => Array.from({ length: n }, (_, i) => ({ id: `achievement-${i}` }));

test('the repeating 5 by 5 module contains ONLY squares, without gaps or overlap', () => {
  const occupied = new Set();
  for (const { x, y, size } of SQUARE_PATTERN) {
    assert.ok(size > 0);
    for (let row = y; row < y + size; row++) {
      for (let col = x; col < x + size; col++) {
        assert.ok(col < 5 && row < 5);
        const key = `${col}:${row}`;
        assert.ok(!occupied.has(key), `overlap at ${key}`);
        occupied.add(key);
      }
    }
  }
  assert.equal(occupied.size, 25);
});

test('both sides remain edge-aligned with the central panel in portfolio mode', () => {
  const viewport = { width: 1440, height: 900 };
  const layout = layoutMosaic(makeEntries(18), viewport, false);
  const { width, panelWidth } = layout.metrics;
  const leftEdge = (width - panelWidth) / 2;
  const rightEdge = (width + panelWidth) / 2;
  for (const tile of layout.tiles) {
    assert.equal(tile.pixels, tile.pixels);
    if (tile.side === 'left') assert.ok(tile.x + tile.pixels <= leftEdge + 0.000001);
    if (tile.side === 'right') assert.ok(tile.x >= rightEdge - 0.000001);
  }
  assert.ok(layout.tiles.some(tile => tile.side === 'left' && Math.abs(tile.x + tile.pixels - leftEdge) < .000001));
  assert.ok(layout.tiles.some(tile => tile.side === 'right' && Math.abs(tile.x - rightEdge) < .000001));
});

test('desktop archive joins both wings without a central gap or overlap', () => {
  const viewport = { width: 1440, height: 900 };
  const { tiles, metrics } = layoutMosaic(makeEntries(18), viewport, true);
  const { unit } = metrics;
  assert.ok(tiles.some(t => t.side === 'left' && Math.abs(t.x+t.pixels - viewport.width/2) < 1e-6));
  assert.ok(tiles.some(t => t.side === 'right' && Math.abs(t.x - viewport.width/2) < 1e-6));
  assert.ok(tiles.every(t => Math.abs(t.pixels / unit - t.size) < 1e-6));
});

test('a new tier appears when more than 16 entries are included', () => {
  assert.equal(createMosaicSlots(16).length, 16);
  assert.equal(createMosaicSlots(17).length, 32);
  assert.equal(createMosaicSlots(33).length, 48);
  assert.equal(layoutMosaic(makeEntries(10), { width: 1400, height: 900 }, true).moduleCount, 1);
  assert.equal(layoutMosaic(makeEntries(18), { width: 1400, height: 900 }, true).moduleCount, 2);
});

test('mobile archive stacks the wings vertically, preserving all square dimensions', () => {
  const { tiles, metrics } = layoutMosaic(makeEntries(18), { width: 390, height: 844 }, true);
  assert.equal(metrics.mobile, true);
  const half = tiles.filter(t => t.side === 'right' && t.moduleIndex === 0);
  assert.ok(half.every(t => t.y >= 5 * metrics.unit));
  assert.ok(tiles.every(t => t.pixels > 0));
});
