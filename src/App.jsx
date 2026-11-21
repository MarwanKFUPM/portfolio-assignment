import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ArchiveMosaic from './components/ArchiveMosaic.jsx';
import FloatingControls from './components/FloatingControls.jsx';
import PortfolioPanel from './components/PortfolioPanel.jsx';
import TransitionLayer from './components/TransitionLayer.jsx';
import Icon from './components/Icons.jsx';
import { achievements, createSampleBatch } from './data/achievements.js';
import { i18n } from './content/translations.js';
import { useViewport } from './hooks/useViewport.js';

function readPreference(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}

function readPathname() { return window.location.pathname.replace(/\/$/, '') || '/'; }

export default function App() {
  const viewport = useViewport();
  const [pathname, setPathname] = useState(readPathname);
  const [theme, setTheme] = useState(() => readPreference('living-archive-theme', 'light'));
  const [lang, setLang] = useState(() => readPreference('living-archive-language', 'en'));
  const [archive, setArchive] = useState(false);
  const [demoCount, setDemoCount] = useState(0);
  const [transition, setTransition] = useState(null);
  const busy = useRef(false);
  const timers = useRef([]);
  const t = i18n[lang] || i18n.en;
  const entries = useMemo(() => [...achievements, ...createSampleBatch(0, demoCount)], [demoCount]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('living-archive-theme', theme); } catch { /* Preferences are optional */ }
  }, [theme]);
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('living-archive-language', lang); } catch { /* Preferences are optional */ }
  }, [lang]);
  useEffect(() => {
    const popstate = () => { setPathname(readPathname()); setArchive(false); };
    window.addEventListener('popstate', popstate);
    return () => window.removeEventListener('popstate', popstate);
  }, []);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    document.title = pathname === '/' ? 'Marwan Al-Hamdan · A Living Archive' : `Marwan Al-Hamdan · ${pathname.split('/').filter(Boolean).at(-1) || 'Archive'}`;
  }, [pathname]);

  const navigate = useCallback((destination, sourceElement, item = null) => {
    if (busy.current) return;
    if (destination === pathname && !archive) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      window.history.pushState({}, '', destination);
      setPathname(destination); setArchive(false);
      return;
    }
    busy.current = true;
    const rect = sourceElement?.getBoundingClientRect();
    const origin = rect ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height }
      : { left: viewport.width / 2 - 40, top: viewport.height / 2 - 40, width: 80, height: 80 };
    const base = { origin, image: item?.image, title: item?.title || destination.split('/').at(-1), phase: 'start' };
    setTransition(base);
    timers.current.push(setTimeout(() => setTransition({ ...base, phase: 'zoom' }), 25));
    timers.current.push(setTimeout(() => {
      window.history.pushState({}, '', destination);
      setPathname(destination);
      setArchive(false);
      setTransition({ ...base, phase: 'reveal' });
    }, 430));
    timers.current.push(setTimeout(() => { setTransition(null); busy.current = false; }, 750));
  }, [archive, pathname, viewport.width, viewport.height]);

  const onTileOpen = useCallback((item, element) => navigate(`/archive/${encodeURIComponent(item.id)}`, element, item), [navigate]);

  return (
    <div className={`site-shell ${archive ? 'site-shell--archive' : ''}`}>
      <div className="site-grain" aria-hidden="true" />
      <ArchiveMosaic entries={entries} viewport={viewport} archive={archive} lang={lang} onOpen={onTileOpen} />
      <div className="panel-shadow" aria-hidden="true" />
      <PortfolioPanel pathname={pathname} archive={archive} entries={entries} t={t} lang={lang} onNavigate={navigate} />
      <FloatingControls archive={archive} onToggleArchive={() => setArchive(v => !v)} theme={theme} onToggleTheme={() => setTheme(v => v === 'dark' ? 'light' : 'dark')} lang={lang} onToggleLanguage={() => setLang(v => v === 'en' ? 'ar' : 'en')} t={t} />
      {archive && <aside className="archive-demo-dock" aria-label="Archive growth demo">
        <div className="dock-copy"><span className="dock-kicker">{t.demoHeading}</span><span>{entries.length} {t.count} <span className="dock-hint">· {t.demoInfo}</span></span></div>
        <div className="dock-actions">
          <button type="button" onClick={() => setDemoCount(n => n + 4)} title={t.add} aria-label={t.add}><Icon name="plus" size={17}/><span>4</span></button>
          <button type="button" onClick={() => setDemoCount(n => Math.max(0, n - 4))} disabled={!demoCount} title={t.remove} aria-label={t.remove}><Icon name="minus" size={17}/><span>4</span></button>
        </div>
      </aside>}
      <TransitionLayer transition={transition}/>
    </div>
  );
}
