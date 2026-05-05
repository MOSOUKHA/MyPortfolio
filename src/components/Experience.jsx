import { FadeIn } from '../useInView'

// ══════════════════════════════════════════════════════════════════
//  CLUBS & EXPÉRIENCES — Modifie les champs "image" avec tes vraies
//  photos des clubs/événements. Place tes images dans public/images/
//  Exemple: image: '/images/club-ensart.jpg'
// ══════════════════════════════════════════════════════════════════
const experiences = [
  {
    year: '2024 – Présent',
    role: 'Responsable Media & Design',
    org: 'Club ENSART & Club Rotaract — ENSAO',
    desc: 'Gestion de contenu numérique et communication visuelle. Design des affiches et posts pour les réseaux sociaux des clubs.',
    
    image: '/images/club-ensart.jpg' ,
    imageAlt: 'Club ENSART & Rotaract ENSAO',
  },
  {
    year: '2024 – Présent',
    role: 'Trésorier — Membre',
    org: 'Club Génie Informatique — ENSAO',
    desc: "Organisation de la Journée Informatique (4ème édition). Animation d'un atelier IA pour les développeurs. Organisation de TECHCONNECT en collaboration avec l'école ENIAD.",
    image:  '/images/club-genie-info.jpg',
    imageAlt: 'Club Génie Informatique ENSAO',
  },
  {
    year: '2024 – Présent',
    role: 'Responsable Organisation 2026',
    org: "Maison des Sciences de l'Oriental",
    desc: "Préparation et animation d'ateliers scientifiques. Participation au Festival de la Maison des Sciences.",
    image : '/images/maison-sciences.jpg',
    imageAlt: "Maison des Sciences de l'Oriental",
  },
  {
    year: '2024',
    role: 'Organisateur',
    org: 'Forum des Entreprises — ENSAO',
    desc: "Organisation et coordination du Forum des Entreprises de l'école, mettant en relation étudiants et professionnels.",
    image:     '/images/forum-entreprises.jpg',
    imageAlt: 'Forum des Entreprises ENSAO',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <FadeIn><div className="section-label">Expérience</div></FadeIn>
      <FadeIn delay={50}><h2 className="section-title">Engagement &amp; <span>activités</span></h2></FadeIn>
      <div className="divider" />
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.org} delay={i * 100}>
            <div className="exp-card">
              <div className="exp-img-wrapper">
                <img src={exp.image} alt={exp.imageAlt} loading="lazy" />
                <div className="exp-img-overlay" />
              </div>
              <div className="exp-body">
                <div className="exp-year">{exp.year}</div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-org">{exp.org}</div>
                <p className="exp-desc">{exp.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
