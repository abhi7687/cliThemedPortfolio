
import { ArrowUpRight, Mail } from 'lucide-react'
import Container from '../../components/layout/Container'
import styles from './Contact.module.css'

const contactLinks = [
  {
    label: 'EMAIL',
    value: 'abhiramvaitla7687@gmail.com',
    href: 'mailto:abhiramvaitla7687@gmail.com',
    type: 'email',
  },
  {
    label: 'GITHUB',
    value: 'github.com/abhi7687',
    href: 'https://github.com/abhi7687',
    type: 'github',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/abhiramvaitla',
    href: 'https://www.linkedin.com/in/abhiramvaitla',
    type: 'linkedin',
  },
] as const

function ContactIcon({ type }: { type: (typeof contactLinks)[number]['type'] }) {
  if (type === 'email') {
    return <Mail size={21} aria-hidden="true" />
  }

  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.2 3.8 1.58.1-.73.39-1.23.7-1.52-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.22-5.08 5.5.4.34.75 1 .75 2.02v2.99c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.98V9h2.95v9.45ZM6.45 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.74H15.5v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.68H9.26V9h2.83v1.29h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.55 1.97 3.55 4.53v5.16Z" />
    </svg>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>GET IN TOUCH</p>
          <h2 id="contact-heading">Let's connect.</h2>
          <p className={styles.description}>
            Interested in software quality, networking, or collaborating on a
            project? Reach out through the links below.
          </p>

          <div className={styles.links}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className={styles.link}
                href={link.href}
                target={link.type === 'email' ? undefined : '_blank'}
                rel={link.type === 'email' ? undefined : 'noreferrer'}
              >
                <span className={styles.iconBox}>
                  <ContactIcon type={link.type} />
                </span>

                <span className={styles.linkContent}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  <span className={styles.linkText}>{link.value}</span>
                </span>

                <ArrowUpRight
                  className={styles.arrow}
                  size={19}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact