
import { useState } from 'react'
import Container from '../../components/layout/Container'
import styles from './Experience.module.css'

const experiences = [
  {
    id: 'hpe',
    code: 'TC-003',
    role: 'Regression Tester',
    company: 'HPE',
    status: 'CURRENT',
    description:
      'Recently joined and currently building networking knowledge under mentorship.',
    details: [
      'Building networking knowledge with guidance from an assigned mentor.',
      'Preparing for JNCIA to strengthen networking fundamentals.',
    ],
  },
  {
    id: 'rubis',
    code: 'TC-002',
    role: 'Mobile Application Developer Intern',
    company: 'Rubis Software Solutions',
    status: 'COMPLETED',
    description: 'Worked on mobile application UI features.',
    details: [
      'Contributed to mobile application interface features during the internship.',
      'Improved application performance and reduced latency by 35%, optimizing client-server communication flows.',
      'Designed centralized data handling system, improving backend response efficiency and reducing issue resolution time by 60%.',
      'Collaborated with cross-functional teams to streamline system integration, reducing deployment time by 20%.',
      'Worked across full SDLC with focus on system reliability, debugging, and performance tuning.',
    ],
  },
  {
    id: 'infrabim',
    code: 'TC-001',
    role: 'Testing Intern',
    company: 'InfraBIM Techno Solutions',
    status: 'COMPLETED',
    description: 'Tested UI functionalities.',
    details: [
      'Performed UI functionality checks against expected behavior.',
      'Tested data analytics mobile app, uncovering 15 critical bugs and ensuring 90% resolution with development team.',
      'Prepared test cases, functional validation, and regression testing reports.',
    ],
  },
] as const

function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section
      id="experience"
      className={styles.experience}
      aria-labelledby="experience-heading"
    >
      <Container className={styles.container}>
        <p className={styles.eyebrow}>02 / EXPERIENCE</p>

        <h2 id="experience-heading">Professional experience</h2>

        <div className={styles.timeline}>
          {experiences.map((item) => {
            const isExpanded = expandedId === item.id
            const detailsId = `experience-details-${item.id}`

            return (
              <article className={styles.entry} key={item.id}>
                <div className={styles.entryMeta}>
                  <span className={styles.code}>{item.code}</span>
                  <span
                    className={`${styles.status} ${
                      item.status === 'CURRENT'
                        ? styles.current
                        : styles.completed
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className={styles.entryContent}>
                  <button
                    className={styles.toggle}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    onClick={() =>
                      setExpandedId(isExpanded ? null : item.id)
                    }
                  >
                    <span className={styles.headingGroup}>
                      <span className={styles.role}>{item.role}</span>
                      <span className={styles.company}>{item.company}</span>
                    </span>

                    <span className={styles.toggleIcon} aria-hidden="true">
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>

                  <p className={styles.description}>{item.description}</p>

                  <div
                    className={styles.details}
                    id={detailsId}
                    hidden={!isExpanded}
                  >
                    <p className={styles.detailsLabel}>ADDITIONAL DETAILS</p>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Experience
