import React from 'react'
import { connectLinks, featureTiles, gameCards, links, navItems, ownerDashboardLinks, whatIDoSections } from './content'

const assetPath = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`
const homePath = import.meta.env.BASE_URL
const whatIDoPath = `${homePath}what-i-do/`
const contactPath = `${homePath}contact/`
const ownerPath = `${homePath}owner/`
const galleryPath = `${homePath}gallery/`
const painterOfDreamsPath = `${homePath}painter-of-dreams/`
const wastelandGuidePath = `${homePath}wasteland-companion-guide/`
const contactFormEndpoint = `https://formsubmit.co/ajax/${links.email}`
const analyticsMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()
const ENTRY_ACK_KEY = 'wulfzx_entry_ack_v1'
const ENTRY_LANG_KEY = 'wulfzx_entry_lang_v1'
const ENTRY_TEXT_SIZE_KEY = 'wulfzx_entry_text_size_v1'
const ENTRY_ACK_VERSION = 1
const ENTRY_ACK_DURATION_MS = 30 * 24 * 60 * 60 * 1000
const entryLanguages = ['en', 'es']
const entryTextSizes = ['compact', 'normal', 'large']
const fxClasses = ['text-fx-drift-x', 'text-fx-drift-y', 'text-fx-static', 'text-fx-glow', 'text-fx-still']

