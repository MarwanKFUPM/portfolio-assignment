import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const controls = readFileSync(new URL('../src/components/FloatingControls.jsx', import.meta.url), 'utf8');

test('floating controls auto-hide after three seconds and reveal after activity', () => {
  assert.match(controls, /CONTROLS_IDLE_MS\s*=\s*3000/);
  assert.match(controls, /setVisible\(false\)/);
  assert.match(controls, /setVisible\(true\)/);
  for (const event of ['pointermove', 'pointerdown', 'touchstart', 'touchmove', 'wheel', 'keydown', 'focusin']) {
    assert.ok(controls.includes(`'${event}'`), `${event} should bring back controls`);
  }
  assert.doesNotMatch(controls, /'scroll'/, 'programmatic archive scrolling must not reset inactivity');
});

test('hidden controls do not capture collage taps and fade smoothly', () => {
  assert.match(css, /\.floating-controls--hidden\s*\{[^}]*opacity:\s*0/);
  assert.match(css, /\.floating-controls--hidden\s+\.orb-button\s*\{[^}]*pointer-events:\s*none/);
  assert.match(css, /\.floating-controls\s*\{[^}]*transition:\s*opacity\s+\.32s/);
});

test('mobile and compact layouts no longer reserve 76px above their headers', () => {
  assert.doesNotMatch(css, /padding:\s*max\(76px/);
  assert.doesNotMatch(css, /\.portfolio-panel\s*\{\s*padding:\s*78px/);
  assert.match(css, /\.site-shell--compact\s+\.portfolio-panel\s*\{[\s\S]*?padding:\s*max\(16px/);
});
