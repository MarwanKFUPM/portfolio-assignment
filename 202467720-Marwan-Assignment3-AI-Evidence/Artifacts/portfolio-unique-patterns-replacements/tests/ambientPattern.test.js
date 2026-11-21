import test from 'node:test';
import assert from 'node:assert/strict';
import { createAmbientSvg, createAmbientBackground } from '../src/lib/ambientPattern.js';

test('all 500 sample tile IDs generate different SVG geometries', () => {
  const art = Array.from({length: 500}, (_, n) => createAmbientSvg(`ambient-L-${n}`));
  assert.equal(new Set(art).size, art.length);
});

test('artwork is stable across modes and rerenders', () => {
  const id = 'ambient-R-24';
  assert.equal(createAmbientSvg(id), createAmbientSvg(id));
  assert.equal(createAmbientBackground(id), createAmbientBackground(id));
});

test('background returns URI encoded SVG with no network request', () => {
  const art = createAmbientBackground('ambient-L-5');
  assert.ok(art.startsWith('url("data:image/svg+xml,'));
  assert.ok(decodeURIComponent(art).includes('<svg'));
});
