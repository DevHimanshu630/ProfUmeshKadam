import { useEffect, useState } from 'react'
import profileImage from '../assets/Umesh-Kadam-3.webp'

const Hero = ({ id, setActiveSection }) => {
  const [showScrollButton, setShowScrollButton] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('home')
          setShowScrollButton(true)
        } else {
          setShowScrollButton(false)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(id)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [id, setActiveSection])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id={id} className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center pb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Main Heading */}
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-3xl lg:text-5xl font-bold text-secondary-900 leading-tight">
                  Prof. (Dr.){' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                    Umesh Ashok Kadam
                  </span>
                </h1>
                
                <div className="space-y-2">
                  <h2 className="text-xl lg:text-2xl font-semibold text-primary-600">
                    Professor of Medieval Indian History
                  </h2>
                  <p className="text-base lg:text-lg text-secondary-700 font-medium">
                    Centre for Historical Studies, School of Social Sciences
                  </p>
                  <p className="text-base lg:text-lg text-secondary-700 font-medium">
                    Jawaharlal Nehru University, New Delhi
                  </p>
                </div>
              </div>

              {/* Research Focus */}
              <div className="space-y-3 lg:space-y-4">
                <h3 className="text-lg font-semibold text-secondary-800">Research Focus</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700 text-sm">Medieval India & Maratha-European Relations</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700 text-sm">Historiography & Bhakti Tradition</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700 text-sm">Maritime & Heritage Studies</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700 text-sm">26+ Years of Teaching Experience</span>
                  </div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="group relative px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="relative z-10">Learn More About Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group px-6 py-3 bg-white/90 backdrop-blur-sm text-secondary-700 font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-primary-200 hover:border-primary-300 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-4 lg:pt-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-600">56</div>
                  <div className="text-xs text-secondary-600">Books Published</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-600">26+</div>
                  <div className="text-xs text-secondary-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-600">4</div>
                  <div className="text-xs text-secondary-600">Countries Visited</div>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image and Professional Summary */}
            <div className="space-y-6 lg:space-y-8">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-primary-200">
                    <img 
                      src={profileImage} 
                      alt="Prof. (Dr.) Umesh Ashok Kadam" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary-400 rounded-full"></div>
                </div>
              </div>

              {/* Professional Summary Card */}
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 lg:p-6 border border-primary-200">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-secondary-900 mb-4">Professional Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 text-sm">Current Position</h4>
                        <p className="text-secondary-600 text-sm">Professor, JNU (2013-present)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 text-sm">Publications</h4>
                        <p className="text-secondary-600 text-sm">56 Books (48 authored, 8 edited) + 50+ Research Papers</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 text-sm">Awards</h4>
                        <p className="text-secondary-600 text-sm">State Best Teacher Award, Charles Wallace Trust Fellow</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 text-sm">Languages</h4>
                        <p className="text-secondary-600 text-sm">Marathi (native), Hindi, English, French (basic)</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="mt-6 pt-4 border-t border-primary-200">
                    <div className="flex flex-wrap gap-2">
                      <a href="#publications" className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium hover:bg-primary-200 transition-colors">
                        Publications
                      </a>
                      <a href="#experience" className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium hover:bg-secondary-200 transition-colors">
                        Experience
                      </a>
                      <a href="#awards" className="px-2 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-medium hover:bg-accent-200 transition-colors">
                        Awards
                      </a>
                      <a href="#contact" className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium hover:bg-primary-200 transition-colors">
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Only visible when on Hero section */}
      {showScrollButton && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
          <button 
            onClick={scrollToAbout}
            className="w-6 h-10 border-2 duration-300 animate-bounce border-primary-500 rounded-full flex justify-center items-center hover:border-primary-600 hover:bg-primary-50 transition-all duration-300 cursor-pointer group shadow-lg bg-white/90 backdrop-blur-sm"
          >
            <div className="w-1 h-4 bg-primary-500 rounded-full  group-hover:bg-primary-600 transition-colors "></div>
          </button>
        </div>
      )}
    </section>
  )
}

export default Hero
