import React from 'react'
import { connectLinks, featureTiles, gameCards, links, navItems, whatIDoSections } from './content'

const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`
const homePath = import.meta.env.BASE_URL
const whatIDoPath = `${homePath}what-i-do/`
const contactPath = `${homePath}contact/`
const fxClasses = ['text-fx-drift-x', 'text-fx-drift-y', 'text-fx-static', 'text-fx-glow', 'text-fx-still']

function AnimatedText({ text, className = '' }) {
  const words = String(text).split(/(\s+)/)
  let charIndex = 0

  return (
    <span className={`text-fx ${className}`.trim()} aria-label={text}>
      {words.map((word, wordIndex) => {
        if (/^\s+$/.test(word)) {
          return (
            <span className="text-fx-space" aria-hidden="true" key={`space-${wordIndex}`}>
              {word}
            </span>
          )
        }

        return (
          <span className="text-fx-word" aria-hidden="true" key={`${word}-${wordIndex}`}>
            {[...word].map((char) => {
              const currentIndex = charIndex
              const className = fxClasses[(char.charCodeAt(0) + currentIndex) % fxClasses.length]
              charIndex += 1

              return (
                <span
                  className={`text-fx-char ${className}`}
                  style={{ '--fx-delay': `${(currentIndex % 9) * -0.17}s` }}
                  key={`${char}-${currentIndex}`}
                >
                  {char}
                </span>
              )
            })}
          </span>
        )
      })}
    </span>
  )
}

function App() {
  const isWhatIDoPage = window.location.pathname.startsWith(whatIDoPath)
  const isContactPage = window.location.pathname.startsWith(contactPath)
  const page = isContactPage ? 'contact' : isWhatIDoPage ? 'what-i-do' : 'home'

  return (
    <div className="site-shell">
      <CircuitLayer />
      <div className="dashboard-frame">
        <Header page={page} />
        <main>
          {isContactPage ? (
            <ContactPage />
          ) : isWhatIDoPage ? (
            <WhatIDoPage />
          ) : (
            <>
              <HeroDashboard />
              <FeatureTiles />
              <GamesShowcase />
              <ConnectStrip />
              <WelcomeSection />
            </>
          )}
        </main>
      </div>
    </div>
  )
}

function CircuitLayer() {
  return (
    <div className="circuit-layer" aria-hidden="true">
      <span className="circuit-line circuit-line-a" />
      <span className="circuit-line circuit-line-b" />
      <span className="circuit-line circuit-line-c" />
      <span className="circuit-node circuit-node-a" />
      <span className="circuit-node circuit-node-b" />
    </div>
  )
}

function Header({ page = 'home' }) {
  const isSubPage = page !== 'home'
  const navHref = (href) => (isSubPage && href.startsWith('#') ? `${homePath}${href}` : href)

  return (
    <header className="site-header">
      <a className="brand-lockup" href={isSubPage ? homePath : '#top'} aria-label="WULFZX home">
        <img src={assetPath('wulfzx-brand.png')} alt="" aria-hidden="true" />
        <span>
          <AnimatedText text="WULFZX" />
          <small>
            <AnimatedText text="Underground" />
          </small>
        </span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={navHref(item.href)}>
            <AnimatedText text={item.label} />
          </a>
        ))}
      </nav>
      <a className="header-cta" href={contactPath}>
        <AnimatedText text="Contact Me" />
      </a>
    </header>
  )
}

function HeroDashboard() {
  return (
    <section className="hero-dashboard" id="top" aria-labelledby="hero-title">
      <h1 className="sr-only" id="hero-title">
        WULFZX Underground
      </h1>
      <img
        className="hero-banner"
        src={assetPath('wulfzx-hero-banner.png')}
        alt="WULFZX Underground AI Company banner with metallic wolf artwork"
      />
      <div className="hero-actions" aria-label="Primary actions">
        <a className="button button-primary" href="#linktree">
          <AnimatedText text="Explore My Work" />
        </a>
        <a className="button button-secondary" href={whatIDoPath}>
          <AnimatedText text="See What I Do" />
        </a>
      </div>
    </section>
  )
}

function WhatIDoPage() {
  return (
    <section className="what-page" aria-labelledby="what-page-title">
      <div className="what-hero">
        <div>
          <h1 id="what-page-title">
            <AnimatedText text="What I Do" />
          </h1>
          <p>
            WULFZX Underground builds custom AI-assisted projects, games, guides, websites, apps, QA tools, and
            community-focused experiences. These are the early examples of a growing ecosystem built to expand,
            learn, connect people, and create more over time.
          </p>
        </div>
        <a className="button button-secondary what-back" href={homePath}>
          <AnimatedText text="Back Home" />
        </a>
      </div>

      <div className="what-section-stack">
        {whatIDoSections.map((section) => (
          <WhatIDoSection key={section.title} section={section} />
        ))}
      </div>

      <div className="what-action-row" aria-label="What I Do actions">
        <a className="button button-primary" href={homePath}>
          <AnimatedText text="Back Home" />
        </a>
        <a className="button button-secondary" href={`${homePath}#connect`}>
          <AnimatedText text="Connect" />
        </a>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="contact-page" aria-labelledby="contact-page-title">
      <div className="what-hero contact-page-hero">
        <div>
          <h1 id="contact-page-title">
            <AnimatedText text="Contact Me" />
          </h1>
          <p>
            Send a project inquiry, AI idea, business website request, community collaboration note, or general
            feedback directly to WULFZX Underground.
          </p>
        </div>
        <a className="button button-secondary what-back" href={homePath}>
          <AnimatedText text="Back Home" />
        </a>
      </div>
      <div className="contact-page-body">
        <ContactForm />
      </div>
    </section>
  )
}

