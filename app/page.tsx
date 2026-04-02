"use client";

import { useState, useEffect, useRef } from "react";
import "@/styles/postmortem.css";

export default function PostMortemPage() {
  const [curtainVisible, setCurtainVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Curtain fade-out
  useEffect(() => {
    const t = setTimeout(() => setCurtainVisible(false), 2500);
    return () => clearTimeout(t);
  }, []);

  // Ember particles + smoke wisps
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const colors = ['#e8622a', '#f28c4e', '#c44d1a', '#d4a84b'];

    // Ember particles (40)
    for (let i = 0; i < 40; i++) {
      const span = document.createElement('span');
      span.className = 'particle';
      span.style.setProperty('--p-w', `${Math.random() * 3 + 1}px`);
      span.style.setProperty('--p-h', `${Math.random() * 5 + 2}px`);
      span.style.setProperty('--p-color', colors[Math.floor(Math.random() * colors.length)]);
      span.style.setProperty('--p-rise', `${Math.random() * 80 + 40}px`);
      span.style.setProperty('--p-sway', `${(Math.random() - 0.5) * 30}px`);
      span.style.setProperty('--p-dur', `${Math.random() * 4 + 3}s`);
      span.style.setProperty('--p-delay', `${Math.random() * 5}s`);
      span.style.left = `${Math.random() * 100}%`;
      span.style.top = `${Math.random() * 100}%`;
      container.appendChild(span);
    }

    // Smoke wisps (10)
    const smokeDelays = [0, 3, 6, 9, 2, 5, 8, 1, 4, 7];
    for (let j = 0; j < 10; j++) {
      const wisp = document.createElement('div');
      wisp.className = 'smoke-wisp';
      const sw = Math.random() * 60 + 60;
      const sh = Math.random() * 80 + 80;
      const srise = Math.random() * 60 + 60;
      const sdrift = (Math.random() - 0.5) * 40;
      const sdur = Math.random() * 6 + 8;
      const sdelay = smokeDelays[j] ?? 0;
      wisp.style.setProperty('--s-w', `${sw.toFixed(0)}px`);
      wisp.style.setProperty('--s-h', `${sh.toFixed(0)}px`);
      wisp.style.setProperty('--s-rise', `${srise.toFixed(0)}px`);
      wisp.style.setProperty('--s-drift', `${sdrift.toFixed(0)}px`);
      wisp.style.setProperty('--s-dur', `${sdur.toFixed(1)}s`);
      wisp.style.setProperty('--s-delay', `${sdelay}s`);
      wisp.style.left = `${Math.random() * 60 + 20}%`;
      wisp.style.top = `${Math.random() * 100}%`;
      container.appendChild(wisp);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <>
      {/* Page entrance curtain */}
      {curtainVisible && <div className="page-curtain" aria-hidden="true" />}

      {/* Vignette border overlay */}
      <div className="page-vignette" aria-hidden="true" />

      {/* Particle & smoke container (Moved out of page-content to bypass transform containing block) */}
      <div ref={containerRef} className="particle-container" aria-hidden="true" />

      {/* Main page content */}
      <div className="page-content">

        {/* =================================================
            SECTION 1 — HEADER
            ================================================= */}
        <header className="site-header" role="banner">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>

            {/* Stamp / seal */}
            <div className="header-stamp" role="img" aria-label="Sceau : Fermé" style={{ top: '-4rem', right: '5%', zIndex: 10 }}>
              <span className="stamp-text" style={{ transform: 'translateY(2px)' }}>R.I.P.</span>
            </div>

            {/* Guild sigil — ✼ (U+273C) */}
            <span className="guild-sigil" aria-hidden="true">&#10780;</span>

            {/* Title */}
            <h1 className="site-title text-flicker font-medieval text-boulange-gold" style={{ fontFamily: 'var(--font-medieval)', color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.3)', fontSize: 'clamp(3rem, 6vw, 4.5rem)', zIndex: 20, position: 'relative' }}>Projet Boulangerie</h1>

            {/* Subtitle */}
            <br></br>
            <p className="site-subtitle">La Guilde de la Boulangerie</p>

            {/* Tagline */}
            <p className="site-tagline">La Guilde. L&rsquo;Événement. La Fin.</p>

            {/* Decorative rule */}
            <div className="deco-rule" role="separator" />

          </div>
        </header>

        {/* =================================================
            SECTION 2 — CE QU'IL ÉTAIT
            ================================================= */}
        <section className="section-what" aria-labelledby="label-what">
          <div className="container">

            <span className="section-label" id="label-what">Ce qu&rsquo;il était</span>

            <div className="body-paragraph space-y-4">
              <p>
                La Guilde de la Boulangerie n&rsquo;était pas qu&rsquo;une simple équipe. Aux origines de son code, elle a été pétrie et forgée avec une mission obsessionnelle et absolue&nbsp;: anéantir notre ennemi juré, le projet-gizmo.
              </p>

              <p>
                L&rsquo;objectif ultime était de démontrer notre suprématie via l&rsquo;art intemporel de la boulangerie. Sous cette esthétique, le projet cachait des armes redoutables&nbsp;: un système de Croissantage, le Four Maudit et la Baguette sacrée. L&rsquo;alliance était prête à lever l&rsquo;game sans levure, enfourner ses créations avec tradition et servir ses croissants en armure afin de relever la température sur le champ de bataille.
              </p>

              <p>
                Le four a chauffé, mais malheureusement le projet-gizmo s&rsquo;est avéré tenace. Par manque de temps et d&rsquo;idées, le projet boulangerie a fini par s&rsquo;éteindre.
              </p>
            </div>

          </div>
        </section>

        {/* =================================================
            SECTION 3 — CHRONOLOGIE
            ================================================= */}
        <section className="section-timeline" aria-labelledby="label-timeline">
          <div className="container">

            <span className="section-label" id="label-timeline">Chronologie</span>

            <div className="texture-charred">
              <ol className="timeline" role="list">

                <li className="timeline-entry">
                  <time className="timeline-date" dateTime="2024-11">Nov. 2024</time>
                  <div className="timeline-dot" role="presentation" />
                  <span className="timeline-label">Inception &mdash; la guilde prend forme</span>
                </li>

                <li className="timeline-entry">
                  <time className="timeline-date" dateTime="2025-01">Jan. 2025</time>
                  <div className="timeline-dot" role="presentation" />
                  <span className="timeline-label">v1.0 déployée</span>
                </li>

                <li className="timeline-entry">
                  <time className="timeline-date" dateTime="2025-02">Fév. 2025</time>
                  <div className="timeline-dot" role="presentation" />
                  <span className="timeline-label">v2.0 &mdash; Croissantage &amp; Le Four Maudit</span>
                </li>

                <li className="timeline-entry">
                  <time className="timeline-date" dateTime="2026-02-28">28 Fév. 2026</time>
                  <div className="timeline-dot" role="presentation" />
                  <span className="timeline-label">CTF &mdash; l&rsquo;événement</span>
                </li>

                <li className="timeline-entry">
                  <time className="timeline-date timeline-date--ctf" dateTime="2026-03-04">4 Mars 2026</time>
                  <div className="timeline-dot timeline-dot--ctf" role="presentation" />
                  <span className="timeline-label timeline-label--ctf">Fermeture officielle</span>
                </li>

              </ol>
            </div>

            {/* Decorative rule */}
            <div
              className="deco-rule"
              role="separator"
              style={{ marginTop: 'clamp(2rem, 5vw, 3.5rem)' }}
            />

          </div>
        </section>

        {/* =================================================
            SECTION 4 — MOT DE CLÔTURE
            ================================================= */}
        <section className="section-closing" aria-labelledby="label-closing">
          <div className="container--wide">

            <span className="section-label" id="label-closing">Mot de clôture</span>

            <blockquote className="closing-statement">
              <p>Elle n&rsquo;a pas été abandonnée. Elle a été achevée.</p>
              <p>Un four qu&rsquo;on éteint n&rsquo;est pas un four qui a échoué&nbsp;&mdash;</p>
              <p>c&rsquo;est un four qui a fini de cuire.</p>
            </blockquote>

            <span className="closing-signature">&mdash;&nbsp;La Guilde du Projet Boulangerie</span>

          </div>
        </section>

        {/* =================================================
            SECTION 5 — FOOTER
            ================================================= */}
        <footer className="site-footer" role="contentinfo">
          <div className="container">

            <p className="footer-context">A bientôt, peut-être</p> <br></br>

            <a
              className="footer-link"
              href="https://github.com/projet-boulangerie"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code source disponible sur GitHub
            </a>

          </div>
        </footer>

      </div>
    </>
  );
}
