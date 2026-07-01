(() => {
  const GUIDE_ROOT = '/wasteland-companion-guide-app'
  const CHECKED_LABEL = 'Guide checked July 1, 2026'

  function normalizePath(pathname) {
    return pathname.replace(/\/index\.html$/, '').replace(/\/$/, '')
  }

  function isGuideHome() {
    return normalizePath(window.location.pathname) === GUIDE_ROOT
  }

  function createBadge() {
    const badge = document.createElement('span')
    badge.className = 'wzxu-guide-check-badge'
    badge.textContent = CHECKED_LABEL
    badge.setAttribute('aria-label', CHECKED_LABEL)
    return badge
  }

  function insertHeaderBadge() {
    if (document.querySelector('.wzxu-guide-check-badge')) {
      return
    }

    const titleLink =
      document.querySelector('.title-shimmer-wrap') ||
      document.querySelector(`a[href="${GUIDE_ROOT}"]`) ||
      document.querySelector(`a[href="${GUIDE_ROOT}/index.html"]`)

    const headerGroup = titleLink?.parentElement
    if (!headerGroup) {
      return
    }

    headerGroup.appendChild(createBadge())
  }

  function createHomePanel() {
    const panel = document.createElement('section')
    panel.className = 'wzxu-guide-status-panel'
    panel.setAttribute('aria-labelledby', 'wzxu-guide-status-title')
    panel.innerHTML = `
      <div class="wzxu-guide-status-inner">
        <div>
          <span class="wzxu-guide-status-kicker">Guide Status</span>
          <h2 class="wzxu-guide-status-title" id="wzxu-guide-status-title">${CHECKED_LABEL}</h2>
        </div>
        <div class="wzxu-guide-status-list" aria-label="Reviewed guide areas">
          <span>Weekly Sale default reviewed</span>
          <span>Weekly Silo Codes reviewed</span>
          <span>Hosted guide shell reviewed</span>
        </div>
      </div>
    `
    return panel
  }

  function insertHomePanel() {
    if (!isGuideHome() || document.querySelector('.wzxu-guide-status-panel')) {
      return
    }

    const weeklySilo = document.querySelector('.wzxu-weekly-silo-section')
    if (weeklySilo?.parentElement) {
      weeklySilo.parentElement.insertBefore(createHomePanel(), weeklySilo)
      return
    }

    const sections = Array.from(document.querySelectorAll('section'))
    const whatsNew = sections.find((section) => section.textContent.includes("WHAT'S NEW"))
    if (whatsNew?.parentElement) {
      whatsNew.parentElement.insertBefore(createHomePanel(), whatsNew)
      return
    }

    const mainContainer = document.querySelector('main .container') || document.querySelector('main') || document.getElementById('root')
    mainContainer?.appendChild(createHomePanel())
  }

  function hydrateGuideStatus() {
    insertHeaderBadge()
    insertHomePanel()
  }

  const observer = new MutationObserver(() => hydrateGuideStatus())
  observer.observe(document.documentElement, { childList: true, subtree: true })

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hydrateGuideStatus, { once: true })
  } else {
    hydrateGuideStatus()
  }

  window.setTimeout(() => observer.disconnect(), 10000)
})()
