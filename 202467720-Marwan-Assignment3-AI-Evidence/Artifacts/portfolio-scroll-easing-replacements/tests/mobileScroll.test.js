import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { layoutMosaic } from '../src/lib/mosaicLayout.js';
import { advanceAutoScroll, initialAutoScrollState, pauseAutoScroll, resumeAutoScroll } from '../src/lib/autoScroll.js';

const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const mosaicComponent = readFileSync(new URL('../src/components/ArchiveMosaic.jsx', import.meta.url), 'utf8');

test('compact mosaics are vertically scrollable in both portfolio and archive modes', () => {
  assert.match(css, /\.mosaic-scroll--compact\s*\{[^}]*overflow-y:\s*auto/);
  assert.doesNotMatch(css, /\.mosaic-scroll--compact:not\(\.mosaic-scroll--archive\)\s*\{\s*overflow:\s*hidden/);
  for (const viewport of [{ width: 390, height: 844 }, { width: 820, height: 1180 }, { width: 844, height: 390 }]) {
    for (const archive of [false, true]) {
      const layout = layoutMosaic([], viewport, archive, 42);
      assert.equal(layout.metrics.compact, true);
      assert.ok(layout.contentHeight > viewport.height * 1.2, `scroll range at ${viewport.width}x${viewport.height}, archive=${archive}`);
      assert.ok(layout.tiles.length > 0);
    }
  }
});

test('fractional progress is accumulated across rounded iOS scrollTop values', () => {
  assert.match(mosaicComponent, /advanceAutoScroll\(scrollState\.current, delta, max\)/);
  let state = initialAutoScrollState();
  let browserScrollTop = 0;
  for (let i = 0; i < 300; i++) {
    state = advanceAutoScroll(state, 16, 300);
    if (Math.abs(browserScrollTop - state.position) >= 0.5) browserScrollTop = Math.round(state.position);
  }
  assert.ok(browserScrollTop > 100, 'autoscroll keeps moving even if the browser rounds scrollTop');
});

test('manual touch scrolling is reflected in resumed autoscroll position', () => {
  assert.match(mosaicComponent, /pauseAutoScroll\(scrollState\.current, element\.scrollTop, manual\)/);
  assert.match(mosaicComponent, /pauseAutoScroll\(scrollState\.current, element\.scrollTop, true\)/);
  const state = pauseAutoScroll(initialAutoScrollState(24), 193, true);
  assert.equal(state.position, 193);
  assert.equal(resumeAutoScroll(state).position, 193);
});
