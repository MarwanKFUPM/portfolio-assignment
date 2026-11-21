import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(readFileSync(path.join(root, 'src/data/optimizedImages.json'), 'utf8'));

test('every optimized image variant exists and is a real WebP file', () => {
  assert.equal(Object.keys(manifest).length, 9);
  for (const [original, variants] of Object.entries(manifest)) {
    assert.ok(statSync(path.join(root, 'public', original.slice(1))).size > 0);
    assert.ok(variants.length >= 1);
    for (const variant of variants) {
      const bytes = readFileSync(path.join(root, 'public', variant.src.slice(1)));
      assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
      assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
      assert.ok(variant.width >= 1);
    }
  }
});

test('responsive variants are ordered smallest to largest', () => {
  for (const variants of Object.values(manifest)) {
    const widths = variants.map(item => item.width);
    assert.deepEqual(widths, [...widths].sort((a, b) => a - b));
  }
});
