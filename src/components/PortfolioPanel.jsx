import React, { useEffect, useRef } from 'react';
import Icon from './Icons.jsx';

function InternalLink({ children, href, onNavigate, className = 'text-link', item = null }) {
  return <button type="button" className={className} onClick={(e) => onNavigate(href, e.currentTarget, item)}>{children}</button>;
}

function IndexNavigation({ t, onNavigate, active }) {
  const links = [
    ['/', t.about], ['/projects', t.projects], ['/writing', t.writing], ['/contact', t.contact],
  ];
  return (
    <nav className="index-nav" aria-label="Portfolio sections">
      {links.map(([href, label], i) => <InternalLink key={href} href={href} onNavigate={onNavigate} className={`index-nav-link ${active === href ? 'current' : ''}`}>
        <span className="index-nav-num">0{i + 1}</span> {label}
      </InternalLink>)}
    </nav>
  );
}

function PanelHeader({ t, onNavigate, pathname }) {
  return (
    <div className="panel-heading">
      <InternalLink className="panel-monogram" href="/" onNavigate={onNavigate}>
        M<span>.</span>
      </InternalLink>
      <span className="panel-label">PERSONAL ARCHIVE <span className="tiny-asterisk">✳</span> 2026</span>
      <span className="panel-index">{pathname === '/' ? '01' : pathname === '/projects' ? '02' : pathname === '/writing' ? '03' : pathname === '/contact' ? '04' : '✦'}</span>
    </div>
  );
}

function HomeView({ t, onNavigate, entries }) {
  return <>
    <section className="intro-section">
      <span className="micro-label">{t.introKicker}</span>
      <div className="hero-intro">
        <div className="hero-copy">
          <span className="hero-greeting">{t.greeting}</span>
          <h1>Marwan<br/><em>Al-Hamdan.</em></h1>
          <div className="hero-rule" />
          <p className="hero-role">{t.occupation}</p>
          <p className="hero-description">{t.lead}</p>
        </div>
        <div className="portrait-frame">
          <img src="/portrait.png" alt="Portrait supplied with the original portfolio" />
          <span className="portrait-credit">FIG. 01 / PORTRAIT</span>
        </div>
      </div>
      <div className="hero-actions">
        <InternalLink className="pill-link pill-link--dark" href="/projects" onNavigate={onNavigate}>{t.seeWork} <Icon name="upRight" size={15}/></InternalLink>
        <InternalLink className="pill-link pill-link--outline" href="/writing" onNavigate={onNavigate}>{t.writing} <Icon name="arrow" size={15}/></InternalLink>
      </div>
    </section>
    <section className="editorial-block">
      <div className="section-heading"><span className="number-label">01 / A NOTE ON CURIOSITY</span><span className="section-star">✳</span></div>
      <h2>Between code<br/>and <em>curiosity.</em></h2>
      <p>{t.discover} I enjoy finding the connections between the things I study, build and read.</p>
      <div className="ink-divider" />
      <span className="number-label">02 / {t.myWork.toUpperCase()}</span>
      <div className="feature-links">
        {entries.slice(0, 3).map((item, i) => (
          <InternalLink key={item.id} href={`/archive/${item.id}`} onNavigate={onNavigate} item={item} className="feature-link">
            <span className="feature-number">0{i + 1}</span><span>{item.title}</span><Icon name="upRight" size={16}/>
          </InternalLink>
        ))}
      </div>
    </section>
    <section className="editorial-block editorial-block--bottom">
      <div className="section-heading"><span className="number-label">03 / {t.readingNext.toUpperCase()}</span></div>
      <h2>The library<br/>of <em>ideas.</em></h2>
      <p>{t.readingBody}</p>
      <InternalLink className="inline-arrow" href="/writing" onNavigate={onNavigate}>{t.writing} <Icon name="arrow" size={16}/></InternalLink>
    </section>
  </>;
}

function ProjectsView({ t, onNavigate, entries, lang }) {
  const items = entries.filter((e) => !e.sample && ['portfolio-website', 'ecommerce', 'mobile-ui', 'dashboard'].includes(e.id));
  return <section className="inner-view">
    <span className="micro-label">02 / {t.projects.toUpperCase()}</span>
    <h1 className="view-title">Things <em>built.</em></h1>
    <p className="view-lede">{t.workLead}</p>
    <div className="project-list">
      {items.map((item, index) => <InternalLink key={item.id} href={`/archive/${item.id}`} onNavigate={onNavigate} item={item} className="project-row">
        <span className="project-row-number">0{index + 1}</span>
        <img src={item.image} alt="" />
        <span className="project-row-description"><strong>{lang === 'ar' ? item.titleAr || item.title : item.title}</strong><small>{item.meta}</small></span>
        <Icon name="upRight" size={18}/>
      </InternalLink>)}
    </div>
    <div className="source-disclosure">{t.sourceBadge} · Illustrations are not screenshots.</div>
  </section>;
}

