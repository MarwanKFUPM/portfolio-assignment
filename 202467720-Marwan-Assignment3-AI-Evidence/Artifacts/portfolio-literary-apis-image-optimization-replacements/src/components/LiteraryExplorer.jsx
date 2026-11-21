import React, { useEffect, useMemo, useState } from 'react';
import { fetchLiteraryAuthor, LITERARY_AUTHORS, wikiquotePageUrl } from '../lib/literaryApis.js';

const FAVORITES_KEY = 'living-archive-literary-favorites-v1';
const authorCache = new Map();

function readFavorites() {
  try {
    const value = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
    return Array.isArray(value) ? value.filter(x => x && typeof x.quote === 'string' && typeof x.authorId === 'string').slice(0, 40) : [];
  } catch { return []; }
}

function writeFavorites(value) {
  try { localStorage.setItem(FAVORITES_KEY, JSON.stringify(value)); } catch { /* Storage is optional */ }
}

export default function LiteraryExplorer({ t, lang, enabled = true }) {
  const [authorId, setAuthorId] = useState(LITERARY_AUTHORS[0].id);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [index, setIndex] = useState(0);
  const [favorites, setFavorites] = useState(readFavorites);
  const [savedOnly, setSavedOnly] = useState(false);
  const author = LITERARY_AUTHORS.find(item => item.id === authorId) || LITERARY_AUTHORS[0];

  useEffect(() => {
    if (!enabled || savedOnly) return;
    const cached = authorCache.get(authorId);
    if (cached && attempt === 0) { setResult(cached); setLoading(false); return; }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    setResult(null);
    setLoading(true);
    fetchLiteraryAuthor(author, { signal: controller.signal }).then(data => {
      if (controller.signal.aborted) return;
      authorCache.set(authorId, data);
      setResult(data);
    }).catch(() => {
      if (!controller.signal.aborted) setResult({ quotes: [], biography: null, quoteError: true, biographyError: true });
    }).finally(() => {
      clearTimeout(timeout);
      if (!controller.signal.aborted) setLoading(false);
    });
    return () => { clearTimeout(timeout); controller.abort(); };
  }, [authorId, attempt, enabled, savedOnly]);

  const quotes = useMemo(() => savedOnly ? favorites : (result?.quotes || []).map(quote => ({ authorId, quote })), [savedOnly, favorites, result, authorId]);
  const current = quotes.length ? quotes[Math.min(index, quotes.length - 1)] : null;
  const currentAuthor = LITERARY_AUTHORS.find(item => item.id === current?.authorId) || author;
  const isSaved = !!current && favorites.some(item => item.authorId === current.authorId && item.quote === current.quote);

  function toggleFavorite() {
    if (!current) return;
    const next = isSaved
      ? favorites.filter(item => item.authorId !== current.authorId || item.quote !== current.quote)
      : [...favorites, current].slice(-40);
    setFavorites(next);
    writeFavorites(next);
    if (savedOnly) setIndex(i => Math.max(0, Math.min(i, next.length - 1)));
  }

  return <section className="literary-explorer" aria-label={t.literaryTitle}>
    <div className="section-heading"><span className="number-label">{t.literaryKicker}</span><span className="section-star" aria-hidden="true">✳</span></div>
    <h2 className="literary-explorer-title">{t.literaryTitle}</h2>
    <p className="literary-explorer-intro">{t.literaryIntro}</p>
    <div className="literary-explorer-controls">
      <label className="literary-author-picker">
        <span>{t.literarySelectAuthor}</span>
        <select value={authorId} disabled={savedOnly} onChange={event => { setAuthorId(event.target.value); setIndex(0); setAttempt(0); }}>
          {LITERARY_AUTHORS.map(item => <option key={item.id} value={item.id}>{lang === 'ar' ? item.nameAr : item.name}</option>)}
        </select>
      </label>
      <button type="button" className={`literary-saved-toggle ${savedOnly ? 'literary-saved-toggle--active' : ''}`} aria-pressed={savedOnly} onClick={() => { setSavedOnly(v => !v); setIndex(0); }}>
        {savedOnly ? t.literaryBrowse : `${t.literarySaved} (${favorites.length})`}
      </button>
    </div>
    {!savedOnly && result?.biography && <div className="literary-author-bio">
      <strong>{lang === 'ar' ? author.nameAr : result.biography.name}</strong>
      {(result.biography.birthDate || result.biography.deathDate) && <span dir="ltr">{[result.biography.birthDate, result.biography.deathDate].filter(Boolean).join(' – ')}</span>}
      {result.biography.topWork && <span>{t.literaryKnownFor}: <em>{result.biography.topWork}</em></span>}
      {result.biography.url && <a href={result.biography.url} target="_blank" rel="noopener noreferrer">{t.literaryOpenLibrary}</a>}
    </div>}
    <div className="literary-quote-card" aria-live="polite" aria-busy={!savedOnly && loading}>
      {savedOnly && !current ? <p className="literary-message">{t.literaryNoSaved}</p>
        : !savedOnly && loading ? <p className="literary-message">{t.literaryLoading}</p>
          : current ? <>
            <span className="literary-quote-mark" aria-hidden="true">“</span>
            <blockquote lang="en" dir="ltr">{current.quote}</blockquote>
            <div className="literary-quote-author">— {lang === 'ar' ? currentAuthor.nameAr : currentAuthor.name}</div>
            <div className="literary-quote-actions">
              <button type="button" onClick={toggleFavorite} aria-pressed={isSaved}>{isSaved ? t.literaryUnsave : t.literarySave}</button>
              <a href={wikiquotePageUrl(currentAuthor)} target="_blank" rel="noopener noreferrer">{t.literarySource}</a>
            </div>
          </> : <div className="literary-message">
            <p>{result?.quoteError ? t.literaryUnavailable : t.literaryEmpty}</p>
            <button type="button" onClick={() => { authorCache.delete(authorId); setAttempt(n => n + 1); }}>{t.literaryRetry}</button>
            <a href={wikiquotePageUrl(author)} target="_blank" rel="noopener noreferrer">{t.literarySource}</a>
          </div>}
    </div>
    {quotes.length > 1 && <div className="literary-pagination">
      <button type="button" disabled={index <= 0} onClick={() => setIndex(n => Math.max(0, n - 1))}>{t.literaryPrev}</button>
      <span>{Math.min(index + 1, quotes.length)} / {quotes.length}</span>
      <button type="button" disabled={index >= quotes.length - 1} onClick={() => setIndex(n => Math.min(quotes.length - 1, n + 1))}>{t.literaryNext}</button>
    </div>}
    <p className="literary-source-note">{t.literarySourceNote}</p>
  </section>;
}
