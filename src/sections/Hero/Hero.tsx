
import Container from '../../components/layout/Container'
import TestConsole from '../../components/console/TestConsole'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Software Quality & Network Engineering</p>

          <h1 id="hero-heading">
            Hello, I'm Abhiram
            <span>Quality, testing and reliability</span>
          </h1>

          <p className={styles.description}>
            My journey spans mobile application development, UI testing, and regression
            testing. At HPE, I&apos;m building my networking knowledge under mentorship,
            while preparing for JNCIA.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#projects">
              Explore my work
            </a>
            <a className={styles.secondaryAction} href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className={styles.consolePanel}>
          <TestConsole />
        </div>
      </Container>
    </section>
  )
}

export default Hero
