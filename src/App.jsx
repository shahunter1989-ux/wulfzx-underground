import React from 'react'
import { connectLinks, featureTiles, gameCards, navItems } from './content'

const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`

function App() {
  return (
    <div className="site-shell">
      <CircuitLayer />
      <div className="dashboard-frame">
        <Header />
        <main>
          <HeroDashboard />
          <FeatureTiles />
          <GamesShowcase />
          <ConnectStrip />
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

function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="WULFZX home">
        <img src={assetPath('wulfzx-brand.png')} alt="" aria-hidden="true" />
        <span>
          WULFZX
          <small>Underground</small>
        </span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#connect">
        Contact Me
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
          Explore My Work
        </a>
        <a className="button button-secondary" href="#games">
          See What I Do
        </a>
      </div>
    </section>
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
      <h2>{tile.title}</h2>
      <div className="tile-body">
        <TileVisual tile={tile} />
        <p>{tile.description}</p>
      </div>
      <span className="tile-cta">{isPlaceholder ? 'Coming Soon' : tile.cta}</span>
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
        <h2 id="games-heading">Three Games. One Vision.</h2>
        <span />
      </div>
      <div className="game-card-grid">
        {gameCards.map((game) => (
          <a className="game-card" key={game.title} href={game.href} target="_blank" rel="noreferrer">
            <div className="game-media">
              <img src={game.image} alt={game.imageAlt} loading="lazy" />
            </div>
            <div className="game-copy">
              <h3>{game.title}</h3>
              <small>{game.meta}</small>
              <p>{game.description}</p>
              <span>Play Now</span>
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
        <h2 id="connect-heading">Connect</h2>
        <span />
      </div>
      <div className="connect-row">
        <div className="connect-intro">
          <p>Let&apos;s build the future.</p>
          <p>I&apos;m always open to new ideas, collabs, reports, and opportunities.</p>
        </div>
        <div className="connect-links">
          {connectLinks.map((link) => (
            <a key={link.title} href={link.href} target="_blank" rel="noreferrer">
              <span className="connect-symbol" aria-hidden="true">
                {link.symbol}
              </span>
              <span>
                <strong>{link.title}</strong>
                <small>{link.status}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default App
