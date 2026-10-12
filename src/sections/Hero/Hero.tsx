
import { useEffect, useState } from 'react'
import Container from '../../components/layout/Container'
import TestConsole from '../../components/console/TestConsole'
import styles from './Hero.module.css'

const NAME = "Hello, I'm Abhiram."
const CYCLE_DURATION = 10000
const TYPING_SPEED = 210

function Hero() {
  const [typedCommand, setTypedCommand] = useState('')
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reducedMotion) {
      setTypedCommand(`echo "${NAME}"`)
      setShowOutput(true)
      return
    }

    let timeoutId: ReturnType<typeof setTimeout>
    let characterIndex = 0
    let cycleStart = 0

    const typeCommand = () => {
      characterIndex = 0
      cycleStart = Date.now()
      setTypedCommand('')
      setShowOutput(false)

      const typeNextCharacter = () => {
        characterIndex += 1
        setTypedCommand(`echo "${NAME}"`.slice(0, characterIndex))

        if (characterIndex < `echo "${NAME}"`.length) {
          timeoutId = setTimeout(typeNextCharacter, TYPING_SPEED)
        } else {
          setShowOutput(true)
          const remainingTime = Math.max(
            0,
            CYCLE_DURATION - (Date.now() - cycleStart),
          )
          timeoutId = setTimeout(typeCommand, remainingTime)
        }
      }

      typeNextCharacter()
    }

    typeCommand()

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Container className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Software Quality & Network Engineering
          </p>

          <div className={styles.identityTerminal} aria-label={`echo ${NAME}`}>
            <p className={styles.commandLine} aria-hidden="true">
              <span className={styles.prompt}>$</span>{' '}
              {typedCommand}
              <span className={styles.cursor} />
            </p>
            <p className={styles.commandOutput} aria-hidden="true">
              {showOutput ? NAME : ''}
            </p>
          </div>

          <h1 id="hero-heading">
            <span className={styles.visuallyHidden}>Hello, I'm Abhiram</span>
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
