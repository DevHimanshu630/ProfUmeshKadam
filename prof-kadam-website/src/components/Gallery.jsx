import { useEffect } from 'react'

const Gallery = ({ id = 'gallery', setActiveSection }) => {
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

  // Eagerly import all .jpeg/.jpg/.png/.webp in the Website_Photo_Gallery directory
  const imageModules = import.meta.glob(
    '../assets/Website_Photo_Gallery/*.{jpeg,jpg,png,webp}',
    { eager: true }
  )
  const images = Object.values(imageModules)
    .map((mod) => (mod && mod.default ? mod.default : null))
    .filter(Boolean)

  return (
    <section id={id} className=" sm:py-20 lg:mt-16 lg:py-24 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <div className="mx-auto max-w-3xl text-center rounded-2xl border border-primary-100 bg-white shadow-md px-6 sm:px-8 py-6 sm:py-8 mt-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-700">Photo Gallery</h2>
            <p className="mt-3 text-sm sm:text-base text-secondary-600">
              A collection of moments from Prof. Umesh A. Kadam’s academic journey.
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
                className="group relative overflow-hidden rounded-lg bg-white shadow-sm border border-primary-100"
              >
                <img
                  src={src}
                  alt={`Prof. gallery ${index + 1}`}
                  className="h-36 sm:h-40 md:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery


