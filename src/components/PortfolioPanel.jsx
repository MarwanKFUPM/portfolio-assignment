import React, { useEffect, useRef } from 'react';
import Icon from './Icons.jsx';
import { localizeEntryField, localizeCaption, localizeImageAlt } from '../content/localizeEntry.js';
import { responsiveImageProps } from '../lib/imageAssets.js';
import LiteraryExplorer from './LiteraryExplorer.jsx';

function InternalLink({ children, href, onNavigate, className = 'text-link', item = null }) {
  return <button type="button" className={className} onClick={(e) => onNavigate(href, e.currentTarget, item)}>{children}</button>;
}

function ExternalResourceLink({ href, children }) {
  return (
    <a className="resource-link" href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <span className="resource-link-icon"><Icon name="upRight" size={18}/></span>
    </a>
  );
}

function PanelHeader({ t, onNavigate, pathname }) {
  return (
    <div className="panel-heading">
      <InternalLink className="panel-monogram" href="/" onNavigate={onNavigate}>
        M<span>.</span>
      </InternalLink>
      <span className="panel-label">{t.panelLabel} <span className="tiny-asterisk">✳</span> 2026</span>
      <span className="panel-index">{pathname === '/' ? '01' : pathname === '/projects' ? '02' : pathname === '/writing' ? '03' : pathname === '/contact' ? '04' : '✦'}</span>
    </div>
  );
}

function HomeView({ t, onNavigate, entries, lang }) {
  return <>
    <section className="intro-section">
      <span className="micro-label">{t.introKicker}</span>
      <div className="hero-intro">
        <div className="hero-copy">
          <span className="hero-greeting">{t.greeting}</span>
          <h1>{lang === 'ar' ? 'مروان' : 'Marwan'}<br/><em>{lang === 'ar' ? 'الحمدان.' : 'Al-Hamdan.'}</em></h1>
          <div className="hero-rule" />
          <p className="hero-role">{t.occupation}</p>
          <p className="hero-description">{t.lead}</p>
        </div>
        <div className="portrait-frame">
          <img {...responsiveImageProps("/portrait.png", "(max-width: 600px) 140px, 220px")} alt={t.portraitAlt} width="796" height="761" decoding="async" fetchPriority="high" />
          <span className="portrait-credit">{t.portraitCredit}</span>
        </div>
      </div>
      <div className="hero-actions">
        <InternalLink className="pill-link pill-link--dark" href="/projects" onNavigate={onNavigate}>{t.seeWork} <Icon name="upRight" size={15}/></InternalLink>
        <InternalLink className="pill-link pill-link--outline" href="/writing" onNavigate={onNavigate}>{t.writing} <Icon name="arrow" size={15}/></InternalLink>
        <InternalLink className="pill-link pill-link--outline" href="/contact" onNavigate={onNavigate}>{t.contact} <Icon name="upRight" size={15}/></InternalLink>
      </div>
    </section>
    <section className="editorial-block">
      <div className="section-heading"><span className="number-label">01 / {t.curiosityKicker.toUpperCase()}</span><span className="section-star">✳</span></div>
      <h2>{t.curiosityLine}<br/>{t.curiosityAnd} <em>{t.curiosityEmphasis}</em></h2>
      <p>{t.discover} {t.curiosityBody}</p>
      <div className="ink-divider" />
      <span className="number-label">02 / {t.myWork.toUpperCase()}</span>
      <div className="feature-links">
        {entries.slice(0, 3).map((item, i) => (
          <InternalLink key={item.id} href={`/archive/${item.id}`} onNavigate={onNavigate} item={item} className="feature-link">
            <span className="feature-number">0{i + 1}</span><span>{localizeEntryField(item, 'title', lang)}</span><Icon name="upRight" size={16}/>
          </InternalLink>
        ))}
      </div>
    </section>
    <section className="editorial-block editorial-block--bottom">
      <div className="section-heading"><span className="number-label">03 / {t.readingNext.toUpperCase()}</span></div>
      <h2>{t.libraryLine}<br/>{t.libraryAnd} <em>{t.libraryEmphasis}</em></h2>
      <p>{t.readingBody}</p>
      <InternalLink className="resource-link" href="/writing" onNavigate={onNavigate}>
        <span>{t.writing}</span><span className="resource-link-icon"><Icon name="arrow" size={18}/></span>
      </InternalLink>
    </section>
  </>;
}

function ProjectsView({ t, onNavigate, entries, lang }) {
  const items = entries.filter((e) => !e.sample && ['portfolio-website', 'ecommerce', 'mobile-ui', 'dashboard'].includes(e.id));
  return <section className="inner-view">
    <span className="micro-label">02 / {t.projects.toUpperCase()}</span>
    <h1 className="view-title">{t.projectsTitleLine} <em>{t.projectsTitleEmphasis}</em></h1>
    <p className="view-lede">{t.workLead}</p>
    <div className="project-list">
      {items.map((item, index) => <InternalLink key={item.id} href={`/archive/${item.id}`} onNavigate={onNavigate} item={item} className="project-row">
        <span className="project-row-number">0{index + 1}</span>
        <img {...responsiveImageProps(item.image, "68px")} alt="" width="68" height="68" loading="lazy" decoding="async" />
        <span className="project-row-description"><strong>{localizeEntryField(item, 'title', lang)}</strong><small>{localizeEntryField(item, 'meta', lang)}</small></span>
        <Icon name="upRight" size={18}/>
      </InternalLink>)}
    </div>
    <div className="source-disclosure">{t.sourceBadge}</div>
  </section>;
}

function WritingView({ t, onNavigate, entries, lang, archive }) {
  return <section className="inner-view">
    <span className="micro-label">03 / {t.writing.toUpperCase()}</span>
    <h1 className="view-title">{t.writingTitleLine}<br/><em>{t.writingTitleEmphasis}</em></h1>
    <p className="view-lede">{t.writingLead}</p>
    <img className="editorial-illustration" src="/art/reading.svg" alt={t.writingIllustrationAlt} loading="lazy" decoding="async" />
    <h2 className="subheading">{t.readingTitle}</h2>
    <p className="body-copy">{t.readingBody}</p>
    <div className="writing-resource-list">
      <InternalLink className="resource-link" href="/archive/writing" onNavigate={onNavigate} item={entries.find(e => e.id === 'writing')}>
        <span>{localizeEntryField(entries.find(e => e.id === 'writing'), 'title', lang) || t.writingTitleLine}</span><span className="resource-link-icon"><Icon name="arrow" size={18}/></span>
      </InternalLink>
      <ExternalResourceLink href="https://marwanpgx.substack.com/">Substack</ExternalResourceLink>
    </div>
    <LiteraryExplorer t={t} lang={lang} enabled={!archive} />
  </section>;
}

function ContactView({ t }) {
  return <section className="inner-view contact-view">
    <span className="micro-label">04 / {t.contact.toUpperCase()}</span>
    <h1 className="view-title">{t.contactTitleLine}<br/><em>{t.contactTitleEmphasis}</em></h1>
    <p className="view-lede">{t.reachLead}</p>
    <div className="contact-options">
      <ExternalResourceLink href="https://www.linkedin.com/in/marwan-al-hamdan-a64043331/">LinkedIn</ExternalResourceLink>
      <ExternalResourceLink href="https://marwanpgx.substack.com/">Substack</ExternalResourceLink>
    </div>
    <p className="fine-print">{t.note}</p>
  </section>;
}

function EntryView({ entry, t, lang, onNavigate, archive }) {
  if (!entry) return <section className="inner-view"><h1 className="view-title">{t.notFound}</h1><InternalLink href="/" onNavigate={onNavigate} className="inline-arrow"><Icon name="back" size={18}/> {t.back}</InternalLink></section>;
  const title = localizeEntryField(entry, 'title', lang);
  const summary = localizeEntryField(entry, 'summary', lang);
  return <article className="entry-view inner-view">
    <span className="micro-label">{t.archiveEntryLabel.toUpperCase()} / {localizeEntryField(entry, 'category', lang).toUpperCase()}</span>
    {entry.sample && <div className="sample-alert">{t.sampleBadge}</div>}
    <h1 className="view-title">{title}</h1>
    <p className="view-lede">{summary}</p>
    <figure className="entry-figure">
      <img {...responsiveImageProps(entry.image, "(max-width: 720px) 82vw, 550px")} className="entry-hero-image" alt={localizeImageAlt(entry, lang)} loading="lazy" decoding="async" />
      <figcaption className="entry-caption number-label">{localizeCaption(entry, lang)}</figcaption>
    </figure>
    <p className="body-copy">{localizeEntryField(entry, 'body', lang)}</p>
    {['writing', 'lit-club'].includes(entry.id) && <LiteraryExplorer t={t} lang={lang} enabled={!archive} />}
    {entry.links?.length > 0 && <div className="entry-links">{entry.links.map(link => <ExternalResourceLink key={link.href} href={link.href}>{localizeEntryField(link, 'label', lang)}</ExternalResourceLink>)}</div>}
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
      {pathname === '/' ? <HomeView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
        : pathname === '/projects' ? <ProjectsView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
          : pathname === '/writing' ? <WritingView t={t} onNavigate={onNavigate} entries={entries} lang={lang} archive={archive}/>
            : pathname === '/contact' ? <ContactView t={t}/>
              : <EntryView entry={entry} t={t} lang={lang} onNavigate={onNavigate} archive={archive}/>}
      <footer className="panel-footer">
        <span>© 2026 MARWAN AL-HAMDAN</span><span>{t.footer}</span>
      </footer>
    </main>
  );
}
