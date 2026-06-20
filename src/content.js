const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`

export const links = {
  youtube: 'https://www.youtube.com/@Wulfzx.underground',
  linktree: 'https://linktr.ee/Wulfzx',
  guide76: 'https://wulfzx-wasteland-wise-guide.lovable.app/',
  discord: 'https://discord.gg/dRpQjcEj',
  qaPortal: 'https://web-production-97ee.up.railway.app/',
  opsClock: 'https://crewmate-daylong-astrology.ngrok-free.dev/login',
}

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Linktree', href: '#linktree' },
  { label: '76 Guide', href: '#fallout-76-guide' },
  { label: 'WZXQA Portal', href: '#wzxqa-portal' },
  { label: 'Staff', href: '#staff-portal' },
  { label: 'Connect', href: '#connect' },
]

export const featureTiles = [
  {
    title: 'Linktree',
    id: 'linktree',
    eyebrow: 'Launchpad',
    description: 'A central route into WULFZX sites, tools, project pages, and live links.',
    cta: 'Open Linktree',
    href: links.linktree,
    symbol: 'LT',
  },
  {
    title: 'Fallout 76 Guide',
    id: 'fallout-76-guide',
    eyebrow: 'Guide',
    description: 'The WULFZX Wasteland Guide with builds, resources, and survival support.',
    cta: 'Visit 76 Guide',
    href: links.guide76,
    image: assetPath('wulfzx-76-guide.png'),
    imageAlt: 'WULFZX Fallout 76 Wasteland Guide artwork',
    variant: 'gold',
  },
  {
    title: 'WZXQA Portal',
    id: 'wzxqa-portal',
    eyebrow: 'Game QA',
    description: 'Bug reports, guide and game status, tester forms, and admin access.',
    cta: 'Open Portal',
    href: links.qaPortal,
    symbol: 'QA',
  },
  {
    title: 'Staff Portal',
    id: 'staff-portal',
    eyebrow: 'Ops Clock',
    description: 'Clock-in and staff operations access for WULFZX team members.',
    cta: 'Staff Login',
    href: links.opsClock,
    symbol: 'OPS',
  },
]

export const gameCards = [
  {
    title: 'Duck Duck Nuke',
    meta: 'Arcade - Launch - Action',
    description: 'A chaotic duck-powered launch game built for quick runs, explosive timing, and score chasing.',
    href: 'https://shahunter1989-ux.github.io/duck-duck-nuke/?v=launch-check',
    image: assetPath('duck-duck-nuke.jpeg'),
    imageAlt: 'Duck Duck Nuke game artwork with characters riding a rocket',
  },
  {
    title: 'WZX Pong',
    meta: 'Arcade - Neon - Versus',
    description: 'A WULFZX-styled Pong build with fast rallies, clean controls, and neon arcade energy.',
    href: 'https://shahunter1989-ux.github.io/wzx-pong/',
    image: assetPath('wzx-pong.png'),
    imageAlt: 'WZX Pong neon arcade artwork with glowing paddles and ball',
  },
  {
    title: 'How Far Will Your Duck Flap?',
    meta: 'Tap - Distance - Score Run',
    description: 'A bright tap-to-flap distance challenge built for clean timing and quick replay attempts.',
    href: 'https://shahunter1989-ux.github.io/how-far-will-your-duck-fly/',
    image: assetPath('how-far-duck-flap.png'),
    imageAlt: 'How Far Will Your Duck Flap game artwork with a duck flying through a bright sky',
  },
]

export const connectLinks = [
  { title: 'Discord', status: 'Join My Server', href: links.discord, symbol: 'DC' },
  { title: 'YouTube', status: '@Wulfzx.underground', href: links.youtube, symbol: 'YT' },
  { title: 'Linktree', status: 'All WULFZX links', href: links.linktree, symbol: 'LT' },
  { title: 'WZXQA Portal', status: 'Bug reports and live status', href: links.qaPortal, symbol: 'QA' },
  { title: 'Staff Login', status: 'Ops Clock access', href: links.opsClock, symbol: 'OP' },
]
