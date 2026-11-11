import React from "react";
import "./vault.css";
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
  const [reducedMotion, setReducedMotion] = React.useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [videoReady, setVideoReady] = React.useState(false);
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setReducedMotion(query.matches); setVideoReady(false); };
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let active = true;
    const sync = () => {
      if (document.hidden || reducedMotion) video.pause();
      else video.play().catch(() => { if (active) setVideoReady(false); });
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => { active = false; document.removeEventListener("visibilitychange", sync); video.pause(); };
  }, [reducedMotion]);
  return <div className="wf-vault" data-video-active={videoReady && !reducedMotion}>
    {!reducedMotion && <video ref={videoRef} className="wf-vault-video" src="/assets/vault-corridor-loop-v2.mp4" poster="/assets/vault-corridor.webp" muted loop playsInline preload="metadata" aria-hidden="true" onPlaying={() => setVideoReady(true)} onError={() => setVideoReady(false)} />}
    <div className="wf-vault-video-shade" aria-hidden="true" />
    <div className="wf-vault-hdr" aria-hidden="true"><div className="wf-vault-scene">
      <div className="wf-vault-hdr-reflections" />
      {[[50,6,17],[50,24,12],[32,31,10],[68,32,10],[38,39,7],[62,39,7],[11,59,10],[94,59,10]].map(([x,y,size],i) => <span key={i} className="wf-vault-hdr-bloom" style={{left:`${x}%`,top:`${y}%`,width:`${size}%`,animationDelay:`${-i*2.1}s`}} />)}
    </div></div>
    <div className="wf-vault-content">
      <section className="wf-vault-intro" aria-labelledby="vault-title">
        
        <h1 id="vault-title">Wasteland Companion Guide</h1>
        <p>Explore the wasteland. Make it your own.</p>
        <a className="wf-button wf-primary" href={links.guide76} target="_blank" rel="noopener noreferrer">Open WZXU76.pro ↗</a>
      </section>
      <section className="wf-vault-pipboys" aria-labelledby="pip-boys-title">
        <h2 id="pip-boys-title">Pip-Boys</h2>
        <div className="wf-pipboy-options">
          <article><img className="wf-vault-device" src="/assets/vault-enclave-cutout.webp" alt="Screenshot of the WULFZX Enclave Personal Pip-Boy" /><div className="wf-vault-card-copy"><h3>WZXU76 Enclave Pip-Boy</h3><p>A fully custom Pip-Boy, built from scratch just for fun.</p><a className="wf-button" href={links.guide76SiloCodes} target="_blank" rel="noopener noreferrer">Open Enclave Pip-Boy ↗</a></div></article>
          <article><img className="wf-vault-device" src="/assets/vault-simulator-cutout.webp" alt="Screenshot of the Fallout 76 simulator with its red status screen" /><div className="wf-vault-card-copy"><h3>Fallout 76 Pip-Boy Simulator</h3><p>Explore the Fallout 76 Pip-Boy interface in your browser.</p><a className="wf-button wf-primary" href="https://wzxu-pipboy-web.vercel.app/?mode=simulator" target="_blank" rel="noopener noreferrer">Open simulator ↗</a></div></article>
        </div>
        <a className="wf-vault-more" href="/main/what-i-do/">Explore more WZXU projects →</a>
      </section>
    </div>
  </div>;
}

export function MusicRedirect() {
  React.useEffect(() => { window.location.replace("https://tpod-pi.vercel.app/"); }, []);
  return <SiteFrame><main className="wf-container wf-page-title"><h1>The Painter Of Dreams</h1><p>Opening the music website…</p><a className="wf-button" href="https://tpod-pi.vercel.app/">Go to Music ↗</a></main></SiteFrame>;
}
