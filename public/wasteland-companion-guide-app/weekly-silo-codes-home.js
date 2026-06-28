(() => {
  const GUIDE_ROOT = '/wasteland-companion-guide-app'
  const INTERNAL_SILO_PATH = `${GUIDE_ROOT}/weekly-silo-codes/index.html`

  function isGuideHome() {
    const normalizedPath = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '')
    return normalizedPath === GUIDE_ROOT
  }

  function createSection() {
    const section = document.createElement('section')
    section.className = 'wzxu-weekly-silo-section'
    section.setAttribute('aria-labelledby', 'wzxu-weekly-silo-title')
    section.innerHTML = `
      <div class="wzxu-weekly-silo-inner">
        <div>
          <span class="wzxu-weekly-silo-kicker">Field Tool</span>
          <h2 class="wzxu-weekly-silo-title" id="wzxu-weekly-silo-title">Weekly Silo Codes</h2>
          <p class="wzxu-weekly-silo-copy">
            Open the WULFZX-hosted launch-code terminal for Alpha, Bravo, and Charlie. Built into this guide for quick
            field checks while the external silo page stays available from the main Wasteland landing button.
          </p>
          <div class="wzxu-weekly-silo-meta" aria-label="Weekly silo codes details">
            <span>Alpha / Bravo / Charlie</span>
            <span>Nuclear Keycard</span>
            <span>Weekly Reset</span>
          </div>
        </div>
        <a class="wzxu-weekly-silo-link" href="${INTERNAL_SILO_PATH}">Open Silo Codes</a>
      </div>
    `
    return section
  }

  function createReferenceLink() {
    const link = document.createElement('a')
    link.className = 'wzxu-silo-reference-link group flex items-baseline justify-between gap-2 px-2.5 py-2 rounded-sm font-mono text-[13px] md:text-sm transition-colors bg-accent/10 text-accent hover:bg-accent/20 border border-accent/30'
    link.href = INTERNAL_SILO_PATH
    link.innerHTML = `
      <span class="wzxu-silo-reference-label">
        <span class="wzxu-silo-reference-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <path d="M4.75 6.5h14.5v9.75H4.75z" />
            <path d="M7.25 9.25h4.5" />
            <path d="M7.25 12.25h2.5" />
            <path d="M15.25 9.25l1.5 1.5-1.5 1.5" />
            <path d="M8.25 18.25h7.5" />
            <path d="M12 16.25v2" />
          </svg>
        </span>
        <span>Weekly Silo Codes</span>
      </span>
      <span class="wzxu-silo-reference-meta">Alpha · Bravo · Charlie</span>
    `
    return link
  }

  function createReferenceListItem() {
    const item = document.createElement('li')
    item.appendChild(createReferenceLink())
    return item
  }

  function findToolReferenceCard() {
    const headings = Array.from(document.querySelectorAll('h2, h3, h4'))
    const toolReferenceHeading = headings.find((heading) => {
      const text = heading.textContent.replace(/\s+/g, ' ').trim().toLowerCase()
      return text.includes('tool') && text.includes('reference')
    })

    if (toolReferenceHeading) {
      let currentElement = toolReferenceHeading.parentElement
      while (currentElement && !currentElement.querySelector('ul a[href]')) {
        currentElement = currentElement.parentElement
      }
      return currentElement
    }

    return Array.from(document.querySelectorAll('section > div, section article, section [class*="wasteland-panel"]')).find((element) => {
      const text = element.textContent.replace(/\s+/g, ' ').trim().toLowerCase()
      return text.includes('tool') && text.includes('reference') && text.includes('map') && text.includes('official')
    })
  }

  function insertReferenceLink() {
    if (!isGuideHome() || document.querySelector('.wzxu-silo-reference-link')) {
      return
    }

    const card = findToolReferenceCard()
    if (!card) {
      return
    }

    const list = card.querySelector('ul')
    if (!list) {
      return
    }

    const referenceItem = createReferenceListItem()
    list.insertBefore(referenceItem, list.firstElementChild)

    const heading = card.querySelector('h2, h3, h4')
    const countElement = Array.from(heading?.parentElement?.children || []).find((element) => (
      element.tagName === 'SPAN' && /^\d+$/.test(element.textContent.trim())
    ))

    if (countElement) {
      countElement.textContent = String(Number(countElement.textContent.trim()) + 1)
    }
  }

  function insertSection() {
    if (!isGuideHome() || document.querySelector('.wzxu-weekly-silo-section')) {
      return
    }

    const sections = Array.from(document.querySelectorAll('section'))
    const whatsNew = sections.find((section) => section.textContent.includes("WHAT'S NEW"))
    const dashboardGrid = sections.find((section) => (
      section.textContent.includes('Tool') && section.textContent.includes('Reference')
    ))
    const target = whatsNew || dashboardGrid?.nextElementSibling
    const section = createSection()

    if (target?.parentElement) {
      target.parentElement.insertBefore(section, target)
      return
    }

    const mainContainer = document.querySelector('main .container') || document.querySelector('main') || document.getElementById('root')
    mainContainer?.appendChild(section)
  }

  function hydrateGuideHome() {
    insertReferenceLink()
    insertSection()
  }

  const observer = new MutationObserver(() => hydrateGuideHome())
  observer.observe(document.documentElement, { childList: true, subtree: true })

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hydrateGuideHome, { once: true })
  } else {
    hydrateGuideHome()
  }

  window.setTimeout(() => observer.disconnect(), 10000)
})()
