import stickerMakerPages from './sticker-maker-guide.json'
import documentReaderPages from './document-reader-guide.json'
import fieldquoteGuidePages from './fieldquote-guide.json'
import garageGuidePages from './garage-guide.json'
import CarDetailingGuide from './CarDetailingGuide'
import React from 'react'
import MainWebsite from './MainWebsite'
import ArcadePage from './ArcadePage'
import { links as sharedLinks } from './content'
import PrivacyPolicyPage from './PrivacyPolicyPage'
import SellerInventoryPrivacyPage from './SellerInventoryPrivacyPage'

const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`
const snesHistoryHref = 'https://snes-deploy.vercel.app/'
const historyConsoles = [
  { name: 'NES', title: 'Nintendo Entertainment System', href: 'https://shahunter1989-ux.github.io/old-systems-1-nes-site/' },
  { name: 'SNES', title: 'Super Nintendo Entertainment System', href: snesHistoryHref },
]
const dayRangeInstructions = [
  { title: 'Storage and Home Screen', image: assetPath('dayrange-storage-home.png') },
  { title: 'DayRange Overview', image: assetPath('dayrange-instructions-cover.png') },
  { title: 'Today', image: assetPath('dayrange-today.png') },
  { title: 'Add a Reading', image: assetPath('dayrange-add-reading.png') },
  { title: 'Insights', image: assetPath('dayrange-insights.png') },
  { title: 'Reports', image: assetPath('dayrange-reports.png') },
  { title: 'Profile', image: assetPath('dayrange-profile.png') },
]

const links = [
  {
    id: 'pipboy-simulator',
    category: 'Featured',
    title: 'WZXU76 Pip-Boy Simulator',
    description: 'Explore the Fallout 76 interface and WZXU76 custom Pip-Boy, with character stats, inventory, guides, and lore in an interactive browser preview.',
    href: 'https://wzxu-pipboy-web.vercel.app/?mode=simulator',
    accent: 'blue',
    image: assetPath('pipboy-hub.png'),
    imageAlt: 'WZXU76 custom Pip-Boy with red character display and weathered metal housing',
  },
  {
    id: 'arcade',
    category: 'Gaming',
    title: 'WZXU Arcade',
    description: 'Six games to explore, including Starfighter and Wulf Pack.',
    href: `${import.meta.env.BASE_URL}arcade/`,
    accent: 'blue',
    isInternal: true,
    image: assetPath('wzx-pong-opt.webp'),
    imageAlt: 'Neon arcade paddles and ball',
  },
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
    id: 'painter-of-dreams',
    category: 'Music & Creators',
    title: 'The Painter of Dreams',
    description: 'Music, artist profiles, and official links.',
    href: 'https://tpod-pi.vercel.app/',
    accent: 'blue',
    Icon: MusicIcon,
  },
  {
    id: 'suno-profile',
    category: 'Music & Creators',
    title: 'WZXU on Suno',
    description: 'Listen to original music and explore my latest creations on Suno.',
    href: 'https://suno.com/@wulfzxunderground',
    accent: 'blue',
    Icon: MusicIcon,
  },
  {
    id: 'wyldwolf-workshop',
    category: 'Music & Creators',
    title: 'Wyldwolf Workshop',
    description: 'Gaming, craftsmanship, and live streams from Wyldwolf Workshop.',
    href: 'https://wyldwolfworkshop.vercel.app/',
    accent: 'blue',
    image: assetPath('wyldwolf-workshop.jpg'),
    imageAlt: 'Wyldwolf Workshop wolf emblem',
  },
  {
    id: 'amy-nuka-nightmare',
    category: 'Music & Creators',
    title: 'Amy Nuka Nightmare',
    description: 'Official streams, socials, and community links.',
    href: 'https://amy-nuka-nightmare-link-hub.vercel.app/',
    accent: 'social',
    image: assetPath('amy-nuka-nightmare.png'),
    imageAlt: 'Amy the Nuka-Nightmare in green Fallout terminal artwork',
  },

  {
    id: 'coffees-pong',
    category: 'Gaming',
    title: "Coffee's Pong",
    description: 'One dog. One bone. Endless fun. Play Coffee’s arcade take on Pong.',
    href: 'https://coffees-pong.wzxu-cloud.workers.dev/',
    accent: 'blue',
    image: assetPath('coffees-pong.jpg'),
    imageAlt: 'Coffee’s Pong green pixel artwork featuring a Chihuahua and bone-shaped paddles',
  },
  {
    id: 'wulf-pack',
    category: 'Gaming',
    title: 'Wulf Pack',
    description: 'Wulf. Amy. One electric maze. Play the 3D arcade chase game.',
    href: 'https://wulf-pack.vercel.app/',
    accent: 'social',
    image: assetPath('wulf-pack.svg'),
    imageAlt: 'Wulf Pack title over a purple maze',
  },
  {
    id: 'starfighter',
    category: 'Gaming',
    title: 'WZXU Starfighter',
    description: 'Choose your ship. Own the stars. Play the retro 3D arcade demo.',
    href: 'https://wzxu-starfighter.vercel.app/',
    accent: 'blue',
    image: assetPath('starfighter.png'),
    imageAlt: 'WZXU Starfighter game artwork',
  },
  {
    id: 'magic-8-ball',
    category: 'Gaming',
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
    title: 'WZXU76.pro',
    description: 'Fallout 76 Wasteland Guide',
    href: 'https://wzxu76.pro',
    accent: 'silver',
    image: assetPath('wzxu76-guide-hub-icon.webp'),
    imageAlt: 'WZXU76 Fallout 76 guide flag artwork',
  },
  {
    id: 'document-reader-tools',
    isNew: true,
    category: 'Apps & Tools',
    title: 'WZXU Document Reader',
    description: 'Read files offline on Windows. No installation.',
    href: 'https://wzxu-cloud.wzxu-cloud.workers.dev/s/49fa9251f3e2e85b06b4e53ee6e0edf4a8716e89a340391f9fca7502e76e509c',
    accent: 'blue',
    image: assetPath('document-reader-icon.png'),
    imageAlt: 'WZXU Document Reader for Windows, silver document and gold magnifying glass',
  },
  {
    id: 'sticker-maker-tools',
    isNew: true,
    category: 'Apps & Tools',
    title: 'WZXU Sticker Maker',
    description: 'Design and print custom sticker sheets.',
    href: 'https://wzxu-sticker-maker.vercel.app/',
    accent: 'blue',
    image: assetPath('sticker-maker-icon.svg'),
    imageAlt: 'Orange sticker sheets inspired by the WZXU Sticker Maker brand mark',
  },
  {
    id: 'car-detailing-tools',
    isNew: true,
    category: 'Apps & Tools',
    title: 'WZXU Car Detailing App',
    description: 'Manage detailing jobs and invoices.',
    href: 'https://wzxu-cda.vercel.app/',
    accent: 'blue',
    image: assetPath('car-detailing-logo.png'),
    imageAlt: 'WZXU Car Detailing App logo',
  },
  {
    id: 'garage-flow-tools',
    isNew: true,
    category: 'Apps & Tools',
    title: 'WZXU Garage Flow',
    description: 'Track repairs, estimates, and payments.',
    href: 'https://wzxu-garage-flow.vercel.app/',
    accent: 'blue',
    image: assetPath('garage-flow-logo.png'),
    imageAlt: 'WZXU Garage Flow logo',
  },
  {
    id: 'fieldquote-tools',
    isNew: true,
    category: 'Apps & Tools',
    title: 'WZXU FieldQuote',
    tooltip: 'Explore this sample demo of the apps and websites WZXU can build. Available online for a limited time.',
    description: 'Create job estimates and PDF quotes.',
    href: 'https://wzxu-fieldquote.vercel.app/',
    accent: 'blue',
    image: assetPath('fieldquote-logo.png'),
    imageAlt: 'WZXU FieldQuote green and white clipboard, house, and WZ logo',
  },
  {
    id: 'dayrange',
    category: 'Apps & Tools',
    title: 'DayRange by WZXU',
    description: 'Track glucose readings privately.',
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
    description: 'Create professional invoices.',
    href: sharedLinks.invoiceMaker,
    accent: 'dayrange',
    image: sharedLinks.invoiceMakerImage,
    imageAlt: 'WZXU Invoice Maker professional invoice artwork',
  },
  {
    id: 'seller-inventory',
    category: 'Apps & Tools',
    title: 'WZXU Seller Inventory',
    description: 'Track seller inventory.',
    href: sharedLinks.sellerInventory,
    accent: 'dayrange',
    image: sharedLinks.sellerInventoryImage,
    imageAlt: 'WZXU Seller Inventory app icon',
  },
  {
    id: 'labels',
    category: 'Apps & Tools',
    title: 'WZXU Labels',
    description: 'Print shipping labels on your device.',
    href: sharedLinks.labels,
    accent: 'dayrange',
    image: sharedLinks.labelsImage,
    imageAlt: 'WZXU Labels metallic wolf icon',
  },
  {
    id: 'qr-code-maker',
    category: 'Apps & Tools',
    title: 'WZXU QR Code Maker',
    description: 'Create and scan QR codes privately.',
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
    id: 'gaming-history',
    category: 'Gaming',
    title: 'Gaming History',
    description: 'Explore NES and SNES history, iconic games, and console hardware.',
    opensConsoleChooser: true,
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
    href: 'https://www.tiktok.com/@wzxu.pro',
    accent: 'social',
    Icon: TikTokIcon,
  },
]

const destination = (id) => links.find((link) => link.id === id).href
const workshopTiles = [
  ['pipboy', 'Pip-Boy Simulator', destination('pipboy-simulator')],
  ['official', 'Official Website', destination('official')],
  ['tools', 'Apps & Tools', '#link-section-apps-tools'],
  ['gaming', 'Gaming', '#link-section-gaming'],
  ['music', 'Music & Creators', '#link-section-music-creators'],
  ['fallout', 'Fallout 76', '#link-section-fallout-76'],
  ['radio', 'WZXU on X', 'https://x.com/Wzxupruh'],
  ['camera', 'WZXU on TikTok', destination('tiktok')],
]

function App() {
  const basePath = import.meta.env.BASE_URL
  const currentPath = window.location.pathname
  if (['/admin', '/admin/', '/main/owner', '/main/owner/'].includes(currentPath)) {
    window.location.replace('/main/');
    return null;
  }
  if (['/arcade', '/arcade/', '/main/arcade', '/main/arcade/'].includes(currentPath)) return <ArcadePage />
  const isPrivacyRoute = currentPath === `${basePath}privacy` || currentPath === `${basePath}privacy/`
  const isSellerInventoryPrivacyRoute = currentPath === `${basePath}privacy/wzxu-seller-inventory` || currentPath === `${basePath}privacy/wzxu-seller-inventory/`
  const isMainWebsiteRoute = currentPath === `${basePath}main` || currentPath.startsWith(`${basePath}main/`)

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

const guides = {
  'document-reader-tools': { pages: documentReaderPages, assetFolder: 'document-reader-guide' },
  'sticker-maker-tools': { pages: stickerMakerPages, assetFolder: 'sticker-maker-guide' },
  'fieldquote-tools': { pages: fieldquoteGuidePages, assetFolder: 'fieldquote-guide' },
  'garage-flow-tools': { pages: garageGuidePages, assetFolder: 'garage-guide' },
  'car-detailing-tools': {},
  dayrange: {},
}

function WorkshopMenu({ art, category, onClose, onGuide }) {
  const dialog = React.useRef(null)
  React.useEffect(() => {
    const modal = dialog.current
    modal.showModal()
    return () => modal.close()
  }, [])

  return (
    <dialog ref={dialog} className="workshop-menu" aria-label={category}
      onCancel={onClose} onClick={(event) => { if (event.target === dialog.current) onClose() }}>
      <div className="workshop-menu-body">
        <header>
          <img src={assetPath('assembly/' + art + '.webp')} alt={category} />
          <button type="button" onClick={onClose} aria-label="Close menu">×</button>
        </header>
        <ul>
          {links.filter((link) => link.category === category).map((link) => (
            <li key={link.id}>
              {category === 'Apps & Tools' ? (
                <div className="workshop-app">
                  <img src={link.image} alt="" width="46" height="46" />
                  <div>
                    <strong>{link.title}</strong>{link.isNew && <small> NEW</small>}
                    <p>{link.description}</p>
                  </div>
                  <div className="workshop-actions">
                    <a href={link.href} target="_blank" rel="noreferrer" title={link.tooltip}
                      aria-label={link.id === 'document-reader-tools' ? 'Download WZXU Document Reader for Windows' : 'Open ' + link.title}>
                      {link.id === 'document-reader-tools' ? 'Download for Windows' : 'Open app'} ↗
                    </a>
                    {guides[link.id] && <button type="button" aria-haspopup="dialog" aria-label={'How to use ' + link.title}
                      onClick={() => onGuide(link)}>How to use</button>}
                  </div>
                </div>
              ) : link.opensConsoleChooser ? (
                <details>
                  <summary>{link.title}</summary>
                  {historyConsoles.map((console) => (
                    <a key={console.name} href={console.href} target="_blank" rel="noreferrer">
                      {console.name} — {console.title}
                    </a>
                  ))}
                </details>
              ) : (
                <a href={link.href} target={link.isInternal ? undefined : '_blank'} rel="noreferrer">
                  <span><strong>{link.title}</strong>{link.isNew && <small> NEW</small>}<span className="workshop-description">{link.description}</span></span><span aria-hidden="true">›</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  )
}

function updateTilePress(event) {
  const tile = event.target.closest('.assembly-tile')
  if (event.pointerType !== 'touch' || !tile) return
  if (event.type === 'pointerdown') tile.dataset.pressed = 'true'
  else delete tile.dataset.pressed
}

function HubPage() {
  const [menu, setMenu] = React.useState(null)
  const [guide, setGuide] = React.useState(null)

  return (
    <main className="business-card-page hub-v2 assembly-hub" aria-labelledby="brand-title">
      <div className="hub-content">
        <section className="link-hub-card" aria-label="WZXU link hub">
          <header className="assembly-header">
            <h1 id="brand-title"><img src={assetPath('assembly/hero.webp')} alt="WZXU · Wulfzx.Underground" width="1024" height="810" fetchPriority="high" /></h1>
            <a className="assembly-explore" href="#workshop-shortcuts">Explore links ↓</a>
          </header>
          <nav onPointerDown={updateTilePress} onPointerUp={updateTilePress} onPointerCancel={updateTilePress}
            id="workshop-shortcuts" tabIndex={-1} className="assembly-tiles" aria-label="Workshop shortcuts">
            {workshopTiles.map(([art, label, href]) => href.startsWith('#') ? (
              <button key={art} type="button" aria-haspopup="dialog" className={'assembly-tile assembly-' + art}
                onClick={(event) => setMenu({ art, category: label, trigger: event.currentTarget })}>
                <img src={assetPath('assembly/' + art + '.webp')} alt={label} />
                <span className="assembly-mark" aria-hidden="true">☰</span>
              </button>
            ) : (
              <a key={art} className={'assembly-tile assembly-' + art} href={href}
                target={href.startsWith('https://') ? '_blank' : undefined}
                rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}>
                <img src={assetPath('assembly/' + art + '.webp')} alt={label} />
                <span className="assembly-mark" aria-hidden="true">{href.startsWith('https://') ? '↗' : '→'}</span>
              </a>
            ))}
          </nav>
          <a className="assembly-support" href={destination('cashapp')} target="_blank" rel="noreferrer">Support WZXU on Cash App ↗</a>
        </section>
      </div>
      {menu && <WorkshopMenu {...menu} onGuide={setGuide} onClose={() => { setMenu(null); requestAnimationFrame(() => menu.trigger.focus()) }} />}
      {guide?.id === 'dayrange' && <InstructionViewer instructions={dayRangeInstructions} onClose={() => setGuide(null)} />}
      {guide && guide.id !== 'dayrange' && <CarDetailingGuide {...guides[guide.id]} title={'How to use ' + guide.title} onClose={() => setGuide(null)} />}
    </main>
  )
}

function InstructionViewer({ instructions, onClose }) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const activeInstruction = instructions[activeIndex]
  const dialog = React.useRef(null)
  React.useEffect(() => {
    const modal = dialog.current
    modal.showModal()
    return () => modal.close()
  }, [])

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + instructions.length) % instructions.length)
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % instructions.length)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [instructions.length, onClose])

  return (
    <dialog ref={dialog} className="instruction-viewer" onCancel={onClose} aria-labelledby="instruction-viewer-title">
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
    </dialog>
  )
}

function MusicIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18V5l11-2v13M9 9l11-2" /><ellipse cx="6" cy="18" rx="3" ry="2.5" /><ellipse cx="17" cy="16" rx="3" ry="2.5" /></svg>
}

function SparkIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3Z" /></svg>
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
