import { useEffect, useState } from 'react'
import humanExcellenceGoldenAward from '../assets/Awards/HumanExcellenceGoldenAward-2025.jpeg'
import excellenceHistoricalResearchAward from '../assets/Awards/Human ExcellenceHistoricalReaserch2025.jpeg'
import excellenceHistoricalResearchAwardPart2 from '../assets/Awards/Human ExcellenceHistoricalReaserch2025Part2.jpeg'

const Awards = ({ id, setActiveSection }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('awards')
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

  const awardsData = [
    {
      title: "State Level Best Teacher Award",
      year: "2011",
      organization: "Aaviskar Social and Educational Foundation, Kolhapur (Maharashtra)",
      description: "Recognition for excellence in teaching and academic leadership",
      icon: "🏆"
    },
    {
      title: "Mahamahopadhya Datto Waman Potdar Award",
      year: "2011–12",
      organization: "Maharashtra Literature Board, Pune",
      description: "Award for the Marathi book 'French-Maratha Sambandh (1668–1818)'",
      icon: "📚"
    },
    {
      title: "Late Smt. Sitabai Kulkarni Research Prize",
      year: "2006–07",
      organization: "Shivaji University",
      description: "Awarded for Ph.D. thesis 'French Maratha Relations (1668–1818)'",
      icon: "🔬"
    },
    {
      title: "Human Excellence Golden Award-2025",
      year: "2025",
      organization: "The American University USA (AUGP-USA)",
      description:
        "Awarded the 'Human Excellence Golden Award-2025' conferred by The American University USA, AUGP-USA on the recommendation of its World Governing Council of Governors and Senate Members of AUGP-USA in 120 countries on 10 November 2025 at the India International Centre, New Delhi.",
      icon: "🌟",
      image: humanExcellenceGoldenAward
    },
    {
      title: "Excellence in Historical Research – 2025",
      year: "2025",
      organization: "The American University USA (AUGP-USA)",
      description:
        "Awarded the 'Excellence in Historical Research – 2025' conferred by The American University USA, AUGP-USA on the recommendation of its World Governing Council of Governors and Senate Members of AUGP-USA in 120 countries on 10 November 2025 at the India International Centre, New Delhi.",
      icon: "🎖️",
      images: [excellenceHistoricalResearchAward, excellenceHistoricalResearchAwardPart2]
    }
  ]

  const fellowshipsData = [
    {
      title: "Charles Wallace India Trust",
      type: "Post-Doctoral Fellowship",
      year: "2009",
      location: "London, UK",
      description: "Prestigious fellowship to research Portuguese and Dutch relations with the Marathas (1630–1818) in the UK",
      icon: "🇬🇧"
    },
    {
      title: "Charles Wallace India Trust",
      type: "Scholarship",
      year: "2004",
      location: "London, UK",
      description: "Research scholarship for academic studies in the UK",
      icon: "🇬🇧"
    },
    {
      title: "Maison des Sciences de l'Homme",
      type: "Research Grant",
      year: "2004",
      location: "Paris, France",
      description: "Research grant under Indo-French Programme to work in Paris archives",
      icon: "🇫🇷"
    }
  ]

  const otherRecognitions = [
    {
      title: "Indo-French Social Scientist Exchange Programme",
      year: "2007",
      description: "Selected to visit Paris under Indo-French Cultural Exchange",
      icon: "🤝"
    },
    {
      title: "ICHR Foreign Travel Grant",
      year: "2004",
      description: "Sponsored by Indian Council of Historical Research, New Delhi, to visit France for research on French-Maratha Relations",
      icon: "✈️"
    },
    {
      title: "President (Medieval History Section)",
      year: "2007",
      description: "Maharashtra History Conference, Chinchani, Thane",
      icon: "👑"
    }
  ]

  const citationData = [
    {
      platform: "Google Scholar",
      citations: "15",
      hIndex: "3"
    },
    {
      platform: "ResearchGate",
      citations: "4",
      hIndex: "1",
      score: "102.4",
      reads: "60,552"
    }
  ]

  return (
    <section id={id} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Awards & Fellowships
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-secondary-600 mt-4">
            Recognition for Academic Excellence and Research Contributions
          </p>
        </div>

        <div className="space-y-12">
          {/* Awards */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Awards & Recognitions
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {awardsData.map((award, index) => (
                <div key={index} className="bg-secondary-50 rounded-xl p-6 shadow-sm border border-secondary-200">
                  {award.images ? (
                    <div className="mb-4 grid gap-4">
                      {award.images.map((src, imgIdx) => (
                        <img
                          key={`${award.title}-image-${imgIdx}`}
                          src={src}
                          alt={`${award.title} certificate ${imgIdx + 1}`}
                          loading="lazy"
                          className="w-full h-48 object-cover rounded-lg border border-secondary-200 shadow-sm cursor-pointer"
                          onClick={() => setSelectedImage(src)}
                        />
                      ))}
                    </div>
                  ) : (
                    award.image && (
                      <div className="mb-4">
                        <img
                          src={award.image}
                          alt={award.title}
                          loading="lazy"
                          className="w-full h-48 object-cover rounded-lg border border-secondary-200 shadow-sm cursor-pointer"
                          onClick={() => setSelectedImage(award.image)}
                        />
                      </div>
                    )
                  )}
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{award.icon}</div>
                    <h4 className="text-lg font-bold text-secondary-900 mb-2">
                      {award.title}
                    </h4>
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                      <span className="text-sm text-secondary-500">
                        {award.organization}
                      </span>
                    </div>
                  </div>
                  <p className="text-secondary-600 text-center">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fellowships */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Fellowships & Research Grants
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {fellowshipsData.map((fellowship, index) => (
                <div key={index} className="bg-primary-50 rounded-xl p-6 shadow-sm border border-primary-200">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{fellowship.icon}</div>
                    <h4 className="text-lg font-bold text-secondary-900 mb-2">
                      {fellowship.title}
                    </h4>
                    <div className="flex flex-col items-center space-y-2 mb-3">
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {fellowship.type}
                      </span>
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {fellowship.year}
                      </span>
                      <span className="text-sm text-secondary-500">
                        {fellowship.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-secondary-600 text-center">
                    {fellowship.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Other Recognitions */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Other Recognitions & Honors
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {otherRecognitions.map((recognition, index) => (
                <div key={index} className="bg-secondary-50 rounded-xl p-6 shadow-sm border border-secondary-200">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{recognition.icon}</div>
                    <h4 className="text-lg font-bold text-secondary-900 mb-2">
                      {recognition.title}
                    </h4>
                    <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                      {recognition.year}
                    </span>
                  </div>
                  <p className="text-secondary-600 text-center">
                    {recognition.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Citation Index */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Citation Index & Research Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {citationData.map((data, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-secondary-900 mb-4">
                    {data.platform}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        {data.citations}
                      </div>
                      <div className="text-sm text-secondary-600">Citations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary-600 mb-1">
                        {data.hIndex}
                      </div>
                      <div className="text-sm text-secondary-600">H-Index</div>
                    </div>
                    {data.score && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {data.score}
                        </div>
                        <div className="text-sm text-secondary-600">Score</div>
                      </div>
                    )}
                    {data.reads && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary-600 mb-1">
                          {data.reads}
                        </div>
                        <div className="text-sm text-secondary-600">Total Reads</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Recognition */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              International Recognition
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-secondary-800 mb-4">Research Impact:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Multiple international fellowships and research grants
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Recognition from prestigious institutions in UK and France
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      State-level recognition for teaching excellence
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Research prizes for outstanding scholarly work
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-800 mb-4">Academic Contributions:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Award-winning publications in multiple languages
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Consistent recognition over two decades of academic work
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      International collaborations and exchange programmes
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Leadership roles in academic conferences and sections
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-primary-600 mb-2">5</div>
              <div className="text-secondary-700 font-medium">Major Awards</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-secondary-600 mb-2">3</div>
              <div className="text-secondary-700 font-medium">Fellowships</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
              <div className="text-secondary-700 font-medium">Countries</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-secondary-600 mb-2">20+</div>
              <div className="text-secondary-700 font-medium">Years of Recognition</div>
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            aria-label="Close"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Full size award certificate" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Awards
