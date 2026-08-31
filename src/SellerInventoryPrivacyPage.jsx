import { useEffect } from 'react'

const route = '/privacy/wzxu-seller-inventory/'
const title = 'Privacy Policy for WZXU Seller Inventory | WZXU'
const description = 'Privacy Policy for WZXU Seller Inventory, an offline-first inventory application for independent sellers.'

function SellerInventoryPrivacyPage() {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionTag = document.querySelector('meta[name="description"]')
    const previousDescription = descriptionTag?.getAttribute('content')
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    const createdCanonical = !canonical.parentNode
    const previousCanonical = canonical.getAttribute('href')
    const socialTags = [
      ['og:title', title],
      ['og:description', description],
      ['og:url', `https://wzxu.pro${route}`],
      ['twitter:card', 'summary'],
      ['twitter:title', title],
      ['twitter:description', description],
    ].map(([name, content]) => {
      let tag = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`)
      const created = !tag
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name.startsWith('twitter:') ? 'twitter:' + name.slice(8) : name)
        if (name.startsWith('og:')) tag.setAttribute('property', name)
        document.head.appendChild(tag)
      }
      const previous = tag.getAttribute('content')
      tag.setAttribute('content', content)
      return { tag, created, previous }
    })

    document.title = title
    if (descriptionTag) descriptionTag.setAttribute('content', description)
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', `https://wzxu.pro${route}`)
    if (createdCanonical) document.head.appendChild(canonical)

    return () => {
      document.title = previousTitle
      if (descriptionTag && previousDescription) descriptionTag.setAttribute('content', previousDescription)
      if (createdCanonical) canonical.remove()
      else if (previousCanonical) canonical.setAttribute('href', previousCanonical)
      socialTags.forEach(({ tag, created, previous }) => {
        if (created) tag.remove()
        else if (previous) tag.setAttribute('content', previous)
      })
    }
  }, [])

  return (
    <main className="privacy-page" aria-labelledby="seller-privacy-title">
      <article className="privacy-page-frame">
        <header className="privacy-header">
          <a className="privacy-brand" href="/" aria-label="WZXU home">WZXU</a>
          <a className="privacy-back-link" href="/main/">Back to WZXU.pro</a>
          <h1 id="seller-privacy-title">Privacy Policy for WZXU Seller Inventory</h1>
          <p className="privacy-meta"><strong>Effective date:</strong> August 30, 2026 <span aria-hidden="true">·</span> <strong>Publisher:</strong> WZXU</p>
        </header>
        <div className="privacy-content">
          <section><h2>Overview and scope</h2><p>WZXU Seller Inventory is an offline-first inventory application for independent sellers. This policy applies only to WZXU Seller Inventory and explains how the application handles information on the user’s device.</p></section>
          <section><h2>Information stored by the app</h2><p>Users may choose to enter products, quantities, prices, costs, categories, settings, activity history, and product photos. This information is stored locally in the application’s IndexedDB storage on the user’s device and browser profile.</p></section>
          <section><h2>How information is stored and used</h2><p>WZXU Seller Inventory stores information locally in IndexedDB so the app can work offline and restore the user’s inventory, settings, and activity history on that device and browser profile.</p></section>
          <section><h2>Information WZXU does not collect</h2><p>WZXU Seller Inventory does not require an account and does not upload, transmit, sell, share, or synchronize inventory data or product photos with WZXU. The application contains no analytics, advertising, behavioral tracking, payment processing, tips, or cloud synchronization.</p></section>
          <section><h2>Backups, exports, and reports</h2><p>CSV exports, ZIP backups, and PDF reports are created locally. These files leave the app only when the user explicitly downloads, saves, prints, or shares them. Users are responsible for choosing where those files are stored and who can access them.</p></section>
          <section><h2>Hosting and basic technical requests</h2><p>The static application host may process ordinary technical request information, such as IP address, browser or device information, requested URL, timestamps, and security logs, according to the hosting provider’s own practices. This technical information is separate from inventory content stored locally by the application. WZXU does not receive the user’s locally stored inventory or photos through the app.</p></section>
          <section><h2>Data retention and deletion</h2><p>Inventory information remains in local app storage until the user changes or deletes it, or until browser or app storage is cleared or evicted. Clearing site or app data, uninstalling the app, or using operating-system storage controls may permanently remove locally stored information. WZXU cannot view, recover, or remotely delete inventory that exists only on a user’s device.</p><p>Users control deletion through the application, browser, or operating-system storage controls. Download complete backups regularly and store them outside the app because locally deleted information may not be recoverable.</p></section>
          <section><h2>Security and user responsibility</h2><p>Local processing reduces the need to transmit inventory content, but no storage method can be guaranteed to be secure. Users remain responsible for protecting their devices, browser profiles, exported files, and backup files, and for choosing trusted locations when sharing them.</p></section>
          <section><h2>Children’s privacy</h2><p>WZXU Seller Inventory is a general-purpose business utility and is not directed to children under 13. WZXU does not knowingly collect children’s personal information through the application.</p></section>
          <section><h2>External links</h2><p>The application may open WZXU.pro or other external destinations when the user selects a link. Those websites and services operate outside the inventory app and are governed by the privacy policies applicable to them.</p></section>
          <section><h2>Policy changes</h2><p>This policy may be updated when the application’s behavior or legal requirements change. Revisions and their effective dates will be published on this page, with the latest version available at <a href={`https://wzxu.pro${route}`}>https://wzxu.pro{route}</a>.</p></section>
          <section><h2>Contact</h2><p>For questions about this policy or WZXU Seller Inventory, visit <a href="https://wzxu.pro/">https://wzxu.pro/</a>.</p></section>
        </div>
        <footer className="privacy-footer"><span>WZXU Seller Inventory</span><a href="/main/">Return to WZXU.pro</a></footer>
      </article>
    </main>
  )
}

export default SellerInventoryPrivacyPage
