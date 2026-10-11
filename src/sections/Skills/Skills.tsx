
import { Code2, Network, TestTube, Terminal } from 'lucide-react'
import Container from '../../components/layout/Container'
import styles from './Skills.module.css'

const skillGroups = [
  {
    id: 'networking',
    code: 'SK-01',
    icon: Network,
    label: 'Networking',
    skills: [
      'Networking fundamentals',
      'Routing and switching',
      'VLANs and trunking',
      'STP',
      'OSPF',
      'TCP/IP',
      'Junos architecture',
      'RIP',
      'NAT',
      'PAT',
    ],
  },
  {
    id: 'testing',
    code: 'SK-02',
    icon: TestTube,
    label: 'Testing',
    skills: [
      'Regression testing',
      'UI testing',
      'Functional verification',
      'Manual testing',
    ],
  },
  {
    id: 'development',
    code: 'SK-03',
    icon: Code2,
    label: 'Development',
    skills: [
      'React',
      'TypeScript',
      'React Native',
      'Node.js',
      'JavaScript',
      'Python',
    ],
  },
  {
    id: 'tools',
    code: 'SK-04',
    icon: Terminal,
    label: 'Tools and systems',
    skills: ['Linux', 'Git', 'VMware', 'EVE-NG'],
  },
] as const

function Skills() {
  return (
    <section
      id="skills"
      className={styles.skills}
      aria-labelledby="skills-heading"
    >
      <Container className={styles.container}>
        <p className={styles.eyebrow}>03 / SKILLS</p>

        <div className={styles.intro}>
          <h2 id="skills-heading">Technical toolkit</h2>
          <p>
            Technologies and concepts across networking, software testing,
            development, and systems.
          </p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <article className={styles.card} key={group.id}>
                <div
                  className={styles.cardHeader}
                  aria-label={group.label}
                  title={group.label}
                >
                  <Icon
                    className={styles.categoryIcon}
                    size={28}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <span className={styles.code}>{group.code}</span>
                </div>

                <ul className={styles.skillList}>
                  {group.skills.map((skill) => (
                    <li className={styles.skill} key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Skills
