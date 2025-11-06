import { useEffect, useLayoutEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Publications from './components/Publications'
import AdministrativeRoles from './components/AdministrativeRoles'
import Awards from './components/Awards'
import Blog from './components/Blog'
import ResearchGuidance from './components/ResearchGuidance'
import Seminar from './components/Seminar'
import InternationalCollaboration from './components/InternationalCollaboration'
import Admin from './components/Admin'
import BlogPost from './components/BlogPost'
import Gallery from './components/Gallery'
import StickySocial from './components/StickySocial'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  // Increment visitor count on every page load
  useEffect(() => {
    fetch('/api/visitor/increment', { method: 'POST' })
      .catch(err => console.error('Error incrementing visitor count:', err))
  }, [])

  // Lightweight client-side navigation
  const navigate = (path) => {
    if (path === currentPath) return
    // For non-hash routes, jump to top immediately before rendering
    if (!path.startsWith('/#')) {
      window.scrollTo(0, 0)
    }
    window.history.pushState({}, '', path)
    // If navigating to home with hash, normalize path and scroll later
    if (path.startsWith('/#')) {
      setCurrentPath('/')
      const id = path.replace('/#', '')
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          setActiveSection(id)
        }
      })
      return
    }
    setCurrentPath(path)
  }

  // Handle browser navigation
  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // When on home, if there is a hash, scroll to it smoothly after mount/route change
  useEffect(() => {
    if (currentPath !== '/') return
    const { hash } = window.location
    if (!hash) return
    const id = hash.replace('#', '')
    // wait for layout
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(id)
      }
    })
  }, [currentPath])

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        currentPath={currentPath}
        navigate={navigate}
      />
      <main className="pt-20 lg:pt-8">
        {currentPath === '/gallery' ? (
          <Gallery id="gallery" setActiveSection={setActiveSection} />
        ) : currentPath === '/administrative' ? (
          <AdministrativeRoles id="administrative-roles" setActiveSection={setActiveSection} />
        ) : currentPath === '/blog' ? (
          <Blog id="blog" navigate={navigate} />
        ) : currentPath.startsWith('/blog/') ? (
          <BlogPost slug={currentPath.replace('/blog/', '')} navigate={navigate} />
        ) : currentPath === '/adminkmsdkds' ? (
          <Admin />
        ) : currentPath === '/research-guidance' ? (
          <ResearchGuidance />
        ) : currentPath === '/seminar' ? (
          <Seminar />
        ) : currentPath === '/international-collaboration' ? (
          <InternationalCollaboration />
        ) : (
          <>
            <Hero id="home" setActiveSection={setActiveSection} />
            <About id="about" setActiveSection={setActiveSection} />
            <Education id="education" setActiveSection={setActiveSection} />
            <Experience id="experience" setActiveSection={setActiveSection} />
            <Publications id="publications" setActiveSection={setActiveSection} />
            <Awards id="awards" setActiveSection={setActiveSection} />
            <Projects id="projects" setActiveSection={setActiveSection} />
            <Contact id="contact" setActiveSection={setActiveSection} />
          </>
        )}
      </main>
      <StickySocial />
      <Footer />
    </div>
  )
}

export default App
