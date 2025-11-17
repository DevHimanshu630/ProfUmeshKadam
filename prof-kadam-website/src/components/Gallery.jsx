import { useEffect, useState } from 'react'

const Gallery = ({ id = 'gallery', setActiveSection }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Auto-mark this section active when it enters viewport
  useEffect(() => {
    const section = document.getElementById(id)
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection && setActiveSection(id)
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [id, setActiveSection])

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null)
      }
    }
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  // Eagerly import all .jpeg/.jpg/.png/.webp in the Website_Photo_Gallery directory
  const imageModules = import.meta.glob(
    '../assets/Website_Photo_Gallery/*.{jpeg,jpg,png,webp}',
    { eager: true }
  )
  const images = Object.values(imageModules)
    .map((mod) => (mod && mod.default ? mod.default : null))
    .filter(Boolean)

  const openModal = (src) => {
    setSelectedImage(src)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <section id={id} className="sm:py-20 lg:mt-16 lg:py-24 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <div className="mx-auto max-w-3xl text-center rounded-2xl border border-primary-100 bg-white shadow-md px-6 sm:px-8 py-6 sm:py-8 mt-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-700">Photo Gallery</h2>
              <p className="mt-3 text-sm sm:text-base text-secondary-600">
                A collection of moments from Prof. Umesh A. Kadam's academic journey.
              </p>
            </div>
          </div>

          {images.length === 0 ? (
            <div className="text-center text-secondary-600">No images found in assets/Website_Photo_Gallery.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {images.map((src, index) => (
                <div
                  key={src + String(index)}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-sm border border-primary-100 cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(src)}
                >
                  <img
                    src={src}
                    alt={`Prof. gallery ${index + 1}`}
                    className="h-36 sm:h-40 md:h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-primary-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full size gallery image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery


