# Bilingual achievement fields (English / Arabic)

Every entry keeps its original English properties and adds a corresponding `Ar` property for Arabic. No automatic translation service is required. The site switches these fields instantly when the language button is used.

Example:

```js
{
  id: 'example',
  category: 'Projects',
  categoryAr: 'المشاريع',
  title: 'My Project',
  titleAr: 'مشروعي',
  summary: 'A short description.',
  summaryAr: 'وصف قصير.',
  body: 'The full story about the project.',
  bodyAr: 'القصة الكاملة عن المشروع.',
  image: '/art/example.jpg',
  meta: 'Programming · Design',
  metaAr: 'البرمجة · التصميم',
  // Optional: use a dedicated caption instead of the metadata.
  caption: 'Photograph taken during development.',
  captionAr: 'صورة التُقطت خلال التطوير.',
  // Optional: accessible descriptions for screen-reader users.
  imageAlt: 'The project during development',
  imageAltAr: 'المشروع خلال مرحلة التطوير',
  links: [{
    label: 'View project',
    labelAr: 'عرض المشروع',
    href: 'https://example.com',
  }],
}
```

**Rules**

- Edit `src/data/achievements.js` to add or change your text.
- For each English property, use the same name with the `Ar` suffix for its Arabic translation.
- The field displayed below an achievement image is `caption` / `captionAr` when supplied. Otherwise it is `meta` / `metaAr`.
- If you omit an Arabic field, the website falls back to the English value rather than showing an empty or invented translation. An explicitly empty field is respected.
- Never translate technical names, identifiers, image paths, or URLs unless doing so makes sense in the *displayed text*.
- `src/content/translations.js` contains interface text (section headings, buttons, and labels), while `src/content/localizeEntry.js` handles achievement fields.
- The language selector also updates square-tile titles and categories in the collage.

## Applying the patch

Copy the `src/` and `tests/` paths from this package into your existing project, preserving their folder structure. No other source files need replacing. The documentation file is optional.

Test the added translation coverage using:

```bash
node --test tests/entryTranslation.test.js
```
