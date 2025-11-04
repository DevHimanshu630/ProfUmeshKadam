import { useEffect } from 'react'

const About = ({ id, setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('about')
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

  return (
    <section id={id} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            About Prof. Kadam
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <div className="space-y-8">
            <div className="bg-secondary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Personal Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">
                    <strong>Name:</strong> Umesh Ashok Kadam
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">
                    <strong>Father's Name:</strong> Ashok Narayan Kadam
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">
                    <strong>Date of Birth:</strong> 28 May 1976
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">
                    <strong>Nationality:</strong> Indian
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">
                    <strong>Marital Status:</strong> Married to Dr. Kaveri Kadam
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">
                    <strong>Children:</strong> Aditya Kadam, Aditi Kadam
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-secondary-700">umeshkadam1@gmail.com ,</span>
                  <span className="text-secondary-700">uakadam@mail.jnu.ac.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-secondary-700">uakadam@jnu.ac.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-secondary-700">(0) 7838489367, (0) 9850169020</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Address
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Residence:</h4>
                  <p className="text-secondary-700 text-sm">
                    Professor (Dr) Umesh Ashok Kadam,<br />
                    House No 1312, Poorvanchal,<br />
                    Jawaharlal Nehru University,<br />
                    New Delhi 110067.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Office:</h4>
                  <p className="text-secondary-700 text-sm">
                    Professor Umesh Ashok Kadam,<br />
                    Professor in Medieval Indian History,<br />
                    Chamber no. 424 Fourth Floor, Centre for Historical Studies,<br />
                    School of Social Sciences,<br />
                    Jawaharlal Nehru University, New Delhi 110067.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Position & Research Focus */}
          <div className="space-y-8">
            <div className="bg-white border border-secondary-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Current Position
              </h3>
              <div className="space-y-4">
                <div className="bg-primary-100 rounded-lg p-4">
                  <h4 className="font-semibold text-primary-800 mb-2">
                    Professor in Medieval Indian History
                  </h4>
                  <p className="text-primary-700">
                    Centre for Historical Studies, School of Social Sciences,<br />
                    Jawaharlal Nehru University, New Delhi<br />
                    <span className="text-sm">05-12-2013 onwards</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-secondary-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Research Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-secondary-50 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-800 mb-2">Medieval India</h4>
                  <p className="text-secondary-600 text-sm">
                    Comprehensive study of medieval Indian history and society
                  </p>
                </div>
                <div className="bg-secondary-50 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-800 mb-2">Maratha-European Relations</h4>
                  <p className="text-secondary-600 text-sm">
                    Diplomatic and cultural interactions between Marathas and European powers
                  </p>
                </div>
                <div className="bg-secondary-50 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-800 mb-2">Historiography</h4>
                  <p className="text-secondary-600 text-sm">
                    Study of historical writing and methodology
                  </p>
                </div>
                <div className="bg-secondary-50 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-800 mb-2">Bhakti Tradition</h4>
                  <p className="text-secondary-600 text-sm">
                    Religious and cultural movements in medieval India
                  </p>
                </div>
                <div className="bg-secondary-50 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-800 mb-2">Maritime Studies</h4>
                  <p className="text-secondary-600 text-sm">
                    Indian Ocean trade and maritime history
                  </p>
                </div>
                <div className="bg-secondary-50 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-800 mb-2">Heritage Studies</h4>
                  <p className="text-secondary-600 text-sm">
                    Cultural heritage preservation and documentation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-secondary-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Professional Links
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <a href="https://orcid.org/0000-0001-8463-6951" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    ORCID: 0000-0001-8463-6951
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <a href="https://jnu.ac.in/content/uakadam" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    JNU Profile
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <a href="https://www.researchgate.net/profile/Umesh-Kadam-3" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    ResearchGate Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
