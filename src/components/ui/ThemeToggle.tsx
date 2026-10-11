
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import styles from './ThemeToggle.module.css'

type Theme = 'dark' | 'light'

const THEME_STORAGE_KEY = 'portfolio-theme'

function getInitialTheme(): Theme {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

    return savedTheme === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
  }

  const isLight = theme === 'light'

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      title={`Switch to ${isLight ? 'dark' : 'light'} theme`}
    >
      {isLight ? (
        <Moon size={18} aria-hidden="true" />
      ) : (
        <Sun size={18} aria-hidden="true" />
      )}
      <span>{isLight ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle