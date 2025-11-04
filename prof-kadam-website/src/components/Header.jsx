import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
const Header = ({ activeSection, setActiveSection, currentPath, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Teaching Experience' },
    { id: 'administrative-roles', label: 'Administrative Roles' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'seminar', label: 'Seminar' },
    { id: 'research-guidance', label: 'Research Guidance' },
    { id: 'international-collaboration', label: 'International Collaboration' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
    setIsMenuOpen(false)
  }

  const handleNav = (itemId) => {
    if (itemId === 'blog') {
      navigate && navigate('/blog')
      setIsMenuOpen(false)
      return
    }
    if (itemId === 'research-guidance') {
      navigate && navigate('/research-guidance')
      setIsMenuOpen(false)
      return
    }
    if (itemId === 'seminar') {
      navigate && navigate('/seminar')
      setIsMenuOpen(false)
      return
    }
    if (itemId === 'international-collaboration') {
      navigate && navigate('/international-collaboration')
      setIsMenuOpen(false)
      return
    }
    if (itemId === 'gallery') {
      navigate && navigate('/gallery')
      setIsMenuOpen(false)
      return
    }
    if (itemId === 'administrative-roles') {
      navigate && navigate('/administrative')
      setIsMenuOpen(false)
      return
    }

    if (currentPath !== '/') {
      // Navigate back to home and rely on App to scroll via hash
      navigate && navigate('/#' + itemId)
      setIsMenuOpen(false)
      return
    }

    scrollToSection(itemId)
  }

  return (
    <header className={`fixed bg-[#681726] lg:p-7 top-0 left-0 right-0 z-50 transition-all duration-300  backdrop-blur-sm ${
      isScrolled ? 'shadow-lg border-b border-primary-200' : 'shadow-lg border-b border-primary-200'
    }`}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Mobile & Tablet top bar */}
        <div className="lg:hidden flex items-center justify-between h-16">
          <h1 className="text-base sm:text-lg font-bold text-primary-700">
            Prof. Umesh Ashok Kadam , Ph.D
          </h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop centered header */}
        <div className="hidden lg:flex flex-col items-center justify-center py-3">
          <div className="flex items-center justify-center">
            <img src={logo} alt="Prof. Umesh Ashok Kadam Logo" className="h-12 w-12 mr-3"/>
            <h1 className="text-xl font-bold text-white text-center">
              Prof. Umesh Ashok Kadam , Ph.D
            </h1>
          </div>
          <nav className="flex flex-wrap justify-center gap-3 mt-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-xs font-medium transition-colors duration-200 px-2 py-1 ${
                  (item.id === 'gallery'
                    ? currentPath === '/gallery'
                    : item.id === 'administrative-roles'
                    ? currentPath === '/administrative'
                    : item.id === 'blog'
                    ? currentPath.startsWith('/blog')
                    : item.id === 'research-guidance'
                    ? currentPath === '/research-guidance'
                    : item.id === 'seminar'
                    ? currentPath === '/seminar'
                    : item.id === 'international-collaboration'
                    ? currentPath === '/international-collaboration'
                    : currentPath === '/' && activeSection === item.id)
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-white hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation under the bar */}
        {isMenuOpen && (
          <div className="lg:hidden w-full border-t border-primary-200 bg-white/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    (item.id === 'gallery'
                      ? currentPath === '/gallery'
                      : item.id === 'administrative-roles'
                      ? currentPath === '/administrative'
                      : item.id === 'blog'
                      ? currentPath.startsWith('/blog')
                      : item.id === 'research-guidance'
                      ? currentPath === '/research-guidance'
                      : item.id === 'seminar'
                      ? currentPath === '/seminar'
                      : item.id === 'international-collaboration'
                      ? currentPath === '/international-collaboration'
                      : currentPath === '/' && activeSection === item.id)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
