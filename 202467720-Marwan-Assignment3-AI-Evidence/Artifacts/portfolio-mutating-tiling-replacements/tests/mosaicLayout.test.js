import test from 'node:test';
import assert from 'node:assert/strict';
import { SQUARE_PATTERN, createMosaicSlots, generateSquareFormation, computeMetrics, layoutMosaic } from '../src/lib/mosaicLayout.js';

const makeEntries = n => Array.from({ length: n }, (_, i) => ({ id: `achievement-${i}` }));
const close = (a,b) => Math.abs(a-b) < 1e-6;

function checkFormation(squares) {
  const sampleCount = 80;
  for (let row = 0; row < sampleCount; row++) for (let col = 0; col < sampleCount; col++) {
    const x = (col + 0.5) * 5 / sampleCount;
    const y = (row + 0.5) * 5 / sampleCount;
    assert.equal(squares.filter(t => x >= t.x - 1e-8 && x < t.x+t.size - 1e-8 && y >= t.y - 1e-8 && y < t.y+t.size - 1e-8).length, 1);
  }
  assert.ok(close(squares.reduce((sum, t) => sum+t.size*t.size, 0), 25));
}

test('seeded tilings contain only true squares, with no gaps or overlaps', () => {
  for (let seed of [1, 42, 12345, 0xffffffff]) for (let moduleIndex = 0; moduleIndex < 16; moduleIndex++) {
    checkFormation(generateSquareFormation(moduleIndex, seed));
  }
});

test('subdivision, merge and rotations yield varied module topology', () => {
  const signatures = new Set(Array.from({length:64},(_,i) => JSON.stringify(generateSquareFormation(i, 777).map(t => [t.x,t.y,t.size]))));
  assert.ok(signatures.size > 50, `${signatures.size} of 64 formations differ`);
  const tiles = Array.from({length:64},(_,i)=>generateSquareFormation(i, 777));
  assert.ok(tiles.some(t=>t.some(s=>s.size <= 1)));
  assert.ok(tiles.some(t=>t.some(s=>s.size >= 3)));
});

test('formation topology remains fixed for seed + module index', () => {
  assert.deepEqual(generateSquareFormation(4, 992), generateSquareFormation(4, 992));
  assert.notDeepEqual(generateSquareFormation(4, 992), generateSquareFormation(4, 993));
});

test('desktop wings touch portfolio edges and archive spans viewport', () => {
  const entries = makeEntries(18);
  const viewport = {width: 1440,height: 900};
  const closed = layoutMosaic(entries, viewport, false, 72);
  const open = layoutMosaic(entries, viewport, true, 72);
  const left = (viewport.width-closed.metrics.panelWidth)/2;
  const right = (viewport.width+closed.metrics.panelWidth)/2;
  assert.ok(closed.tiles.every(t=>t.side==='left'? t.x+t.pixels<=left+1e-6 : t.x>=right-1e-6));
  assert.ok(closed.tiles.some(t=>t.side==='left' && close(t.x+t.pixels,left)));
  assert.ok(closed.tiles.some(t=>t.side==='right' && close(t.x,right)));
  assert.ok(open.tiles.some(t=>close(t.x,0)));
  assert.ok(open.tiles.some(t=>close(t.x+t.pixels,viewport.width)));
  assert.deepEqual(closed.tiles.map(t=>t.id),open.tiles.map(t=>t.id));
});

test('the same module identities and geometry persist through resizing and rotation', () => {
  const entries = makeEntries(30);
  const sizes = [{width:1440,height:900},{width:1200,height:850},{width:1800,height:1000}];
  const layouts = sizes.map(size=>layoutMosaic(entries,size,true,5353));
  const lookup = l=>new Map(l.tiles.map(t=>[t.id,[t.size,t.globalModuleIndex]]));
  const base = lookup(layouts[0]);
  for (const layout of layouts.slice(1)) {
    const next = lookup(layout);
    for (const [key,value] of base) if(next.has(key))assert.deepEqual(next.get(key),value);
  }
});

test('archive has edge-to-edge coverage and reaches bottom on desktop and compact screens', () => {
  for (const viewport of [{width:390,height:844},{width:768,height:1024},{width:1100,height:580},{width:1280,height:800},{width:1722,height:854},{width:1920,height:1080}]) {
    for (const count of [4,18,34,67]) {
      const {tiles,contentHeight}=layoutMosaic(makeEntries(count),viewport,true,123456);
      assert.ok(contentHeight>=viewport.height);
      for(let row=0;row<12;row++)for(let col=0;col<15;col++){
        const x=(col+0.5)*viewport.width/15;
        const y=(row+0.5)*viewport.height/12;
        const matches=tiles.filter(t=>x>=t.x-1e-7 && x<t.x+t.pixels-1e-7 && y>=t.y-1e-7 && y<t.y+t.pixels-1e-7);
        assert.equal(matches.length,1,`${viewport.width}x${viewport.height} (${x},${y})`);
      }
    }
  }
});

test('compact portfolio has exactly two streams and compacts into grid with identical achievement IDs', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000},{width:1100,height:580}]) {
    const entries=makeEntries(19);
    const normal=layoutMosaic(entries,viewport,false,987);
    const archive=layoutMosaic(entries,viewport,true,987);
    assert.equal(computeMetrics(viewport).compact,true);
    const left=(viewport.width-normal.metrics.panelWidth)/2;
    const right=(viewport.width+normal.metrics.panelWidth)/2;
    assert.ok(normal.tiles.every(t=>close(t.pixels,t.pixels) && (t.side==='left'?close(t.x+t.pixels,left):close(t.x,right))));
    assert.deepEqual(normal.tiles.filter(t=>t.entry).map(t=>t.id),archive.tiles.filter(t=>t.entry).map(t=>t.id));
  }
});

test('dynamic slot generator maintains capacity for added achievements', () => {
  for(const n of [4,18,80,200])assert.ok(createMosaicSlots(n,1,444).length>=n);
});
