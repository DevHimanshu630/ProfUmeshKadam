import { useEffect } from 'react'

const Projects = ({ id, setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('projects')
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

  const majorProjects = [
    {
      title: "Deccan in Transition: Politics and Interdependency – European Powers in Relation to the Marathas",
      period: "5 April 2018 – May 2020",
      funding: "ICSSR, New Delhi",
      amount: "₹15,00,000",
      description: "Comprehensive study of political and social transformations in the Deccan region and the complex relationships between European powers and the Maratha Empire",
      outcomes: [
        "Analysis of diplomatic relations between European powers and Marathas",
        "Study of cultural exchanges and economic interactions",
        "Documentation of political transformations in the Deccan region",
        "Research on interdependency patterns in early modern India"
      ]
    },
    {
      title: "The Portuguese and Dutch Relations with the Marathas (1630–1818)",
      period: "May 2009 – 31 July 2011",
      funding: "University of Pune",
      amount: "University Sponsored",
      description: "Research project examining the diplomatic and trade relations between Portuguese and Dutch colonial powers and the Maratha Empire",
      outcomes: [
        "Documentation of trade networks between European powers and Marathas",
        "Analysis of diplomatic correspondence and treaties",
        "Study of cultural influences and exchanges",
        "Research on maritime trade routes and commercial relations"
      ]
    },
    {
      title: "Relations between the French and the Marathas with special reference to the French diplomatic projects in India (1761–1818)",
      period: "August 2006 – 31 July 2008",
      funding: "University of Pune",
      amount: "University Sponsored",
      description: "In-depth study of French diplomatic initiatives and their impact on Maratha politics and society",
      outcomes: [
        "Analysis of French diplomatic strategies in India",
        "Documentation of political alliances and treaties",
        "Study of cultural exchanges between French and Marathas",
        "Research on French colonial projects and their outcomes"
      ]
    }
  ]

  const internationalEngagements = [
    {
      type: "Visiting Scholar",
      countries: ["France", "UK", "Portugal", "Netherlands"],
      description: "Research visits and academic collaborations with prestigious institutions",
      details: [
        "France: 2004, 2007, 2019",
        "United Kingdom: 2004, 2009",
        "Amsterdam, Netherlands: 2019",
        "Lisbon, Portugal: 2019, 2024"
      ]
    },
    {
      type: "Conference Presentations",
      locations: ["Lisbon", "Dublin", "Goa", "Paris", "Miami"],
      description: "Delivered research papers at international conferences and seminars",
      details: [
        "53rd Annual Meeting of the Association for Spanish and Portuguese Historical Studies, University of Lisbon, Portugal (2024)",
        "International Conference on Tourism & Management Studies, Algarve, Portugal (2011)",
        "International Seminar on Studies in Deccan History, Shivaji University, Kolhapur (2005)",
        "XI International Seminar on Indo-Portuguese History, Goa (2003)"
      ]
    },
    {
      type: "Keynote Speaker",
      events: [
        "Shiv-Samvad International Conference (2024)",
        "University of Lisbon (2024)",
        "RHSSA (South Africa, 2022)"
      ],
      description: "Invited as keynote speaker at prestigious international academic events",
      details: [
        "Reconfiguring Borders of Influence – The Geocultural Legacy of Chhatrapati Shivaji Maharaj",
        "Partisanship, Synergism, Confederation and Symbiosis: Deccan – A Melting Pot of Cultures",
        "Fragmented Histories: Dialectical Transformation and Challenges – Regional to National"
      ]
    }
  ]

  const recentPresentations = [
    {
      title: "The Medieval Maritime Silk Route: A Colossal Through-fare of Commerce, Communities and Culture (8th–18th Centuries)",
      event: "2nd International Society for Regional History Conference 2024",
      location: "Jawaharlal Nehru University, New Delhi",
      date: "4–6 Nov 2024"
    },
    {
      title: "Partisanship, Synergism, Confederation and Symbiosis: Deccan – A Melting Pot of Cultures",
      event: "53rd Annual Meeting of the Association for Spanish and Portuguese Historical Studies",
      location: "University of Lisbon, Portugal",
      date: "8–12 July 2024"
    },
    {
      title: "Reconfiguring Borders of Influence – The Geocultural Legacy of Chhatrapati Shivaji Maharaj",
      event: "Shiv-Samvad International Conference",
      location: "Vivek Foundation & Govt. of Maharashtra, Mumbai University",
      date: "15–16 March 2024"
    }
  ]

  return (
    <section id={id} className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Research Projects & International Engagements
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-secondary-600 mt-4">
            Major Research Initiatives and Global Academic Collaborations
          </p>
        </div>

        <div className="space-y-12">
          {/* Major Research Projects */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Major Research Projects (Completed)
            </h3>
            <div className="space-y-8">
              {majorProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-secondary-200">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-secondary-900 mb-2">
                        {project.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                          {project.period}
                        </span>
                        <span className="text-sm font-medium text-secondary-600 bg-secondary-100 px-3 py-1 rounded-full">
                          {project.funding}
                        </span>
                        <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                          {project.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-secondary-600 mb-6">
                    {project.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-secondary-800 mb-3">Key Outcomes:</h5>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, oIndex) => (
                        <li key={oIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-secondary-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Academic Engagements */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              International Academic Engagements
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {internationalEngagements.map((engagement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-secondary-900 mb-3">
                      {engagement.type}
                    </h4>
                    <p className="text-secondary-600 mb-4">
                      {engagement.description}
                    </p>
                  </div>
                  
                  {engagement.countries && (
                    <div className="space-y-3">
                      <h5 className="font-semibold text-secondary-800">Countries:</h5>
                      <div className="flex flex-wrap gap-2">
                        {engagement.countries.map((country, cIndex) => (
                          <span key={cIndex} className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {engagement.locations && (
                    <div className="space-y-3">
                      <h5 className="font-semibold text-secondary-800">Locations:</h5>
                      <div className="flex flex-wrap gap-2">
                        {engagement.locations.map((location, lIndex) => (
                          <span key={lIndex} className="text-sm bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {engagement.events && (
                    <div className="space-y-3">
                      <h5 className="font-semibold text-secondary-800">Events:</h5>
                      <ul className="space-y-2">
                        {engagement.events.map((event, eIndex) => (
                          <li key={eIndex} className="text-sm text-secondary-700">
                            • {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {engagement.details && (
                    <div className="space-y-3">
                      <h5 className="font-semibold text-secondary-800">Details:</h5>
                      <ul className="space-y-2">
                        {engagement.details.map((detail, dIndex) => (
                          <li key={dIndex} className="text-sm text-secondary-700">
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent International Presentations */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Recent International Presentations
            </h3>
            <div className="space-y-6">
              {recentPresentations.map((presentation, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
                  <h4 className="text-lg font-bold text-secondary-900 mb-3">
                    {presentation.title}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-primary-600 font-medium">Event:</p>
                      <p className="text-secondary-700">{presentation.event}</p>
                    </div>
                    <div>
                      <p className="text-primary-600 font-medium">Location:</p>
                      <p className="text-secondary-700">{presentation.location}</p>
                    </div>
                    <div>
                      <p className="text-primary-600 font-medium">Date:</p>
                      <p className="text-secondary-700">{presentation.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Impact */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Research Impact & Collaborations
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-secondary-800 mb-4">Academic Contributions:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Pioneering research on Maratha-European relations
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      International collaborations with European institutions
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Keynote presentations at prestigious international forums
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Research grants from ICSSR and international organizations
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-800 mb-4">Global Recognition:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Visiting scholar positions in multiple countries
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Publications translated into multiple languages
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Research presented across 4 continents
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">
                      Academic partnerships with prestigious institutions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-secondary-700 font-medium">Major Projects</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-secondary-600 mb-2">4</div>
              <div className="text-secondary-700 font-medium">Countries Visited</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-secondary-700 font-medium">International Events</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-secondary-200">
              <div className="text-3xl font-bold text-secondary-600 mb-2">₹15L+</div>
              <div className="text-secondary-700 font-medium">Research Funding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
