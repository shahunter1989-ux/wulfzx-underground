import React from 'react'
import MainWebsite from './MainWebsite'
import { links as sharedLinks } from './content'

const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`
const gamingHistoryPath = `${import.meta.env.BASE_URL}gaming-history/`
const gamingHistoryBackground = assetPath('gaming-history-console-timeline.webp')
const snesHistoryHref = 'https://snes-deploy.vercel.app/'
const survivalScenarioHref = 'https://wzxu-survival-scenario--shahunter1989.replit.app'

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
    id: 'guide',
    title: 'WULFZX Fallout 76 Wasteland Guide',
    description: 'WZXU76.pro',
    href: 'https://wzxu76.pro',
    accent: 'silver',
    image: assetPath('wzxu76-guide-hub-icon.webp'),
    imageAlt: 'WZXU76 Fallout 76 guide flag artwork',
  },
  {
    id: 'fallout76-instagram',
    title: 'WZXU76 Instagram',
    description: 'Fallout 76 gaming updates and community content.',
    href: sharedLinks.fallout76Instagram,
    accent: 'social',
    Icon: InstagramIcon,
  },
  {
    id: 'fallout76-youtube',
    title: 'WZXU76 YouTube',
    description: 'Fallout 76 videos and updates.',
    href: sharedLinks.fallout76Youtube,
    accent: 'social',
    image: assetPath('wulfzx-youtube-opt.webp'),
    imageAlt: 'WZXU76 Fallout 76 YouTube icon',
  },
  {
    id: 'field-guide',
    title: 'WULFZX Wasteland Field Guide',
    description: 'A friendly field version powered by WZXU76.',
    href: 'https://wulfzx-field-guide.vercel.app/',
    accent: 'field-guide',
    image: assetPath('wulfzx-wasteland-field-guide-hub-icon.png'),
    imageAlt: 'WULFZX Wasteland Field Guide map artwork',
  },
  {
    id: 'duck-nuke',
    title: 'Duck Duck Nuke',
    description: 'Wasteland arcade game by Wulfzx.Underground.',
    href: 'https://shahunter1989-ux.github.io/duck-duck-nuke/?v=launch-check',
    accent: 'duck',
    image: assetPath('duck-duck-nuke-hub-icon.webp'),
    imageAlt: 'Duck Duck Nuke arcade game preview',
  },
  {
    id: 'survival-scenario',
    title: 'WZXU Nuclear Survival Scenario',
    description: 'When the sirens hit, make the call: test your nuclear survival instincts in a fast WZXU emergency scenario.',
    href: survivalScenarioHref,
    accent: 'survival',
    featured: true,
    Icon: SurvivalScenarioIcon,
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
    id: 'xeno3',
    title: 'Dragon Ball Xenoverse 3 Fan Hub',
    description: 'Fan-made Xenoverse 3 information hub.',
    href: 'https://wzxuxeno3.vercel.app/',
    accent: 'xeno',
    featured: true,
    image: assetPath('xeno3-fan-hub-logo.webp'),
    imageAlt: 'Dragon Ball Xenoverse 3 fan hub logo artwork',
  },
  {
    id: 'gaming-history',
    title: 'Gaming History',
    description: 'Explore the SNES era with console history, hardware notes, iconic games, and retro gaming legacy.',
    href: gamingHistoryPath,
    accent: 'history',
    featured: true,
    isInternal: true,
    Icon: GamingHistoryIcon,
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
    title: 'WZXU76 Discord',
    description: 'Join the Fallout 76 community server.',
    href: sharedLinks.fallout76Discord,
    accent: 'blue',
    image: assetPath('business-card-discord-opt.webp'),
    imageAlt: 'WZXU76 Fallout 76 Discord icon',
  },
]

function App() {
  const basePath = import.meta.env.BASE_URL
  const currentPath = window.location.pathname
  const gamingHistoryRoot = `${basePath}gaming-history`
  const isMainWebsiteRoute = currentPath.startsWith(`${basePath}main/`)
  const isGamingHistoryRoute = currentPath === gamingHistoryRoot || currentPath.startsWith(`${gamingHistoryRoot}/`)

  if (isMainWebsiteRoute) {
    return <MainWebsite />
  }

  if (isGamingHistoryRoute) {
    return <GamingHistoryPage />
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

function GamingHistoryPage() {
  return (
    <main
      className="business-card-page gaming-history-page"
      style={{ '--gaming-history-bg': `url("${gamingHistoryBackground}")` }}
      aria-labelledby="gaming-history-title"
    >
      <h1 className="sr-only" id="gaming-history-title">
        Gaming History
      </h1>
      <a className="gaming-history-back" href={import.meta.env.BASE_URL} aria-label="Back to hub">
        <span aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </span>
      </a>
      <a
        className="gaming-history-hotspot gaming-history-hotspot-snes"
        href={snesHistoryHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Open the Super Nintendo history page"
      >
        <span aria-hidden="true">SNES</span>
      </a>
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

function TikTokIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Custom cyber social video icon">
      <path className="social-note-main" d="M38 10v27.5c0 8-6.2 14.5-14.2 14.5S10 46.4 10 39.3 15.9 26 23.6 26c1.5 0 2.9.2 4.2.7v9.8a6 6 0 1 0 2.2 4.6V10z" />
      <path className="social-note-signal" d="M38 10c2.4 7.3 7.4 12.2 16 12.9v10.3c-6.9-.1-12.1-2.3-16-6" />
      <path className="social-note-sparks" d="M17 18h7M12 23h4M48 41h5M42 47h8" />
    </svg>
  )
}

function GamingHistoryIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Retro gaming history console icon">
      <path className="history-console-shell" d="M12 18h40c3 0 5 2 5 5v18c0 3-2 5-5 5H12c-3 0-5-2-5-5V23c0-3 2-5 5-5z" />
      <path className="history-cartridge" d="M23 12h18v12H23z" />
      <path className="history-dpad" d="M18 29h12M24 23v12" />
      <path className="history-buttons" d="M41 29h.1M49 34h.1" />
      <path className="history-signal" d="M16 51h32M22 56h20" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Instagram icon">
      <rect x="11" y="11" width="42" height="42" rx="12" />
      <circle cx="32" cy="32" r="10" />
      <circle cx="44" cy="20" r="2.5" />
    </svg>
  )
}

function SurvivalScenarioIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Nuclear survival scenario icon">
      <path className="survival-warning-frame" d="M32 8l26 46H6L32 8z" />
      <path className="survival-warning-core" d="M32 20v15" />
      <path className="survival-warning-dot" d="M32 44h.1" />
      <path className="survival-radar-ring" d="M20 50a16 16 0 0 1 24 0" />
      <path className="survival-radar-sweep" d="M32 50l11-11" />
    </svg>
  )
}

export default App
