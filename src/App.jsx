import React from 'react'
import MainWebsite from './MainWebsite'

const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`

const links = [
  {
    title: 'Official Website',
    description: 'Main Wulfzx.Underground official website.',
    href: `${import.meta.env.BASE_URL}main/`,
    accent: 'blue',
    isInternal: true,
    Icon: WebsiteIcon,
  },
  {
    title: 'WULFZX Fallout 76 Wasteland Guide',
    description: 'External Link',
    href: 'https://wzxu76.pro',
    accent: 'silver',
    Icon: WastelandIcon,
  },
  {
    title: 'Cash App',
    description: 'Support Wulfzx.Underground.',
    href: 'https://cash.app/$wulfzx',
    accent: 'green',
    image: assetPath('business-card-cashapp.png'),
    imageAlt: 'Wulfzx.Underground Cash App themed icon',
  },
  {
    title: 'TikTok',
    description: 'Follow Wulfzx on TikTok.',
    href: 'https://www.tiktok.com/@wulfzx',
    accent: 'social',
    Icon: TikTokIcon,
  },
  {
    title: 'Discord',
    description: 'Join the Wulfzx.Underground community.',
    href: 'https://discord.com/invite/dRpQjcEj',
    accent: 'blue',
    image: assetPath('business-card-discord.png'),
    imageAlt: 'Wulfzx.Underground Discord themed icon',
  },
]

function App() {
  const isMainWebsiteRoute = window.location.pathname.startsWith(`${import.meta.env.BASE_URL}main/`)

  if (isMainWebsiteRoute) {
    return <MainWebsite />
  }

  return <HubPage />
}

function HubPage() {
  return (
    <main className="business-card-page" aria-labelledby="brand-title">
      <CircuitBackdrop />
      <section className="link-hub-card" aria-label="Wulfzx.Underground premium digital business card demo">
        <header className="brand-hero">
          <div className="logo-frame">
            <img
              src={assetPath('business-card-wulfzx-logo.png')}
              alt="Wulfzx.Underground cybernetic wolf logo"
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
    </main>
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
      className={`link-button link-button-${link.accent}`}
      href={link.href}
      target={link.isInternal ? undefined : '_blank'}
      rel={link.isInternal ? undefined : 'noreferrer'}
      aria-label={`${link.title}: ${link.description}`}
    >
      <span className="link-icon">
        {link.image ? <img src={link.image} alt={link.imageAlt} loading="lazy" /> : <Icon />}
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
      <circle cx="32" cy="32" r="23" />
      <path d="M9 32h46M32 9c7 7 10 15 10 23S39 48 32 55M32 9c-7 7-10 15-10 23s3 16 10 23" />
      <path d="M15 20h34M15 44h34" />
    </svg>
  )
}

function WastelandIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Custom wasteland tech guide icon">
      <path d="M15 11h26l8 8v34H15z" />
      <path d="M41 11v10h10M22 28h20M22 36h15" />
      <path d="M20 50l7-8 6 5 8-11 6 14" />
      <circle cx="47" cy="48" r="4" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Custom cyber social video icon">
      <path d="M38 10v27.5c0 8-6.2 14.5-14.2 14.5S10 46.4 10 39.3 15.9 26 23.6 26c1.5 0 2.9.2 4.2.7v9.8a6 6 0 1 0 2.2 4.6V10z" />
      <path d="M38 10c2.4 7.3 7.4 12.2 16 12.9v10.3c-6.9-.1-12.1-2.3-16-6" />
      <path d="M17 18h7M12 23h4M48 41h5M42 47h8" />
    </svg>
  )
}

export default App