const entryAgreementContent = {
  en: {
    languageLabel: 'English',
    backgroundImage: 'wulfzx-entry-agreement.png',
    brandAlt: 'WULFZX Underground AI Company',
    titleStart: 'Welcome to',
    titleBrand: 'Wulfzx.Underground',
    titleLabel: 'Welcome to Wulfzx.Underground',
    tagline: 'Create. Build. Entertain. Inspire.',
    intro: [
      'Welcome to Wulfzx.Underground. This community was built to encourage creativity, learning, collaboration, gaming, technology, AI innovation, and positive interaction between people from all backgrounds.',
      'We believe that ideas, opinions, perspectives, and respectful discussions are welcome here. Our goal is to provide a safe and welcoming environment where individuals can create, share, learn, and grow together.',
    ],
    sections: [
      {
        title: 'Community Standards',
        points: [
          'Respect others and their opinions.',
          'Constructive discussions are encouraged.',
          'Harassment, threats, hate, discrimination, or abusive behavior are not permitted.',
          'Content that promotes harm to yourself or others is not permitted.',
          'Illegal, dangerous, or malicious activities are not permitted.',
          'We reserve the right to remove content or restrict access that violates these standards.',
        ],
      },
      {
        title: 'Creative Freedom',
        paragraphs: [
          'Wulfzx.Underground supports creative expression, innovation, gaming, content creation, AI-assisted projects, education, and entertainment.',
          'Different viewpoints are welcome as long as they are presented respectfully and responsibly.',
        ],
      },
      {
        title: 'Privacy Statement',
        paragraphs: [
          'We respect your privacy.',
          'Any information submitted through forms, service requests, memberships, applications, collaborations, or content submissions will be handled with care and used only for legitimate website, community, or service-related purposes.',
          'We do not sell personal information.',
        ],
      },
      {
        title: 'User Responsibility',
        intro: 'By entering this website, you acknowledge that:',
        points: [
          'You are responsible for your own actions, decisions, communications, and content.',
          'Any services, recommendations, resources, or information provided through this website are used at your own discretion.',
          'You agree to act responsibly and respectfully within the community.',
          'You understand that Wulfzx.Underground cannot be held responsible for actions taken by users based on their own decisions.',
        ],
      },
      {
        title: 'Service Notice',
        paragraphs: [
          'Wulfzx.Underground may offer services related to digital content, design, development, artificial intelligence, creative consulting, entertainment, games, education, and other projects.',
          'Although we strive to provide useful and quality information and services, specific results are not guaranteed. Users are responsible for evaluating any recommendation and making their own decisions.',
        ],
      },
    ],
    finalTitle: 'Final Statement',
    finalParagraph:
      'Together, we can create a community built on respect, creativity, innovation, learning, and positive collaboration.',
    finalWelcome: 'Welcome to Wulfzx.Underground.',
    acknowledgement:
      'I have read, understood, and agree to the Community Agreement, Privacy Statement, and User Responsibility Acknowledgment.',
    enter: 'Enter Wulfzx.Underground',
    locked: 'LOCK',
    controls: {
      language: 'Language',
      textSize: 'Text size',
      compact: 'A-',
      normal: 'A',
      large: 'A+',
    },
    footer: '© 2026 Wulfzx.Underground. All Rights Reserved.',
  },
  es: {
    languageLabel: 'Español',
    backgroundImage: 'wulfzx-entry-agreement-es.png',
    brandAlt: 'WULFZX Underground AI Company',
    titleStart: 'Bienvenida y',
    titleBrand: 'Acuerdo Comunitario',
    titleLabel: 'Bienvenida y Acuerdo Comunitario',
    tagline: 'Crear. Construir. Entretener. Inspirar.',
    intro: [
      'Bienvenido a Wulfzx.Underground. Esta comunidad fue creada para fomentar la creatividad, el aprendizaje, la colaboración, los videojuegos, la tecnología, la innovación en inteligencia artificial y la interacción positiva entre personas de todos los orígenes.',
      'Creemos que las ideas, opiniones, perspectivas y conversaciones respetuosas tienen un lugar aquí. Nuestro objetivo es proporcionar un entorno seguro y acogedor donde las personas puedan crear, compartir, aprender y crecer juntas.',
    ],
    sections: [
      {
        title: 'Normas de la Comunidad',
        points: [
          'Respeta a los demás y sus opiniones.',
          'Se fomentan las conversaciones constructivas.',
          'No se permite el acoso, amenazas, odio, discriminación o comportamiento abusivo.',
          'No se permite contenido que promueva daño hacia uno mismo o hacia otras personas.',
          'No se permiten actividades ilegales, peligrosas o malintencionadas.',
          'Nos reservamos el derecho de eliminar contenido o restringir el acceso a quienes incumplan estas normas.',
        ],
      },
      {
        title: 'Libertad Creativa',
        paragraphs: [
          'Wulfzx.Underground apoya la expresión creativa, la innovación, los videojuegos, la creación de contenido, los proyectos asistidos por inteligencia artificial, la educación y el entretenimiento.',
          'Las diferentes opiniones y puntos de vista son bienvenidos siempre que sean presentados de manera respetuosa y responsable.',
        ],
      },
      {
        title: 'Declaración de Privacidad',
        paragraphs: [
          'Respetamos tu privacidad.',
          'Cualquier información enviada mediante formularios, solicitudes de servicios, membresías, aplicaciones, colaboraciones o envíos de contenido será manejada con responsabilidad y utilizada únicamente para fines legítimos relacionados con el sitio web, la comunidad o los servicios ofrecidos.',
          'No vendemos información personal.',
          'También respetamos la privacidad y la propiedad del contenido de nuestros clientes, usuarios y colaboradores. Cualquier material enviado para revisión, diseño, desarrollo o servicios creativos será tratado con confidencialidad razonable y utilizado únicamente para los fines autorizados por el usuario.',
        ],
      },
      {
        title: 'Responsabilidad del Usuario',
        intro: 'Al entrar a este sitio web, reconoces que:',
        points: [
          'Eres responsable de tus propias acciones, decisiones, comunicaciones y contenido.',
          'Cualquier servicio, recomendación, recurso o información proporcionada a través de este sitio web se utiliza bajo tu propio criterio y responsabilidad.',
          'Aceptas actuar de manera responsable y respetuosa dentro de la comunidad.',
          'Comprendes que Wulfzx.Underground no puede ser considerado responsable por acciones tomadas por usuarios basadas en sus propias decisiones.',
          'Eres responsable del uso que hagas de cualquier contenido, herramienta, servicio o información obtenida a través de este sitio web.',
        ],
      },
      {
        title: 'Aviso de Servicios',
        paragraphs: [
          'Wulfzx.Underground puede ofrecer servicios relacionados con contenido digital, diseño, desarrollo, inteligencia artificial, consultoría creativa, entretenimiento, videojuegos, educación y otros proyectos.',
          'Aunque nos esforzamos por brindar información y servicios útiles y de calidad, no garantizamos resultados específicos. Los usuarios son responsables de evaluar cualquier recomendación y tomar sus propias decisiones.',
        ],
      },
    ],
    finalTitle: 'Declaración Final',
    finalParagraph:
      'Juntos podemos construir una comunidad basada en el respeto, la creatividad, la innovación, el aprendizaje y la colaboración positiva.',
    finalWelcome: 'Bienvenido a la comunidad.',
    acknowledgement:
      'He leído, comprendido y acepto el Acuerdo Comunitario, la Declaración de Privacidad y el Reconocimiento de Responsabilidad del Usuario.',
    enter: 'Entrar a Wulfzx.Underground',
    locked: 'BLOQ',
    controls: {
      language: 'Idioma',
      textSize: 'Tamaño',
      compact: 'A-',
      normal: 'A',
      large: 'A+',
    },
    footer: '© 2026 Wulfzx.Underground. Todos los Derechos Reservados.',
  },
}

function hasValidEntryAcknowledgement() {
  try {
    const rawAcknowledgement = window.localStorage.getItem(ENTRY_ACK_KEY)

    if (!rawAcknowledgement) {
      return false
    }

    const acknowledgement = JSON.parse(rawAcknowledgement)
    const isValid =
      acknowledgement?.version === ENTRY_ACK_VERSION &&
      Number.isFinite(acknowledgement?.expiresAt) &&
      acknowledgement.expiresAt > Date.now()

    if (!isValid) {
      window.localStorage.removeItem(ENTRY_ACK_KEY)
    }

    return isValid
  } catch {
    return false
  }
}

