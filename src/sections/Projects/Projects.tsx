
import Container from '../../components/layout/Container'
import styles from './Projects.module.css'

const projects = [
  {
    id: 'healthcare-chatbot',
    code: 'PR-01',
    title: 'Healthcare Chatbot',
    category: 'AI / Web Application',
    description:
      'A healthcare chatbot project built with an FNN-based approach, a FastAPI backend, and a React frontend.',
    technologies: ['Python', 'FastAPI', 'React'],
  },
  {
    id: 'document-chat',
    code: 'PR-02',
    title: 'Document Chat System',
    category: 'Document Processing / AI',
    description:
      'A document chat system project involving document uploads, backend APIs, database integration, and local language-model tooling.',
    technologies: ['Node.js', 'Prisma', 'PostgreSQL', 'Ollama'],
  },
  {
    id: 'network-lab',
    code: 'PR-03',
    title: 'Enterprise Branch Network Lab',
    category: 'Networking / Lab',
    description:
      'A practical networking lab project for exploring enterprise branch network configuration and networking concepts.',
    technologies: ['CCNA', 'VLANs', 'Routing and switching'],
  },
  {
    id: 'social-media-ads',
    code: 'PR-04',
    title: 'Social Media Ads Classification',
    category: 'Classification',
    description:
      'A project focused on classifying social media advertisements.',
    technologies: [],
  },
  {
    id: 'task-tracker',
    code: 'PR-05',
    title: 'Task Tracker',
    category: 'CLI Application',
    description:
      'A task-tracking application project.',
    technologies: [],
  },
] as const

function Projects() {
  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-heading"
    >
      <Container className={styles.container}>
        <p className={styles.eyebrow}>04 / PROJECTS</p>

        <div className={styles.intro}>
          <h2 id="projects-heading">Selected projects</h2>
          <p>
            A selection of projects across application development,
            classification, document processing, and networking.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.card} key={project.id}>
              <div className={styles.cardHeader}>
                <span className={styles.code}>{project.code}</span>
                <span className={styles.category}>{project.category}</span>
              </div>

              <h3>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              {project.technologies.length > 0 && (
                <ul className={styles.technologyList}>
                  {project.technologies.map((technology) => (
                    <li className={styles.technology} key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
