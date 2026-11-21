import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icons.jsx';

const CONTROLS_IDLE_MS = 3000;

export default function FloatingControls({ archive, onToggleArchive, theme, onToggleTheme, lang, onToggleLanguage, t }) {
  const [visible, setVisible] = useState(true);
  const controlsRef = useRef(null);

  useEffect(() => {
    let idleTimer;
    let lastPointerMove = 0;

    const armHide = () => {
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        // Keep the controls available while someone navigates them with a keyboard.
        if (controlsRef.current?.querySelector(':focus-visible')) {
          armHide();
          return;
        }
        setVisible(false);
      }, CONTROLS_IDLE_MS);
    };

    const registerActivity = (event) => {
      // Moving the mouse at 120 Hz needn't reset a timer 120 times a second.
      if (event.type === 'pointermove') {
        const now = performance.now();
        if (now - lastPointerMove < 150) return;
        lastPointerMove = now;
      }
      setVisible(true);
      armHide();
    };

    const activityEvents = ['pointermove', 'pointerdown', 'touchstart', 'touchmove', 'wheel', 'keydown', 'focusin'];
    activityEvents.forEach(name => window.addEventListener(name, registerActivity, { passive: true }));
    armHide();

    return () => {
      window.clearTimeout(idleTimer);
      activityEvents.forEach(name => window.removeEventListener(name, registerActivity));
    };
  }, []);

  return (
    <div ref={controlsRef} className={`floating-controls ${visible ? '' : 'floating-controls--hidden'}`}
      role="group" aria-label="Display and archive controls">
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
