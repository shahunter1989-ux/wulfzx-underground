import React from 'react'
import defaultPages from './cda-guide.json'
export default function CarDetailingGuide({ onClose, pages = defaultPages, title = "How to use Car Detailing", assetFolder = "cda-guide" }) {
  const dialog = React.useRef(null)
  const triggerRef = React.useRef(document.activeElement)
  const [expanded, setExpanded] = React.useState(null)
  React.useEffect(() => {
    const trigger = triggerRef.current
    const previous = document.body.style.overflow
    dialog.current.showModal()
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous; queueMicrotask(() => trigger?.focus()) }
  }, [])
  return <dialog ref={dialog} className="cda-guide" aria-labelledby="cda-guide-title" onCancel={event => { event.preventDefault(); onClose() }}>
    <header className="cda-guide-toolbar">
      <h2 id="cda-guide-title">{title}</h2>
      <button type="button" onClick={onClose}>Close guide</button>
      <label>Jump to topic <select defaultValue="" onChange={event => document.getElementById(`cda-page-${event.target.value}`)?.scrollIntoView({block:'start'})}>
        <option value="" disabled>Choose a topic</option>
        {pages.map((page,index) => <option value={index} key={page.image}>{index+1}. {page.title}</option>)}
      </select></label>
      <p>Scroll through all {pages.length} pages. Enlarge any page for a closer look.</p>
    </header>
    <div className="cda-guide-pages">
      {pages.map((page,index) => <section id={`cda-page-${index}`} key={page.image}>
        <h3>{index+1}. {page.title}</h3>
        <button type="button" aria-expanded={expanded===index} onClick={() => setExpanded(expanded===index ? null : index)}>{expanded===index ? 'Fit page' : 'Enlarge page'} {index+1}</button>
        <div className="cda-guide-image-scroll" tabIndex={expanded===index ? 0 : undefined} aria-label={`Page ${index+1} image`}>
          <img className={expanded===index ? 'is-enlarged' : ''} src={`${import.meta.env.BASE_URL}assets/${assetFolder}/${page.image}`} alt={`Guide page ${index+1}: ${page.title}. Text version follows.`} width={page.width} height={page.height} loading={index===0 ? 'eager' : 'lazy'} decoding="async" />
        </div>
        <details><summary>Read page text</summary><p className="cda-guide-text">{page.text}</p></details>
      </section>)}
    </div>
  </dialog>
}
