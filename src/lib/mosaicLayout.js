/** A 5 × 5 square module is a convenient building block, not a repeated tile pattern. */
export const CELLS_PER_SIDE = 5;
export const SQUARE_PATTERN = Object.freeze([
  { x: 0, y: 0, size: 3 },
  { x: 3, y: 0, size: 2 },
  { x: 3, y: 2, size: 2 },
  { x: 0, y: 3, size: 2 },
  { x: 2, y: 3, size: 1 },
  { x: 2, y: 4, size: 1 },
  { x: 3, y: 4, size: 1 },
  { x: 4, y: 4, size: 1 },
]);

const mix = n => {
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d);
  n = Math.imul(n ^ (n >>> 15), 0x846ca68b);
  return (n ^ (n >>> 16)) >>> 0;
};
function random(seed) {
  let state = mix(seed);
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let n = state;
    n = Math.imul(n ^ n >>> 15, n | 1);
    n ^= n + Math.imul(n ^ n >>> 7, n | 61);
    return ((n ^ n >>> 14) >>> 0) / 4294967296;
  };
}
function rotate(x, y, size, frameSize, turns) {
  let xx = x;
  let yy = y;
  for (let n = 0; n < turns; n++) {
    const oldX = xx;
    xx = frameSize - yy - size;
    yy = oldX;
  }
  return { x: xx, y: yy, size };
}

/**
 * A hierarchical, deterministic tile mutation system. Four-child merges and
 * subdivisions leave exact square coverage; quarter turns rotate complete
 * square regions without disturbing adjacent regions.
 *
 * moduleIndex is an absolute, stable index: viewport changes never re-roll
 * the module's internal formation. seed changes only on a fresh app load.
 */
// Generated shapes are independent of viewport size and archive state.
// Cache the topology so a resize never re-runs its subdivision tree.
const formationCache = new Map();
export function generateSquareFormation(moduleIndex, seed = 1) {
  const seedKey = seed >>> 0;
  let modules = formationCache.get(seedKey);
  if (!modules) {
    if (formationCache.size >= 4) formationCache.delete(formationCache.keys().next().value);
    modules = new Map();
    formationCache.set(seedKey, modules);
  }
  if (modules.has(moduleIndex)) return modules.get(moduleIndex);
  const rng = random(mix((seed >>> 0) ^ Math.imul(moduleIndex + 1, 0x9e3779b1)));
  const out = [];
  const outerTurns = Math.floor(rng() * 4);
  const rotatedBase = SQUARE_PATTERN.map(base => rotate(base.x, base.y, base.size, 5, outerTurns));
  // A different base ordering avoids a persistent pattern of large squares.
  rotatedBase.sort((a, b) => a.y - b.y || a.x - b.x);

  function subdivide(x, y, size, depth, ancestry) {
    const minimum = 0.74;
    const canSplit = depth < 3 && size / 2 >= minimum;
    const chance = depth === 0 ? (size >= 2 ? 0.72 : 0.16) : 0.31;
    if (!canSplit || rng() > chance) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const half = size / 2;
    const children = [
      { x: 0, y: 0 }, { x: half, y: 0 },
      { x: 0, y: half }, { x: half, y: half },
    ];
    let local = [];
    // Build a subtree first so rotating it affects actual asymmetric geometry.
    const previous = out.splice(0);
    children.forEach((child, i) => subdivide(child.x, child.y, half, depth + 1, `${ancestry}.${i}`));
    local = out.splice(0);
    out.push(...previous);
    // Mutate: merge four equal children back to a single square on occasion.
    if (local.length === 4 && rng() < 0.20) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const turns = Math.floor(rng() * 4);
    for (const tile of local) {
      const rotated = rotate(tile.x, tile.y, tile.size, size, turns);
      out.push({ ...tile, x: x + rotated.x, y: y + rotated.y });
    }
  }
  rotatedBase.forEach((base, i) => subdivide(base.x, base.y, base.size, 0, `s${i}`));
  const formation = out.sort((a, b) => a.y - b.y || a.x - b.x || b.size - a.size);
  modules.set(moduleIndex, formation);
  return formation;
}

