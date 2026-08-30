import { useEffect } from 'react'

const description = 'Privacy Policy for WZXU QR Code Maker, including local processing, storage, and user controls.'

function PrivacyPolicyPage() {
  useEffect(() => {
    const previousTitle = document.title
    const meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content')

    document.title = 'Privacy Policy for WZXU QR Code Maker | WZXU'
    if (meta) meta.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (meta && previousDescription) meta.setAttribute('content', previousDescription)
    }
  }, [])

  return (
    <main className="privacy-page" aria-labelledby="privacy-title">
      <article className="privacy-page-frame">
        <header className="privacy-header">
          <a className="privacy-brand" href="/" aria-label="WZXU home">WZXU</a>
          <a className="privacy-back-link" href="/main/">Back to WZXU.pro</a>
          <h1 id="privacy-title">Privacy Policy for WZXU QR Code Maker</h1>
          <p className="privacy-meta"><strong>Effective date:</strong> August 30, 2026 <span aria-hidden="true">·</span> <strong>Publisher:</strong> WZXU</p>
        </header>

        <div className="privacy-content">
          <section><h2>Overview</h2><p>WZXU QR Code Maker is designed to create, customize, save, export, and scan QR codes. The application does not require a user account and is designed to process user content locally on the user’s device.</p></section>
          <section><h2>Information accessed</h2><ul><li>The application may request optional camera access when the user chooses to scan a QR code with the device camera.</li><li>The application may access an image only when the user deliberately selects that image for QR-code scanning or logo customization.</li><li>Users may enter information such as URLs, text, Wi-Fi details, contact details, calendar information, or other content to generate QR codes.</li><li>Saved QR projects and application preferences are stored locally on the user’s device.</li></ul></section>
          <section><h2>How information is used</h2><ul><li>Camera frames and selected images are used only to detect QR-code content.</li><li>Information entered into the QR generator is used only to create the requested QR code.</li><li>Saved projects and preferences are used to restore the user’s work and application settings.</li></ul></section>
          <section><h2>Local processing and storage</h2><p>QR generation, image scanning, camera scanning, and project storage are performed locally on the user’s device. WZXU does not receive or maintain a copy of the user’s QR-code content, camera images, uploaded images, saved projects, or preferences.</p></section>
          <section><h2>Sharing and selling information</h2><p>WZXU QR Code Maker does not sell, rent, trade, or share users’ personal information. User content is not transmitted to WZXU or disclosed to third parties by the application.</p></section>
          <section><h2>Internet access</h2><p>The application’s primary QR-generation and scanning features can operate without an online account. Internet access may be used by Microsoft Store for installation and application updates. The application may also open public HTTPS webpages, such as WZXU.pro, only when the user selects the corresponding link.</p></section>
          <section><h2>Payments, advertising, and analytics</h2><p>WZXU QR Code Maker does not contain advertising, analytics tracking, in-app purchases, donations, or payment processing.</p></section>
          <section><h2>User choices and controls</h2><ul><li>Camera access can be allowed or denied through Windows privacy settings.</li><li>The user decides which images and files to open.</li><li>Saved QR projects can be deleted from within the application.</li><li>Locally stored application information can be removed by deleting projects and application data or by uninstalling the application.</li></ul></section>
          <section><h2>Children’s privacy</h2><p>WZXU QR Code Maker is a general-purpose utility and does not knowingly collect personal information from children.</p></section>
          <section><h2>Security</h2><p>Because QR content and selected images are processed locally, they are not transmitted to WZXU. Users remain responsible for the content they place inside QR codes and for choosing trusted destinations before opening scanned links.</p></section>
          <section><h2>Changes to this policy</h2><p>This policy may be updated if the application’s features or privacy practices change. The latest version will remain available at <a href="https://wzxu.pro/privacy">https://wzxu.pro/privacy</a>, with its effective date shown at the top.</p></section>
          <section><h2>Contact and support</h2><p>For questions about this privacy policy or WZXU QR Code Maker, contact:</p><p><a href="mailto:wzxu.pro@outlook.com">wzxu.pro@outlook.com</a></p></section>
        </div>

        <footer className="privacy-footer"><span>WZXU QR Code Maker</span><a href="/">Return to WZXU</a></footer>
      </article>
    </main>
  )
}

export default PrivacyPolicyPage
