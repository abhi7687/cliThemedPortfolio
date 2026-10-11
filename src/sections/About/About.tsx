
import Container from '../../components/layout/Container'
import styles from './About.module.css'

function About() {
  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-heading"
    >
      <Container className={styles.container}>
        <p className={styles.eyebrow}>01 / ABOUT</p>

        <div className={styles.content}>
          <h2 id="about-heading">From building interfaces to testing them.</h2>

          <p>
            My experience spans mobile application development and UI testing.
            Working on application interfaces gave me a developer&apos;s
            perspective, while testing helped me focus on functionality and
            software quality.
          </p>

          <p>
            I now work as a Regression Tester at HPE, where I&apos;m building
            my networking knowledge under mentorship and continuing to develop
            my understanding of software reliability.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default About
