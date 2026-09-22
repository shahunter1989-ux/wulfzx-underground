import React from "react";
import { SiteHeader, SiteFooter } from "./ManagedMain";
import { links } from "../content";

export function SiteFrame({ children }) {
  return <div className="wf-site"><a className="wf-skip" href="#specialty-content">Skip to content</a><SiteHeader /><div id="specialty-content">{children}</div><div className="wf-container"><SiteFooter /></div></div>;
}

export function GallerySurface() {
  return <>
    <section className="wf-page-title"><h1>Gallery</h1><p>Artwork, screenshots, and creative work from Wulfzx.Underground.</p></section>
    <section className="wf-gallery-empty" aria-labelledby="gallery-showcase"><img src="/assets/business-card-wulfzx-logo-opt.webp" alt="" /><div><h2 id="gallery-showcase">A space for the visuals.</h2><p>The first collection is coming soon. Explore the projects behind the work while the gallery takes shape.</p><a className="wf-button" href="/main/what-i-do/">Explore projects ↗</a></div></section>
  </>;
}

export function GuideSurface() {
  return <section className="wf-hero wf-guide-surface"><div><h1>Wasteland Companion Guide</h1><p>Builds, resources, survival support, and field tools for your next journey through Fallout 76.</p><div className="wf-actions"><a className="wf-button wf-primary" href={links.guide76} target="_blank" rel="noopener noreferrer">Open WZXU76.pro ↗</a><a className="wf-button" href={links.guide76SiloCodes} target="_blank" rel="noopener noreferrer">Weekly silo codes ↗</a></div><p>Explore the live guide, or <a href="/main/what-i-do/">see more WZXU projects</a>.</p></div><div className="wf-hero-art"><img src="/assets/wulfzx-76-guide-opt.webp" alt="WULFZX Fallout 76 Wasteland Guide artwork" /></div></section>;
}

export function MusicRedirect() {
  React.useEffect(() => { window.location.replace("https://tpod-pi.vercel.app/"); }, []);
  return <SiteFrame><main className="wf-container wf-page-title"><h1>The Painter Of Dreams</h1><p>Opening the music website…</p><a className="wf-button" href="https://tpod-pi.vercel.app/">Go to Music ↗</a></main></SiteFrame>;
}
