import optimizedImages from '../data/optimizedImages.json';

// Images not present in the manifest (including SVGs and future additions)
// retain their original URL and continue working normally.
export function responsiveImageProps(path, sizes = '100vw') {
  const variants = optimizedImages[path];
  if (!variants?.length) return { src: path };
  return {
    src: path,
    srcSet: variants.map(item => `${item.src} ${item.width}w`).join(', '),
    sizes,
  };
}

export function optimizedImageUrl(path, targetWidth = 960) {
  const variants = optimizedImages[path];
  if (!variants?.length) return path;
  return variants.find(item => item.width >= targetWidth)?.src || variants.at(-1).src;
}
