import test from 'node:test';
import assert from 'node:assert/strict';
import { SQUARE_PATTERN, createMosaicSlots, computeMetrics, layoutMosaic } from '../src/lib/mosaicLayout.js';

const makeEntries = n => Array.from({ length: n }, (_, i) => ({ id: `achievement-${i}` }));
const close = (a,b) => Math.abs(a-b) < 1e-6;

test('desktop module consists only of square tiles, without overlaps or holes', () => {
  const occupied = new Set();
  for (const { x, y, size } of SQUARE_PATTERN) {
    assert.ok(size > 0);
    for (let row = y; row < y + size; row++) for (let col = x; col < x + size; col++) {
      assert.ok(col < 5 && row < 5);
      const key = `${col}:${row}`;
      assert.ok(!occupied.has(key), `overlap at ${key}`);
      occupied.add(key);
    }
  }
  assert.equal(occupied.size, 25);
});

test('desktop wings touch the portfolio edges; archive wings meet in the center', () => {
  const viewport = { width: 1440, height: 900 };
  const normal = layoutMosaic(makeEntries(18), viewport, false);
  const open = layoutMosaic(makeEntries(18), viewport, true);
  const left = (viewport.width - normal.metrics.panelWidth) / 2;
  const right = (viewport.width + normal.metrics.panelWidth) / 2;
  assert.ok(normal.tiles.every(t => t.side === 'left' ? t.x + t.pixels <= left + 1e-6 : t.x >= right - 1e-6));
  assert.ok(normal.tiles.some(t => t.side === 'left' && close(t.x + t.pixels, left)));
  assert.ok(normal.tiles.some(t => t.side === 'right' && close(t.x, right)));
  assert.ok(open.tiles.some(t => t.side === 'left' && close(t.x + t.pixels, viewport.width / 2)));
  assert.ok(open.tiles.some(t => t.side === 'right' && close(t.x, viewport.width / 2)));
  assert.deepEqual(normal.tiles.map(t => t.id), open.tiles.map(t => t.id), 'same tile nodes across modes');
});

test('the desktop wings extend far enough to cover the entire viewport height', () => {
  for (const viewport of [{width: 1024,height: 900}, {width:1300,height:900}, {width:1920,height:1080}]) {
    for (const archive of [false,true]) {
      const layout = layoutMosaic(makeEntries(10), viewport, archive);
      const height = layout.moduleCount * 5 * layout.metrics.unit;
      assert.ok(height >= viewport.height, `insufficient depth at ${viewport.width} × ${viewport.height}`);
    }
  }
});

test('desktop expands capacity when achievements are added', () => {
  assert.equal(createMosaicSlots(16).length, 16);
  assert.equal(createMosaicSlots(17).length, 32);
  assert.equal(createMosaicSlots(33).length, 48);
  assert.ok(layoutMosaic(makeEntries(34), { width: 1440, height: 900 }, true).moduleCount >= 3);
});

test('compact mode includes mobile, tablet, narrow and short landscape windows', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000},{width:1100,height:580}]) {
    const metrics = computeMetrics({...viewport, archive:false});
    assert.equal(metrics.compact,true);
    assert.ok(metrics.panelWidth < viewport.width);
    assert.ok(metrics.panelWidth >= 240);
  }
  assert.equal(computeMetrics({ width:1440,height:900 }).compact,false);
});

test('compact portfolio displays precisely two square streams flush with the paper', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000}]) {
    const layout = layoutMosaic(makeEntries(10), viewport, false);
    const left = (viewport.width - layout.metrics.panelWidth) / 2;
    const right = (viewport.width + layout.metrics.panelWidth) / 2;
    assert.ok(layout.tiles.every(t => t.size === 1 && t.pixels > 0));
    assert.ok(layout.tiles.every(t => t.side === 'left'
      ? close(t.x + t.pixels, left)
      : close(t.x, right)));
    for (const side of ['left','right']) {
      const heights = layout.tiles.filter(t => t.side === side).map(t => t.y).sort((a,b)=>a-b);
      assert.ok(heights[0] <= -layout.metrics.unit);
      assert.ok(heights.at(-1) + layout.metrics.unit >= viewport.height);
    }
  }
});

test('on narrow screens the very same achievements collapse into a responsive grid', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000}]) {
    const entries = makeEntries(19);
    const closed = layoutMosaic(entries, viewport, false);
    const opened = layoutMosaic(entries, viewport, true);
    const from = closed.tiles.filter(t => t.entry).map(t => t.id).sort();
    const to = opened.tiles.filter(t => t.entry).map(t => t.id).sort();
    assert.deepEqual(from, to);
    const positions = new Set();
    for (const tile of opened.tiles.filter(t => t.entry)) {
      assert.ok(tile.x >= -1e-6 && tile.x+tile.pixels <= viewport.width+1e-6);
      assert.ok(tile.y >= 78);
      const key = `${tile.x.toFixed(5)}:${tile.y.toFixed(5)}`;
      assert.ok(!positions.has(key), `overlapping tile at ${key}`);
      positions.add(key);
    }
    assert.ok(opened.contentHeight >= viewport.height);
    assert.ok(opened.tiles.filter(t=>t.decorative).every(t=>t.hidden));
  }
});
