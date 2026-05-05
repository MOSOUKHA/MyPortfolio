import { useEffect, useRef } from 'react'
import { FadeIn } from '../useInView'

// ─── PARTICLES ───────────────────────────────────────────────────
function Particles() {
  return (
    <div className="particles-container">
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: Math.random() * 0.6 + 0.2,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-blob" />
      <div className="hero-bg-blob2" />
      <Particles />

      <div className="hero-grid">
        <FadeIn delay={0}>
          <div className="hero-badge">✦ Disponible pour un stage / alternance</div>
        </FadeIn>

        <div className="hero-header">
          <FadeIn delay={100}>
            <h1 className="hero-name">
              Oukha<br /><span>Mostafa</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200} direction="scale">
            <div className="profile-wrapper">
              {}
              <div className="profile-placeholder">
                 <img src="/images/ma-photo.jpg" alt="Oukha Mostafa" />
              </div>
              
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <p className="hero-sub">
            Étudiant ingénieur en Génie Informatique à l'ENSA d'Oujda — passionné par 
            le développement logiciel, les systèmes informatiques et l'intelligence artificielle.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
              Voir mes projets
            </a>
            <a href="https://www.linkedin.com/in/oukha25/" target="_blank" rel="noreferrer" className="btn-outline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="hero-scroll">Scroll pour découvrir</div>
    </section>
  )
}
