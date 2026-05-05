import { FadeIn } from '../useInView'

// ══════════════════════════════════════════════════════════════════
//  PROJETS — Modifie les champs "image" avec tes vraies captures
//  d'écran. Place tes images dans public/images/ et mets le chemin.
//  Exemple: image: '/images/projet-gestion-taches.png'
// ══════════════════════════════════════════════════════════════════
const projects = [
  {
    num: '01 — STAGE',
    title: 'Application de gestion des tâches',
    desc: "Application web développée lors du stage chez Euroweb Digital (Tanger) pour la gestion et le suivi des tâches en environnement professionnel.",
    tech: ['HTML', 'CSS', 'JavaScript'],

    image: "/images/gestion-taches.png" ,
    imageAlt: 'Application gestion des tâches',
  },
  {
    num: '02 — MOBILE',
    title: 'OujdaStadium',
    desc: "Application Android pour la réservation des terrains sportifs à Oujda. Consultation des stades, réservation et gestion des créneaux horaires.",
    tech: ['Java', 'Android Studio', 'XML'],
    image : '/images/oujda-stadium.png' ,
    imageAlt: 'OujdaStadium application mobile',
  },
  {
    num: '03 — WEB',
    title: 'Système de gestion des clubs',
    desc: "Plateforme web complète de gestion des membres, événements, rôles et authentification. Architecture MVC avec intégration base de données relationnelle.",
    tech: ['Symfony', 'PHP', 'MySQL', 'Bootstrap'],
    image : '/images/gestion-clubs.png',
    imageAlt: 'Système de gestion des clubs',
  },
  {
    num: '04 — DESKTOP',
    title: 'Gestion des médicaments',
    desc: "Application desktop pour la gestion complète d'une pharmacie — connexion base de données, gestion des événements UI et suivi des stocks.",
    tech: ['Java', 'JavaFX', 'MySQL'],
    // ↓ Remplace par ta vraie image : '/images/gestion-medicaments.png'
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    imageAlt: 'Gestion des médicaments pharmacie',
  },
  {
    num: '05 — JEU',
    title: 'Lost In L\'BLED',
    desc: "Jeu d'aventure 2D présentant la région de l'Oriental du Maroc — environnement 2D, quiz, cinématiques et exploration.",
    tech: ['Unity', 'C#'],
    image : '/images/lost-in-lbled.png',
    imageAlt: 'Lost In LBLED jeu 2D',
  },
  {
    num: '06 — BACKEND',
    title: 'Mini-projets JEE',
    desc: "Authentification, gestion des utilisateurs et déploiement d'applications Java EE avec architecture MVC côté serveur.",
    tech: ['JEE', 'Java', 'MySQL'],
    // ↓ Remplace par ta vraie image : '/images/jee-projets.png'
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    imageAlt: 'Mini-projets JEE backend',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <FadeIn><div className="section-label">Projets</div></FadeIn>
      <FadeIn delay={50}><h2 className="section-title">Ce que j'ai <span>construit</span></h2></FadeIn>
      <div className="divider" />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 80}>
            <div className="project-card">
              <div className="project-img-wrapper">
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
                <div className="project-img-overlay" />
                <div className="project-img-badge">{p.num}</div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
