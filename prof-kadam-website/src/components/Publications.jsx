import { useEffect } from 'react'

const Publications = ({ id, setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('publications')
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

  const featuredBooks = [
    {
      title: "Navigating History: The Medieval Maritime Silk Route and Early Globalization (8th to 18th Centuries)",
      year: "2025",
      publisher: "Springer Nature Singapore",
      isbn: "978-9819501632",
      pages: "240 pages",
      description: "Comprehensive study of medieval maritime trade routes and their impact on early globalization",
      category: "Maritime History"
    },
    {
      title: "Deccan in Transition, 1600 to 1800 (European Dominance and Maratha Sovereignty)",
      year: "2023",
      publisher: "Routledge India / Taylor & Francis",
      isbn: "9781032427164 / 9781032765952",
      pages: "276 pages",
      description: "Analysis of political and social transformations in the Deccan region during the early modern period",
      category: "Medieval History"
    },
    {
      title: "Medieval India: Retracting the Past",
      year: "2023",
      publisher: "Shree Publishers, New Delhi",
      isbn: "9788119448067",
      pages: "265 pages",
      description: "Comprehensive overview of medieval Indian history with new perspectives and interpretations",
      category: "Medieval History"
    },
    {
      title: "French Maratha Sambhandha (Hindi)",
      year: "2023",
      publisher: "Kitabwale, New Delhi",
      isbn: "9781032427164",
      pages: "276 pages",
      description: "Hindi translation of French-Maratha relations study",
      category: "Regional History"
    },
    {
      title: "History of the Marathas: French–Maratha Relations, 1668–1818",
      year: "2008",
      publisher: "Sundeep Prakashan, New Delhi",
      isbn: "978-81-7574-190-4",
      pages: "326 pages",
      description: "Detailed study of diplomatic and cultural relations between the Marathas and French colonial powers",
      category: "Diplomatic History"
    },
    {
      title: "French-Maratha Sambandha, 1668–1818 (Marathi)",
      year: "2011",
      publisher: "Pushpananda Prakashan, Pune",
      isbn: "978-81-907033-7-6",
      pages: "326 pages",
      description: "Marathi translation and adaptation of the French-Maratha relations study",
      category: "Regional History"
    }
  ]

  const bookSeries = [
    {
      title: "French in India Series",
      volumes: "6 volumes",
      year: "2022",
      description: "Comprehensive series on French colonial presence and influence in India",
      volumesList: [
        "Vol I: French on the Coromandel Coast (190 pages, ISBN: 978-613-9-47563-3)",
        "Vol II: French on the Konkan Coast (179 pages, ISBN: 978-613-9-47586-5)",
        "Vol III: French on the Malabar Coast (168 pages, ISBN: 978-613-9-47654-1)",
        "Vol IV: Political Negotiations between the English, French, Nizam & Tipu (173 pages, ISBN: 978-620-0-00037-8)",
        "Vol V: Claims of the French, Dutch and Danes (168 pages, ISBN: 978-620-0-00013-2)",
        "Vol VI: French Complaints about Interruption to their Commerce (176 pages, ISBN: 978-613-9-48718-9)"
      ],
      translations: "Portuguese, German, Spanish, French, Italian, Russian"
    }
  ]

  const editedBooks = [
    {
      title: "Memory, History and Culture in Medieval South Asia, 8th to 14th Centuries",
      year: "2025",
      publisher: "Springer Nature Singapore",
      isbn: "978-981-97-9319-8",
      category: "Edited Volume"
    },
    {
      title: "The Indian Memoir Netaji Subhash Chandra Bose",
      year: "2023",
      publisher: "Remadhav Art, Delhi",
      isbn: "978-93-92493-14-0",
      category: "Edited Volume"
    },
    {
      title: "Glory of Medieval India: Manifestation of the Unexplored – Indian Dynasties, 8th–18th Centuries",
      year: "2023",
      publisher: "Kitabwale, Delhi",
      isbn: "978-93-95472-26-5",
      category: "Edited Volume"
    }
  ]

  const internationalPublications = [
    {
      title: "Dwarasamudra to Orugallu to Devagiri: Regions and Regionalism in Geo-Cultural Permeation, 10th to 14th centuries",
      journal: "Memory, History and Culture in Medieval South Asia, 8th to 14th centuries",
      publisher: "Springer Nature, Singapore",
      year: "2025",
      pages: "pp.3–44",
      doi: "https://doi.org/10.1007/978-981-97-9320-4_1"
    },
    {
      title: "Bhattarakas & The Development of A Medieval Pilgrimage Site: Study Based on Idol Inscriptions from Ukhalad, District Parbani, Maharashtra",
      journal: "Educational Administration: Theory and Practice",
      publisher: "Vol.30(5), May 2024",
      year: "2024",
      pages: "pp.14628–14637",
      doi: "10.53555/kuey.v30i5.7170",
      note: "Scopus Indexed Journal"
    },
    {
      title: "The State, Religion, Soldiery and Savkar: Money, Banking and Merchant Capital in Medieval Maratha Country",
      journal: "Res Militaris, Revue Européenne d'Études – European Journal of Military Studies",
      publisher: "France, Vol.13 No.2, Spring 2023",
      year: "2023",
      pages: "pp.8144–8156",
      doi: "ISSN: 2265-6294",
      note: "Scopus Indexed Journal"
    }
  ]

  return (
    <section id={id} className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Publications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-secondary-600 mt-4">
            56 Books (48 authored, 8 edited) + 50+ Research Papers
          </p>
        </div>

        <div className="space-y-12">
          {/* Publication Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-primary-600 mb-2">56</div>
              <div className="text-secondary-700 font-medium">Total Books</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-secondary-600 mb-2">48</div>
              <div className="text-secondary-700 font-medium">Authored Books</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-primary-600 mb-2">8</div>
              <div className="text-secondary-700 font-medium">Edited Books</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-secondary-600 mb-2">50+</div>
              <div className="text-secondary-700 font-medium">Research Papers</div>
            </div>
          </div>

          {/* Featured Books */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Featured Publications
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredBooks.map((book, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                      {book.category}
                    </span>
                    <span className="text-sm font-medium text-secondary-500">
                      {book.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-2">
                    {book.title}
                  </h4>
                  <p className="text-secondary-600 mb-3">
                    {book.description}
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="text-primary-600 font-medium">
                      Publisher: {book.publisher}
                    </p>
                    <p className="text-secondary-500">
                      ISBN: {book.isbn}
                    </p>
                    <p className="text-secondary-500">
                      Pages: {book.pages}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Book Series */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Book Series
            </h3>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-secondary-200">
              {bookSeries.map((series, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold text-secondary-900">
                      {series.title}
                    </h4>
                    <div className="flex space-x-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {series.volumes}
                      </span>
                      <span className="text-sm font-medium text-secondary-600 bg-secondary-100 px-3 py-1 rounded-full">
                        {series.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-secondary-600">
                    {series.description}
                  </p>
                  <div className="bg-secondary-50 rounded-lg p-4">
                    <h5 className="font-semibold text-secondary-800 mb-2">Volumes:</h5>
                    <ul className="space-y-1">
                      {series.volumesList.map((volume, vIndex) => (
                        <li key={vIndex} className="text-sm text-secondary-700">
                          • {volume}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h5 className="font-semibold text-secondary-800 mb-2">Available in:</h5>
                    <div className="flex flex-wrap gap-2">
                      {series.translations.split(', ').map((lang, langIndex) => (
                        <span key={langIndex} className="text-sm bg-white px-3 py-1 rounded-full border border-secondary-200">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Edited Books */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Edited Books (Selected)
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {editedBooks.map((book, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-medium text-secondary-600 bg-secondary-100 px-3 py-1 rounded-full">
                      {book.category}
                    </span>
                    <span className="text-sm font-medium text-secondary-500">
                      {book.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-2">
                    {book.title}
                  </h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-primary-600 font-medium">
                      Publisher: {book.publisher}
                    </p>
                    <p className="text-secondary-500">
                      ISBN: {book.isbn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Publications */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              International Research Publications (Selected)
            </h3>
            <div className="space-y-6">
              {internationalPublications.map((pub, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
                  <h4 className="text-lg font-bold text-secondary-900 mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-secondary-600 mb-3">
                    <strong>Journal:</strong> {pub.journal}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-primary-600 font-medium">
                        Publisher: {pub.publisher}
                      </p>
                      <p className="text-secondary-500">
                        Year: {pub.year}
                      </p>
                      <p className="text-secondary-500">
                        Pages: {pub.pages}
                      </p>
                    </div>
                    <div>
                      <p className="text-secondary-500">
                        DOI: {pub.doi}
                      </p>
                      {pub.note && (
                        <p className="text-primary-600 font-medium">
                          {pub.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Papers Info */}
          <div className="bg-primary-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Research Papers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-secondary-800 mb-3">Publication Venues:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700">Scopus indexed journals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700">Peer-reviewed international journals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700">National and international seminars</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700">Springer Nature publications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-800 mb-3">Research Areas:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700">Medieval Indian History</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700">Maratha-European Relations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700">Maritime History</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-700">Regional History</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications
