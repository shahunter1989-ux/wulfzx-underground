const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`

export const links = {
  youtube: 'https://www.youtube.com/@Wulfzx.underground',
  linktree: 'https://linktr.ee/Wulfzx',
  guide76: 'https://wulfzx-wasteland-wise-guide.lovable.app/',
  guide76Hosted: '/wasteland-companion-guide-app/index.html',
  guide76Local: '/wasteland-companion-guide-app/index.html',
  guide76Landing: '/wasteland-companion-guide/',
  guide76SiloCodes: 'https://shahunter1989-ux.github.io/wulfzx-underground-silo-codes/',
  guide76SiloCodesInternal: '/wasteland-companion-guide-app/weekly-silo-codes/index.html',
  discord: 'https://discord.gg/dRpQjcEj',
  qaPortal: 'https://web-production-97ee.up.railway.app/',
  opsClock: 'https://crewmate-daylong-astrology.ngrok-free.dev/login',
  websiteSample: 'https://wzxuwebview.lovable.app/',
  basicBusinessCard: 'https://wzxulink.lovable.app/',
  standardPhotoBusinessCard: 'https://wzxu-photo-demo-1.vercel.app/',
  nukaCardDemo: 'https://wzxunukacard.lovable.app/',
  lunaDailyVlogs: 'https://shahunter1989-ux.github.io/luna-daily-vlogs/index.html',
  premiumBusinessCardDemo: 'https://shahunter1989-ux.github.io/wzxu-coffee-sd/',
  gtaCountdown: 'https://gta-vi-countdown-sable.vercel.app/',
  email: 'wulfzxunderground@gmail.com',
  githubTraffic: 'https://github.com/shahunter1989-ux/wulfzx-underground/graphs/traffic',
  githubActions: 'https://github.com/shahunter1989-ux/wulfzx-underground/actions',
  gmailMessages: 'https://mail.google.com/mail/u/0/#search/%22WULFZX+Underground%22',
}

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Linktree Shop', href: '#linktree' },
  { label: '76 Guide', href: links.guide76Landing },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Music', href: '/painter-of-dreams/' },
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
    image: assetPath('wulfzx-linktree-shop-opt.webp'),
    imageAlt: 'WULFZX Underground Linktree Shop artwork',
    variant: 'linktree',
  },
  {
    title: 'Fallout 76 Guide',
    id: 'fallout-76-guide',
    eyebrow: 'Guide',
    description: 'The WULFZX Wasteland Guide with builds, resources, and survival support.',
    cta: 'Open Guide Page',
    href: links.guide76Landing,
    image: assetPath('wulfzx-76-guide-opt.webp'),
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
    image: assetPath('wulfzx-qa-portal-opt.webp'),
    imageAlt: 'WULFZX Underground WZXQA Portal artwork',
  },
  {
    title: 'Staff Portal',
    id: 'staff-portal',
    eyebrow: 'Ops Clock',
    description: 'Clock-in and staff operations access for WULFZX team members.',
    cta: 'Staff Login',
    href: links.opsClock,
    image: assetPath('wulfzx-staff-portal-opt.webp'),
    imageAlt: 'WULFZX Underground Staff Portal artwork',
  },
]

export const gameCards = [
  {
    title: 'Duck Duck Nuke',
    meta: 'Arcade - Launch - Action',
    description: 'A chaotic duck-powered launch game built for quick runs, explosive timing, and score chasing.',
    href: 'https://shahunter1989-ux.github.io/duck-duck-nuke/?v=launch-check',
    image: assetPath('duck-duck-nuke-opt.webp'),
    imageAlt: 'Duck Duck Nuke game artwork with characters riding a rocket',
  },
  {
    title: 'WZX Pong',
    meta: 'Arcade - Neon - Versus',
    description: 'A WULFZX-styled Pong build with fast rallies, clean controls, and neon arcade energy.',
    href: 'https://shahunter1989-ux.github.io/wzx-pong/',
    image: assetPath('wzx-pong-opt.webp'),
    imageAlt: 'WZX Pong neon arcade artwork with glowing paddles and ball',
  },
  {
    title: 'How Far Will Your Duck Flap?',
    meta: 'Tap - Distance - Score Run',
    description: 'A bright tap-to-flap distance challenge built for clean timing and quick replay attempts.',
    href: 'https://shahunter1989-ux.github.io/how-far-will-your-duck-fly/',
    image: assetPath('how-far-duck-flap-opt.webp'),
    imageAlt: 'How Far Will Your Duck Flap game artwork with a duck flying through a bright sky',
  },
]

export const connectLinks = [
  {
    title: 'Discord',
    status: 'Join My Server',
    href: links.discord,
    symbol: 'DC',
    image: assetPath('wulfzx-discord-opt.webp'),
    imageAlt: 'WULFZX Underground Discord icon',
  },
  {
    title: 'YouTube',
    status: '@Wulfzx.underground',
    href: links.youtube,
    symbol: 'YT',
    image: assetPath('wulfzx-youtube-opt.webp'),
    imageAlt: 'WULFZX Underground YouTube icon',
  },
  {
    title: 'Linktree Shop',
    status: 'Shop and WULFZX links',
    href: links.linktree,
    symbol: 'LT',
    image: assetPath('wulfzx-linktree-shop-opt.webp'),
    imageAlt: 'WULFZX Underground Linktree Shop icon',
  },
  {
    title: 'WZXQA Portal',
    status: 'Bug reports and live status',
    href: links.qaPortal,
    symbol: 'QA',
    image: assetPath('wulfzx-qa-portal-opt.webp'),
    imageAlt: 'WULFZX Underground WZXQA Portal icon',
  },
  {
    title: 'Staff Login',
    status: 'Ops Clock access',
    href: links.opsClock,
    symbol: 'OP',
    image: assetPath('wulfzx-staff-portal-opt.webp'),
    imageAlt: 'WULFZX Underground Staff Login icon',
  },
]

export const ownerDashboardLinks = [
  {
    title: 'Traffic Insights',
    category: 'GitHub Login',
    description: 'Open GitHub traffic data for the WULFZX Underground Pages repository.',
    status: 'Owner access',
    href: links.githubTraffic,
  },
  {
    title: 'Deploy Status',
    category: 'GitHub Pages',
    description: 'Check recent builds, deploy runs, and publishing status for the live site.',
    status: 'Owner access',
    href: links.githubActions,
  },
  {
    title: 'Contact Messages',
    category: 'Gmail Login',
    description: 'Open a Gmail search for WULFZX Underground contact form messages.',
    status: 'Owner access',
    href: links.gmailMessages,
  },
  {
    title: 'WZXQA Portal',
    category: 'Operations',
    description: 'Open the live QA portal for reports, status, tester forms, and project tracking.',
    status: 'Live portal',
    href: links.qaPortal,
    image: assetPath('wulfzx-qa-portal-opt.webp'),
    imageAlt: 'WULFZX Underground WZXQA Portal artwork',
  },
]

export const aiImageCreation = {
  title: 'AI Image Creation',
  subtitle: 'Premium AI artwork made just for you.',
  price: 'Custom images starting at $1.',
  ctaLabel: 'Request AI Artwork',
  ctaHref: '/contact/',
  features: [
    'Unique creations based on your idea, vibe, theme, or style.',
    'No templates - every image is made to feel original.',
    'Flexible styles including cute, luxury, gaming, anime, cartoon, cinematic, realistic, fantasy, and more.',
    'Personalized details, colors, mood, background, and composition.',
    'Great for profile pictures, posters, flyers, characters, gaming content, social media, thumbnails, and brand visuals.',
    'Prices vary depending on detail, complexity, revisions, and final style.',
  ],
  focus: 'Your idea turned into a polished AI image with a custom creative touch.',
}

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
        image: assetPath('wulfzx-qa-portal-opt.webp'),
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
        image: assetPath('duck-duck-nuke-opt.webp'),
        imageAlt: 'Duck Duck Nuke game artwork',
      },
      {
        title: 'WZX Pong',
        category: 'Live game',
        description: 'A neon WULFZX arcade build with fast rallies, clean controls, and versus energy.',
        status: 'Play now',
        href: 'https://shahunter1989-ux.github.io/wzx-pong/',
        image: assetPath('wzx-pong-opt.webp'),
        imageAlt: 'WZX Pong neon arcade artwork',
      },
      {
        title: 'How Far Will Your Duck Flap?',
        category: 'Live game',
        description: 'A bright tap-to-flap distance challenge built for quick retries and timing practice.',
        status: 'Play now',
        href: 'https://shahunter1989-ux.github.io/how-far-will-your-duck-fly/',
        image: assetPath('how-far-duck-flap-opt.webp'),
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
        href: links.guide76Landing,
        image: assetPath('wulfzx-76-guide-opt.webp'),
        imageAlt: 'WULFZX Fallout 76 Wasteland Guide artwork',
      },
      {
        title: 'Basic Digital Business Card',
        category: 'Third-party sample',
        description:
          'A basic third-party digital card sample. WULFZX can create this same simple link-hub style with in-house tools when a client wants a cleaner owned build.',
        status: 'Open demo',
        href: links.basicBusinessCard,
        icon: 'external-link',
        variant: 'basic-card',
      },
      {
        title: 'Standard Digital Business Card',
        category: 'Standard tier demo',
        description:
          'A WULFZX-built photography business card demo made with in-house tools, showing a cleaner standard package with profile, portfolio-style visuals, and contact-ready presentation.',
        status: 'Open demo',
        href: links.standardPhotoBusinessCard,
        icon: 'aperture',
        variant: 'standard-card',
      },
      {
        title: 'Atomic Digital Business Card',
        category: 'Enhanced standard demo',
        description:
          'A one-page WULFZX demo with animation, themed visuals, and flexible feature sections for clients who want more personality than a basic card without needing a full premium package.',
        status: 'Open demo',
        href: links.nukaCardDemo,
        image: assetPath('nuka-card-preview.webp'),
        imageAlt: 'Atomic digital business card website preview',
        variant: 'nuka-card',
      },
      {
        title: 'Creator Vlog Website',
        category: 'Creator site demo',
        description:
          'A live Luna Daily Vlogs sample for a creator-style website, featuring a clean homepage, video-focused sections, and a simple contact flow.',
        status: 'Open demo',
        href: links.lunaDailyVlogs,
        image: assetPath('luna-daily-vlogs-preview.webp'),
        imageAlt: 'Luna Daily Vlogs creator website preview',
        variant: 'luna-vlog',
      },
      {
        title: 'Premium Digital Business Card',
        category: 'Premium service demo',
        description:
          'A premium pet-focused business card demo for Coffee, built to show custom branding, personality, visuals, and a polished WULFZX-hosted presentation.',
        status: 'Open demo',
        href: links.premiumBusinessCardDemo,
        image: assetPath('coffee-profile-real.jpg'),
        imageAlt: 'Coffee the Chihuahua profile photo on a Ford Mustang hood',
        variant: 'premium-card',
      },
      {
        title: 'GTA VI Countdown Timer',
        category: 'Hosted tool demo',
        description:
          'A countdown website built with WULFZX tools and hosted from the WULFZX side as a product-quality public demo.',
        status: 'Open countdown',
        href: links.gtaCountdown,
        image: assetPath('gta-vi-countdown-icon.jpg'),
        imageAlt: 'Neon VI artwork for the GTA VI countdown timer demo',
        variant: 'gta-countdown',
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

export const businessCardPricing = {
  title: 'Business Card Pricing',
  intro:
    'Professional digital business card packages by Wulfzx.Underground. One link, your brand, and a polished mobile-ready hub built to represent you.',
  tiers: [
    {
      title: 'Standard Tier',
      price: '$99-$149',
      label: 'One-time payment',
      summary: 'Simple, polished, ready to share.',
      features: [
        'Fully branded digital business card',
        'Mobile-friendly and contact-ready',
        'Easy to share across any platform',
        'Basic customization for colors, links, and info',
        '1 revision included',
      ],
    },
    {
      title: 'Premium Tier',
      price: '$299-$399',
      label: 'One-time payment',
      summary: 'Custom, powerful, built for more.',
      features: [
        'Full customization to match your brand',
        'Advanced features and integrations',
        'Future expansion potential as your needs grow',
        'Designed for professionals who want more',
        'Priority setup and delivery',
      ],
    },
  ],
  services: [
    {
      title: 'One-Time Setup',
      price: 'Starting at $99-$149',
      description:
        'Your digital business card is professionally designed and built specifically for your brand.',
      items: [
        'Professional custom design',
        'Mobile-friendly layout',
        'Contact information',
        'Social media links',
        'Portfolio, photos, videos, and more',
        'One revision included',
        'Courtesy post-launch quality check',
        'You own your digital business card',
      ],
    },
    {
      title: 'Pay-As-You-Go Updates',
      price: 'Small update - $10',
      description:
        'Only pay when you need changes. Includes up to 8 minor updates within a 7-day period.',
      items: [
        'Updating links',
        'Replacing photos',
        'Editing text',
        'Updating contact information',
        'Adding or removing social media links',
        'Updating business hours',
      ],
    },
    {
      title: 'Monthly Care Plan',
      price: 'Starting at $10/month',
      description: 'Designed for businesses that update their information regularly.',
      items: [
        'Up to 2 scheduled update sessions per week',
        'Priority scheduling',
        'Minor text and image changes',
        'Link updates',
        'Routine maintenance',
        'Courtesy quality monitoring',
      ],
    },
    {
      title: 'Larger Updates',
      price: 'Custom quote',
      description:
        'Projects requiring new sections, major design changes, new features, or extensive content additions may require a custom quote before work begins.',
      items: ['New sections', 'Major design changes', 'New features', 'Extensive content additions'],
    },
    {
      title: 'Project Ownership',
      price: 'You own it',
      description:
        'Your digital business card belongs to you. If you move providers or host it yourself, project files can be provided when applicable.',
      items: ['HTML, CSS, JavaScript, and related assets', 'No forced long-term contracts', 'Built for your brand'],
    },
  ],
}
