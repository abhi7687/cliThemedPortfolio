
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import styles from './BackToTop.module.css'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <a
      className={styles.button}
      href="#home"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </a>
  )
}

export default BackToTop