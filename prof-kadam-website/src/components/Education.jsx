import { useEffect } from 'react'

const Education = ({ id, setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('education')
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

  const educationData = [
    {
      degree: "Ph.D. (History, Theory)",
      year: "2005",
      institution: "Shivaji University",
      grade: "Grade: 'A'",
      thesis: "French Maratha Relations (1668–1818)",
      period: "Started: July 1999, Degree Awarded: October 2005",
      icon: "🎓"
    },
    {
      degree: "M.A. (History)",
      year: "1998",
      institution: "Shivaji University",
      grade: "Class: I Class, %: 60%",
      thesis: null,
      period: "May 1998",
      icon: "📚"
    },
    {
      degree: "B.A. (History)",
      year: "1996",
      institution: "Shivaji University",
      grade: "Class: I Class, %: 66%",
      thesis: null,
      period: "March 1996",
      icon: "📖"
    },
    {
      degree: "HSC (Social Science)",
      year: "1993",
      institution: "Kolhapur Board",
      grade: "Class: I Class, %: 68.17%",
      thesis: null,
      period: "March 1993",
      icon: "📝"
    },
    {
      degree: "SSC (Comp. Sub.)",
      year: "1991",
      institution: "Pune Board",
      grade: "Class: I Class, %: 62%",
      thesis: null,
      period: "March 1991",
      icon: "📋"
    }
  ]

  const certifications = [
    {
      name: "NET (History)",
      year: "1999",
      institution: "UGC, New Delhi",
      result: "Pass",
      period: "June 1999",
      icon: "🏆"
    },
    {
      name: "SET (History)",
      year: "1999",
      institution: "UGC, Pune",
      result: "Pass",
      period: "March 1999",
      icon: "🏅"
    },
    {
      name: "Certificate Course in French Language",
      year: "2001",
      institution: "Shivaji University",
      result: "Class: II Class, %: 57.33%",
      period: "May 2001",
      icon: "🇫🇷"
    }
  ]

  return (
    <section id={id} className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Educational Qualifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-secondary-600 mt-4">
            Academic Journey from SSC to Ph.D.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Academic Degrees */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Academic Degrees
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{edu.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-secondary-900">
                          {edu.degree}
                        </h4>
                        <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-secondary-600 mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-primary-600 font-medium mb-2">
                        {edu.grade}
                      </p>
                      <p className="text-sm text-secondary-500 mb-2">
                        {edu.period}
                      </p>
                      {edu.thesis && (
                        <div className="bg-secondary-50 rounded-lg p-3">
                          <p className="text-sm text-secondary-700">
                            <strong>Thesis:</strong> {edu.thesis}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Qualifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Certifications & Qualifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-secondary-900">
                          {cert.name}
                        </h4>
                        <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-secondary-600 mb-2">
                        {cert.institution}
                      </p>
                      <p className="text-sm text-primary-600 font-medium mb-2">
                        {cert.result}
                      </p>
                      <p className="text-sm text-secondary-500">
                        {cert.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                Academic Highlights
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">
                    Completed Ph.D. with specialization in French-Maratha Relations (1668–1818)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">
                    Qualified NET and SET examinations for teaching eligibility
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">
                    Acquired French language proficiency for research purposes
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">
                    Consistent academic performance with First Class throughout
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
