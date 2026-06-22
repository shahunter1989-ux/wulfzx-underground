const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`

export const links = {
  youtube: 'https://www.youtube.com/@Wulfzx.underground',
  linktree: 'https://linktr.ee/Wulfzx',
  guide76: 'https://wulfzx-wasteland-wise-guide.lovable.app/',
  discord: 'https://discord.gg/dRpQjcEj',
  qaPortal: 'https://web-production-97ee.up.railway.app/',
  opsClock: 'https://crewmate-daylong-astrology.ngrok-free.dev/login',
  websiteSample: 'https://wzxuwebview.lovable.app/',
}

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Linktree Shop', href: '#linktree' },
  { label: '76 Guide', href: '#fallout-76-guide' },
  { label: 'WZXQA Portal', href: '#wzxqa-portal' },
  { label: 'Staff', href: '#staff-portal' },
  { label: 'Connect', href: '#connect' },
]

export const featureTiles = [
  {
    title: 'Linktree Shop',
    id: 'linktree',
    eyebrow: 'Launchpad',
    description: 'Linktree shop and WULFZX links in one place.',
    cta: 'Open Linktree Shop',
    href: links.linktree,
    image: assetPath('wulfzx-linktree-shop.png'),
    imageAlt: 'WULFZX Underground Linktree Shop artwork',
    variant: 'linktree',
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
    image: assetPath('wulfzx-qa-portal.png'),
    imageAlt: 'WULFZX Underground WZXQA Portal artwork',
  },
  {
    title: 'Staff Portal',
    id: 'staff-portal',
    eyebrow: 'Ops Clock',
    description: 'Clock-in and staff operations access for WULFZX team members.',
    cta: 'Staff Login',
    href: links.opsClock,
    image: assetPath('wulfzx-staff-portal.png'),
    imageAlt: 'WULFZX Underground Staff Portal artwork',
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
  {
    title: 'Discord',
    status: 'Join My Server',
    href: links.discord,
    symbol: 'DC',
    image: assetPath('wulfzx-discord.png'),
    imageAlt: 'WULFZX Underground Discord icon',
  },
  {
    title: 'YouTube',
    status: '@Wulfzx.underground',
    href: links.youtube,
    symbol: 'YT',
    image: assetPath('wulfzx-youtube.png'),
    imageAlt: 'WULFZX Underground YouTube icon',
  },
  {
    title: 'Linktree Shop',
    status: 'Shop and WULFZX links',
    href: links.linktree,
    symbol: 'LT',
    image: assetPath('wulfzx-linktree-shop.png'),
    imageAlt: 'WULFZX Underground Linktree Shop icon',
  },
  {
    title: 'WZXQA Portal',
    status: 'Bug reports and live status',
    href: links.qaPortal,
    symbol: 'QA',
    image: assetPath('wulfzx-qa-portal.png'),
    imageAlt: 'WULFZX Underground WZXQA Portal icon',
  },
  {
    title: 'Staff Login',
    status: 'Ops Clock access',
    href: links.opsClock,
    symbol: 'OP',
    image: assetPath('wulfzx-staff-portal.png'),
    imageAlt: 'WULFZX Underground Staff Login icon',
  },
]

export const whatIDoSections = [
  {
    title: 'AI + QA Systems',
    intro: 'Public tools for quality tracking, project status, tester feedback, and future AI-assisted workflows.',
    cards: [
      {
        title: 'WZXQA Portal',
        category: 'Live QA',
        description: 'A public quality hub for bug reports, live guide and game status, tester forms, and project tracking.',
        status: 'Live portal',
        href: links.qaPortal,
        image: assetPath('wulfzx-qa-portal.png'),
        imageAlt: 'WULFZX Underground WZXQA Portal artwork',
      },
      {
        title: 'AI Workflow Builds',
        category: 'AI Tools',
        description: 'Custom AI-assisted workflows and tools that turn WULFZX ideas into useful public experiences.',
        status: 'In development',
        href: '#',
      },
    ],
  },
  {
    title: 'Games + Testing',
    intro: 'Playable browser games, status tracking, and tester pathways for launch checks and feedback.',
    cards: [
      {
        title: 'Duck Duck Nuke',
        category: 'Live game',
        description: 'Chaotic duck-powered launch gameplay with explosive timing and quick score-chasing runs.',
        status: 'Play now',
        href: 'https://shahunter1989-ux.github.io/duck-duck-nuke/?v=launch-check',
        image: assetPath('duck-duck-nuke.jpeg'),
        imageAlt: 'Duck Duck Nuke game artwork',
      },
      {
        title: 'WZX Pong',
        category: 'Live game',
        description: 'A neon WULFZX arcade build with fast rallies, clean controls, and versus energy.',
        status: 'Play now',
        href: 'https://shahunter1989-ux.github.io/wzx-pong/',
        image: assetPath('wzx-pong.png'),
        imageAlt: 'WZX Pong neon arcade artwork',
      },
      {
        title: 'How Far Will Your Duck Flap?',
        category: 'Live game',
        description: 'A bright tap-to-flap distance challenge built for quick retries and timing practice.',
        status: 'Play now',
        href: 'https://shahunter1989-ux.github.io/how-far-will-your-duck-fly/',
        image: assetPath('how-far-duck-flap.png'),
        imageAlt: 'How Far Will Your Duck Flap game artwork',
      },
    ],
  },
  {
    title: 'Guides + Websites',
    intro: 'Live public examples of WULFZX guides and custom web experiences.',
    cards: [
      {
        title: 'Fallout 76 Guide',
        category: 'Live guide',
        description: 'The WULFZX Wasteland Guide with builds, resources, and survival support.',
        status: 'Live guide',
        href: links.guide76,
        image: assetPath('wulfzx-76-guide.png'),
        imageAlt: 'WULFZX Fallout 76 Wasteland Guide artwork',
      },
    ],
  },
  {
    title: 'Expansion Roadmap',
    intro: 'The long-term direction is a larger WULFZX ecosystem of websites, apps, tools, experiments, and communities.',
    cards: [
      {
        title: 'Custom Websites',
        category: 'Web Builds',
        description:
          'A basic example business website, such as a tire shop or smoke shop. WULFZX builds custom websites around each customer and client need, from business pages to social media-focused hubs.',
        status: 'Live sample',
        href: links.websiteSample,
      },
      {
        title: 'AI-Assisted Apps',
        category: 'Apps + Tools',
        description: 'Useful apps and tools shaped with AI support, custom design, and hands-on WULFZX development.',
        status: 'In development',
        href: '#',
      },
      {
        title: 'Community Ecosystem',
        category: 'Community',
        description: 'A connected universe where players, creators, testers, and supporters can grow together.',
        status: 'Expanding soon',
        href: '#',
      },
      {
        title: 'Future Experiments',
        category: 'Research',
        description: 'New samples, prototypes, AI experiments, and creative builds will be added as the company grows.',
        status: 'In development',
        href: '#',
      },
    ],
  },
]
