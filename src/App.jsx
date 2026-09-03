import React from 'react'
import MainWebsite from './MainWebsite'
import { links as sharedLinks } from './content'
import PrivacyPolicyPage from './PrivacyPolicyPage'
import SellerInventoryPrivacyPage from './SellerInventoryPrivacyPage'

const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`
const gamingHistoryPath = `${import.meta.env.BASE_URL}gaming-history/`
const gamingHistoryBackground = assetPath('gaming-history-console-timeline.webp')
const snesHistoryHref = 'https://snes-deploy.vercel.app/'
const dayRangeInstructions = [
  { title: 'Storage and Home Screen', image: assetPath('dayrange-storage-home.png') },
  { title: 'DayRange Overview', image: assetPath('dayrange-instructions-cover.png') },
  { title: 'Today', image: assetPath('dayrange-today.png') },
  { title: 'Add a Reading', image: assetPath('dayrange-add-reading.png') },
  { title: 'Insights', image: assetPath('dayrange-insights.png') },
  { title: 'Reports', image: assetPath('dayrange-reports.png') },
  { title: 'Profile', image: assetPath('dayrange-profile.png') },
]
const categoryOrder = ['Featured', 'Apps & Tools', 'Gaming', 'Fallout 76', 'Social', 'Support']

const links = [
  {
    id: 'official',
    category: 'Featured',
    title: 'Official Website',
    description: 'Main Wulfzx.Underground official website.',
    href: `${import.meta.env.BASE_URL}main/`,
    accent: 'blue',
    isInternal: true,
    Icon: WebsiteIcon,
  },
  {
    id: 'featured-guide',
    category: 'Featured',
    title: 'WULFZX Fallout 76 Wasteland Guide',
    description: 'WZXU76.pro',
    href: 'https://wzxu76.pro',
    accent: 'silver',
    image: assetPath('wzxu76-guide-hub-icon.webp'),
    imageAlt: 'WZXU76 Fallout 76 guide flag artwork',
  },
  {
    id: 'magic-8-ball',
    category: 'Featured',
    title: 'WZXU Magic 8-Ball',
    description: 'Ask a question and let the WZXU Magic 8-Ball reveal your answer.',
    href: sharedLinks.magic8Ball,
    accent: 'social',
    image: assetPath('wzxu-magic-8-ball.png'),
    imageAlt: 'WZXU Magic 8-Ball app artwork',
  },
  {
    id: 'guide',
    category: 'Fallout 76',
    title: 'WULFZX Fallout 76 Wasteland Guide',
    description: 'WZXU76.pro',
    href: 'https://wzxu76.pro',
    accent: 'silver',
    image: assetPath('wzxu76-guide-hub-icon.webp'),
    imageAlt: 'WZXU76 Fallout 76 guide flag artwork',
  },
  {
    id: 'dayrange',
    category: 'Apps & Tools',
    title: 'DayRange by WZXU',
    description: 'Private glucose tracking and organization app.',
    href: 'https://wzxu-coder.github.io/dayrange/',
    accent: 'dayrange',
    image: assetPath('dayrange-cover.png'),
    imageAlt: 'DayRange by WZXU app logo',
    howTo: true,
  },
  {
    id: 'invoice-maker',
    category: 'Apps & Tools',
    title: 'WZXU Invoice Maker',
    description: 'Create professional invoices quickly and easily.',
    href: sharedLinks.invoiceMaker,
    accent: 'dayrange',
    image: sharedLinks.invoiceMakerImage,
    imageAlt: 'WZXU Invoice Maker professional invoice artwork',
  },
  {
    id: 'seller-inventory',
    category: 'Apps & Tools',
    title: 'WZXU Seller Inventory',
    description: 'Organize and manage seller inventory with a focused WZXU business tool.',
    href: sharedLinks.sellerInventory,
    accent: 'dayrange',
    image: sharedLinks.sellerInventoryImage,
    imageAlt: 'WZXU Seller Inventory app icon',
  },
  {
    id: 'qr-code-maker',
    category: 'Apps & Tools',
    title: 'WZXU QR Code Maker',
    description: 'Create, customize, scan, and save private QR codes in your browser.',
    href: sharedLinks.qrCodeMaker,
    accent: 'dayrange',
    image: sharedLinks.qrCodeMakerIcon,
    imageAlt: 'WZXU QR Code Maker icon',
  },
  {
    id: 'fallout76-instagram',
    category: 'Fallout 76',
    title: 'WZXU76 Instagram',
    description: 'Fallout 76 gaming updates and community content.',
    href: sharedLinks.fallout76Instagram,
    accent: 'social',
    Icon: InstagramIcon,
  },
  {
    id: 'fallout76-youtube',
    category: 'Fallout 76',
    title: 'WZXU76 YouTube',
    description: 'Fallout 76 videos and updates.',
    href: sharedLinks.fallout76Youtube,
    accent: 'social',
    image: assetPath('wulfzx-youtube-opt.webp'),
    imageAlt: 'WZXU76 Fallout 76 YouTube icon',
  },
  {
    id: 'duck-nuke',
    category: 'Gaming',
    title: 'Duck Duck Nuke',
    description: 'Wasteland arcade game by Wulfzx.Underground.',
    href: 'https://shahunter1989-ux.github.io/duck-duck-nuke/?v=launch-check',
    accent: 'duck',
    image: assetPath('duck-duck-nuke-hub-icon.webp'),
    imageAlt: 'Duck Duck Nuke arcade game preview',
  },
  {
    id: 'gta-countdown',
    category: 'Gaming',
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
    category: 'Gaming',
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
    category: 'Gaming',
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
    category: 'Support',
    title: 'Cash App',
    description: 'Support Wulfzx.Underground.',
    href: 'https://cash.app/$wulfzx',
    accent: 'green',
    image: assetPath('business-card-cashapp-opt.webp'),
    imageAlt: 'Wulfzx.Underground Cash App themed icon',
  },
  {
    id: 'tiktok',
    category: 'Social',
    title: 'TikTok',
    description: 'Follow Wulfzx on TikTok.',
    href: 'https://www.tiktok.com/@wulfzx',
    accent: 'social',
    Icon: TikTokIcon,
  },
  {
    id: 'discord',
    category: 'Fallout 76',
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
  const isPrivacyRoute = currentPath === `${basePath}privacy` || currentPath === `${basePath}privacy/`
  const isSellerInventoryPrivacyRoute = currentPath === `${basePath}privacy/wzxu-seller-inventory` || currentPath === `${basePath}privacy/wzxu-seller-inventory/`
  const gamingHistoryRoot = `${basePath}gaming-history`
  const isMainWebsiteRoute = currentPath.startsWith(`${basePath}main/`)
  const isGamingHistoryRoute = currentPath === gamingHistoryRoot || currentPath.startsWith(`${gamingHistoryRoot}/`)

  if (isPrivacyRoute) {
    return <PrivacyPolicyPage />
  }
  if (isSellerInventoryPrivacyRoute) {
    return <SellerInventoryPrivacyPage />
  }

  if (isMainWebsiteRoute) {
    return <MainWebsite />
  }

  if (isGamingHistoryRoute) {
    return <GamingHistoryPage />
  }

  return <HubPage />
}

function HubPage() {
  const [isDayRangeGuideOpen, setIsDayRangeGuideOpen] = React.useState(false)
  const groupedLinks = categoryOrder.map((category) => ({
    category,
    links: links.filter((link) => link.category === category),
  }))

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

          <nav className="link-sections" aria-label="Wulfzx.Underground links">
            {groupedLinks.map(({ category, links: categoryLinks }) => (
              <section className="link-section" key={category} aria-labelledby={`link-section-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                <h2 id={`link-section-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{category}</h2>
                <div className="link-stack">
                  {categoryLinks.map((link) => (
                    <LinkButton key={link.title} link={link} onHowTo={() => setIsDayRangeGuideOpen(true)} />
                  ))}
                </div>
              </section>
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
      {isDayRangeGuideOpen ? (
        <InstructionViewer instructions={dayRangeInstructions} onClose={() => setIsDayRangeGuideOpen(false)} />
      ) : null}
    </main>
  )
}

function InstructionViewer({ instructions, onClose }) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const activeInstruction = instructions[activeIndex]

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + instructions.length) % instructions.length)
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % instructions.length)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [instructions.length, onClose])

  return (
    <div className="instruction-viewer" role="dialog" aria-modal="true" aria-labelledby="instruction-viewer-title">
      <div className="instruction-viewer-backdrop" onClick={onClose} />
      <section className="instruction-viewer-panel">
        <header className="instruction-viewer-header">
          <div>
            <p>DayRange by WZXU</p>
            <h2 id="instruction-viewer-title">How to Use DayRange</h2>
          </div>
          <button className="instruction-viewer-close" type="button" onClick={onClose} aria-label="Close instructions">
            ×
          </button>
        </header>
        <div className="instruction-viewer-image-wrap">
          <img src={activeInstruction.image} alt={`${activeInstruction.title} DayRange instruction`} />
        </div>
        <div className="instruction-viewer-controls">
          <button type="button" onClick={() => setActiveIndex((index) => (index - 1 + instructions.length) % instructions.length)}>
            Previous
          </button>
          <span>{activeInstruction.title} · {activeIndex + 1} of {instructions.length}</span>
          <button type="button" onClick={() => setActiveIndex((index) => (index + 1) % instructions.length)}>
            Next
          </button>
        </div>
        <div className="instruction-viewer-thumbnails" aria-label="Choose an instruction page">
          {instructions.map((instruction, index) => (
            <button
              key={instruction.image}
              className={index === activeIndex ? 'is-active' : ''}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${instruction.title} instructions`}
            >
              <img src={instruction.image} alt="" />
            </button>
          ))}
        </div>
      </section>
    </div>
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

function LinkButton({ link, onHowTo }) {
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
        {link.howTo ? (
          <span
            className="link-how-to"
            role="button"
            tabIndex="0"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              onHowTo()
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                event.stopPropagation()
                onHowTo()
              }
            }}
          >
            How to use DayRange
          </span>
        ) : null}
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

export default App
