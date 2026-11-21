import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LITERARY_AUTHORS, wikiquoteApiUrl, openLibraryApiUrl,
  extractWikiquoteQuotes, parseOpenLibraryAuthor, fetchLiteraryAuthor,
} from '../src/lib/literaryApis.js';

const sample = `== Quotes ==
* ''A quotation can be an entire thought, expressed in words that deserve to be remembered.''
** Source: Some book
* A quotation can be an entire thought, expressed in words that deserve to be remembered.
* Another original observation about books and ideas can help us understand the world in a different way.
== Misattributed ==
* This sentence has been incorrectly attributed to this author by many people over the years.
=== Incorrect attribution details ===
* Another incorrectly credited sentence in a nested section should also be skipped by the parser.
== Works ==
* An additional line from a literary work can be shown here without inventing any source material.
== External links ==
* Follow this external link for additional quotations and other information about the author.
`;

test('authors are curated and have safe API URLs', () => {
  assert.equal(LITERARY_AUTHORS.length, 6);
  const author = LITERARY_AUTHORS[0];
  const wiki = new URL(wikiquoteApiUrl(author));
  assert.equal(wiki.searchParams.get('origin'), '*');
  assert.equal(wiki.searchParams.get('prop'), 'wikitext');
  assert.equal(new URL(openLibraryApiUrl(author)).searchParams.get('q'), author.name);
});

test('wikiquote parser excludes disputed content and does not truncate quotations', () => {
  const quotes = extractWikiquoteQuotes(sample);
  assert.equal(quotes.length, 3);
  assert.equal(quotes[0], 'A quotation can be an entire thought, expressed in words that deserve to be remembered.');
  assert.ok(!quotes.some(quote => quote.includes('incorrectly attributed')));
  assert.ok(!quotes.some(quote => quote.includes('external link')));
});

test('wikiquote parser removes wiki markup and rejects non-quote markup', () => {
  const quotes = extractWikiquoteQuotes(`== Quotes ==\n* A good [[Book|book]] is a thoughtful companion when we are travelling through an unfamiliar world.\n* {{template|unknown}}\n* Short.`);
  assert.deepEqual(quotes, ['A good book is a thoughtful companion when we are travelling through an unfamiliar world.']);
});

test('Open Library metadata only accepts an exact author name', () => {
  const author = LITERARY_AUTHORS[1];
  const json = { docs: [
    { name: 'Jane Austen Jr.', key: 'OL111A' },
    { name: 'Jane Austen', key: 'OL222A', birth_date: '1775', work_count: 45, top_work: 'Pride and Prejudice' },
  ] };
  const result = parseOpenLibraryAuthor(json, author);
  assert.equal(result.url, 'https://openlibrary.org/authors/OL222A');
  assert.equal(result.topWork, 'Pride and Prejudice');
  assert.equal(parseOpenLibraryAuthor({ docs: [{ name: 'Jane Austen Jr.' }] }, author), null);
});

test('partial API failure preserves successful quotations', async () => {
  const fetchImpl = async url => {
    if (url.includes('wikiquote')) return { ok: true, json: async () => ({ parse: { wikitext: { '*': sample } } }) };
    return { ok: false, status: 503 };
  };
  const result = await fetchLiteraryAuthor(LITERARY_AUTHORS[0], { fetchImpl });
  assert.equal(result.quotes.length, 3);
  assert.equal(result.quoteError, false);
  assert.equal(result.biographyError, true);
  assert.equal(result.biography, null);
});

test('partial API failure preserves successful author metadata', async () => {
  const fetchImpl = async url => {
    if (url.includes('wikiquote')) return { ok: false, status: 500 };
    return { ok: true, json: async () => ({ docs: [{ name: 'Jane Austen', key: 'OL222A' }] }) };
  };
  const result = await fetchLiteraryAuthor(LITERARY_AUTHORS[1], { fetchImpl });
  assert.equal(result.quoteError, true);
  assert.equal(result.quotes.length, 0);
  assert.equal(result.biography.name, 'Jane Austen');
});
