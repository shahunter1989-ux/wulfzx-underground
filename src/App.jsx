import React from 'react'
import MainWebsite from './MainWebsite'
import { links as sharedLinks } from './content'
import PrivacyPolicyPage from './PrivacyPolicyPage'
import SellerInventoryPrivacyPage from './SellerInventoryPrivacyPage'

const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`
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
const categorySlug = (category) => category.toLowerCase().replace(/[^a-z0-9]+/g, '-')

const links = [
  {
    id: 'official',
    category: 'Featured',
    title: 'Official Website',
    description: 'Main Wulfzx.Underground official website.',
    href: `${import.meta.env.BASE_URL}main/`,
    accent: 'blue',
    isInternal: true,
    image: assetPath('wulfzx-official-link-icon.webp'),
    imageAlt: 'WULFZX network globe icon',
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
    id: 'labels',
    category: 'Apps & Tools',
    title: 'WZXU Labels',
    description: 'Create, save, and print shipping address labels right on your device.',
    href: sharedLinks.labels,
    accent: 'dayrange',
    image: sharedLinks.labelsImage,
    imageAlt: 'WZXU Labels metallic wolf icon',
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
    href: snesHistoryHref,
    accent: 'history',
    featured: true,
    image: assetPath('wulfzx-gaming-history-link-icon.webp'),
    imageAlt: 'WULFZX retro gaming history icon',
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
  const isMainWebsiteRoute = currentPath.startsWith(`${basePath}main/`)

  if (isPrivacyRoute) {
    return <PrivacyPolicyPage />
  }
  if (isSellerInventoryPrivacyRoute) {
    return <SellerInventoryPrivacyPage />
  }

  if (isMainWebsiteRoute) {
    return <MainWebsite />
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
    <main className="business-card-page hub-v2" aria-labelledby="brand-title">
      <link rel="preload" as="image" href={assetPath('wulfzx-hub-hero.webp')} type="image/webp" media="(min-width: 601px)" />
      <link rel="preload" as="image" href={assetPath('wulfzx-hub-hero-mobile.webp')} type="image/webp" media="(max-width: 600px)" />
      <CircuitBackdrop />
      <div className="hub-content">
        <section className="link-hub-card" aria-label="Wulfzx.Underground premium digital business card demo">
          <header className="brand-hero">
            <picture className="hub-hero-art" aria-hidden="true">
              <source media="(max-width: 600px)" srcSet={assetPath('wulfzx-hub-hero-mobile.webp')} />
              <img
                src={assetPath('wulfzx-hub-hero.webp')}
                alt=""
                decoding="async"
                fetchPriority="high"
                width="1600"
                height="900"
              />
            </picture>
            <div className="wolf-blink-layer" aria-hidden="true">
              <picture className="wolf-blink-frame wolf-blink-half">
                <source media="(max-width: 600px)" srcSet={assetPath('wulfzx-wolf-eyes-half-mobile.webp')} />
                <img src={assetPath('wulfzx-wolf-eyes-half.webp')} alt="" width="1600" height="900" />
              </picture>
              <picture className="wolf-blink-frame wolf-blink-closed">
                <source media="(max-width: 600px)" srcSet={assetPath('wulfzx-wolf-eyes-closed-mobile.webp')} />
                <img src={assetPath('wulfzx-wolf-eyes-closed.webp')} alt="" width="1600" height="900" />
              </picture>
            </div>
            <div className="brand-copy">
              <h1 id="brand-title">Wulfzx.Underground</h1>
              <p className="subtitle">Premium Digital Business Card</p>
              <p className="tagline">Your Brand. Your Links. One Professional Hub.</p>
            </div>
          </header>

          <nav className="hub-category-nav" aria-label="Jump to a link category">
            {groupedLinks.map(({ category }) => (
              <a key={category} href={`#link-section-${categorySlug(category)}`}>
                {category}
              </a>
            ))}
          </nav>

          <nav className="link-sections" aria-label="Wulfzx.Underground links">
            {groupedLinks.map(({ category, links: categoryLinks }) => (
              <section className="link-section" key={category} aria-labelledby={`link-section-${categorySlug(category)}`}>
                <h2 id={`link-section-${categorySlug(category)}`}>{category}</h2>
                <div className="link-stack">
                  {categoryLinks.map((link) => (
                    <LinkButton key={link.title} link={link} onHowTo={() => setIsDayRangeGuideOpen(true)} />
                  ))}
                </div>
              </section>
            ))}
          </nav>

          <MediaPreview />

          <footer className="card-footer">
            <p>Powered by Wulfzx.Underground</p>
            <p>Premium Digital Business Card Demo</p>
          </footer>
        </section>
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
      <div className="pulse-line pulse-line-a" />
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

function TikTokIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Custom cyber social video icon">
      <path className="social-note-main" d="M38 10v27.5c0 8-6.2 14.5-14.2 14.5S10 46.4 10 39.3 15.9 26 23.6 26c1.5 0 2.9.2 4.2.7v9.8a6 6 0 1 0 2.2 4.6V10z" />
      <path className="social-note-signal" d="M38 10c2.4 7.3 7.4 12.2 16 12.9v10.3c-6.9-.1-12.1-2.3-16-6" />
      <path className="social-note-sparks" d="M17 18h7M12 23h4M48 41h5M42 47h8" />
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