function WritingView({ t, onNavigate, entries, lang }) {
  return <section className="inner-view">
    <span className="micro-label">03 / {t.writing.toUpperCase()}</span>
    <h1 className="view-title">Words &<br/><em>worlds.</em></h1>
    <p className="view-lede">{t.writingLead}</p>
    <img className="editorial-illustration" src="/art/reading.svg" alt="Abstract illustration of books and reading" />
    <h2 className="subheading">{t.readingTitle}</h2>
    <p className="body-copy">{t.readingBody}</p>
    <InternalLink className="feature-link" href="/archive/writing" onNavigate={onNavigate} item={entries.find(e => e.id === 'writing')}>
      <span>Poetry & Essays</span><Icon name="arrow" size={18}/>
    </InternalLink>
    <a className="inline-arrow external" href="https://marwanpgx.substack.com/" target="_blank" rel="noopener noreferrer">Substack <Icon name="upRight" size={16}/></a>
  </section>;
}

function ContactView({ t }) {
  return <section className="inner-view contact-view">
    <span className="micro-label">04 / {t.contact.toUpperCase()}</span>
    <h1 className="view-title">Let's make<br/><em>something.</em></h1>
    <p className="view-lede">{t.reachLead}</p>
    <div className="contact-options">
      <a href="https://www.linkedin.com/in/marwan-al-hamdan-a64043331/" target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="upRight" size={18}/></a>
      <a href="https://marwanpgx.substack.com/" target="_blank" rel="noopener noreferrer">Substack <Icon name="upRight" size={18}/></a>
    </div>
    <p className="fine-print">{t.note}</p>
  </section>;
}

function EntryView({ entry, t, lang, onNavigate }) {
  if (!entry) return <section className="inner-view"><h1 className="view-title">Not found.</h1><InternalLink href="/" onNavigate={onNavigate} className="inline-arrow"><Icon name="back" size={18}/> {t.back}</InternalLink></section>;
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const summary = lang === 'ar' ? entry.summaryAr || entry.summary : entry.summary;
  return <article className="entry-view inner-view">
    <span className="micro-label">ARCHIVE / {entry.category.toUpperCase()}</span>
    {entry.sample && <div className="sample-alert">{t.sampleBadge}</div>}
    <h1 className="view-title">{title}</h1>
    <p className="view-lede">{summary}</p>
    <img src={entry.image} className="entry-hero-image" alt={`Illustrative artwork for ${entry.title}`} />
    <div className="section-heading"><span className="number-label">{entry.meta}</span></div>
    <p className="body-copy">{entry.body}</p>
    {entry.links?.length > 0 && <div className="entry-links">{entry.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-arrow">{link.label} <Icon name="upRight" size={16}/></a>)}</div>}
    <InternalLink href="/" onNavigate={onNavigate} className="pill-link pill-link--outline"><Icon name="back" size={16}/> {t.back}</InternalLink>
  </article>;
}

export default function PortfolioPanel({ pathname, archive, entries, t, lang, onNavigate }) {
  const scrollRef = useRef(null);
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [pathname]);
  const entry = pathname.startsWith('/archive/') ? entries.find(e => e.id === decodeURIComponent(pathname.slice('/archive/'.length))) : null;
  return (
    <main className={`portfolio-panel ${archive ? 'portfolio-panel--hidden' : ''}`} aria-hidden={archive} inert={archive} ref={scrollRef} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <PanelHeader t={t} onNavigate={onNavigate} pathname={pathname}/>
      {pathname === '/' ? <HomeView t={t} onNavigate={onNavigate} entries={entries}/>
        : pathname === '/projects' ? <ProjectsView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
          : pathname === '/writing' ? <WritingView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
            : pathname === '/contact' ? <ContactView t={t}/>
              : <EntryView entry={entry} t={t} lang={lang} onNavigate={onNavigate}/>}
      <footer className="panel-footer">
        <span>© 2026 MARWAN AL-HAMDAN</span><span>{t.footer}</span>
      </footer>
      <IndexNavigation t={t} onNavigate={onNavigate} active={pathname}/>
    </main>
  );
}
