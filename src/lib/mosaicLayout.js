/** A complete 5×5 square packing: 3² + 2² + 2² + 2² + 4·1² = 25. */
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

export function createMosaicSlots(entryCount) {
  const leftCount = Math.ceil(entryCount / 2);
  const rightCount = Math.floor(entryCount / 2);
  // A complete 5×5 square block is maintained per side. Empty spaces
  // are background-only tiles, never misleading achievements.
  const modules = Math.max(1, Math.ceil(Math.max(leftCount, rightCount) / SLOTS_PER_MODULE));
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

export function computeMetrics({ width, height, archive }) {
  const mobile = width <= 720;
  const panelWidth = mobile ? Math.max(260, width - 28) : Math.min(600, Math.max(468, width * 0.43));
  const unit = archive
    ? mobile
      ? (width - 26) / 5
      : Math.min(122, (width - 60) / 10)
    : mobile
      ? Math.max(54, width * 0.16)
      : Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  return { width, height, panelWidth, unit, mobile };
}

/** Positions the same real square DOM nodes in both modes. */
export function layoutMosaic(entries, viewport, archive = false) {
  const metrics = computeMetrics({ ...viewport, archive });
  const { width, height, panelWidth, unit, mobile } = metrics;
  const leftBoundary = (width - panelWidth) / 2;
  const rightBoundary = (width + panelWidth) / 2;
  const isStacked = mobile && archive;
  const slots = createMosaicSlots(entries.length);
  const tiles = slots.map((slot) => {
    const entryIndex = slot.indexOnSide * 2 + (slot.side === 'right' ? 1 : 0);
    const entry = entries[entryIndex] ?? null;
    const x = archive
      ? isStacked
        ? (width - 5 * unit) / 2 + slot.x * unit
        : width / 2 + (slot.side === 'left' ? -5 * unit : 0) + slot.x * unit
      : (slot.side === 'left' ? leftBoundary - 5 * unit : rightBoundary) + slot.x * unit;
    const y = (archive && isStacked
      ? (slot.moduleIndex * 10 + (slot.side === 'right' ? 5 : 0))
      : slot.moduleIndex * 5) * unit + slot.y * unit;
    return {
      ...slot,
      entry,
      x,
      y,
      pixels: slot.size * unit,
      decorative: !entry,
    };
  });
  const moduleCount = Math.max(1, Math.ceil(Math.ceil(entries.length / 2) / SLOTS_PER_MODULE));
  const contentHeight = (isStacked ? moduleCount * 10 : moduleCount * 5) * unit + (archive ? 90 : 30);
  return { tiles, metrics, contentHeight: Math.max(height + 2, contentHeight), moduleCount };
}
