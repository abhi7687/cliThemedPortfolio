
import ThemeToggle from '../ui/ThemeToggle'
import styles from './Header.module.css'

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        
        <a className={styles.brand} href="#home" aria-label="Abhiram Vaitla, home">
            <span>abhiram</span>
            <span className={styles.brandAt}>@</span>
            <span>portfolio ~ $</span>
        </a>

        <nav className={styles.navigation} aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
