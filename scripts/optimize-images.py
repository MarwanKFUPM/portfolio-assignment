"""Generate responsive WebP variants and a manifest for the React portfolio.

Run from any directory:
    python -m pip install Pillow
    python scripts/optimize-images.py

Original images remain untouched. SVGs are kept as vectors.
"""

import json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
DEST = PUBLIC / 'optimized'
MANIFEST = ROOT / 'src' / 'data' / 'optimizedImages.json'
WIDTHS = (320, 640, 960, 1280)
FORMATS = {'.jpg', '.jpeg', '.png', '.webp'}


def optimize():
    DEST.mkdir(parents=True, exist_ok=True)
    files = [PUBLIC / 'portrait.png'] + sorted((PUBLIC / 'art').iterdir())
    manifest = {}
    for source in files:
        if not source.is_file() or source.suffix.lower() not in FORMATS:
            continue
        with Image.open(source) as original:
            image = ImageOps.exif_transpose(original)
            if image.mode not in ('RGB', 'RGBA'):
                image = image.convert('RGBA' if 'A' in image.getbands() else 'RGB')
            original_width = image.width
            sizes = sorted(set([width for width in WIDTHS if width < original_width] + [original_width]))
            url = '/' + source.relative_to(PUBLIC).as_posix()
            variants = []
            for width in sizes:
                filename = f'{source.stem}-{width}w.webp'
                destination = DEST / filename
                resized = image if width == original_width else image.resize(
                    (width, max(1, round(image.height * width / image.width))), Image.Resampling.LANCZOS
                )
                resized.save(destination, format='WEBP', quality=78, method=6)
                variants.append({'width': width, 'src': f'/optimized/{filename}'})
            manifest[url] = variants
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    print(f'Optimized {len(manifest)} images into {DEST}; wrote {MANIFEST}')


if __name__ == '__main__':
    optimize()
