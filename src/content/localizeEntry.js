/**
 * Localize author-editable archive fields without modifying the English copy.
 * Optional fieldAr values override the English field when Arabic is selected.
 * Empty translated strings are respected (e.g. an intentionally empty summary).
 */
export function localizeEntryField(item, field, lang) {
  if (!item) return '';
  const localizedKey = `${field}Ar`;
  if (lang === 'ar' && typeof item[localizedKey] === 'string') return item[localizedKey];
  return item[field] ?? '';
}

/** An explicit image caption takes precedence; otherwise use the entry metadata. */
export function localizeCaption(entry, lang) {
  if (!entry) return '';
  if (lang === 'ar' && typeof entry.captionAr === 'string') return entry.captionAr;
  if (lang !== 'ar' && typeof entry.caption === 'string') return entry.caption;
  if (typeof entry.caption === 'string') return entry.caption;
  if (lang === 'ar' && typeof entry.metaAr === 'string') return entry.metaAr;
  return entry.meta ?? '';
}

/** Allows custom, translated accessible image descriptions, if supplied. */
export function localizeImageAlt(entry, lang) {
  const explicit = localizeEntryField(entry, 'imageAlt', lang);
  if (explicit) return explicit;
  const title = localizeEntryField(entry, 'title', lang);
  return lang === 'ar' ? `صورة مرتبطة بـ${title}` : `Image related to ${title}`;
}
