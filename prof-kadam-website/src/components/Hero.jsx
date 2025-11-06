import { useEffect, useMemo, useState } from 'react'
import profileImage from '../assets/umeshProfile.png'
import buddha from '../assets/buddha.jpg'
const Hero = ({ id, setActiveSection }) => {
  const [showScrollButton, setShowScrollButton] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Load all images from ProfileImg folder (memoized)
  const images = useMemo(() => {
    const profileImages = import.meta.glob('../assets/ProfileImg/*.{jpeg,jpg,png,webp}', { eager: true })
    const imageArray = Object.values(profileImages)
      .map((mod) => (mod && mod.default ? mod.default : null))
      .filter(Boolean)
    return imageArray.length > 0 ? imageArray : [profileImage]
  }, [])

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const imageCount = images.length
    if (imageCount <= 1) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageCount)
    }, 4000)

    return () => clearInterval(interval)
  }, [images])

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
    <section id={id} className="relative min-h-[100svh] bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden lg:mt-8 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 pt-8 sm:pt-24 lg:pt-0">
        <div className="min-h-screen lg:flex lg:items-center lg:pb-18">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full">
              {/* Main Heading */}
              <div className="space-y-3 lg:space-y-4">
                {/* <h1 className="text-3xl lg:text-3xl font-bold text-secondary-900 leading-tight">
           
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Prof. Umesh Ashok Kadam , Ph.D{' '}
                  </span>
                </h1> */}
                {/* Buddha Quote - Running Text */}
                <div className="overflow-hidden bg-white/90 backdrop-blur-sm border border-primary-200 rounded-xl shadow-sm py-3">
                  <div className="flex items-center gap-3 p-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-50 border border-primary-200 flex items-center justify-center flex-shrink-0">
                      <img src={buddha} alt="Buddha" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 overflow-hidden whitespace-nowrap">
                      <div className="inline-block animate-marquee text-secondary-800 text-sm lg:text-base">
                        <span className="italic">"All that we are is the result of what we have thought."</span>
                        <span className="ml-2">— Buddha on Life & Reality</span>
                        <span className="ml-8">|</span>
                        <span className="ml-8 italic">"All that we are is the result of what we have thought."</span>
                        <span className="ml-2">— Buddha on Life & Reality</span>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="space-y-2">
                  <h2 className="text-base sm:text-lg lg:text-2xl font-semibold text-primary-600 leading-tight break-words">
                    Professor of Medieval Indian and Early Modern Indian History, Centre for Historical Studies, Jawaharlal Nehru University, New Delhi
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-secondary-700 font-medium break-words">
                    Historian, Author, Editor, Exhibition Curator / Designer & Agriculturalist
                  </p>
                </div>
              </div>

                
                      
              {/* Research Focus */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-secondary-800">Research Focus</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-1.5 sm:mt-0"></div>
                    <span className="text-secondary-700 text-xs sm:text-sm break-words">Medieval India & Maratha-European Relations</span>
                  </div>
                  <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-1.5 sm:mt-0"></div>
                    <span className="text-secondary-700 text-xs sm:text-sm break-words">Historiography & Bhakti Tradition</span>
                  </div>
                  <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-1.5 sm:mt-0"></div>
                    <span className="text-secondary-700 text-xs sm:text-sm break-words">Maritime & Heritage Studies</span>
                  </div>
                  <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-1.5 sm:mt-0"></div>
                    <span className="text-secondary-700 text-xs sm:text-sm break-words">26+ Years of Teaching Experience</span>
                  </div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="relative px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-20 block">Learn More About Me</span>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="relative px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-secondary-800 font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl border-2 border-primary-300 hover:border-primary-400 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-20 block">Get In Touch</span>
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
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full">
              {/* Profile Image Carousel */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-primary-200 relative bg-primary-100">
                    {images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Prof. (Dr.) Umesh Ashok Kadam - ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                          idx === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      />
                    ))}
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-accent-500 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-secondary-400 rounded-full"></div>
                </div>
              </div>

              {/* Professional Summary Card */}
              <div className="relative w-full">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 border border-primary-200">
                  <div className="absolute -top-3 -right-3 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-3 sm:mb-4">Professional Summary</h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-secondary-900 text-xs sm:text-sm">Current Position</h4>
                        <p className="text-secondary-600 text-xs sm:text-sm break-words">Professor, JNU (2013-present)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-secondary-900 text-xs sm:text-sm">Publications</h4>
                        <p className="text-secondary-600 text-xs sm:text-sm break-words">56 Books (48 authored, 8 edited) + 50+ Research Papers</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-secondary-900 text-xs sm:text-sm">Awards</h4>
                        <p className="text-secondary-600 text-xs sm:text-sm break-words">State Best Teacher Award, Charles Wallace Trust Fellow</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-secondary-900 text-xs sm:text-sm">Languages</h4>
                        <p className="text-secondary-600 text-xs sm:text-sm break-words">Marathi (native), Hindi, English, French (basic)</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-primary-200">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
