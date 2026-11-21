import React, { useEffect, useMemo, useState } from 'react';
import Icon from './Icons.jsx';
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
  const currentIndex = Math.min(index, Math.max(0, quotes.length - 1));
  const current = quotes[currentIndex] || null;
  const currentAuthor = LITERARY_AUTHORS.find(item => item.id === current?.authorId) || author;
  const isSaved = !!current && favorites.some(item => item.authorId === current.authorId && item.quote === current.quote);
  const authorName = lang === 'ar' ? author.nameAr : result?.biography?.name || author.name;

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
    <div className="section-heading literary-explorer-eyebrow">
      <span className="number-label">{t.literaryKicker}</span>
      <span className="section-star" aria-hidden="true">✳</span>
    </div>
    <h2 className="literary-explorer-title">{t.literaryTitle}</h2>
    <p className="literary-explorer-intro">{t.literaryIntro}</p>

    <div className="literary-explorer-controls">
      <label className="literary-author-picker">
        <span className="literary-control-label">{t.literarySelectAuthor}</span>
        <span className="literary-select-wrap">
          <select value={authorId} disabled={savedOnly} onChange={event => { setAuthorId(event.target.value); setIndex(0); setAttempt(0); }}>
            {LITERARY_AUTHORS.map(item => <option key={item.id} value={item.id}>{lang === 'ar' ? item.nameAr : item.name}</option>)}
          </select>
          <span className="literary-select-chevron" aria-hidden="true" />
        </span>
      </label>
      <button type="button" className={`literary-saved-toggle ${savedOnly ? 'literary-saved-toggle--active' : ''}`} aria-pressed={savedOnly} onClick={() => { setSavedOnly(v => !v); setIndex(0); }}>
        <Icon name="spark" size={15} />
        <span>{savedOnly ? t.literaryBrowse : t.literarySaved}</span>
        {!savedOnly && <span className="literary-saved-count">{favorites.length}</span>}
      </button>
    </div>

    {!savedOnly && result?.biography && <div className="literary-author-bio">
      <div className="literary-author-primary">
        <strong>{authorName}</strong>
        {(result.biography.birthDate || result.biography.deathDate) && <span className="literary-author-dates" dir="ltr">{[result.biography.birthDate, result.biography.deathDate].filter(Boolean).join(' – ')}</span>}
      </div>
      <div className="literary-author-secondary">
        {result.biography.topWork && <span className="literary-author-work">{t.literaryKnownFor}: <em>{result.biography.topWork}</em></span>}
        {result.biography.url && <a className="literary-text-link" href={result.biography.url} target="_blank" rel="noopener noreferrer">{t.literaryOpenLibrary} <Icon name="upRight" size={13} /></a>}
      </div>
    </div>}

    <div className="literary-quote-card" aria-live="polite" aria-busy={!savedOnly && loading}>
      <div className="literary-quote-topline" aria-hidden="true">
        <span className="literary-quote-ornament">✳</span>
        {current && <span className="literary-quote-position" dir="ltr">{String(currentIndex + 1).padStart(2, '0')} / {String(quotes.length).padStart(2, '0')}</span>}
      </div>
      {savedOnly && !current ? <div className="literary-state"><p>{t.literaryNoSaved}</p></div>
        : !savedOnly && loading ? <div className="literary-state literary-state--loading" role="status"><span className="literary-loading-indicator" aria-hidden="true"/><p>{t.literaryLoading}</p></div>
          : current ? <div className="literary-quote-content" key={`${current.authorId}-${currentIndex}-${savedOnly}`}>
            <blockquote lang="en" dir="ltr">{current.quote}</blockquote>
            <div className="literary-quote-author">— {lang === 'ar' ? currentAuthor.nameAr : currentAuthor.name}</div>
            <div className="literary-quote-actions">
              <button type="button" className={`literary-save-button ${isSaved ? 'literary-save-button--active' : ''}`} onClick={toggleFavorite} aria-pressed={isSaved}>
                <Icon name={isSaved ? 'close' : 'plus'} size={15} /> {isSaved ? t.literaryUnsave : t.literarySave}
              </button>
              <a className="literary-text-link" href={wikiquotePageUrl(currentAuthor)} target="_blank" rel="noopener noreferrer">{t.literarySource} <Icon name="upRight" size={14} /></a>
            </div>
          </div> : <div className="literary-state literary-state--error">
            <p>{result?.quoteError ? t.literaryUnavailable : t.literaryEmpty}</p>
            <div className="literary-state-actions">
              <button type="button" onClick={() => { authorCache.delete(authorId); setAttempt(n => n + 1); }}>{t.literaryRetry}</button>
              <a className="literary-text-link" href={wikiquotePageUrl(author)} target="_blank" rel="noopener noreferrer">{t.literarySource} <Icon name="upRight" size={14} /></a>
            </div>
          </div>}
    </div>

    {quotes.length > 1 && <div className="literary-pagination" aria-label={`${t.literaryPrev} / ${t.literaryNext}`}>
      <button type="button" className="literary-page-button" disabled={currentIndex <= 0} onClick={() => setIndex(n => Math.max(0, n - 1))}>
        <Icon name="back" size={15} /> <span>{t.literaryPrev}</span>
      </button>
      <div className="literary-progress-track" role="progressbar" aria-valuemin={1} aria-valuemax={quotes.length} aria-valuenow={currentIndex + 1} aria-label={t.literaryTitle}>
        <span style={{ width: `${((currentIndex + 1) / quotes.length) * 100}%` }} />
      </div>
      <button type="button" className="literary-page-button" disabled={currentIndex >= quotes.length - 1} onClick={() => setIndex(n => Math.min(quotes.length - 1, n + 1))}>
        <span>{t.literaryNext}</span> <Icon name="arrow" size={15} />
      </button>
    </div>}
    <p className="literary-source-note">{t.literarySourceNote}</p>
  </section>;
}
