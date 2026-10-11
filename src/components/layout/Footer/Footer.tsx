
import Container from '../Container'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <a className={styles.brand} href="#home" aria-label="Back to home">
            abhiram<span>@</span>portfolio
          </a>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} Abhiram Vaitla. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer