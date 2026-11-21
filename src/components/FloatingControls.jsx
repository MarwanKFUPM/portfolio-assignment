import React from 'react';
import Icon from './Icons.jsx';

export default function FloatingControls({ archive, onToggleArchive, theme, onToggleTheme, lang, onToggleLanguage, t }) {
  return (
    <div className="floating-controls" role="group" aria-label="Display and archive controls">
      <button type="button" className="orb-button" onClick={onToggleTheme} aria-label={t.appearance} title={t.appearance}>
        <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
        <span className="orb-tooltip">{t.appearance}</span>
      </button>
      <button type="button" className="orb-button language-button" onClick={onToggleLanguage} aria-label={t.language} title={t.language}>
        <span>{lang === 'en' ? 'EN' : 'ع'}</span>
        <span className="orb-tooltip">{t.language}</span>
      </button>
      <button type="button" className={`orb-button archive-orb ${archive ? 'is-active' : ''}`} onClick={onToggleArchive} aria-label={archive ? t.portfolio : t.archive} title={archive ? t.portfolio : t.archive} aria-pressed={archive}>
        <Icon name={archive ? 'close' : 'grid'} size={20} />
        <span className="orb-tooltip">{archive ? t.portfolio : t.archive}</span>
      </button>
    </div>
  );
}
