import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Awards from './components/Awards'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero id="home" setActiveSection={setActiveSection} />
        <About id="about" setActiveSection={setActiveSection} />
        <Education id="education" setActiveSection={setActiveSection} />
        <Experience id="experience" setActiveSection={setActiveSection} />
        <Publications id="publications" setActiveSection={setActiveSection} />
        <Awards id="awards" setActiveSection={setActiveSection} />
        <Projects id="projects" setActiveSection={setActiveSection} />
        <Contact id="contact" setActiveSection={setActiveSection} />
      </main>
      <Footer />
    </div>
  )
}

export default App
