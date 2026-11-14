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

function MenuArtwork({ art, theme }) {
 if (['snes','playstation','dreamcast','n64','genesis','gamecube','ps2','xbox','wii','ps3','xbox360','wiiu','ps4','xboxone','switch','ps5','seriesx','switch2'].includes(theme)) return <ConsoleArtwork theme={theme} art={art} />;
 const atlas = {playroom:'playroom',win31:'win2000',win95:'desktop',winme:'win2000'}[theme] || theme
 const isAtlas = ['playroom','dispatch','departures','garden','punch','desktop','win31','win95','winme','win2000','winxp','winvista','win7','atari','nes','gameboy'].includes(theme)
 const index = ['pipboy','official','tools','gaming','music','fallout','radio','camera'].indexOf(art)
 return <span className="themed-menu-art" aria-hidden="true" style={isAtlas ? {backgroundImage:`url(${assetPath('hub-themes/' + atlas + '-atlas.webp')})`,backgroundPosition:`${(index % 4) * 100 / 3}% ${index > 3 ? 100 : 0}%`} : undefined}>{!isAtlas && <ThemeGlyph art={art} />}</span>
}
function WorkshopMenu({ art, category, theme, onClose, onGuide }) {
  const dialog = React.useRef(null)
  React.useEffect(() => {
    const modal = dialog.current
    modal.showModal()
    return () => modal.close()
  }, [])

  return (
    <dialog ref={dialog} className={`workshop-menu ${theme.startsWith('win') || theme === 'desktop' ? 'workshop-window' : ''}`} aria-label={category}
      onCancel={onClose} onClick={(event) => { if (event.target === dialog.current) onClose() }}>
      <div className="workshop-menu-body">
        <header>
          {theme === 'comic' ? <img src={assetPath('assembly/' + art + '.webp')} alt={category} /> : <div className="themed-menu-heading"><MenuArtwork art={art} theme={theme} /><h2>{category}</h2></div>}
          <button type="button" onClick={onClose} aria-label="Close menu">×</button>
        </header>
        {(theme.startsWith('win') || theme === 'desktop') && <div className="workshop-window-path"><span>WZXU</span><span aria-hidden="true"> › </span><span>{category}</span></div>}
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
        <footer className="workshop-window-footer"><span>{links.filter(link => link.category === category).length} destinations</span><button type="button" onClick={onClose}>Close menu</button></footer>
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

const extraHubThemes = {
  ps5: { name: 'PlayStation 5', detail: 'Sculptural white · luminous blue worlds', kicker: 'WZXU / NEXT HORIZON', title: 'Discover what comes next.', subtitle: 'A fresh perspective on tools, games, music, and original creative worlds.', note: 'PS5 INSPIRED / YOUR NEXT DESTINATION' },
  seriesx: { name: 'Xbox Series X', detail: 'Black monolith · emerald light', kicker: 'WZXU / NEXT LEVEL COLLECTION', title: 'Expand your world.', subtitle: 'Explore powerful little tools, original projects, and new places to play.', note: 'SERIES X INSPIRED / READY TO EXPLORE' },
  switch2: { name: 'Nintendo Switch 2', detail: 'Charcoal channels · cyan and coral details', kicker: 'WZXU / NEXT ADVENTURE', title: 'Another world to explore.', subtitle: 'Discover something useful, creative, or simply fun. Pick your next adventure.', note: 'SWITCH 2 INSPIRED / CHOOSE A DESTINATION' },
  ps4: { name: 'PlayStation 4', detail: 'Angular black · electric blue worlds', kicker: 'WZXU / BLUE HORIZON', title: 'Great discoveries await.', subtitle: 'Explore tools, games, music, and creative projects with a new perspective.', note: 'PS4 INSPIRED / CHOOSE YOUR DESTINATION' },
  xboxone: { name: 'Xbox One', detail: 'Emerald panels · a connected collection', kicker: 'WZXU / ONE COLLECTION', title: 'Your world, connected.', subtitle: 'Bring together practical tools, original games, and creative discoveries.', note: 'XBOX ONE INSPIRED / READY TO EXPLORE' },
  switch: { name: 'Nintendo Switch', detail: 'Neon red and blue · playful portable worlds', kicker: 'WZXU / PLAY ANYWHERE', title: 'Switch up your day.', subtitle: 'Find something useful, something creative, or your next little adventure.', note: 'SWITCH INSPIRED / PICK YOUR NEXT ADVENTURE' },
  ps3: { name: 'PlayStation 3', detail: 'Glossy black · cinematic blue and silver', kicker: 'WZXU / CINEMATIC COLLECTION', title: 'Beyond the ordinary.', subtitle: 'Explore original projects, useful tools, and worlds worth getting lost in.', note: 'PS3 INSPIRED / SELECT YOUR DESTINATION' },
  xbox360: { name: 'Xbox 360', detail: 'White and lime · connected creative worlds', kicker: 'WZXU / CONNECTED COLLECTION', title: 'Jump into something new.', subtitle: 'Tools, games, music, and creators. Your next discovery is one click away.', note: 'XBOX 360 INSPIRED / READY TO EXPLORE' },
  wiiu: { name: 'Nintendo Wii U', detail: 'Turquoise channels · a world on your GamePad', kicker: 'WZXU / GAMEPAD COLLECTION', title: 'A new view of your world.', subtitle: 'Tap into tools, games, music, and a little everyday creativity.', note: 'WII U INSPIRED / CHOOSE A CHANNEL' },
  ps2: { name: 'PlayStation 2', detail: 'Midnight blue · cinematic disc worlds', kicker: 'WZXU / SECOND DIMENSION', title: 'Enter another world.', subtitle: 'Discover tools, games, and creative projects beyond the familiar.', note: 'PS2 INSPIRED / DISC EXPLORER READY' },
  xbox: { name: 'Original Xbox', detail: 'Black hardware · electric green energy', kicker: 'WZXU / SYSTEM ONLINE', title: 'Power your next discovery.', subtitle: 'Tools, games, music, and original worlds. Choose your next destination.', note: 'ORIGINAL XBOX INSPIRED / READY TO CONNECT' },
  wii: { name: 'Nintendo Wii', detail: 'Bright channels · friendly white and blue', kicker: 'WZXU / CHANNEL COLLECTION', title: 'Something for everyone.', subtitle: 'A welcoming collection of tools, games, music, and creative discoveries.', note: 'WII INSPIRED / PICK A CHANNEL' },
  n64: { name: 'Nintendo 64', detail: 'Colorful cartridge worlds · four-player spirit', kicker: 'WZXU / 64-BIT ADVENTURES', title: 'A world worth exploring.', subtitle: 'Choose a cartridge. Find your next adventure in tools, games, and creativity.', note: 'NINTENDO 64 INSPIRED / PLAYER ONE READY' },
  genesis: { name: 'Sega Genesis', detail: 'Black hardware · red accents and arcade energy', kicker: 'WZXU / MEGA COLLECTION', title: 'Power up your next idea.', subtitle: 'A collection built for fast discoveries and lasting favorites.', note: 'GENESIS INSPIRED / SELECT YOUR NEXT LEVEL' },
  gamecube: { name: 'GameCube', detail: 'Indigo worlds · playful discs and dimensional panels', kicker: 'WZXU / CUBE COLLECTION', title: 'Small cube. Big worlds.', subtitle: 'Open a new side of tools, games, music, and creative discoveries.', note: 'GAMECUBE INSPIRED / READY TO PLAY' },
  snes: { name: 'Super Nintendo', detail: '16-bit adventures · purple cartridges and pixel stars', kicker: 'WZXU / SUPER COLLECTION', title: 'A new level of play.', subtitle: 'Load up a world of tools, games, music, and discoveries.', note: '16-BIT INSPIRED / SELECT YOUR CARTRIDGE' },
  playstation: { name: 'PlayStation', detail: 'Original console · jewel cases and geometric worlds', kicker: 'WZXU / DISC EXPLORER', title: 'Beyond the next level.', subtitle: 'Open a disc. Explore a different side of the underground.', note: '32-BIT INSPIRED / MEMORY CARD READY' },
  dreamcast: { name: 'Sega Dreamcast', detail: 'Dream-era interface · bright skies and memory screens', kicker: 'WZXU / DREAM COLLECTION', title: 'Welcome to the next dream.', subtitle: 'A bright little universe of projects, play, and people.', note: 'DREAMCAST INSPIRED / CONNECT & EXPLORE' },
  atari: { name: 'Atari 2600', detail: 'Cartridge shelf · painted adventures and warm woodgrain', kicker: 'WZXU / VIDEO COMPUTER COLLECTION', title: 'Adventure, loaded.', subtitle: 'Pick a cartridge. Discover a new world.', note: 'ATARI 2600 INSPIRED / 8 CARTRIDGES' },
  nes: { name: 'NES', detail: '8-bit selection screen · pixel art and arcade energy', kicker: 'WZXU ENTERTAINMENT / PLAYER ONE', title: 'SELECT YOUR WORLD', subtitle: 'Tools, games, music, and creators. Your next level starts here.', note: 'NES INSPIRED / CHOOSE A DESTINATION' },
  gameboy: { name: 'Game Boy', detail: 'Pocket-sized adventures · olive LCD and pixel artwork', kicker: 'WZXU / DOT MATRIX COLLECTION', title: 'A world in your pocket.', subtitle: 'Eight little doors to something worth exploring.', note: 'GAME BOY INSPIRED / READY TO EXPLORE' },
  win31: { name: 'Windows 3.1', detail: 'Program Manager · local theme sample', kicker: 'WZXU / PROGRAM MANAGER', title: 'Back to the beginning.', subtitle: 'Grouped programs and classic gray windows.', note: 'WINDOWS 3.1 INSPIRED / 8 DESTINATIONS' },
  win95: { name: 'Windows 95', detail: 'Classic desktop · local theme sample', kicker: 'WZXU / CLASSIC DESKTOP', title: 'Start something great.', subtitle: 'A familiar desktop for your favorite destinations.', note: 'WINDOWS 95 INSPIRED / 8 DESTINATIONS' },
  winme: { name: 'Windows ME', detail: 'Millennium edition · local theme sample', kicker: 'WZXU / MILLENNIUM EDITION', title: 'Made for your world.', subtitle: 'Music, games, and creative tools together.', note: 'WINDOWS ME INSPIRED / 8 DESTINATIONS' },
  win8: { name: 'Windows 8', detail: 'Start screen · local theme sample', kicker: 'WZXU / START SCREEN', title: 'Your world. At a glance.', subtitle: 'Bold tiles for every side of your creativity.', note: 'WINDOWS 8 INSPIRED / 8 DESTINATIONS' },
  win81: { name: 'Windows 8.1', detail: 'Desktop & tiles · local theme sample', kicker: 'WZXU / DESKTOP & TILES', title: 'More ways to explore.', subtitle: 'Your favorite destinations, arranged your way.', note: 'WINDOWS 8.1 INSPIRED / 8 DESTINATIONS' },
  win10: { name: 'Windows 10', detail: 'Modern desktop · local theme sample', kicker: 'WZXU / MODERN DESKTOP', title: 'Make it yours.', subtitle: 'A focused home for projects, play, and possibility.', note: 'WINDOWS 10 INSPIRED / 8 DESTINATIONS' },
  win11: { name: 'Windows 11', detail: 'Fluent workspace · local theme sample', kicker: 'WZXU / FLUENT WORKSPACE', title: 'A fresh perspective.', subtitle: 'Your creative world, beautifully connected.', note: 'WINDOWS 11 INSPIRED / 8 DESTINATIONS' },
  win2000: { name: 'Windows 2000', detail: 'Classic workstation · crisp borders and pixel icons', kicker: 'WZXU EXPLORER / CLASSIC WORKSTATION', title: 'Ready for work.', subtitle: 'Your projects, tools, and creative destinations.', note: 'WINDOWS 2000 INSPIRED / 8 SHORTCUTS' },
  winxp: { name: 'Windows XP', detail: 'Blue skies · colorful icons and friendly rounded windows', kicker: 'WZXU EXPLORER / WELCOME HOME', title: 'A brighter desktop.', subtitle: 'A familiar place to discover something new.', note: 'WINDOWS XP INSPIRED / PICK A SHORTCUT' },
  winvista: { name: 'Windows Vista', detail: 'Midnight glass · luminous accents and glossy icons', kicker: 'WZXU EXPLORER / AERO COLLECTION', title: 'Beyond the ordinary.', subtitle: 'Explore original worlds through a different window.', note: 'WINDOWS VISTA INSPIRED / GLASS & LIGHT' },
  win7: { name: 'Windows 7', detail: 'Clear blue Aero · light glass and a streamlined desktop', kicker: 'WZXU EXPLORER / YOUR FAVORITES', title: 'Simply connected.', subtitle: 'Everything you enjoy, beautifully within reach.', note: 'WINDOWS 7 INSPIRED / EXPLORE YOUR WORLD' },
  dispatch: { name: 'Dispatch', detail: 'A creator newspaper · stories, projects, and discoveries', kicker: 'INDEPENDENT DIGITAL CULTURE / VOL. 01', title: 'The WZXU Dispatch', subtitle: 'Good things are happening underground.', note: 'TOOLS · GAMES · MUSIC · PEOPLE' },
  departures: { name: 'Departures', detail: 'An airport departure board · choose your next destination', kicker: 'WZXU INTERNATIONAL / DEPARTURE LOUNGE', title: 'Where to next?', subtitle: 'Your next discovery is ready for boarding.', note: 'ALL GATES OPEN / LOCAL TIME, YOUR PACE' },
  garden: { name: 'Botanical', detail: 'A quiet digital garden · natural textures and organic shapes', kicker: 'WULFZX.UNDERGROUND / THE DIGITAL GARDEN', title: 'Room to grow.', subtitle: 'A little collection of things made with care.', note: 'TOOLS FOR EVERYDAY. WORLDS FOR ESCAPE.' },
  punch: { name: 'Punch', detail: 'A bold graphic poster · oversized type and sharp contrasts', kicker: 'WZXU® / INDEPENDENT & UNFILTERED', title: 'MAKE. PLAY. REPEAT.', subtitle: 'Small links. Big creative energy.', note: 'PICK SOMETHING. GO SOMEWHERE.' },
  desktop: { name: 'Desktop 98', detail: 'A nostalgic computer desktop · open a window into WZXU', kicker: 'WZXU PERSONAL COMPUTER', title: 'Welcome back.', subtitle: 'Your favorite corners of the internet, all on one desktop.', note: '8 SHORTCUTS / READY TO EXPLORE' },
}
function ExtraThemeHeader({ theme }) {
 const config = extraHubThemes[theme]
 return <header className="extra-brand"><div className="extra-kicker">{config.kicker}</div><h1 id="brand-title">{config.title}</h1><p>{config.subtitle}</p><div className="extra-note"><span>{config.note}</span><span aria-hidden="true">{theme === 'departures' ? '↗' : theme === 'garden' ? '❋' : theme === 'desktop' ? '▣' : '✳'}</span></div></header>
}
const consoleAmbience = {
 atari: { symbols:['✚','●','●','✚'], color:'#e8b270' },
 nes: { symbols:['✚','A','B','START'], color:'#d55d59', buttons:true },
 gameboy: { symbols:['✚','A','B','START'], color:'#526f37', buttons:true },
 snes: { symbols:['A','B','X','Y'], color:'#a998d1', buttons:true },
 playstation: { symbols:['△','○','×','□'], color:'#b0baca' },
 dreamcast: { symbols:['Y','A','B','X'], color:'#c45928', buttons:true },
 n64: { symbols:['A','B','C','✚'], color:'#adcb84', buttons:true },
 genesis: { symbols:['A','B','C','✚'], color:'#df7775', buttons:true },
 gamecube: { symbols:['A','B','X','Y'], color:'#c6b2ee', buttons:true },
 ps2: { symbols:['△','○','×','□'], color:'#81aaf2' },
 xbox: { symbols:['A','B','X','Y'], color:'#94d276', buttons:true, xbox:true },
 wii: { symbols:['A','B','+','−'], color:'#3e8ba5', buttons:true },
 ps3: { symbols:['△','○','×','□'], color:'#aec2df' },
 xbox360: { symbols:['A','B','X','Y'], color:'#4c8134', buttons:true, xbox:true },
 wiiu: { symbols:['A','B','X','Y'], color:'#237e9b', buttons:true },
 ps4: { symbols:['△','○','×','□'], color:'#91c6ff' },
 xboxone: { symbols:['A','B','X','Y'], color:'#99dd9f', buttons:true, xbox:true },
 switch: { symbols:['+','−','A','B'], color:'#317e96', buttons:true },
 ps5: { symbols:['△','○','×','□'], color:'#9ac9ff' },
 seriesx: { symbols:['A','B','X','Y'], color:'#83db91', buttons:true, xbox:true },
 switch2: { symbols:['+','−','A','B'], color:'#9cdae3', buttons:true },
}
function ConsoleAmbientButtons({ theme }) {
 const config = consoleAmbience[theme]
 // Stable seeded routes avoid jumping when Pause/Resume triggers a render.
 const particles = React.useMemo(() => Array.from({length:8}, (_,index) => {
  let seed = [...theme].reduce((value,char) => value + char.charCodeAt(0), 31) + index * 997
  const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }
  const points = Array.from({length:5}, () => [5 + random()*82, 5 + random()*79])
  return { points, duration:48+random()*36, delay:-random()*80, rotation:Math.round(random()*80-40) }
 }), [theme])
 return <div className={`console-ambient console-ambient-${theme} ${config.xbox ? 'console-ambient-xbox' : ''}`} aria-hidden="true">{particles.map((particle,index) => {
  const symbol = config.symbols[index % 4]
  const style = {'--travel-duration':`${particle.duration}s`,'--travel-delay':`${particle.delay}s`,'--turn':`${particle.rotation}deg`}
  particle.points.forEach(([x,y],point) => { style[`--x${point}`]=`${x}vw`; style[`--y${point}`]=`${y}dvh` })
  return <span key={`${theme}-${index}`} className={`ambient-button ambient-button-${index % 4} ${symbol === '✚' ? 'ambient-dpad' : symbol === 'START' ? 'ambient-start' : ''}`} style={style}><span className="ambient-cap">{symbol}</span></span>
 })}</div>
}
function ConsoleArtwork({ theme, art }) {
 const index = ['pipboy','official','tools','gaming','music','fallout','radio','camera'].indexOf(art)
 return <span className={`console-art console-atlas console-art-${theme}`} aria-hidden="true" style={{backgroundImage:`url(${assetPath('hub-themes/' + theme + '-atlas.webp')})`,backgroundPosition:`${(index % 4) * 100 / 3}% ${index > 3 ? 100 : 0}%`}} />
}
function ExtraThemeCard({ theme, art, label, number, detail, isMenu }) {
 return <span className="extra-card"><span className="extra-card-top"><span>{theme === 'departures' ? 'GATE ' : theme === 'desktop' ? 'FILE ' : 'NO. '}{number}</span><span>{theme === 'departures' ? 'BOARDING' : isMenu ? 'COLLECTION' : 'DIRECT LINK'}</span></span><span className="extra-illustration" aria-hidden="true">{['snes','playstation','dreamcast','n64','genesis','gamecube','ps2','xbox','wii','ps3','xbox360','wiiu','ps4','xboxone','switch','ps5','seriesx','switch2'].includes(theme) ? <ConsoleArtwork theme={theme} art={art} /> : ['win8','win81','win10','win11'].includes(theme) ? <span className={'modern-win-icon modern-win-' + art}><ThemeGlyph art={art} /></span> : <span className="extra-theme-art" style={{backgroundImage: `url(${assetPath('hub-themes/' + ({win31:'win2000',win95:'desktop',winme:'win2000'}[theme] || theme) + '-atlas.webp')})`, backgroundPosition: `${((Number(number) - 1) % 4) * 100 / 3}% ${Number(number) > 4 ? 100 : 0}%`}} />}</span><span className="extra-copy"><strong>{label}</strong><small>{detail}</small></span><span className="extra-action">{isMenu ? 'Explore collection' : 'Open destination'} <span aria-hidden="true">{theme === 'desktop' ? '▸' : '↗'}</span></span></span>
}
const hubDemoStyles = [
  { id: 'comic', name: 'Midnight Electric', detail: 'Illustrated panels · bold creator identity' },
  ...Object.entries(extraHubThemes).sort(([a], [b]) => { const order = ['win31','win95','desktop','winme','win2000','winxp','winvista','win7','win8','win81','win10','win11']; return (order.includes(a) ? order.indexOf(a) : 100) - (order.includes(b) ? order.indexOf(b) : 100) }).map(([id, value]) => ({ id, name: value.name, detail: value.detail })),
  { id: 'aurora', name: 'Aurora', detail: 'Luminous glass · a creative universe in motion' },
  { id: 'blueprint', name: 'Blueprint', detail: 'An interactive design desk · ideas under construction' },
  { id: 'studio', name: 'Studio', detail: 'Clean cards · professional portfolio' },
  { id: 'terminal', name: 'Terminal', detail: 'Retro interface · gaming personality' },
  { id: 'editorial', name: 'The Index', detail: 'Editorial business portfolio · considered, confident, minimal' },
  { id: 'playroom', name: 'Playroom', detail: 'A colorful sticker board · a little unexpected, completely you' },
]
const hubTileDetails = {
  pipboy: ['01', 'Explore an interactive wasteland device'],
  official: ['02', 'Projects, services, and ways to work together'],
  tools: ['03', 'Useful apps, downloads, and how-to guides'],
  gaming: ['04', 'Games, arcade experiences, and more'],
  music: ['05', 'Music and independent creators'],
  fallout: ['06', 'Your wasteland companion and resources'],
  radio: ['07', 'Follow WZXU on X'],
  camera: ['08', 'Watch WZXU on TikTok'],
}
function ThemeGlyph({ art }) {
  const paths = {
    pipboy: 'M22 6h20v8H22z M22 50h20v8H22z M18 14h28v36H18z M24 22h16v18H24z M46 25h5v12h-5',
    official: 'M10 54V22L32 8l22 14v32H10z M23 54V36h18v18 M18 24h6 M40 24h6',
    tools: 'M8 26h48v28H8z M23 26V15h18v11 M8 37h48 M28 33h8v8h-8',
    gaming: 'M20 20h24c8 0 14 24 9 28s-13-8-15-8H26c-2 0-10 12-15 8S12 20 20 20z M21 26v12 M15 32h12 M43 28h1 M48 34h1',
    music: 'M8 14h48v40H8z M18 34a12 12 0 1 0 24 0a12 12 0 1 0-24 0 M49 22v19l-7 5',
    fallout: 'M32 6l20 12v28L32 58 12 46V18L32 6z M32 18a14 14 0 1 0 0 28a14 14 0 1 0 0-28 M32 23v18 M23 32h18',
    radio: 'M10 24h44v30H10z M16 24L44 8 M17 33h16 M17 40h16 M17 47h16 M44 34v12',
    camera: 'M8 22h33v30H8z M41 31l15-8v28l-15-8 M17 22v-8h15v8 M17 32h15v10H17z',
  }
  return <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[art]} /></svg>
}
function HubTileVisual({ art, label, theme, isMenu }) {
  if (theme === 'comic') return <img src={assetPath('assembly/' + art + '.webp')} alt={label} />
  const [number, detail] = hubTileDetails[art]
  if (extraHubThemes[theme]) return <ExtraThemeCard {...{theme, art, label, number, detail, isMenu}} />
  if (theme === 'playroom') return <span className="playroom-card"><span className="playroom-art" aria-hidden="true" style={{backgroundPosition: `${((Number(number) - 1) % 4) * 100 / 3}% ${Number(number) > 4 ? 100 : 0}%`}} /><span className="playroom-copy"><strong>{label}</strong><small>{detail}</small></span><span className="playroom-action">{isMenu ? 'See what’s inside +' : 'Let’s go ↗'}</span></span>
  if (theme === 'aurora' || theme === 'blueprint') return <span className="concept-card"><span className="concept-symbol"><ThemeGlyph art={art} /></span><span className="concept-number">{number} / {isMenu ? 'COLLECTION' : 'DESTINATION'}</span><strong>{label}</strong><small>{detail}</small><span className="concept-action">{isMenu ? 'Open collection +' : 'Explore ↗'}</span></span>
  if (theme === 'studio') return <span className="studio-card"><span className="studio-art"><ThemeGlyph art={art} /><span aria-hidden="true">{number} / WZXU</span></span><span className="studio-copy"><small>{isMenu ? 'CURATED COLLECTION' : 'EXPLORE THE PROJECT'}</small><strong>{label}</strong><span>{detail}</span><b>{isMenu ? 'Browse collection +' : 'Explore destination ↗'}</b></span></span>
  return <span className="hub-demo-tile-content">{theme === 'terminal' && <span className="terminal-glyph"><ThemeGlyph art={art} /></span>}<span className="hub-demo-number" aria-hidden="true">{number}</span><span className="hub-demo-tile-copy"><strong>{label}</strong><small>{detail}</small></span><span className="hub-demo-arrow" aria-hidden="true">{isMenu ? "+" : "↗"}</span></span>
}
function BlueprintDrawing({ subject }) {
  return <svg className="blueprint-drawing" viewBox="0 0 1000 1000" fill="none" aria-hidden="true">
    <defs><pattern id="bp-grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" stroke="currentColor" strokeWidth=".4" /></pattern></defs>
    <rect x="20" y="20" width="960" height="960" stroke="currentColor" /><rect x="35" y="35" width="930" height="930" fill="url(#bp-grid)" />
    <g stroke="currentColor" strokeWidth="2">
    {subject === 'workshop' ? <><path d="M140 180H840V760H140z M155 195H825V745H155z M450 195V420H825 M450 490V745 M155 490H350 M420 490H450 M570 420V195 M690 420V195 M155 600H350V745 M200 260h190v150H200z M510 520h250v80H510z M510 650h250v50H510z" /><path d="M350 490v-70a70 70 0 0 1 70 70 M450 420h70a70 70 0 0 1-70 70" strokeDasharray="5 5" /><path d="M100 180v580 M90 180h30 M90 760h30 M140 140h700 M140 130v30 M840 130v30" /><text x="370" y="120">12 000 mm</text><text x="230" y="560">CREATIVE WORKSHOP</text></> : subject === 'controller' ? <><path d="M300 300h400c90 0 185 320 120 350s-150-140-220-140H400c-70 0-155 170-220 140S210 300 300 300z" /><path d="M315 350v120 M255 410h120 M500 300V170h180" /><circle cx="680" cy="380" r="25" /><circle cx="740" cy="430" r="25" /><circle cx="620" cy="430" r="25" /><circle cx="680" cy="480" r="25" /><circle cx="410" cy="470" r="35" /><circle cx="550" cy="470" r="35" /><path d="M150 720H850 M150 700v40 M850 700v40 M500 120v650" strokeDasharray="8 6" /><text x="340" y="770">CONTROLLER / EXPLODED STUDY</text></> : <><path d="M500 120 575 350 800 680 570 610 550 760 450 760 430 610 200 680 425 350z M500 120V760 M425 350h150 M430 610h140 M450 760l-30 90h160l-30-90 M465 330l35-100 35 100z" /><circle cx="500" cy="480" r="50" /><path d="M150 120v730 M140 120h30 M140 850h30 M200 900h600 M200 880v40 M800 880v40 M300 540h400" strokeDasharray="6 5" /><text x="600" y="270">ORBITAL EXPLORER</text><text x="610" y="300">FLIGHT CONCEPT / 03</text></>}
    <path d="M40 930h920 M650 930v40 M810 930v40" /><text x="55" y="956">WZXU / CONCEPT ENGINEERING</text><text x="665" y="956">SCALE 1:20</text><text x="825" y="956">REV 01</text>
    </g></svg>
}
function HubPage() {
  const [theme, setTheme] = React.useState('comic')
  const [blueprintSubject, setBlueprintSubject] = React.useState('workshop')
  const [motionPaused, setMotionPaused] = React.useState(false)
  const [menu, setMenu] = React.useState(null)
  const [guide, setGuide] = React.useState(null)

  return (
    <main className={`business-card-page hub-v2 assembly-hub hub-demo-${theme} ${extraHubThemes[theme] ? 'hub-extra' : ''} ${theme.startsWith('win') ? 'hub-windows' : ''} ${['atari','nes','gameboy','snes','playstation','dreamcast','n64','genesis','gamecube','ps2','xbox','wii','ps3','xbox360','wiiu','ps4','xboxone','switch','ps5','seriesx','switch2'].includes(theme) ? 'hub-console' : ''}`}  aria-labelledby="brand-title" data-motion-paused={motionPaused} data-blueprint={blueprintSubject}>
      {consoleAmbience[theme] && <ConsoleAmbientButtons theme={theme} />}
      {['winxp', 'winvista', 'win7', 'win81', 'win10', 'win11'].includes(theme) && <div className="windows-original-wallpaper" aria-hidden="true" style={{backgroundImage: `url(${assetPath('hub-themes/' + theme + '-original.jpg')})`}} />}
      {theme === 'blueprint' && <BlueprintDrawing subject={blueprintSubject} />}
      {theme === 'terminal' && <div className="crt-static" aria-hidden="true" />}
      <div className="hub-content">
        <section className="link-hub-card" aria-label="WZXU link hub">
          <section className="hub-demo-switcher hub-compact-switcher" aria-label="Hub appearance">
            <label className="hub-style-label" htmlFor="hub-style">Style</label>
            <select id="hub-style" value={theme} onChange={event => setTheme(event.target.value)}>
              <option value="comic">Midnight Electric</option>
              <optgroup label="Windows desktops">{hubDemoStyles.filter(style => style.id.startsWith('win') || style.id === 'desktop').map(style => <option key={style.id} value={style.id}>{style.name}</option>)}</optgroup>
              <optgroup label="Retro consoles">{hubDemoStyles.filter(style => ['atari','nes','gameboy','snes','playstation','dreamcast','n64','genesis','gamecube','ps2','xbox','wii','ps3','xbox360','wiiu','ps4','xboxone','switch','ps5','seriesx','switch2'].includes(style.id)).map(style => <option key={style.id} value={style.id}>{style.name}</option>)}</optgroup>
              <optgroup label="Creative styles">{hubDemoStyles.filter(style => style.id !== 'comic' && style.id !== 'desktop' && !style.id.startsWith('win') && !['atari','nes','gameboy','snes','playstation','dreamcast','n64','genesis','gamecube','ps2','xbox','wii','ps3','xbox360','wiiu','ps4','xboxone','switch','ps5','seriesx','switch2'].includes(style.id)).map(style => <option key={style.id} value={style.id}>{style.name}</option>)}</optgroup>
            </select>
            <button className="theme-motion-toggle" type="button" aria-pressed={motionPaused} onClick={() => setMotionPaused(value => !value)}>{motionPaused ? 'Resume motion' : 'Pause motion'}</button>
            {theme === 'blueprint' && <label className="hub-subject-label">Drawing <select aria-label="Drawing" value={blueprintSubject} onChange={event => setBlueprintSubject(event.target.value)}><option value="workshop">Workshop</option><option value="controller">Controller</option><option value="spacecraft">Spacecraft</option></select></label>}
          </section>
          {theme === 'terminal' && <div className="terminal-scope" aria-hidden="true"><span /><i /><b>WZXU / SIGNAL MONITOR</b></div>}
          {extraHubThemes[theme] ? <ExtraThemeHeader theme={theme} /> : theme === 'aurora' || theme === 'blueprint' ? <header className="concept-brand"><span>{theme === 'aurora' ? 'WZXU / A UNIVERSE OF IDEAS' : 'WZXU DESIGN OFFICE / SHEET 001'}</span><h1 id="brand-title">{theme === 'aurora' ? <>Find your<br /><em>next spark.</em></> : <>Built from<br /><em>curiosity.</em></>}</h1><p>Wulfzx.Underground — tools, games, music, and original worlds.</p><small>{theme === 'aurora' ? 'Eight doors. Endless possibilities.' : 'SELECT A MODULE BELOW TO EXPLORE →'}</small></header> : theme === 'comic' ? <header className="assembly-header hub-midnight-header">
            <h1 id="brand-title"><img src={assetPath('assembly/midnight-electric.webp')} alt="WZXU · Wulfzx.Underground" fetchPriority="high" /></h1>
          </header> : theme === 'editorial' ? <header className="index-brand"><div className="index-topline"><span>WZXU / INDEPENDENT STUDIO</span><span>THE LINK INDEX</span></div><h1 id="brand-title">Good ideas.<br /><em>Built to explore.</em></h1><div className="index-intro"><p>Wulfzx.Underground</p><p>A collection of practical tools, original projects, games, and creative work. Choose your next destination.</p></div></header> : theme === 'playroom' ? <header className="playroom-brand"><span className="playroom-note">WELCOME TO MY CORNER OF THE INTERNET</span><h1 id="brand-title">Serious ideas.<br /><span>Playful energy.</span></h1><p>WZXU · Wulfzx.Underground</p><span className="playroom-stamp" aria-hidden="true">MADE<br />TO CLICK ✦</span><p className="playroom-intro">Pick a card. Find a game, a handy tool, or your next favorite creator.</p></header> : <header className="hub-demo-brand"><span className="hub-demo-eyebrow">{theme === 'terminal' ? 'WZXU NETWORK / CONNECTION ESTABLISHED' : 'INDEPENDENT CREATOR & BUILDER'}</span><h1 id="brand-title">WZXU<span>Wulfzx.Underground</span></h1><p>{theme === 'terminal' ? 'SELECT A DESTINATION TO ESTABLISH CONNECTION_' : 'Digital tools. Original worlds. Built with purpose.'}</p>{theme === 'terminal' ? <div className="terminal-status"><span>● SYSTEM ONLINE</span><span>08 DESTINATIONS / READY</span></div> : <div className="studio-signature" aria-hidden="true"><span>W</span><small>DESIGN × TECHNOLOGY<br />INDEPENDENT BY NATURE</small></div>}</header>}
          <nav onPointerDown={updateTilePress} onPointerUp={updateTilePress} onPointerCancel={updateTilePress}
            id="workshop-shortcuts" tabIndex={-1} className="assembly-tiles" aria-label="Workshop shortcuts">
            {workshopTiles.map(([art, label, href]) => href.startsWith('#') ? (
              <button key={art} type="button" aria-haspopup="dialog" className={'assembly-tile assembly-' + art}
                onClick={(event) => setMenu({ art, category: label, trigger: event.currentTarget })}>
                <HubTileVisual art={art} label={label} theme={theme} isMenu={href.startsWith("#")} />
                <span className="assembly-mark" aria-hidden="true">☰</span>
              </button>
            ) : (
              <a key={art} className={'assembly-tile assembly-' + art} href={href}
                target={href.startsWith('https://') ? '_blank' : undefined}
                rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}>
                <HubTileVisual art={art} label={label} theme={theme} isMenu={href.startsWith("#")} />
                {art !== 'radio' && art !== 'camera' && <span className="assembly-mark" aria-hidden="true">{href.startsWith('https://') ? '↗' : '→'}</span>}
              </a>
            ))}
          </nav>
          <a className="assembly-support" href={destination('cashapp')} target="_blank" rel="noreferrer">Support WZXU on Cash App ↗</a>
        </section>
      </div>
      {menu && <WorkshopMenu {...menu} theme={theme} onGuide={setGuide} onClose={() => { setMenu(null); requestAnimationFrame(() => menu.trigger.focus()) }} />}
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
