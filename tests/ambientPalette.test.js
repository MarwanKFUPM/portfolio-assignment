import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const component = readFileSync(new URL('../src/components/ArchiveMosaic.jsx', import.meta.url), 'utf8');

test('a single shared color field covers the mosaic instead of each module receiving a tone', () => {
  assert.match(css, /\.mosaic-plane\s*\{[^}]*background-image:\s*var\(--mosaic-vertical\),\s*var\(--mosaic-horizontal\)/s);
  assert.match(css, /\.mosaic-tile--ambient\s*\{[^}]*background-color:\s*transparent/s);
  assert.doesNotMatch(css, /--tile-tone-[0-9]/);
  assert.doesNotMatch(component, /globalModuleIndex\s*\?\?|--tile-tone/);
});

test('both themes have their own spatial palettes with matching end colors for seamless vertical repetition', () => {
  const light = css.match(/:root\s*\{([^}]*)\}/s)?.[1];
  const dark = css.match(/:root\[data-theme="dark"\]\s*\{([^}]*)\}/s)?.[1];
  assert.ok(light && dark);
  for (const theme of [light, dark]) {
    assert.match(theme, /--mosaic-horizontal:\s*linear-gradient\(90deg,/);
    assert.match(theme, /--mosaic-vertical:\s*linear-gradient\(180deg,/);
    assert.match(theme, /rgba\(255,255,255,0\) 0%/);
    assert.match(theme, /rgba\(255,255,255,0\) 100%/);
  }
  assert.notEqual(light.match(/--mosaic-horizontal:[^;]+/s)?.[0], dark.match(/--mosaic-horizontal:[^;]+/s)?.[0]);
});