function storeEntryAcknowledgement() {
  const acceptedAt = Date.now()
  const acknowledgement = {
    acceptedAt,
    expiresAt: acceptedAt + ENTRY_ACK_DURATION_MS,
    version: ENTRY_ACK_VERSION,
  }

  try {
    window.localStorage.setItem(ENTRY_ACK_KEY, JSON.stringify(acknowledgement))
  } catch {
    // If storage is blocked, the current React session still unlocks after acceptance.
  }
}

function getStoredEntryLanguage() {
  try {
    const language = window.localStorage.getItem(ENTRY_LANG_KEY)
    return entryLanguages.includes(language) ? language : 'en'
  } catch {
    return 'en'
  }
}

function storeEntryLanguage(language) {
  try {
    window.localStorage.setItem(ENTRY_LANG_KEY, language)
  } catch {
    // Language still changes for the current React session if storage is blocked.
  }
}

function getStoredEntryTextSize() {
  try {
    const textSize = window.localStorage.getItem(ENTRY_TEXT_SIZE_KEY)
    return entryTextSizes.includes(textSize) ? textSize : 'normal'
  } catch {
    return 'normal'
  }
}

function storeEntryTextSize(textSize) {
  try {
    window.localStorage.setItem(ENTRY_TEXT_SIZE_KEY, textSize)
  } catch {
    // Text size still changes for the current React session if storage is blocked.
  }
}

function AnimatedText({ text, className = '' }) {
  const words = String(text).split(/(\s+)/)
  let charIndex = 0

  return (
    <span className={`text-fx ${className}`.trim()} aria-label={text}>
      {words.map((word, wordIndex) => {
        if (/^\s+$/.test(word)) {
          return (
            <span className="text-fx-space" aria-hidden="true" key={`space-${wordIndex}`}>
              {word}
            </span>
          )
        }

        return (
          <span className="text-fx-word" aria-hidden="true" key={`${word}-${wordIndex}`}>
            {[...word].map((char) => {
              const currentIndex = charIndex
              const className = fxClasses[(char.charCodeAt(0) + currentIndex) % fxClasses.length]
              charIndex += 1

              return (
                <span
                  className={`text-fx-char ${className}`}
                  style={{ '--fx-delay': `${(currentIndex % 9) * -0.17}s` }}
                  key={`${char}-${currentIndex}`}
                >
                  {char}
                </span>
              )
            })}
          </span>
        )
      })}
    </span>
  )
}

function useAnalytics(page) {
  React.useEffect(() => {
    if (!analyticsMeasurementId) {
      return
    }

    if (!window.gtag) {
      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag() {
        window.dataLayer.push(arguments)
      }

      const analyticsScript = document.createElement('script')
      analyticsScript.async = true
      analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsMeasurementId}`
      document.head.appendChild(analyticsScript)
      window.gtag('js', new Date())
    }

    window.gtag('config', analyticsMeasurementId, {
      page_path: window.location.pathname + window.location.hash,
      page_title: `WULFZX Underground - ${page}`,
    })
  }, [page])
}

function App() {
  const [hasEntryAccess, setHasEntryAccess] = React.useState(hasValidEntryAcknowledgement)
  const isWhatIDoPage = window.location.pathname.startsWith(whatIDoPath)
  const isContactPage = window.location.pathname.startsWith(contactPath)
  const isOwnerPage = window.location.pathname.startsWith(ownerPath)
  const isGalleryPage = window.location.pathname.startsWith(galleryPath)
  const isPainterOfDreamsPage = window.location.pathname.startsWith(painterOfDreamsPath)
  const isWastelandGuidePage = window.location.pathname.startsWith(wastelandGuidePath)
  const page = isOwnerPage
    ? 'owner'
    : isContactPage
      ? 'contact'
      : isWhatIDoPage
        ? 'what-i-do'
        : isGalleryPage
          ? 'gallery'
          : isPainterOfDreamsPage
            ? 'painter-of-dreams'
            : isWastelandGuidePage
              ? 'wasteland-companion-guide'
              : 'home'

  useAnalytics(page)

  const acceptEntryAgreement = () => {
    storeEntryAcknowledgement()
    setHasEntryAccess(true)
  }

  if (!hasEntryAccess) {
    return <EntryAgreementGate onAccept={acceptEntryAgreement} />
  }

  return (
    <div className="site-shell">
      <CircuitLayer />
      <div className="dashboard-frame">
        <Header page={page} />
        <main>
          {isOwnerPage ? (
            <OwnerDashboardPage />
          ) : isContactPage ? (
            <ContactPage />
          ) : isWhatIDoPage ? (
            <WhatIDoPage />
          ) : isGalleryPage ? (
            <GalleryPage />
          ) : isPainterOfDreamsPage ? (
            <PainterOfDreamsPage />
          ) : isWastelandGuidePage ? (
            <WastelandCompanionGuidePage />
          ) : (
            <>
              <HeroDashboard />
              <FeatureTiles />
              <GamesShowcase />
              <ConnectStrip />
              <WelcomeSection />
            </>
          )}
        </main>
      </div>
    </div>
  )
}

function EntryAgreementGate({ onAccept }) {
  const [isAcknowledged, setIsAcknowledged] = React.useState(false)
  const [language, setLanguage] = React.useState(getStoredEntryLanguage)
  const [textSize, setTextSize] = React.useState(getStoredEntryTextSize)
  const content = entryAgreementContent[language] || entryAgreementContent.en

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage)
    storeEntryLanguage(nextLanguage)
  }

  const changeTextSize = (nextTextSize) => {
    setTextSize(nextTextSize)
    storeEntryTextSize(nextTextSize)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isAcknowledged) {
      onAccept()
    }
  }

  return (
    <main
      className={`entry-gate entry-text-${textSize}`}
      lang={language}
      style={{ '--entry-bg': `url("${assetPath(content.backgroundImage)}")` }}
      aria-labelledby="entry-title"
    >
      <div className="entry-brand" aria-label={content.brandAlt}>
        <img src={assetPath('wulfzx-brand.png')} alt="" aria-hidden="true" />
        <span>
          <AnimatedText text="WULFZX" />
          <small>
            <AnimatedText text="Underground" />
          </small>
        </span>
        <em>AI Company</em>
      </div>

      <div className="entry-toolbar" aria-label="Entry agreement controls">
        <div className="entry-control-group" aria-label={content.controls.language}>
          <span>{content.controls.language}</span>
          {entryLanguages.map((option) => (
            <button
              className={language === option ? 'entry-control-active' : ''}
              type="button"
              aria-pressed={language === option}
              onClick={() => changeLanguage(option)}
              key={option}
            >
              {entryAgreementContent[option].languageLabel}
            </button>
          ))}
        </div>
        <div className="entry-control-group" aria-label={content.controls.textSize}>
          <span>{content.controls.textSize}</span>
          {entryTextSizes.map((option) => (
            <button
              className={textSize === option ? 'entry-control-active' : ''}
              type="button"
              aria-pressed={textSize === option}
              onClick={() => changeTextSize(option)}
              key={option}
            >
              {content.controls[option]}
            </button>
          ))}
        </div>
      </div>

      <form className="entry-panel" onSubmit={handleSubmit}>
        <header className="entry-heading">
          <h1 id="entry-title" aria-label={content.titleLabel}>
            <span>
              <AnimatedText text={content.titleStart} />
            </span>
            {' '}
            <span className="entry-title-brand">
              <AnimatedText text={content.titleBrand} />
            </span>
          </h1>
          <p className="entry-tagline">
            <AnimatedText text={content.tagline} />
          </p>
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </header>

        <div className="entry-grid">
          {content.sections.map((section) => (
            <section className="entry-section" key={section.title}>
              <h2>
                <AnimatedText text={section.title} />
              </h2>
              {section.intro ? <p>{section.intro}</p> : null}
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.points ? (
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="entry-final" aria-label={content.finalTitle}>
          <h2>
            <AnimatedText text={content.finalTitle} />
          </h2>
          <p>{content.finalParagraph}</p>
          <strong>{content.finalWelcome}</strong>
        </section>

        <label className="entry-check">
          <input
            type="checkbox"
            checked={isAcknowledged}
            onChange={(event) => setIsAcknowledged(event.target.checked)}
          />
          <span>{content.acknowledgement}</span>
        </label>

        <button className="entry-enter" type="submit" disabled={!isAcknowledged}>
          <span className="entry-enter-icon" aria-hidden="true">
            {isAcknowledged ? '>' : content.locked}
          </span>
          <AnimatedText text={content.enter} />
        </button>
      </form>

      <footer className="entry-footer">{content.footer}</footer>
    </main>
  )
}

function CircuitLayer() {
  return (
    <div className="circuit-layer" aria-hidden="true">
      <span className="circuit-line circuit-line-a" />
      <span className="circuit-line circuit-line-b" />
      <span className="circuit-line circuit-line-c" />
      <span className="circuit-node circuit-node-a" />
      <span className="circuit-node circuit-node-b" />
    </div>
  )
}

function Header({ page = 'home' }) {
  const isSubPage = page !== 'home'
  const navHref = (href) => {
    if (href.startsWith('/')) {
      return `${homePath}${href.slice(1)}`
    }

    return isSubPage && href.startsWith('#') ? `${homePath}${href}` : href
  }

  return (
    <header className="site-header">
      <a className="brand-lockup" href={isSubPage ? homePath : '#top'} aria-label="WULFZX home">
        <img src={assetPath('wulfzx-brand.png')} alt="" aria-hidden="true" />
        <span>
          <AnimatedText text="WULFZX" />
          <small>
            <AnimatedText text="Underground" />
          </small>
        </span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={navHref(item.href)}>
            <AnimatedText text={item.label} />
          </a>
        ))}
      </nav>
      <a className="header-cta" href={contactPath}>
        <AnimatedText text="Contact Me" />
      </a>
    </header>
  )
}

function HeroDashboard() {
  return (
    <section className="hero-dashboard" id="top" aria-labelledby="hero-title">
      <h1 className="sr-only" id="hero-title">
        WULFZX Underground
      </h1>
      <img
        className="hero-banner"
        src={assetPath('wulfzx-hero-banner.png')}
        alt="WULFZX Underground AI Company banner with metallic wolf artwork"
      />
      <div className="hero-actions" aria-label="Primary actions">
        <a className="button button-primary" href="#linktree">
          <AnimatedText text="Explore My Work" />
        </a>
        <a className="button button-secondary" href={whatIDoPath}>
          <AnimatedText text="See What I Do" />
        </a>
      </div>
    </section>
  )
}

function WhatIDoPage() {
  return (
    <section className="what-page" aria-labelledby="what-page-title">
      <div className="what-hero">
        <div>
          <h1 id="what-page-title">
            <AnimatedText text="What I Do" />
          </h1>
          <p>
            WULFZX Underground builds custom AI-assisted projects, games, guides, websites, apps, QA tools, and
            community-focused experiences. These are the early examples of a growing ecosystem built to expand,
            learn, connect people, and create more over time.
          </p>
        </div>
        <a className="button button-secondary what-back" href={homePath}>
          <AnimatedText text="Back Home" />
        </a>
      </div>

      <div className="what-section-stack">
        {whatIDoSections.map((section) => (
          <WhatIDoSection key={section.title} section={section} />
        ))}
      </div>

      <div className="what-action-row" aria-label="What I Do actions">
        <a className="button button-primary" href={homePath}>
          <AnimatedText text="Back Home" />
        </a>
        <a className="button button-secondary" href={`${homePath}#connect`}>
          <AnimatedText text="Connect" />
        </a>
      </div>
    </section>
  )
}

function GalleryPage() {
  return (
    <section className="what-page gallery-page" aria-labelledby="gallery-page-title">
      <div className="what-hero gallery-hero">
        <div>
          <h1 id="gallery-page-title">
            <AnimatedText text="Gallery" />
          </h1>
          <p>
            A future showcase space for WULFZX Underground artwork, previews, screenshots, and project visuals.
          </p>
        </div>
        <a className="button button-secondary what-back" href={homePath}>
          <AnimatedText text="Back Home" />
        </a>
      </div>

      <section className="gallery-section" aria-labelledby="gallery-section-title">
        <div className="section-rule">
          <span />
          <h2 id="gallery-section-title">
            <AnimatedText text="Image Showcase" />
          </h2>
          <span />
        </div>
        <div className="gallery-empty">
          <span aria-hidden="true">
            <AnimatedText text="WZX" />
          </span>
          <strong>
            <AnimatedText text="Gallery Coming Soon" />
          </strong>
          <p>
            This page is ready for optimized images. We can add thumbnails, full previews, captions, and categories when
            you choose the first set of pictures.
          </p>
        </div>
      </section>
    </section>
  )
}

function PainterOfDreamsPage() {
  return (
    <section className="what-page music-page" aria-labelledby="music-page-title">
      <div className="what-hero music-hero">
        <div>
          <p className="music-kicker">
            <AnimatedText text="Music Producer" />
          </p>
          <h1 id="music-page-title">
            <AnimatedText text="The Painter Of Dreams" />
          </h1>
          <p>A dedicated WULFZX space for future music, producer visuals, links, tracks, and creative drops.</p>
        </div>
        <a className="button button-secondary what-back" href={homePath}>
          <AnimatedText text="Back Home" />
        </a>
      </div>

      <section className="music-section" aria-labelledby="music-section-title">
        <div className="music-logo-frame" aria-label="The Painter Of Dreams placeholder logo">
          <span>
            <AnimatedText text="POD" />
          </span>
          <small>
            <AnimatedText text="The Painter Of Dreams" />
          </small>
        </div>

        <div className="section-rule">
          <span />
          <h2 id="music-section-title">
            <AnimatedText text="Producer Page Coming Soon" />
          </h2>
          <span />
        </div>

        <div className="gallery-empty music-empty">
          <span aria-hidden="true">
            <AnimatedText text="POD" />
          </span>
          <strong>
            <AnimatedText text="Blank Studio Space" />
          </strong>
          <p>
            This page is ready for the official logo, producer photos, track links, social links, beat previews, and bio
            content when you want to build it out.
          </p>
        </div>
      </section>
    </section>
  )
}

function WastelandCompanionGuidePage() {
  return (
    <section className="what-page guide-page" aria-labelledby="guide-page-title">
      <div className="guide-hero">
        <div className="guide-hero-copy">
          <h1 id="guide-page-title">
            <AnimatedText text="Wasteland Companion Guide" />
          </h1>
          <p>
            Choose how to view the companion guide. The WULFZX-hosted guide shows our maintained build of the companion
            guide on the main site, while the live Lovable guide keeps the external platform version available for
            comparison and support.
          </p>
          <div className="guide-actions" aria-label="Wasteland Companion Guide actions">
            <a className="button button-primary" href={links.guide76Hosted} target="_blank" rel="noreferrer">
              <AnimatedText text="Open WULFZX Hosted Guide" />
            </a>
            <a className="button button-secondary" href={links.guide76} target="_blank" rel="noreferrer">
              <AnimatedText text="Open Live Lovable Guide" />
            </a>
          </div>
        </div>
        <div className="guide-hero-media">
          <img src={assetPath('wulfzx-76-guide.png')} alt="WULFZX Fallout 76 Wasteland Guide artwork" />
        </div>
      </div>

      <section className="guide-status-grid" aria-label="Guide testing status">
        <article>
          <strong>
            <AnimatedText text="WULFZX AI Tools" />
          </strong>
          <span>
            The hosted guide is packaged with the main WULFZX site, showing that WULFZX can build, maintain, and publish
            AI-assisted tools directly.
          </span>
        </article>
        <article>
          <strong>
            <AnimatedText text="External Platform" />
          </strong>
          <span>
            The live Lovable version runs on an external web hosting platform, showing that WULFZX can meet modern
            platform standards while supporting the wider web-building ecosystem.
          </span>
        </article>
        <article>
          <strong>
            <AnimatedText text="Business Ready" />
          </strong>
          <span>
            Both options demonstrate that WULFZX can publish independently, work alongside industry platforms, and stay
            competitive with modern web standards.
          </span>
        </article>
      </section>

      <div className="what-action-row" aria-label="Guide page secondary actions">
        <a className="button button-secondary" href={homePath}>
          <AnimatedText text="Back Home" />
        </a>
        <a className="button button-secondary" href={whatIDoPath}>
          <AnimatedText text="What I Do" />
        </a>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="contact-page" aria-labelledby="contact-page-title">
      <div className="what-hero contact-page-hero">
        <div>
          <h1 id="contact-page-title">
            <AnimatedText text="Contact Me" />
          </h1>
          <p>
            Send a project inquiry, AI idea, business website request, community collaboration note, or general
            feedback directly to WULFZX Underground.
          </p>
        </div>
        <a className="button button-secondary what-back" href={homePath}>
          <AnimatedText text="Back Home" />
        </a>
      </div>
      <div className="contact-page-body">
        <ContactForm />
      </div>
    </section>
  )
}

function OwnerDashboardPage() {
  return (
    <section className="what-page owner-page" aria-labelledby="owner-page-title">
      <div className="what-hero">
        <div>
          <h1 id="owner-page-title">
            <AnimatedText text="Owner Dashboard" />
          </h1>
          <p>
            Quick owner links for traffic checks, deployments, contact messages, and operations. Private access is
            handled by GitHub, Google, and the connected tools.
          </p>
        </div>
        <a className="button button-secondary what-back" href={homePath}>
          <AnimatedText text="Back Home" />
        </a>
      </div>

      <section className="what-section owner-section" aria-labelledby="owner-links-heading">
        <div className="section-rule">
          <span />
          <h2 id="owner-links-heading">
            <AnimatedText text="Owner Access" />
          </h2>
          <span />
        </div>
        <p className="what-section-intro">
          These buttons do not expose private data on the website. Each destination requires the correct owner login.
        </p>
        <div className="what-card-grid owner-card-grid">
          {ownerDashboardLinks.map((card) => (
            <OwnerDashboardCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="owner-note" aria-label="Analytics status">
        <strong>
          <AnimatedText text="Analytics Status" />
        </strong>
        <p>
          The site is ready for a Google Analytics measurement ID through <code>VITE_GA_MEASUREMENT_ID</code>. Until
          that ID is configured during build, use the GitHub traffic link for the available free traffic view.
        </p>
      </section>
    </section>
  )
}

function OwnerDashboardCard({ card }) {
  return (
    <a className="owner-card" href={card.href} target="_blank" rel="noreferrer">
      {card.image ? (
        <span className="owner-card-icon owner-card-image">
          <img src={card.image} alt={card.imageAlt} loading="lazy" />
        </span>
      ) : (
        <span className="owner-card-icon" aria-hidden="true">
          <AnimatedText text={card.category.slice(0, 2)} />
        </span>
      )}
      <span className="owner-card-copy">
        <small>
          <AnimatedText text={card.category} />
        </small>
        <strong>
          <AnimatedText text={card.title} />
        </strong>
        <span>{card.description}</span>
        <em>
          <AnimatedText text={card.status} />
        </em>
      </span>
    </a>
  )
}

function WhatIDoSection({ section }) {
  return (
    <section className="what-section" aria-labelledby={`what-${section.title.replace(/\W+/g, '-').toLowerCase()}`}>
      <div className="section-rule">
        <span />
        <h2 id={`what-${section.title.replace(/\W+/g, '-').toLowerCase()}`}>
          <AnimatedText text={section.title} />
        </h2>
        <span />
      </div>
      <p className="what-section-intro">{section.intro}</p>
      <div className="what-card-grid">
        {section.cards.map((card) => (
          <WhatIDoCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  )
}

function WhatIDoCard({ card }) {
  const isPlaceholder = card.href === '#'
  const isInternal = card.href.startsWith('/')
  const content = (
    <>
      {card.image ? (
        <span className="what-card-media">
          <img src={card.image} alt={card.imageAlt} loading="lazy" />
        </span>
      ) : (
        <span className="what-card-symbol" aria-hidden="true">
          <AnimatedText text={card.category.slice(0, 2)} />
        </span>
      )}
      <span className="what-card-copy">
        <small>
          <AnimatedText text={card.category} />
        </small>
        <strong>
          <AnimatedText text={card.title} />
        </strong>
        <span>{card.description}</span>
        <em>
          <AnimatedText text={card.status || (isPlaceholder ? 'Coming Soon' : 'Open link')} />
        </em>
      </span>
    </>
  )

  if (isPlaceholder) {
    return (
      <article className="what-card what-card-disabled" aria-disabled="true">
        {content}
      </article>
    )
  }

  return (
    <a className="what-card" href={card.href} target={isInternal ? undefined : '_blank'} rel={isInternal ? undefined : 'noreferrer'}>
      {content}
    </a>
  )
}

function FeatureTiles() {
  return (
    <section className="feature-tiles" aria-label="WULFZX project areas">
      {featureTiles.map((tile) => (
        <FeatureTile key={tile.title} tile={tile} />
      ))}
    </section>
  )
}

function FeatureTile({ tile }) {
  const isPlaceholder = tile.href === '#'
  const isInternal = tile.href.startsWith('#') || tile.href.startsWith('/')
  const tileId = tile.id === 'games' ? undefined : tile.id
  const className = `feature-tile ${tile.variant ? `feature-tile-${tile.variant}` : ''} ${
    isPlaceholder ? 'feature-tile-disabled' : ''
  }`
  const content = (
    <>
      <div className="tile-bracket" aria-hidden="true" />
      <h2>
        <AnimatedText text={tile.title} />
      </h2>
      <div className="tile-body">
        <TileVisual tile={tile} />
        <p>{tile.description}</p>
      </div>
      <span className="tile-cta">
        <AnimatedText text={isPlaceholder ? 'Coming Soon' : tile.cta} />
      </span>
    </>
  )

  if (isPlaceholder) {
    return (
      <article className={className} id={tileId}>
        {content}
      </article>
    )
  }

  return (
    <a
      className={className}
      id={tileId}
      href={tile.href}
      target={isInternal ? undefined : '_blank'}
      rel={isInternal ? undefined : 'noreferrer'}
    >
      {content}
    </a>
  )
}

function TileVisual({ tile }) {
  if (tile.image) {
    return (
      <span className="tile-visual tile-visual-image">
        <img src={tile.image} alt={tile.imageAlt} loading="lazy" />
      </span>
    )
  }

  return (
    <span className="tile-visual" aria-hidden="true">
      {tile.symbol}
    </span>
  )
}

function GamesShowcase() {
  return (
    <section className="games-showcase" id="games" aria-labelledby="games-heading">
      <div className="section-rule">
        <span />
        <h2 id="games-heading">
          <AnimatedText text="Three Games. One Vision." />
        </h2>
        <span />
      </div>
      <div className="game-card-grid">
        {gameCards.map((game) => (
          <a className="game-card" key={game.title} href={game.href} target="_blank" rel="noreferrer">
            <div className="game-media">
              <img src={game.image} alt={game.imageAlt} loading="lazy" />
            </div>
            <div className="game-copy">
              <h3>
                <AnimatedText text={game.title} />
              </h3>
              <small>{game.meta}</small>
              <p>{game.description}</p>
              <span className="game-cta">
                <AnimatedText text="Play Now" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function ConnectStrip() {
  return (
    <section className="connect-strip" id="connect" aria-labelledby="connect-heading">
      <div className="section-rule">
        <span />
        <h2 id="connect-heading">
          <AnimatedText text="Connect" />
        </h2>
        <span />
      </div>
      <div className="connect-row">
        <div className="connect-intro">
          <p>Let&apos;s build the future.</p>
          <p>I&apos;m always open to new ideas, collabs, reports, and opportunities.</p>
          <a className="button button-secondary connect-message-cta" href={contactPath}>
            <AnimatedText text="Send Message" />
          </a>
        </div>
        <div className="connect-links">
          {connectLinks.map((link) => (
            <a key={link.title} href={link.href} target="_blank" rel="noreferrer">
              <span className={`connect-symbol ${link.image ? 'connect-symbol-image' : ''}`} aria-hidden="true">
                {link.image ? <img src={link.image} alt="" loading="lazy" /> : <AnimatedText text={link.symbol} />}
              </span>
              <span>
                <strong>
                  <AnimatedText text={link.title} />
                </strong>
                <small>{link.status}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function WelcomeSection() {
  return (
    <section className="welcome-section" aria-labelledby="welcome-heading">
      <div className="section-rule">
        <span />
        <h2 id="welcome-heading">
          <AnimatedText text="About Me / Welcome Message" />
        </h2>
        <span />
      </div>
      <div className="welcome-frame">
        <img
          src={assetPath('wulfzx-welcome-message.png')}
          alt="WULFZX Underground about me and welcome message artwork"
          loading="lazy"
        />
      </div>
    </section>
  )
}

function ContactForm() {
  const [contactForm, setContactForm] = React.useState({
    name: '',
    replyEmail: '',
    topic: 'AI project inquiry',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = React.useState('idle')
  const [submitMessage, setSubmitMessage] = React.useState('')

  const mailtoHref = buildMailtoHref(contactForm)

  const updateContactField = (event) => {
    const { name, value } = event.target
    setContactForm((current) => ({ ...current, [name]: value }))
    if (submitStatus !== 'sending') {
      setSubmitStatus('idle')
      setSubmitMessage('')
    }
  }

  const submitContactForm = async (event) => {
    event.preventDefault()
    setSubmitStatus('sending')
    setSubmitMessage('Sending your message from the website...')

    const payload = new FormData()
    payload.append('name', contactForm.name.trim())
    payload.append('email', contactForm.replyEmail.trim())
    payload.append('_replyto', contactForm.replyEmail.trim())
    payload.append('_subject', `WULFZX Underground - ${contactForm.topic || 'New inquiry'}`)
    payload.append('topic', contactForm.topic)
    payload.append('message', contactForm.message.trim())
    payload.append('source', window.location.href)
    payload.append('_captcha', 'false')
    payload.append('_template', 'table')
    payload.append('_honey', '')

    try {
      const response = await fetch(contactFormEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      })

      if (!response.ok) {
        throw new Error(`Form service responded with ${response.status}`)
      }

      setContactForm({
        name: '',
        replyEmail: '',
        topic: 'AI project inquiry',
        message: '',
      })
      setSubmitStatus('sent')
      setSubmitMessage('Message submitted from the website to WULFZX Underground.')
    } catch {
      setSubmitStatus('error')
      setSubmitMessage('Message did not send. Please use the email-app backup below.')
    }
  }

  return (
    <form className="contact-panel" id="contact-form" onSubmit={submitContactForm}>
      <div className="contact-panel-heading">
        <h3>
          <AnimatedText text="Send A Message" />
        </h3>
        <p>Project inquiries, AI ideas, business websites, community feedback, or general questions.</p>
      </div>
      <label>
        <span>Name</span>
        <input
          name="name"
          type="text"
          value={contactForm.name}
          onChange={updateContactField}
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </label>
      <label>
        <span>Your Email</span>
        <input
          name="replyEmail"
          type="email"
          value={contactForm.replyEmail}
          onChange={updateContactField}
          placeholder="your@email.com"
          autoComplete="email"
          required
        />
      </label>
      <label>
        <span>Topic</span>
        <select name="topic" value={contactForm.topic} onChange={updateContactField}>
          <option>AI project inquiry</option>
          <option>Business website</option>
          <option>Game or guide feedback</option>
          <option>Community collaboration</option>
          <option>General message</option>
        </select>
      </label>
      <label className="contact-message">
        <span>Message</span>
        <textarea
          name="message"
          value={contactForm.message}
          onChange={updateContactField}
          placeholder="Tell me what you want to build, ask, or share."
          rows="5"
          required
        />
      </label>
      <button className="button button-primary contact-submit" type="submit" disabled={submitStatus === 'sending'}>
        <AnimatedText text={submitStatus === 'sending' ? 'Sending...' : 'Send Message'} />
      </button>
      {submitMessage ? (
        <p className={`contact-status contact-status-${submitStatus}`} role="status">
          {submitMessage}
        </p>
      ) : null}
      <small>
        Sends directly to WULFZX Underground. If the website service is unavailable,{' '}
        <a href={mailtoHref}>open your email app instead</a>.
      </small>
    </form>
  )
}

function buildMailtoHref({ name, replyEmail, topic, message }) {
  const subject = `WULFZX Underground - ${topic || 'New inquiry'}`
  const body = [
    `Topic: ${topic || 'New inquiry'}`,
    `Name: ${name || ''}`,
    `Reply email: ${replyEmail || ''}`,
    '',
    'Message:',
    message || '',
  ].join('\n')

  return `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default App
