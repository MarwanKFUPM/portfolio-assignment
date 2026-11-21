/** Each 5×5 module is covered by squares, without gaps or overlaps. */
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

export const CELLS_PER_SIDE = 5;
export const SLOTS_PER_MODULE = SQUARE_PATTERN.length;

export function createMosaicSlots(entryCount, minimumModules = 1) {
  const leftCount = Math.ceil(entryCount / 2);
  const rightCount = Math.floor(entryCount / 2);
  const modules = Math.max(minimumModules, Math.ceil(Math.max(leftCount, rightCount) / SLOTS_PER_MODULE));
  return Array.from({ length: modules }, (_, moduleIndex) => [
    ...SQUARE_PATTERN.map((square, index) => ({
      ...square, id: `L-${moduleIndex}-${index}`, side: 'left', moduleIndex,
      indexOnSide: moduleIndex * SLOTS_PER_MODULE + index,
    })),
    ...SQUARE_PATTERN.map((square, index) => ({
      ...square, id: `R-${moduleIndex}-${index}`, side: 'right', moduleIndex,
      indexOnSide: moduleIndex * SLOTS_PER_MODULE + index,
    })),
  ]).flat();
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

/** Whole 5×5 modules fill the width exactly in Archive Mode. */
function archiveGeometry(width) {
  const columns = Math.max(2, Math.round(width / 550));
  return { columns, unit: width / (columns * CELLS_PER_SIDE) };
}

export function computeMetrics({ width, height, archive = false }) {
  // Short landscape viewports also use the two-column treatment.
  const compact = width <= 900 || (width <= 1200 && height <= 640);
  const sideInset = Math.max(17, Math.min(64, width * 0.065));
  const panelWidth = compact
    ? Math.min(620, width - 2 * sideInset)
    : Math.min(600, Math.max(468, width * 0.43));
  const gridColumns = compact ? (width < 480 ? 2 : width < 720 ? 3 : 4) : 10;
  const gridInset = 0; // Archive tiles begin at the viewport boundaries.
  const unit = compact
    ? archive
      ? (width - 2 * gridInset) / gridColumns
      : Math.max(104, Math.min(170, width * 0.27))
    : archive
      ? archiveGeometry(width).unit
      : Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  return {
    width, height, panelWidth, unit, compact, mobile: compact,
    gridColumns, gridInset,
    archiveModuleColumns: compact ? null : archiveGeometry(width).columns,
  };
}

function layoutCompact(entries, metrics, archive) {
  const { width, height, panelWidth, unit, gridColumns, gridInset } = metrics;
  const leftEdge = (width - panelWidth) / 2;
  const rightEdge = (width + panelWidth) / 2;
  // Fill both streams beyond the viewport so their gentle vertical movement
  // never reveals an empty region. Decorative slots are never clickable.
  const streamUnit = Math.max(104, Math.min(170, width * 0.27));
  const minimumPerSide = Math.ceil(height / streamUnit) + 4;
  const minimumArchiveSlots = gridColumns * Math.ceil(height / ((width - 2 * gridInset) / gridColumns));
  const slotsPerSide = Math.max(Math.ceil(entries.length / 2), minimumPerSide, Math.ceil(minimumArchiveSlots / 2));
  const slots = Array.from({ length: slotsPerSide * 2 }, (_, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    const row = Math.floor(index / 2);
    const entry = entries[index] ?? null;
    return { id: entry ? `entry-${entry.id}` : `ambient-${side}-${row}`, side, row, entry };
  });
  const archiveUnit = (width - 2 * gridInset) / gridColumns;
  const gridLeft = gridInset;
  const gridTop = 0;

  const tiles = slots.map((slot) => {
    const { side, row, entry } = slot;
    const order = slots.indexOf(slot);
    const decorative = !entry;
    const pixels = archive ? archiveUnit : streamUnit;
    const x = archive
      ? gridLeft + (order % gridColumns) * archiveUnit
      : side === 'left' ? leftEdge - streamUnit : rightEdge;
    const y = archive
      ? gridTop + Math.floor(order / gridColumns) * archiveUnit
      : (row - 2) * streamUnit;
    return {
      id: slot.id, side, entry, decorative, compact: true,
      size: 1, x, y, pixels,
      hidden: false,
    };
  });
  const archiveRows = Math.ceil(slots.length / gridColumns);
  const contentHeight = archive
    ? Math.max(height + 1, gridTop + archiveRows * archiveUnit)
    : Math.max(height + 1, (slotsPerSide + 1) * streamUnit);
  return { tiles, metrics, contentHeight, moduleCount: archiveRows };
}

/** Positions the same achievement nodes in both modes. */
export function layoutMosaic(entries, viewport, archive = false) {
  const metrics = computeMetrics({ ...viewport, archive });
  if (metrics.compact) return layoutCompact(entries, metrics, archive);

  const { width, height, panelWidth, unit } = metrics;
  const leftBoundary = (width - panelWidth) / 2;
  const rightBoundary = (width + panelWidth) / 2;
  const portfolioUnit = Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  const { columns: archiveColumns, unit: archiveUnit } = archiveGeometry(width);

  // Enough modules for both layouts. A complete final archive row is
  // essential: otherwise the lowest visible band could have a blank region.
  const portfolioRows = Math.ceil(height / (5 * portfolioUnit));
  const archiveRows = Math.ceil(height / (5 * archiveUnit));
  const entryModules = Math.ceil(entries.length / SLOTS_PER_MODULE);
  const neededModules = Math.max(portfolioRows * 2, archiveRows * archiveColumns, entryModules);
  const moduleMultiple = (2 * archiveColumns) / gcd(2, archiveColumns);
  const totalModules = Math.ceil(neededModules / moduleMultiple) * moduleMultiple;
  const slots = createMosaicSlots(entries.length, totalModules / 2);
  const tiles = slots.map(slot => {
    const entryIndex = slot.indexOnSide * 2 + (slot.side === 'right' ? 1 : 0);
    const entry = entries[entryIndex] ?? null;
    const moduleIndex = slot.moduleIndex * 2 + (slot.side === 'right' ? 1 : 0);
    const x = archive
      ? (moduleIndex % archiveColumns * 5 + slot.x) * archiveUnit
      : (slot.side === 'left' ? leftBoundary - 5 * unit : rightBoundary) + slot.x * unit;
    const y = archive
      ? (Math.floor(moduleIndex / archiveColumns) * 5 + slot.y) * archiveUnit
      : (slot.moduleIndex * 5 + slot.y) * unit;
    return {
      ...slot, entry, x, y, pixels: slot.size * unit,
      decorative: !entry, compact: false, hidden: false,
    };
  });
  const moduleCount = totalModules / 2;
  const contentHeight = archive
    ? (totalModules / archiveColumns) * 5 * archiveUnit
    : moduleCount * 5 * unit;
  return { tiles, metrics, contentHeight: Math.max(height + 1, contentHeight), moduleCount };
}
