import { useEffect } from 'react'

const Experience = ({ id, setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('experience')
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

  const experienceData = [
    {
      position: "Professor",
      institution: "Jawaharlal Nehru University, New Delhi",
      period: "12-02-2013 onwards",
      duration: "11 years 6 months",
      description: "Professor in Medieval Indian History at Centre for Historical Studies, School of Social Sciences",
      highlights: [
        "Leading research in Medieval Indian History",
        "Supervising doctoral and post-graduate students",
        "Contributing to academic administration",
        "Teaching advanced courses in medieval Indian history"
      ]
    },
    {
      position: "Professor",
      institution: "Shivaji University",
      period: "12-02-2013 to 04-12-2013",
      duration: "10 months",
      description: "Professor position at Shivaji University",
      highlights: [
        "Teaching and research in History",
        "Academic leadership role",
        "Supervision of research scholars"
      ]
    },
    {
      position: "Assistant Professor",
      institution: "Pune University",
      period: "13-03-2007 to 11-02-2013",
      duration: "5 years 11 months",
      description: "Assistant Professor at Pune University",
      highlights: [
        "Teaching undergraduate and postgraduate courses",
        "Conducting research in Medieval Indian History",
        "Publishing academic papers and books",
        "Supervising M.Phil. and Ph.D. students"
      ]
    },
    {
      position: "Lecturer",
      institution: "Pune University",
      period: "13-03-2003 to 13-03-2007",
      duration: "4 years",
      description: "Lecturer position at Pune University",
      highlights: [
        "Teaching History courses",
        "Developing course curriculum",
        "Student mentoring and guidance",
        "Research and publication activities"
      ]
    },
    {
      position: "Lecturer",
      institution: "Shivaji University",
      period: "04-08-1999 to 12-03-2003",
      duration: "3 years 6 months",
      description: "Lecturer at Shivaji University",
      highlights: [
        "Beginning of academic career",
        "Teaching undergraduate students",
        "Research initiation",
        "Course development and delivery"
      ]
    }
  ]

  return (
    <section id={id} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Teaching Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-secondary-600 mt-4">
            26 Years of Post-Graduate Teaching at University Level
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < experienceData.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-primary-200"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-secondary-50 rounded-xl p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-secondary-900">
                        {exp.position}
                      </h3>
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                        <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                        <span className="text-xs text-secondary-500 mt-1">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-primary-700 mb-2">
                      {exp.institution}
                    </h4>
                    
                    <p className="text-secondary-600 mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-secondary-800">Key Responsibilities:</h5>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-secondary-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">26+</div>
              <div className="text-secondary-700 font-medium">Years of Experience</div>
            </div>
            <div className="bg-secondary-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">5</div>
              <div className="text-secondary-700 font-medium">Institutions Served</div>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-secondary-700 font-medium">Students Mentored</div>
            </div>
          </div>

          {/* Current Position Highlight */}
          <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Current Position
            </h3>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-primary-700 mb-2">
                Professor in Medieval Indian History
              </h4>
              <p className="text-secondary-700 mb-4">
                Centre for Historical Studies, School of Social Sciences,<br />
                Jawaharlal Nehru University, New Delhi
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                  Since 2013
                </span>
                <span className="text-sm bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">
                  Post-Graduate Teaching
                </span>
                <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                  Research Supervision
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
