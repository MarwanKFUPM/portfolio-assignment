// A deliberately small, curated list: requests are made only when the visitor
// opens a literary page and selects an author, never in bulk.
export const LITERARY_AUTHORS = Object.freeze([
  { id: 'shakespeare', name: 'William Shakespeare', nameAr: 'وليام شكسبير', wikiquote: 'William Shakespeare' },
  { id: 'austen', name: 'Jane Austen', nameAr: 'جين أوستن', wikiquote: 'Jane Austen' },
  { id: 'johnson', name: 'Samuel Johnson', nameAr: 'صمويل جونسون', wikiquote: 'Samuel Johnson' },
  { id: 'woolf', name: 'Virginia Woolf', nameAr: 'فرجينيا وولف', wikiquote: 'Virginia Woolf' },
  { id: 'dostoevsky', name: 'Fyodor Dostoevsky', nameAr: 'فيودور دوستويفسكي', wikiquote: 'Fyodor Dostoyevsky' },
  { id: 'aristotle', name: 'Aristotle', nameAr: 'أرسطو', wikiquote: 'Aristotle' },
]);

export function wikiquotePageUrl(author) {
  return `https://en.wikiquote.org/wiki/${encodeURIComponent(author.wikiquote.replaceAll(' ', '_'))}`;
}

export function wikiquoteApiUrl(author) {
  const params = new URLSearchParams({
    action: 'parse', page: author.wikiquote, prop: 'wikitext', format: 'json', origin: '*', redirects: '1',
  });
  return `https://en.wikiquote.org/w/api.php?${params}`;
}

export function openLibraryApiUrl(author) {
  const params = new URLSearchParams({ q: author.name, limit: '5' });
  return `https://openlibrary.org/search/authors.json?${params}`;
}

function plainWikiText(input) {
  let text = input.replace(/<!--[^]*?-->/g, '').replace(/<ref\b[^>]*>[^]*?<\/ref>/gi, '').replace(/<ref\b[^>]*\/>/gi, '');
  // Drop templates instead of accidentally displaying their parameters as quotes.
  for (let i = 0; i < 5; i++) text = text.replace(/\{\{[^{}]*\}\}/g, '');
  text = text.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2').replace(/\[\[([^\]]+)\]\]/g, '$1');
  text = text.replace(/\[(?:https?:\/\/)[^\s\]]+\s+([^\]]+)\]/g, '$1');
  text = text.replace(/''+/g, '').replace(/<br\s*\/?\s*>/gi, ' ').replace(/<[^>]+>/g, '');
  text = text.replace(/&nbsp;|&#160;/gi, ' ').replace(/&amp;/gi, '&').replace(/&quot;/gi, '"').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>');
  return text.replace(/\s+/g, ' ').trim();
}

// Wikiquote pages are community-edited and vary in structure. Only use
// first-level quotation bullets in sections that are not flagged as dubious.
// Never synthesize or truncate a quotation to fill empty results.
export function extractWikiquoteQuotes(wikitext, limit = 9) {
  if (typeof wikitext !== 'string') return [];
  const result = [];
  const seen = new Set();
  const excludedLevels = [];
  for (const line of wikitext.split(/\r?\n/)) {
    const heading = line.match(/^(={2,6})\s*(.*?)\s*\1\s*$/);
    if (heading) {
      const level = heading[1].length;
      while (excludedLevels.length && excludedLevels.at(-1) >= level) excludedLevels.pop();
      if (/misattributed|disputed|unsourced|unverified|attributed|quotes about|external links|see also|references|further reading|notes|bibliography|translations/i.test(plainWikiText(heading[2]))) {
        excludedLevels.push(level);
      }
      continue;
    }
    if (excludedLevels.length || !/^\*\s*\S/.test(line) || /^\*\s*[*#:]/.test(line)) continue;
    const raw = line.replace(/^\*\s*/, '');
    if (/\{\||\[\[(?:File|Image|Category):|https?:\/\//i.test(raw)) continue;
    const quote = plainWikiText(raw);
    if (quote.length < 35 || quote.length > 230 || quote.split(/\s+/).length < 7) continue;
    if (/\{\{|\}\}|\[\[|\]\]|\b(?:ISBN|Wikiquote|Wikisource)\b/i.test(quote)) continue;
    if (/^(?:See also|Read more|From |For more|Source:|Translation:|Image:)/i.test(quote)) continue;
    const key = quote.toLocaleLowerCase('en');
    if (!seen.has(key)) {
      seen.add(key);
      result.push(quote);
      if (result.length >= limit) break;
    }
  }
  return result;
}

export function parseOpenLibraryAuthor(json, author) {
  const docs = Array.isArray(json?.docs) ? json.docs : [];
  const match = docs.find(doc => doc.name?.toLocaleLowerCase('en') === author.name.toLocaleLowerCase('en'));
  if (!match) return null; // Don't attach a similarly named person's biography.
  const key = String(match.key || '').replace(/^\/authors\//, '');
  return {
    name: match.name,
    birthDate: typeof match.birth_date === 'string' ? match.birth_date : '',
    deathDate: typeof match.death_date === 'string' ? match.death_date : '',
    workCount: Number.isFinite(match.work_count) ? match.work_count : null,
    topWork: typeof match.top_work === 'string' ? match.top_work : '',
    url: /^OL\d+A$/.test(key) ? `https://openlibrary.org/authors/${key}` : '',
  };
}

async function getJson(url, signal, fetchImpl) {
  const response = await fetchImpl(url, { signal });
  if (!response.ok) throw new Error(`API request failed (${response.status})`);
  return response.json();
}

// Both independent APIs are queried in parallel. One failing never hides
// successful data from the other. Errors are surfaced to the component.
export async function fetchLiteraryAuthor(author, { signal, fetchImpl = fetch } = {}) {
  const [quotesResult, bioResult] = await Promise.allSettled([
    getJson(wikiquoteApiUrl(author), signal, fetchImpl),
    getJson(openLibraryApiUrl(author), signal, fetchImpl),
  ]);
  const quoteData = quotesResult.status === 'fulfilled' ? quotesResult.value : null;
  const bioData = bioResult.status === 'fulfilled' ? bioResult.value : null;
  const wikitext = quoteData?.parse?.wikitext?.['*'];
  return {
    quotes: extractWikiquoteQuotes(wikitext),
    biography: parseOpenLibraryAuthor(bioData, author),
    quoteError: quotesResult.status === 'rejected' || !!quoteData?.error || typeof wikitext !== 'string',
    biographyError: bioResult.status === 'rejected',
  };
}
