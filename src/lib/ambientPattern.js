/**
 * Deterministic, tile-specific decorative geometry.
 * The tile ID is a stable seed, so a square keeps its artwork when it moves.
 * Every distinct ID gets distinct phases, offsets and spacings; the pattern
 * family varies as well, without any runtime randomness or image requests.
 */
function hashId(id) {
  let h = 2166136261;
  for (const char of String(id)) {
    h ^= char.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function randomFrom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const f = number => Number(number.toFixed(2));

export function createAmbientSvg(id) {
  const seed = hashId(id);
  const rand = randomFrom(seed);
  const family = seed % 6;
  const cx = f(28 + 44 * rand());
  const cy = f(28 + 44 * rand());
  const angle = f(-37 + 74 * rand());
  const pitch = 7 + Math.floor(rand() * 11);
  const stroke = ['#b9c4bc', '#c1b0ad', '#afbdce', '#c9bd9f'][seed % 4];
  const accent = ['#d2bea2', '#9dbdb7', '#b6accd', '#bcc4a5'][(seed >>> 3) % 4];
  let geometry = '';

  if (family === 0) {
    // Parallel paths: individually rotated, translated, and phase-shifted.
    for (let j = -6; j <= 8; j++) {
      const x = f(j * pitch + (seed % pitch));
      geometry += `<path d="M ${x} -15 L ${f(x + 34 + rand() * 20)} 115" />`;
    }
  } else if (family === 1) {
    // Off-center concentric elliptical orbits.
    for (let j = 0; j < 5; j++) {
      const rx = f(9 + j * (6 + rand() * 2));
      const ry = f(rx * (0.55 + rand() * 0.8));
      geometry += `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" />`;
    }
    geometry += `<circle cx="${cx}" cy="${cy}" r="${f(2 + 4 * rand())}" fill="${accent}" stroke="none" opacity=".55" />`;
  } else if (family === 2) {
    // Noisy sine curves, with tile-dependent phase, frequency, and amplitude.
    const period = 17 + 18 * rand();
    const phase = rand() * Math.PI * 2;
    const amp = 4 + 10 * rand();
    for (let j = 0; j < 8; j++) {
      let d = '';
      for (let x = -8; x <= 108; x += 4) {
        const y = 8 + j * pitch + Math.sin(x / period + phase + j * .34) * amp;
        d += `${x === -8 ? 'M' : 'L'} ${x} ${f(y)} `;
      }
      geometry += `<path d="${d}" />`;
    }
  } else if (family === 3) {
    // Offset nested quadrilaterals; corners stay sharp.
    const ratio = .65 + .7 * rand();
    for (let j = 0; j < 5; j++) {
      const r = 8 + j * (5 + 2 * rand());
      geometry += `<rect x="${f(cx - r)}" y="${f(cy - r * ratio)}" width="${f(r * 2)}" height="${f(2 * r * ratio)}" />`;
    }
  } else if (family === 4) {
    // Off-axis radiating rays, unique origin and angular offset.
    const phase = rand() * Math.PI * 2;
    const count = 9 + Math.floor(rand() * 9);
    for (let j = 0; j < count; j++) {
      const theta = phase + (j / count) * Math.PI * 2;
      const x = f(cx + Math.cos(theta) * 115);
      const y = f(cy + Math.sin(theta) * 115);
      geometry += `<path d="M ${cx} ${cy} L ${x} ${y}" />`;
    }
    geometry += `<circle cx="${cx}" cy="${cy}" r="${f(5 + 5 * rand())}" />`;
  } else {
    // Alternating stepped paths with independent offsets per square.
    const offset = f(7 + rand() * 16);
    const step = 9 + Math.floor(rand() * 9);
    for (let j = -1; j < 8; j++) {
      const y = f(j * (step + 4) + offset);
      geometry += `<path d="M -10 ${y} H ${f(cx)} V ${f(y + step / 2)} H 110" />`;
    }
  }

  // Every tile additionally has a distinct circular trace, offset and index.
  // The index also ensures tiles in the same pattern family never look identical.
  const traceX = f(14 + rand() * 72);
  const traceY = f(14 + rand() * 72);
  const radius = f(3 + rand() * 13);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"><g stroke="${stroke}" stroke-width=".65" fill="none" opacity=".32" transform="rotate(${angle} 50 50)">${geometry}</g><circle cx="${traceX}" cy="${traceY}" r="${radius}" stroke="${accent}" stroke-width=".8" fill="none" opacity=".26" /></svg>`;
}

export function createAmbientBackground(id) {
  return `url("data:image/svg+xml,${encodeURIComponent(createAmbientSvg(id))}")`;
}
