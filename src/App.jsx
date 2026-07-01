import React from 'react'
import MainWebsite from './MainWebsite'

const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`

const links = [
  {
    id: 'official',
    title: 'Official Website',
    description: 'Main Wulfzx.Underground official website.',
    href: `${import.meta.env.BASE_URL}main/`,
    accent: 'blue',
    isInternal: true,
    Icon: WebsiteIcon,
  },
  {
    id: 'gta-countdown',
    title: 'GTA VI Countdown',
    description: 'Grand Theft Auto VI countdown timer.',
    href: 'https://gta-vi-countdown-sable.vercel.app/',
    accent: 'gta',
    featured: true,
    image: assetPath('gta-vi-countdown-icon.jpg'),
    imageAlt: 'Neon VI icon for the GTA VI countdown timer',
  },
  {
    id: 'guide',
    title: 'WULFZX Fallout 76 Wasteland Guide',
    description: 'External Link',
    href: 'https://wzxu76.pro',
    accent: 'silver',
    Icon: WastelandIcon,
  },
  {
    id: 'cashapp',
    title: 'Cash App',
    description: 'Support Wulfzx.Underground.',
    href: 'https://cash.app/$wulfzx',
    accent: 'green',
    image: assetPath('business-card-cashapp-opt.webp'),
    imageAlt: 'Wulfzx.Underground Cash App themed icon',
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    description: 'Follow Wulfzx on TikTok.',
    href: 'https://www.tiktok.com/@wulfzx',
    accent: 'social',
    Icon: TikTokIcon,
  },
  {
    id: 'discord',
    title: 'Discord',
    description: 'Join the Wulfzx.Underground community.',
    href: 'https://discord.com/invite/dRpQjcEj',
    accent: 'blue',
    image: assetPath('business-card-discord-opt.webp'),
    imageAlt: 'Wulfzx.Underground Discord themed icon',
  },
]

function App() {
  const basePath = import.meta.env.BASE_URL
  const currentPath = window.location.pathname
  const guideRoot = `${basePath}wasteland-companion-guide-app`
  const isMainWebsiteRoute = currentPath.startsWith(`${basePath}main/`)

  const isGuideRoute = currentPath === guideRoot || currentPath.startsWith(`${guideRoot}/`)
  const isGuideIndex = currentPath.endsWith('/index.html')
  const hasFileExtension = /\.[^/]+$/.test(currentPath)

  if (isGuideRoute && !isGuideIndex && !hasFileExtension) {
    const staticGuidePath = currentPath.endsWith('/') ? `${currentPath}index.html` : `${currentPath}/index.html`
    window.location.replace(`${staticGuidePath}${window.location.search}${window.location.hash}`)
    return null
  }

  if (isMainWebsiteRoute) {
    return <MainWebsite />
  }

  return <HubPage />
}

function HubPage() {
  return (
    <main className="business-card-page" aria-labelledby="brand-title">
      <CircuitBackdrop />
      <div className="hub-content">
        <section className="link-hub-card" aria-label="Wulfzx.Underground premium digital business card demo">
          <header className="brand-hero">
            <div className="logo-frame">
              <img
                src={assetPath('business-card-wulfzx-logo-opt.webp')}
                alt="Wulfzx.Underground cybernetic wolf logo"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="brand-copy">
              <h1 id="brand-title">Wulfzx.Underground</h1>
              <p className="subtitle">Premium Digital Business Card</p>
              <p className="tagline">Your Brand. Your Links. One Professional Hub.</p>
            </div>
          </header>

          <nav className="link-stack" aria-label="Wulfzx.Underground links">
            {links.map((link) => (
              <LinkButton key={link.title} link={link} />
            ))}
          </nav>

          <footer className="card-footer">
            <p>Powered by Wulfzx.Underground</p>
            <p>Premium Digital Business Card Demo</p>
          </footer>
        </section>

        <div className="scroll-cue" aria-hidden="true">
          <span />
        </div>

        <MediaPreview />
      </div>
    </main>
  )
}

function MediaPreview() {
  const [isVideoActive, setIsVideoActive] = React.useState(false)

  return (
    <section className="media-preview" aria-labelledby="media-preview-title">
      <div className="media-preview-copy">
        <p>Featured Signal</p>
        <h2 id="media-preview-title">Wulfzx.Underground Preview</h2>
      </div>
      <div className="video-shell">
        {isVideoActive ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/tHeIOBE9_QM?autoplay=1"
            title="Wulfzx.Underground YouTube preview"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            className="video-preview-button"
            type="button"
            aria-label="Play Wulfzx.Underground YouTube preview"
            onClick={() => setIsVideoActive(true)}
          >
            <img
              src="https://i.ytimg.com/vi/tHeIOBE9_QM/maxresdefault.jpg"
              alt=""
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <span className="video-play-core" aria-hidden="true">
              <svg viewBox="0 0 64 64" focusable="false">
                <path d="M25 19l22 13-22 13z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </section>
  )
}

function CircuitBackdrop() {
  return (
    <div className="circuit-backdrop" aria-hidden="true">
      <div className="backdrop-image" />
      <div className="circuit-grid" />
      <div className="pulse-line pulse-line-a" />
      <div className="pulse-line pulse-line-b" />
      <div className="pulse-line pulse-line-c" />
      <div className="hub-circuit-node hub-circuit-node-a" />
      <div className="hub-circuit-node hub-circuit-node-b" />
      <div className="hub-circuit-node hub-circuit-node-c" />
      <div className="hub-circuit-node hub-circuit-node-d" />
      <div className="scan-ring" />
    </div>
  )
}

function LinkButton({ link }) {
  const Icon = link.Icon

  return (
    <a
      className={`link-button link-button-${link.accent} link-${link.id}${link.featured ? ' link-button-featured' : ''}`}
      href={link.href}
      target={link.isInternal ? undefined : '_blank'}
      rel={link.isInternal ? undefined : 'noreferrer'}
      aria-label={`${link.title}: ${link.description}`}
    >
      <span className="link-icon">
        {link.image ? <img src={link.image} alt={link.imageAlt} loading="lazy" decoding="async" /> : <Icon />}
      </span>
      <span className="link-copy">
        <strong>{link.title}</strong>
        <span>{link.description}</span>
      </span>
      <span className="link-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M8 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  )
}

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Metallic website globe icon">
      <circle className="website-globe-shell" cx="32" cy="32" r="23" />
      <path className="website-globe-equator" d="M9 32h46M15 20h34M15 44h34" />
      <path className="website-globe-meridians" d="M32 9c7 7 10 15 10 23S39 48 32 55M32 9c-7 7-10 15-10 23s3 16 10 23" />
    </svg>
  )
}

function WastelandIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Custom wasteland tech guide icon">
      <path className="guide-page-back" d="M15 11h26l8 8v34H15z" />
      <path className="guide-page-turn" d="M40 12l9 8v31H28c6-7 9-17 12-39z" />
      <path className="guide-page-lines" d="M41 11v10h10M22 28h20M22 36h15" />
      <path className="guide-wasteland-mark" d="M20 50l7-8 6 5 8-11 6 14" />
      <circle className="guide-node" cx="47" cy="48" r="4" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Custom cyber social video icon">
      <path className="social-note-main" d="M38 10v27.5c0 8-6.2 14.5-14.2 14.5S10 46.4 10 39.3 15.9 26 23.6 26c1.5 0 2.9.2 4.2.7v9.8a6 6 0 1 0 2.2 4.6V10z" />
      <path className="social-note-signal" d="M38 10c2.4 7.3 7.4 12.2 16 12.9v10.3c-6.9-.1-12.1-2.3-16-6" />
      <path className="social-note-sparks" d="M17 18h7M12 23h4M48 41h5M42 47h8" />
    </svg>
  )
}

export default App
