import { FadeIn } from '../useInView'

const stats = [
  { num: '6+', desc: 'Projets réalisés' },
  { num: '15+', desc: 'Technologies maîtrisées' },
  { num: '4', desc: 'Clubs & associations' },
  { num: '3', desc: 'Langues parlées' },
]

const langs = [
  '🇲🇦 Arabe — Natif',
  '🇫🇷 Français — B2',
  '🇬🇧 Anglais — B2',
]

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <FadeIn direction="left">
          <div className="about-text">
            <div className="section-label">À propos</div>
            <h2 className="section-title">
              Motivé,<br />rigoureux &amp; <span>créatif</span>
            </h2>
            <p>
              Étudiant ingénieur en 4ème année à l'<strong>ENSAO — École Nationale des Sciences Appliquées d'Oujda</strong>, spécialité Génie Informatique.
            </p>
            <p>
              Solides bases en programmation, développement web Full-stack, bases de données et intelligence artificielle.
            </p>
            <div className="about-langs">
              {langs.map(lang => (
                <span key={lang} className="lang-pill">{lang}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="about-stats">
          {stats.map((s, i) => (
            <FadeIn key={s.num} delay={i * 80} direction="scale">
              <div className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
