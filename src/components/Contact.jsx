import { FadeIn } from '../useInView'

const links = [
  {
    href: 'mailto:mostafaoukha@gmail.com',
    label: 'mostafaoukha@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/oukha25/',
    label: 'LinkedIn',
    target: '_blank',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/MOSOUKHA',
    label: 'GitHub',
    target: '_blank',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    href: 'tel:+212639597019',
    label: '+212 6 39 59 70 19',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.06a16 16 0 006 6l1.42-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <>
      <section id="contact">
        <FadeIn>
          <div className="contact-inner">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Travaillons<br /><span>ensemble</span></h2>
            <p>Ouvert à un stage, une alternance ou une opportunité de collaboration. N'hésitez pas à me contacter !</p>
            <div className="contact-links">
              {links.map((l, i) => (
                <FadeIn key={l.href} delay={i * 80}>
                  <a
                    href={l.href}
                    className="contact-link"
                    target={l.target}
                    rel={l.target ? 'noreferrer' : undefined}
                  >
                    {l.icon}
                    {l.label}
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <footer>
        <span>© 2025 Oukha Mostafa — Oujda, Maroc</span>
        <span>
          Conçu avec passion ·{' '}
          <a href="https://www.linkedin.com/in/oukha25/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </span>
      </footer>
    </>
  )
}
