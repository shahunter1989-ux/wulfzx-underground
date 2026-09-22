import React from "react";
import published from "../../foundation/published.json";
import { palettes, modules } from "../../foundation/modules";
import "./foundation.css";

export function Brand() {
  return (
    <span className="wf-brand">
      WZ<span>XU</span>
      <small>Wulfzx.Underground</small>
    </span>
  );
}
export function Destination({
  href,
  children,
  newTab = false,
  className = "",
}) {
  return href ? (
    <a
      className={className}
      href={previewHref(href)}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ) : (
    <span className={className}>{children}</span>
  );
}
function previewHref(href) { return href; }
export function SiteHeader({ preview = false }) {
  const [open, setOpen] = React.useState(false),
    p = preview ? "?preview=1" : "";
  return (
    <header className="wf-header">
      <a href={`/main/${p}`} aria-label="WZXU home">
        <Brand />
      </a>
      <button
        className="wf-menu"
        aria-expanded={open}
        aria-controls="wf-nav"
        onClick={() => setOpen(!open)}
      >
        Menu <span aria-hidden="true">☰</span>
      </button>
      <nav
        id="wf-nav"
        className={open ? "is-open" : ""}
        aria-label="Main website"
      >
        <a href={`/main/what-i-do/${p}`}>Work</a>
        <a href={`/main/what-i-do/${p}#services`}>Services</a>
        <a href="/main/gallery/">Gallery</a>
        <a href="https://tpod-pi.vercel.app/">Music</a>
        <a href="/arcade/">Arcade</a>
        <a className="wf-nav-contact" href={`/main/contact/${p}`}>
          Contact ↗
        </a>
      </nav>
    </header>
  );
}
export function SiteFooter({ business }) {
  return (
    <footer className="wf-footer">
      <div>
        <Brand />
        <p>{business?.footer || "Create. Build. Entertain. Inspire."}</p>
        <small>
          © {new Date().getFullYear()} {business?.name || "Wulfzx.Underground"}
        </small>
      </div>
      <nav aria-label="Footer">
        <a href="/main/community-agreement/">Community agreement</a>
        <a href="/privacy/">Privacy</a>
        <a href="/">Link hub ↗</a>

      </nav>
    </footer>
  );
}
function ProjectCard({ item }) {
  return (
    <article className="wf-project">
      <Destination href={item.href} newTab={item.newTab}>
        {item.image ? (
          <img src={item.image} alt={item.imageAlt} loading="lazy" />
        ) : (
          <div className="wf-project-placeholder" aria-hidden="true">
            {item.title.slice(0, 1)}
          </div>
        )}
        <div className="wf-project-copy">
          <span className="wf-category">{item.category}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span className="wf-card-action">
            {item.href ? item.buttonLabel : "Coming soon"}{" "}
            <span aria-hidden="true">{item.href ? "↗" : "·"}</span>
          </span>
        </div>
      </Destination>
    </article>
  );
}
function Projects({ content, all = false }) {
  const [category, setCategory] = React.useState("All");
  const projects = content.projects.filter(
      (i) => i.enabled && (all || i.featured),
    ),
    categories = [
      "All",
      ...new Set(projects.map((i) => i.category).filter(Boolean)),
    ];
  return (
    <section className="wf-section" id="projects">
      <div className="wf-section-heading">
        <h2>{all ? "Explore the work" : content.pages.home.projectsTitle}</h2>
        {!all && (
          <a href={previewHref("/main/what-i-do/")}>View all projects ↗</a>
        )}
      </div>
      {all && (
        <div className="wf-filters" aria-label="Project categories">
          {categories.map((c) => (
            <button
              key={c}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="wf-project-grid">
        {projects
          .filter((i) => category === "All" || i.category === category)
          .map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
      </div>
      {!projects.length && <p>New projects are on their way.</p>}
    </section>
  );
}
function Services({ content }) {
  return (
    <section className="wf-section" id="services">
      <div className="wf-section-heading">
        <h2>{content.pages.home.servicesTitle}</h2>
        <span>Made around your idea.</span>
      </div>
      <div className="wf-service-grid">
        {content.services
          .filter((i) => i.enabled)
          .map((item, index) => (
            <article key={item.id} className="wf-service">
              {item.image ? (
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
              ) : (
                <span className="wf-service-number" aria-hidden="true">
                  0{index + 1}
                </span>
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Destination href={item.href} newTab={item.newTab}>
                {item.buttonLabel} ↗
              </Destination>
            </article>
          ))}
      </div>
    </section>
  );
}
function Announcements({ content }) {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  const items = content.announcements.filter(
    (a) =>
      a.enabled &&
      (!a.startsAt || Date.parse(a.startsAt) <= now) &&
      (!a.endsAt || Date.parse(a.endsAt) > now),
  );
  return items.length ? (
    <section className="wf-section">
      <h2>{content.pages.home.announcementsTitle}</h2>
      <div className="wf-announcements">
        {items.map((a) => (
          <article className="wf-announcement" key={a.id}>
            {a.image && <img src={a.image} alt={a.imageAlt} />}
            <div>
              <h3>{a.title}</h3>
              <p>{a.message}</p>
              {a.href && (
                <Destination href={a.href}>
                  {a.buttonLabel || "Learn more"} ↗
                </Destination>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  ) : null;
}
function ContactStrip({ content }) {
  return (
    <section className="wf-contact-strip">
      <div>
        <h2>{content.pages.home.contactTitle}</h2>
        <p>{content.pages.home.contactDescription}</p>
      </div>
      <a className="wf-button" href={previewHref("/main/contact/")}>
        Let’s talk ↗
      </a>
    </section>
  );
}
function Hero({ content }) {
  const page = content.pages.home;
  return (
    <section className="wf-hero">
      <div>
        <h1>{page.heading}</h1>
        <p>{page.description}</p>
        <div className="wf-actions">
          <Destination className="wf-button wf-primary" href={page.primaryHref}>
            {page.primaryLabel} ↗
          </Destination>
          <Destination className="wf-button" href={page.secondaryHref}>
            {page.secondaryLabel}
          </Destination>
        </div>
      </div>
      {page.image && (
        <div className="wf-hero-art">
          <img src={page.image} alt={page.imageAlt} fetchPriority="high" />
          <span>{content.business.tagline}</span>
        </div>
      )}
    </section>
  );
}
const sectionRegistry = {
  hero: Hero,
  projects: Projects,
  services: Services,
  announcements: Announcements,
  contact: ContactStrip,
};
export default function ManagedMain({ ContactForm, children, title }) {
  const data = published, error = "", preview = false;
  const path = window.location.pathname.replace(/\/$/, "");
  const page = children ? "specialty" : path.endsWith("/what-i-do") ? "work" : path.endsWith("/contact") ? "contact" : "home";
  React.useEffect(() => {
    if (data)
      document.title = `${title || (page === "home" ? data.business.name : page === "work" ? "Work" : "Contact")} | WZXU`;
  }, [data, page, title]);
  return (
    <div
      className={`wf-site wf-buttons-${data.appearance.buttons}`}
      style={{ "--wf-accent": palettes[data.appearance.palette] }}
    >
      <a className="wf-skip" href="#main-content">
        Skip to content
      </a>
      <SiteHeader preview={preview} />
      <main className="wf-container" id="main-content">
        {error && (
          <p className="wf-error" role="alert">
            {error}
          </p>
        )}
        {children}
        {page === "home" &&
          data.sections
            .filter((s) => s.enabled && (modules[s.type] ?? true))
            .map((s) => {
              const Section = sectionRegistry[s.type];
              return Section ? <Section key={s.type} content={data} /> : null;
            })}
        {page === "work" && (
          <>
            <section className="wf-page-title">
              <h1>{data.pages.work.heading}</h1>
              <p>{data.pages.work.description}</p>
            </section>
            {modules.projects && <Projects content={data} all />}
            {modules.services && <Services content={data} />}
            <ContactStrip content={data} />
          </>
        )}
        {page === "contact" && (
          <>
            <section className="wf-page-title">
              <h1>{data.pages.contact.heading}</h1>
              <p>{data.pages.contact.description}</p>
            </section>
            <div className="wf-contact-layout">
              <aside>
                <h2>Get in touch</h2>
                <a href={`mailto:${data.business.email}`}>
                  {data.business.email}
                </a>
                {data.business.phone && <p>{data.business.phone}</p>}
                {data.business.address && <p>{data.business.address}</p>}
                {data.business.hours && <p>{data.business.hours}</p>}
                <div className="wf-socials">
                  {data.links
                    .filter((i) => i.enabled)
                    .map((l) => (
                      <Destination key={l.id} href={l.href} newTab={l.newTab}>
                        {l.label} ↗
                      </Destination>
                    ))}
                </div>
              </aside>
              <ContactForm email={data.business.email} />
            </div>
          </>
        )}
        {page === "home" && (
          <nav className="wf-social-row" aria-label="Social links">
            {data.links
              .filter((i) => i.enabled)
              .map((l) => (
                <Destination key={l.id} href={l.href} newTab={l.newTab}>
                  {l.label} ↗
                </Destination>
              ))}
          </nav>
        )}
      </main>
      <div className="wf-container">
        <SiteFooter business={data.business} />
      </div>
    </div>
  );
}
export function CommunityAgreement({ content }) {
  const [language, setLanguage] = React.useState("en"),
    entry = content[language];
  return (
    <div className="wf-site">
      <SiteHeader />
      <main className="wf-container wf-agreement">
        <div className="wf-section-heading">
          <h1>{entry.titleLabel}</h1>
          <label>
            Language{" "}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </label>
        </div>
        <article lang={language}>
          {entry.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {entry.sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              {s.intro && <p>{s.intro}</p>}
              {s.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.points && (
                <ul>
                  {s.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <h2>{entry.finalTitle}</h2>
          <p>{entry.finalParagraph}</p>
          <p>{entry.finalWelcome}</p>
        </article>
        <a className="wf-button" href="/main/">
          Back to the website
        </a>
      </main>
      <div className="wf-container">
        <SiteFooter />
      </div>
    </div>
  );
}
export function OwnerRedirect() {
  React.useEffect(() => {
    window.location.replace("/main/");
  }, []);
  return (
    <p>
      Opening <a href="/main/">the website</a>…
    </p>
  );
}
