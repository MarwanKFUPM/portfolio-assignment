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

export function computeMetrics({ width, height, archive = false }) {
  // Short landscape viewports also use the two-column treatment.
  const compact = width <= 900 || (width <= 1200 && height <= 640);
  const sideInset = Math.max(17, Math.min(64, width * 0.065));
  const panelWidth = compact
    ? Math.min(620, width - 2 * sideInset)
    : Math.min(600, Math.max(468, width * 0.43));
  const gridColumns = compact ? (width < 480 ? 2 : width < 720 ? 3 : 4) : 10;
  const gridInset = compact ? Math.max(10, Math.min(24, width * 0.025)) : 30;
  const unit = compact
    ? archive
      ? (width - 2 * gridInset) / gridColumns
      : Math.max(104, Math.min(170, width * 0.27))
    : archive
      ? Math.min(122, (width - 60) / 10)
      : Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  return {
    width, height, panelWidth, unit, compact, mobile: compact,
    gridColumns, gridInset,
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
  const slotsPerSide = Math.max(Math.ceil(entries.length / 2), minimumPerSide);
  const slots = Array.from({ length: slotsPerSide * 2 }, (_, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    const row = Math.floor(index / 2);
    const entry = entries[index] ?? null;
    return { id: entry ? `entry-${entry.id}` : `ambient-${side}-${row}`, side, row, entry };
  });
  const visibleEntries = slots.filter(slot => slot.entry);
  const archiveOrder = new Map(visibleEntries.map((slot, index) => [slot.id, index]));
  const archiveUnit = (width - 2 * gridInset) / gridColumns;
  const gridWidth = gridColumns * archiveUnit;
  const gridLeft = (width - gridWidth) / 2;
  const gridTop = 78; // Keeps the top row clear of the floating controls.

  const tiles = slots.map((slot) => {
    const { side, row, entry } = slot;
    const order = archiveOrder.get(slot.id);
    const decorative = !entry;
    const pixels = archive ? archiveUnit : streamUnit;
    const x = archive && !decorative
      ? gridLeft + (order % gridColumns) * archiveUnit
      : side === 'left' ? leftEdge - streamUnit : rightEdge;
    const y = archive && !decorative
      ? gridTop + Math.floor(order / gridColumns) * archiveUnit
      : (row - 2) * streamUnit;
    return {
      id: slot.id, side, entry, decorative, compact: true,
      size: 1, x, y, pixels,
      // Decorative stream squares are omitted visually in Archive Mode.
      hidden: archive && decorative,
    };
  });
  const archiveRows = Math.ceil(entries.length / gridColumns);
  const contentHeight = archive
    ? Math.max(height + 1, gridTop + archiveRows * archiveUnit + 32)
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
  // Use the smaller of both mode scales so the set of tile IDs stays stable
  // when transitioning into Archive Mode.
  const portfolioUnit = Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  const archiveUnit = Math.min(122, (width - 60) / 10);
  const coverageUnit = Math.min(portfolioUnit, archiveUnit);
  const minModules = Math.ceil((height + coverageUnit * 0.6) / (5 * coverageUnit));
  const slots = createMosaicSlots(entries.length, minModules);
  const tiles = slots.map(slot => {
    const entryIndex = slot.indexOnSide * 2 + (slot.side === 'right' ? 1 : 0);
    const entry = entries[entryIndex] ?? null;
    const x = archive
      ? width / 2 + (slot.side === 'left' ? -5 * unit : 0) + slot.x * unit
      : (slot.side === 'left' ? leftBoundary - 5 * unit : rightBoundary) + slot.x * unit;
    const y = (slot.moduleIndex * 5 + slot.y) * unit;
    return {
      ...slot, entry, x, y, pixels: slot.size * unit,
      decorative: !entry, compact: false, hidden: false,
    };
  });
  const moduleCount = slots.length / (SLOTS_PER_MODULE * 2);
  const contentHeight = moduleCount * 5 * unit + (archive ? 90 : 30);
  return { tiles, metrics, contentHeight: Math.max(height + 1, contentHeight), moduleCount };
}
