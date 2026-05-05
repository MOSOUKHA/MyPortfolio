import { FadeIn } from '../useInView'

const skillCategories = [
  {
    
    name: 'Langages',
    tags: ['Java', 'Python', 'C / C++', 'C#', 'JavaScript', 'SQL', 'PHP'  ,                    ],
  },
  {
  
    name: 'Web & Mobile',
    tags: ['HTML/CSS', 'React', 'Angular', 'Spring', 'Symfony', 'Bootstrap', 'Android', 'JEE'],
  },
  {
  
    name: 'Bases de données',
    tags: ['MySQL', 'SQL', 'PL/SQL', 'MCD/MLD', 'MERISE'],
  },
  {

    name: 'Concepts avancés',
    tags: ['Machine Learning', 'Deep Learning', 'Réseaux', 'Linux', 'DevOps', 'Agile'],
  },
  {
  
    name: 'Design & Outils',
    tags: ['Canva', 'Adobe Photoshop', 'Capcut', 'UML', 'Git'],
  },
  {
   
    name: 'Soft Skills',
    tags: ['Travail en équipe', 'Communication', 'Analyse', 'Résolution de problèmes', 'Organisation'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <FadeIn><div className="section-label">Compétences</div></FadeIn>
      <FadeIn delay={50}><h2 className="section-title">Stack <span>technique</span></h2></FadeIn>
      <div className="divider" />
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <FadeIn key={cat.name} delay={i * 70}>
            <div className="skill-cat">
              <div className="skill-cat-icon">{cat.icon}</div>
              <div className="skill-cat-name">{cat.name}</div>
              <div className="skill-tags">
                {cat.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