function WhatIDoSection({ section }) {
  return (
    <section className="what-section" aria-labelledby={`what-${section.title.replace(/\W+/g, '-').toLowerCase()}`}>
      <div className="section-rule">
        <span />
        <h2 id={`what-${section.title.replace(/\W+/g, '-').toLowerCase()}`}>
          <AnimatedText text={section.title} />
        </h2>
        <span />
      </div>
      <p className="what-section-intro">{section.intro}</p>
      <div className="what-card-grid">
        {section.cards.map((card) => (
          <WhatIDoCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  )
}

function WhatIDoCard({ card }) {
  const isPlaceholder = card.href === '#'
  const content = (
    <>
      {card.image ? (
        <span className="what-card-media">
          <img src={card.image} alt={card.imageAlt} loading="lazy" />
        </span>
      ) : (
        <span className="what-card-symbol" aria-hidden="true">
          <AnimatedText text={card.category.slice(0, 2)} />
        </span>
      )}
      <span className="what-card-copy">
        <small>
          <AnimatedText text={card.category} />
        </small>
        <strong>
          <AnimatedText text={card.title} />
        </strong>
        <span>{card.description}</span>
        <em>
          <AnimatedText text={card.status || (isPlaceholder ? 'Coming Soon' : 'Open link')} />
        </em>
      </span>
    </>
  )

  if (isPlaceholder) {
    return (
      <article className="what-card what-card-disabled" aria-disabled="true">
        {content}
      </article>
    )
  }

  return (
    <a className="what-card" href={card.href} target="_blank" rel="noreferrer">
      {content}
    </a>
  )
}

function FeatureTiles() {
  return (
    <section className="feature-tiles" aria-label="WULFZX project areas">
      {featureTiles.map((tile) => (
        <FeatureTile key={tile.title} tile={tile} />
      ))}
    </section>
  )
}

function FeatureTile({ tile }) {
  const isPlaceholder = tile.href === '#'
  const isInternal = tile.href.startsWith('#')
  const tileId = tile.id === 'games' ? undefined : tile.id
  const className = `feature-tile ${tile.variant ? `feature-tile-${tile.variant}` : ''} ${
    isPlaceholder ? 'feature-tile-disabled' : ''
  }`
  const content = (
    <>
      <div className="tile-bracket" aria-hidden="true" />
      <h2>
        <AnimatedText text={tile.title} />
      </h2>
      <div className="tile-body">
        <TileVisual tile={tile} />
        <p>{tile.description}</p>
      </div>
      <span className="tile-cta">
        <AnimatedText text={isPlaceholder ? 'Coming Soon' : tile.cta} />
      </span>
    </>
  )

  if (isPlaceholder) {
    return (
      <article className={className} id={tileId}>
        {content}
      </article>
    )
  }

  return (
    <a
      className={className}
      id={tileId}
      href={tile.href}
      target={isInternal ? undefined : '_blank'}
      rel={isInternal ? undefined : 'noreferrer'}
    >
      {content}
    </a>
  )
}

function TileVisual({ tile }) {
  if (tile.image) {
    return (
      <span className="tile-visual tile-visual-image">
        <img src={tile.image} alt={tile.imageAlt} loading="lazy" />
      </span>
    )
  }

  return (
    <span className="tile-visual" aria-hidden="true">
      {tile.symbol}
    </span>
  )
}

function GamesShowcase() {
  return (
    <section className="games-showcase" id="games" aria-labelledby="games-heading">
      <div className="section-rule">
        <span />
        <h2 id="games-heading">
          <AnimatedText text="Three Games. One Vision." />
        </h2>
        <span />
      </div>
      <div className="game-card-grid">
        {gameCards.map((game) => (
          <a className="game-card" key={game.title} href={game.href} target="_blank" rel="noreferrer">
            <div className="game-media">
              <img src={game.image} alt={game.imageAlt} loading="lazy" />
            </div>
            <div className="game-copy">
              <h3>
                <AnimatedText text={game.title} />
              </h3>
              <small>{game.meta}</small>
              <p>{game.description}</p>
              <span className="game-cta">
                <AnimatedText text="Play Now" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function ConnectStrip() {
  return (
    <section className="connect-strip" id="connect" aria-labelledby="connect-heading">
      <div className="section-rule">
        <span />
        <h2 id="connect-heading">
          <AnimatedText text="Connect" />
        </h2>
        <span />
      </div>
      <div className="connect-row">
        <div className="connect-intro">
          <p>Let&apos;s build the future.</p>
          <p>I&apos;m always open to new ideas, collabs, reports, and opportunities.</p>
          <a className="button button-secondary connect-message-cta" href={contactPath}>
            <AnimatedText text="Send Message" />
          </a>
        </div>
        <div className="connect-links">
          {connectLinks.map((link) => (
            <a key={link.title} href={link.href} target="_blank" rel="noreferrer">
              <span className={`connect-symbol ${link.image ? 'connect-symbol-image' : ''}`} aria-hidden="true">
                {link.image ? <img src={link.image} alt="" loading="lazy" /> : <AnimatedText text={link.symbol} />}
              </span>
              <span>
                <strong>
                  <AnimatedText text={link.title} />
                </strong>
                <small>{link.status}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function WelcomeSection() {
  return (
    <section className="welcome-section" aria-labelledby="welcome-heading">
      <div className="section-rule">
        <span />
        <h2 id="welcome-heading">
          <AnimatedText text="About Me / Welcome Message" />
        </h2>
        <span />
      </div>
      <div className="welcome-frame">
        <img
          src={assetPath('wulfzx-welcome-message.png')}
          alt="WULFZX Underground about me and welcome message artwork"
          loading="lazy"
        />
      </div>
    </section>
  )
}

function ContactForm() {
  const [contactForm, setContactForm] = React.useState({
    name: '',
    replyEmail: '',
    topic: 'AI project inquiry',
    message: '',
  })

  const mailtoHref = buildMailtoHref(contactForm)

  const updateContactField = (event) => {
    const { name, value } = event.target
    setContactForm((current) => ({ ...current, [name]: value }))
  }

  return (
    <form className="contact-panel" id="contact-form" onSubmit={(event) => event.preventDefault()}>
      <div className="contact-panel-heading">
        <h3>
          <AnimatedText text="Send A Message" />
        </h3>
        <p>Project inquiries, AI ideas, business websites, community feedback, or general questions.</p>
      </div>
      <label>
        <span>Name</span>
        <input
          name="name"
          type="text"
          value={contactForm.name}
          onChange={updateContactField}
          placeholder="Your name"
          autoComplete="name"
        />
      </label>
      <label>
        <span>Your Email</span>
        <input
          name="replyEmail"
          type="email"
          value={contactForm.replyEmail}
          onChange={updateContactField}
          placeholder="your@email.com"
          autoComplete="email"
        />
      </label>
      <label>
        <span>Topic</span>
        <select name="topic" value={contactForm.topic} onChange={updateContactField}>
          <option>AI project inquiry</option>
          <option>Business website</option>
          <option>Game or guide feedback</option>
          <option>Community collaboration</option>
          <option>General message</option>
        </select>
      </label>
      <label className="contact-message">
        <span>Message</span>
        <textarea
          name="message"
          value={contactForm.message}
          onChange={updateContactField}
          placeholder="Tell me what you want to build, ask, or share."
          rows="5"
        />
      </label>
      <a className="button button-primary contact-submit" href={mailtoHref}>
        <AnimatedText text="Open Email" />
      </a>
      <small>Opens your email app and sends to {links.email}.</small>
    </form>
  )
}

function buildMailtoHref({ name, replyEmail, topic, message }) {
  const subject = `WULFZX Underground - ${topic || 'New inquiry'}`
  const body = [
    `Topic: ${topic || 'New inquiry'}`,
    `Name: ${name || ''}`,
    `Reply email: ${replyEmail || ''}`,
    '',
    'Message:',
    message || '',
  ].join('\n')

  return `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default App