/** Kept as a public utility for layout integration and lightweight tests. */
export function createMosaicSlots(entryCount, minimumModules = 1, seed = 1) {
  let slots = [];
  let moduleCount = Math.max(2, minimumModules * 2);
  // Match initial alternating left/right module ordering.
  while (true) {
    slots = [];
    for (let m = 0; m < moduleCount; m++) {
      const formation = generateSquareFormation(m, seed);
      formation.forEach((square, i) => slots.push({
        ...square, id: `m${m}-${square.id}`, side: m % 2 === 0 ? 'left' : 'right',
        moduleIndex: Math.floor(m / 2), globalModuleIndex: m,
        indexOnSide: i,
      }));
    }
    if (slots.length >= entryCount) break;
    moduleCount += 2;
  }
  return slots;
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function archiveGeometry(width) {
  const columns = Math.max(2, Math.round(width / 550));
  return { columns, unit: width / (columns * CELLS_PER_SIDE) };
}
export function computeMetrics({ width, height, archive = false }) {
  const compact = width <= 900 || (width <= 1200 && height <= 640);
  const sideInset = Math.max(17, Math.min(64, width * 0.065));
  const panelWidth = compact
    ? Math.min(620, width - 2 * sideInset)
    : Math.min(600, Math.max(468, width * 0.43));
  // Reserve enough physical room for readable achievement squares in desktop wings.
  // Below this width we use the previously agreed responsive side streams.
  const wideSideWidth = (width - panelWidth) / 2;
  const useCompact = compact || wideSideWidth < 410;
  const gridColumns = useCompact ? (width < 480 ? 2 : width < 720 ? 3 : 4) : 10;
  const gridInset = 0;
  const unit = useCompact
    ? archive ? width / gridColumns : Math.max(104, Math.min(170, width * 0.27))
    : archive ? archiveGeometry(width).unit : Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  return {
    width, height, panelWidth, unit, compact: useCompact, mobile: useCompact,
    gridColumns, gridInset,
    archiveModuleColumns: useCompact ? null : archiveGeometry(width).columns,
  };
}

function layoutCompact(entries, metrics, archive) {
  const { width, height, panelWidth, gridColumns } = metrics;
  const leftEdge = (width - panelWidth) / 2;
  const rightEdge = (width + panelWidth) / 2;
  const streamUnit = Math.max((width - panelWidth) / 2, Math.max(104, Math.min(170, width * 0.27)));
  const minimumPerSide = Math.ceil(height / streamUnit) + 4;
  const archiveUnit = width / gridColumns;
  const minimumArchiveSlots = gridColumns * Math.ceil(height / archiveUnit);
  const slotsPerSide = Math.max(Math.ceil(entries.length / 2), minimumPerSide, Math.ceil(minimumArchiveSlots / 2));
  const slots = Array.from({ length: slotsPerSide * 2 }, (_, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    const row = Math.floor(index / 2);
    const entry = entries[index] ?? null;
    return { id: entry ? `entry-${entry.id}` : `ambient-${side}-${row}`, side, row, entry };
  });
  const tiles = slots.map((slot, order) => {
    const { side, row, entry } = slot;
    const x = archive ? (order % gridColumns) * archiveUnit
      : side === 'left' ? leftEdge - streamUnit : rightEdge;
    const y = archive ? Math.floor(order / gridColumns) * archiveUnit : (row - 2) * streamUnit;
    return {
      id: slot.id, side, entry, decorative: !entry, compact: true,
      size: 1, x, y, pixels: archive ? archiveUnit : streamUnit, hidden: false,
    };
  });
  const archiveRows = Math.ceil(slots.length / gridColumns);
  const contentHeight = archive ? Math.max(height + 1, archiveRows * archiveUnit)
    : Math.max(height + 1, (slotsPerSide + 1) * streamUnit);
  return { tiles, metrics, contentHeight, moduleCount: archiveRows };
}

/**
 * Projection is separate from topology. Responsive reflow and archive changes
 * only move/scale existing seeded squares; they never mutate a formation.
 */
export function layoutMosaic(entries, viewport, archive = false, seed = 1) {
  const metrics = computeMetrics({ ...viewport, archive });
  if (metrics.compact) return layoutCompact(entries, metrics, archive);
  const { width, height, panelWidth } = metrics;
  const unit = (width - panelWidth) / 10;
  const leftBoundary = (width - panelWidth) / 2;
  const rightBoundary = (width + panelWidth) / 2;
  // Five square units span exactly one side wing: no empty outside margins.
  const portfolioUnit = (width - panelWidth) / 10;
  const { columns: archiveColumns, unit: archiveUnit } = archiveGeometry(width);
  const portfolioRows = Math.ceil(height / (5 * portfolioUnit));
  const archiveRows = Math.ceil(height / (5 * archiveUnit));
  // Structural filler may be tiny, but achievements require readable tiles.
  // In either projection, a usable achievement tile must be >= 164px.
  // Desktop is enabled only when two square units are at least 164px.
  // Use a topology-based eligibility rule, not a pixel rule, so resizing
  // does not reassign achievements to different tile IDs.
  const MIN_ENTRY_UNITS = 2;
  const entryMinModules = Math.ceil(entries.length / 3);
  const neededModules = Math.max(portfolioRows * 2, archiveRows * archiveColumns, entryMinModules);
  const moduleMultiple = (2 * archiveColumns) / gcd(2, archiveColumns);
  let totalModules = Math.ceil(neededModules / moduleMultiple) * moduleMultiple;
  const formations = [];
  let slotCount = 0;
  function makeModules(upTo) {
    for (let m = formations.length; m < upTo; m++) {
      const squares = generateSquareFormation(m, seed);
      formations.push(squares);
      slotCount += squares.filter(square => square.size >= MIN_ENTRY_UNITS).length;
    }
  }
  makeModules(totalModules);
  while (slotCount < entries.length) {
    totalModules += moduleMultiple;
    makeModules(totalModules);
  }

  let entryPosition = 0;
  const tiles = formations.flatMap((formation, moduleIndex) => {
    const side = moduleIndex % 2 === 0 ? 'left' : 'right';
    const wingRow = Math.floor(moduleIndex / 2);
    const blockX = archive
      ? (moduleIndex % archiveColumns) * 5 * archiveUnit
      : side === 'left' ? leftBoundary - 5 * unit : rightBoundary;
    const blockY = archive
      ? Math.floor(moduleIndex / archiveColumns) * 5 * archiveUnit
      : wingRow * 5 * unit;
    const pixelUnit = archive ? archiveUnit : unit;
    return formation.map((square) => {
      // Never place text on undersized squares. Those become ambient filler.
      const eligible = square.size >= MIN_ENTRY_UNITS;
      const entry = eligible ? (entries[entryPosition++] ?? null) : null;
      return {
        ...square, id: entry ? `entry-${entry.id}` : `ambient-m${moduleIndex}-${square.id}`,
        side, moduleIndex: wingRow, globalModuleIndex: moduleIndex,
        entry, decorative: !entry, compact: false, hidden: false,
        x: blockX + square.x * pixelUnit,
        y: blockY + square.y * pixelUnit,
        pixels: square.size * pixelUnit,
      };
    });
  });
  const contentHeight = archive
    ? Math.ceil(totalModules / archiveColumns) * 5 * archiveUnit
    : Math.ceil(totalModules / 2) * 5 * unit;
  return { tiles, metrics, contentHeight: Math.max(height + 1, contentHeight), moduleCount: totalModules / 2 };
}
