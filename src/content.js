const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`

export const links = {
  youtube: 'https://www.youtube.com/@Wulfzx.underground',
  fallout76Instagram: 'https://www.instagram.com/wzxu76/',
  fallout76Discord: 'https://discord.gg/xSCtRYn4p',
  fallout76Youtube: 'https://www.youtube.com/@WZXU76',
  dayRange: 'https://wzxu-coder.github.io/dayrange/',
  invoiceMaker: 'https://wzxu-invoice-maker.vercel.app/',
  invoiceMakerImage: assetPath('wzxu-invoice-maker.png'),
  sellerInventory: 'https://wzxu-seller-inventory.vercel.app/',
  sellerInventoryImage: assetPath('wzxu-seller-inventory.png'),
  qrCodeMaker: 'https://wzxu-qr-code-maker-web.vercel.app/',
  qrCodeMakerLogo: assetPath('wzxu-qr-code-maker-logo.png'),
  qrCodeMakerIcon: assetPath('wzxu-qr-code-maker-icon.png'),
  magic8Ball: 'https://wzxu-magic-8-ball.vercel.app/',
  linktree: 'https://linktr.ee/Wulfzx',
  guide76: 'https://wzxu76.pro/',
  guide76Landing: '/wasteland-companion-guide/',
  guide76SiloCodes: 'https://shahunter1989-ux.github.io/wulfzx-underground-silo-codes/',
  discord: 'https://discord.gg/dRpQjcEj',
  opsClock: 'https://crewmate-daylong-astrology.ngrok-free.dev/login',
  websiteSample: 'https://wzxuwebview.lovable.app/',
  basicBusinessCard: 'https://wzxulink.lovable.app/',
  standardPhotoBusinessCard: 'https://wzxu-photo-demo-1.vercel.app/',
  nukaCardDemo: 'https://wzxunukacard.lovable.app/',
  lunaDailyVlogs: 'https://shahunter1989-ux.github.io/luna-daily-vlogs/index.html',
  darkBookClubDemo: 'https://wzxudarkclub.lovable.app/',
  sparkBeautyFolio: 'https://spark-beauty-folio.lovable.app/',
  premiumBusinessCardDemo: 'https://shahunter1989-ux.github.io/wzxu-coffee-sd/',
  gtaCountdown: 'https://gta-vi-countdown-sable.vercel.app/',
  email: 'wulfzxunderground@gmail.com',
  githubTraffic: 'https://github.com/shahunter1989-ux/wulfzx-underground/graphs/traffic',
  githubActions: 'https://github.com/shahunter1989-ux/wulfzx-underground/actions',
  gmailMessages: 'https://mail.google.com/mail/u/0/#search/%22WULFZX+Underground%22',
}

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: '76 Guide', href: links.guide76Landing },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Music', href: '/painter-of-dreams/' },
  { label: 'Connect', href: '#connect' },
]

export const featureTiles = [
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
    title: 'WZXU Seller Inventory',
    id: 'seller-inventory',
    eyebrow: 'Business Tool',
    description: 'An offline-first inventory workspace for independent sellers to organize products, photos, activity, and backups.',
    cta: 'Open Inventory App',
    href: links.sellerInventory,
    image: links.sellerInventoryImage,
    imageAlt: 'WZXU Seller Inventory app icon',
    variant: 'seller-inventory',
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
    title: 'WZXU76 Discord',
    status: 'Fallout 76 community server',
    href: links.fallout76Discord,
    symbol: 'DC',
    image: assetPath('wulfzx-discord-opt.webp'),
    imageAlt: 'WZXU76 Fallout 76 Discord icon',
  },
  {
    title: 'WZXU76 YouTube',
    status: 'Fallout 76 videos and updates',
    href: links.fallout76Youtube,
    symbol: 'YT',
    image: assetPath('wulfzx-youtube-opt.webp'),
    imageAlt: 'WZXU76 Fallout 76 YouTube icon',
  },
  {
    title: 'WZXU76 Instagram',
    status: 'Fallout 76 gaming Instagram',
    href: links.fallout76Instagram,
    symbol: 'IG',
    imageAlt: 'WZXU76 Fallout 76 Instagram icon',
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
    id: 'ai-creative',
    navLabel: 'AI Creative',
    title: 'AI Creative + Workflow Tools',
    intro: 'Creative AI services and workflow builds for custom visuals, project support, and polished digital tools.',
    cards: [
      {
        title: 'AI Workflow Builds',
        category: 'AI Tools',
        description: 'Custom AI-assisted workflows for organizing ideas, speeding up creative tasks, and turning project needs into practical tools.',
        status: 'In development',
        href: '#',
      },
    ],
  },
  {
    id: 'games-testing',
    navLabel: 'Games',
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
    id: 'apps-tools',
    navLabel: 'Apps & Tools',
    title: 'Apps + Tools',
    intro: 'Practical WULFZX-built apps and tools designed to make everyday organization and business workflows easier.',
    cards: [
      {
        title: 'DayRange by WZXU',
        category: 'Health organization app',
        description: 'A private glucose tracking and organization app with local-first storage, insights, and reports.',
        status: 'Open app',
        href: links.dayRange,
        image: assetPath('dayrange-cover.png'),
        imageAlt: 'DayRange by WZXU app logo',
        variant: 'dayrange',
      },
      {
        title: 'WZXU Invoice Maker',
        category: 'Business tool',
        description: 'Create professional invoices quickly and easily with a WZXU Business Tool.',
        status: 'Open app',
        href: links.invoiceMaker,
        image: links.invoiceMakerImage,
        imageAlt: 'WZXU Invoice Maker professional invoice artwork',
        variant: 'invoice-maker',
      },
      {
        title: 'WZXU Seller Inventory',
        category: 'Business inventory tool',
        description:
          'An offline-first business tool for independent sellers to organize inventory, product details, photos, activity, and backups locally on their device.',
        status: 'Open app',
        href: links.sellerInventory,
        image: links.sellerInventoryImage,
        imageAlt: 'WZXU Seller Inventory app icon',
        variant: 'seller-inventory',
      },
      {
        title: 'WZXU QR Code Maker',
        category: 'Private QR utility',
        description:
          'Create, customize, scan, save, and download QR codes for URLs, text, Wi-Fi, vCards, and more—locally in your browser with no account or tracking.',
        status: 'Open app',
        href: links.qrCodeMaker,
        image: links.qrCodeMakerLogo,
        imageAlt: 'WZXU QR Code Maker logo',
        variant: 'qr-code-maker',
      },
    ],
  },
  {
    id: 'guides-websites',
    navLabel: 'Websites',
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
        title: 'Book Club Website',
        category: 'One-page website demo',
        description:
          'A live Nocturne Reads demo for a themed book club website, showing a polished one-page experience with atmosphere, calls to action, featured content, and client-ready presentation.',
        status: 'Open demo',
        href: links.darkBookClubDemo,
        image: assetPath('dark-book-club-preview.webp'),
        imageAlt: 'Nocturne Reads dark romance book club website preview',
        variant: 'dark-book-club',
      },
      {
        title: 'Beauty Portfolio Website',
        category: 'Third-party portfolio demo',
        description:
          'A simple third-party makeup artist portfolio demo for Maya Noor, featuring service-focused presentation, selected work, and a clean contact path for bridal, editorial, and special-event clients.',
        status: 'Open demo',
        href: links.sparkBeautyFolio,
        image: assetPath('spark-beauty-portfolio-preview.webp'),
        imageAlt: 'Maya Noor makeup artist portfolio website preview',
        variant: 'spark-beauty',
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
    id: 'expansion-roadmap',
    navLabel: 'Roadmap',
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
