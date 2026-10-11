
import Header from './components/layout/Header'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Experience from './sections/Experience/Experience'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Footer from './components/layout/Footer/Footer'
import BackToTop from './components/ui/BackToTop'
import './App.css'


function App() {
  return (
    <>
      <Header />

      <main id="home">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default App
