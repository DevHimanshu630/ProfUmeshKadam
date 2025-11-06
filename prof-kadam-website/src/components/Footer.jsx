import { useEffect, useState } from 'react'

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(null)

  useEffect(() => {
    // Fetch visitor count
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitor')
        if (response.ok) {
          const data = await response.json()
          setVisitorCount(data.count)
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error)
      }
    }

    fetchVisitorCount()
  }, [])

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Professional Info */}
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-lg lg:text-xl font-bold text-white">
              Prof. Umesh Ashok Kadam , Ph.D
            </h3>
            <p className="text-secondary-300 text-sm lg:text-base">
              Professor of Medieval Indian History<br />
              Centre for Historical Studies<br />
              School of Social Sciences<br />
              Jawaharlal Nehru University, New Delhi
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 lg:space-y-4">
            <h4 className="text-base lg:text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#publications" 
                  className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  Publications
                </a>
              </li>
              <li>
                <a 
                  href="#awards" 
                  className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  Awards
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 lg:space-y-4">
            <h4 className="text-base lg:text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2">
              <p className="text-secondary-300 text-sm lg:text-base">
                <strong>Email:</strong><br />
                <a 
                  href="mailto:umeshkadam1@gmail.com"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  umeshkadam1@gmail.com
                </a>
              </p>
              <p className="text-secondary-300 text-sm lg:text-base">
                <strong>Academic Email:</strong><br />
                <a 
                  href="mailto:uakadam@jnu.ac.in"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  uakadam@jnu.ac.in , uakadam@mail.jnu.ac.in

                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-6 lg:mt-8 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-xs lg:text-sm text-center md:text-left">
              © 2025 Prof. Umesh Ashok Kadam , Ph.D. All rights reserved.
            </p>
            <div className="flex space-x-4 lg:space-x-6">
              <span className="text-secondary-400 text-xs lg:text-sm text-center">
                Research Focus: Medieval India History and Early Modern History, Maratha-European Relations
              </span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-secondary-400 text-xs lg:text-sm">
              Visitor Count: <span className="text-primary-400 font-semibold">{visitorCount !== null ? visitorCount.toLocaleString() : '9999'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
