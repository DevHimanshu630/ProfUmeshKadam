import { useEffect } from 'react'

const Contact = ({ id, setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('contact')
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

  const contactInfo = [
    {
      type: "Email",
      value: "umeshkadam1@gmail.com",
      icon: "📧",
      description: "Primary email address"
    },
    {
      type: "Academic Email",
      value: "uakadam@jnu.ac.in , uakadam@mail.jnu.ac.in",
      icon: "🎓",
      description: "JNU institutional email"
    },
    
    {
      type: "Mobile",
      value: "(0) 7838489367, (0) 9850169020",
      icon: "📱",
      description: "Contact numbers"
    }
  ]

  const professionalRoles = [
    {
      title: "UGC Chairman Nominee / Representative",
      organization: "Executive Council, HNB Garhwal University, Uttarakhand",
      period: "2023–2026"
    },
    {
      title: "Visitor's Nominee (President of India)",
      organization: "Selection Committees, Central University of Himachal Pradesh",
      period: "2022–2025"
    },
    {
      title: "Governor of Maharashtra Nominee",
      organization: "Research Council, Mumbai University",
      period: "2022–2027"
    },
    {
      title: "Visitor's Nominee (President of India)",
      organization: "Selection Committee, IIT Dharwad, Karnataka",
      period: "2022–2025"
    },
    {
      title: "Member Secretary",
      organization: "Indian Council of Historical Research (ICHR), Ministry of Education, Govt. of India",
      period: "2022–2023"
    },
    {
      title: "Member",
      organization: "General Body & Governing Council, Centre for Multi-Disciplinary Development Research (CMDR), Dharwad, Karnataka",
      period: "2022–2025"
    },
    {
      title: "Visitor's Nominee (President of India)",
      organization: "Executive Council, Aligarh Muslim University (AMU), Uttar Pradesh",
      period: "2019–2025"
    },
    {
      title: "Dean of Students",
      organization: "Jawaharlal Nehru University",
      period: "2017–2020"
    },
    {
      title: "Chairperson",
      organization: "Centre for Historical Studies, School of Social Sciences, JNU",
      period: "2018–2020"
    },
    {
      title: "Member",
      organization: "14th Educational Research and Innovations Committee (ERIC), NCERT, Ministry of Education",
      period: "2021–2024"
    }
  ]

  const editorialBoards = [
    {
      journal: "Histories of People and Place",
      publisher: "Taylor & Francis Online, United Kingdom",
      period: "2023 onwards",
      link: "https://www.tandfonline.com/action/journalInformation?show=editorialBoard&journalCode=yjrl21"
    },
    {
      journal: "Indian Historical Review",
      publisher: "Peer-Reviewed Journal of Indian Council for Historical Research, New Delhi, Sage Publications",
      period: "2022–2023",
      link: "http://jurnals.sagepub.com/home/ihr#"
    },
    {
      journal: "Studies in History",
      publisher: "Journal of Centre for Historical Studies, JNU, Sage Publications",
      period: "2021–2025",
      link: "http://jurnals.sagepub.com/home/sih#"
    },
    {
      journal: "Sri Nalanda Biannual Refereed Journal",
      publisher: "Nava Nalanda Mahavira (Deemed University), Ministry of Culture, Govt. of India",
      period: "2023–2028",
      link: "https://www.nnm.ac.in"
    }
  ]

  const memberships = [
    "Association for Spanish and Portuguese Historical Studies (affiliated society of American Historical Association), University of Kansas, USA",
    "Steering Committee Member, International Society of Regional History (ISRH), North West University, Vanderbijlpark, South Africa",
    "Member, Rashtriya Karyakarini, Akhil Bharatiya Itihas Sankalan Yojana",
    "Member, Indian Historical Records Committee, National Archives of India, Ministry of Culture",
    "Member, Indian Council of Historical Research (ICHR), Ministry of HRD, Govt. of India",
    "Governing councils and boards of multiple Indian universities (JNU, Solapur, Mumbai, etc.)"
  ]

  const socialLinks = [
    {
      platform: "Twitter",
      handle: "@umeshkadam280",
      url: "https://twitter.com/@umeshkadam280"
    },
    {
      platform: "Facebook",
      handle: "umeshakadam",
      url: "https://www.facebook.com/umeshakadam"
    },
    {
      platform: "LinkedIn",
      handle: "umesh-ashok-kadam",
      url: "https://linkedin.com/in/umesh-ashok-kadam"
    },
    {
      platform: "Academia.edu",
      handle: "UmeshKadam",
      url: "https://jnu.academia.edu/UmeshKadam"
    }
  ]

  return (
    <section id={id} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Contact & Professional Roles
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-secondary-600 mt-4">
            Get in Touch and Learn About Professional Engagements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{contact.icon}</div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {contact.type}
                      </h4>
                      {contact.type === "Email" || contact.type === "Academic Email" ? (
                        <a 
                          href={`mailto:${contact.value}`}
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-secondary-700 font-medium">
                          {contact.value}
                        </span>
                      )}
                      <p className="text-sm text-secondary-600 mt-1">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🇮🇳</div>
                  <div className="font-semibold text-secondary-900">Marathi</div>
                  <div className="text-sm text-secondary-600">Native</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🇮🇳</div>
                  <div className="font-semibold text-secondary-900">Hindi</div>
                  <div className="text-sm text-secondary-600">Fluent</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🇬🇧</div>
                  <div className="font-semibold text-secondary-900">English</div>
                  <div className="text-sm text-secondary-600">Fluent</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🇫🇷</div>
                  <div className="font-semibold text-secondary-900">French</div>
                  <div className="text-sm text-secondary-600">Basic</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-secondary-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Social Media & Professional Links
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      {link.platform}: {link.handle}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Roles */}
          <div className="space-y-8">
            <div className="bg-white border border-secondary-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Prestigious Academic & Administrative Roles
              </h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {professionalRoles.map((role, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <h4 className="font-semibold text-secondary-900">
                      {role.title}
                    </h4>
                    <p className="text-secondary-600">
                      {role.organization}
                    </p>
                    <span className="text-sm text-primary-600 font-medium">
                      {role.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-secondary-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Editorial Boards
              </h3>
              <div className="space-y-4">
                {editorialBoards.map((board, index) => (
                  <div key={index} className="border-l-4 border-secondary-500 pl-4">
                    <h4 className="font-semibold text-secondary-900">
                      {board.journal}
                    </h4>
                    <p className="text-secondary-600 text-sm">
                      {board.publisher}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-primary-600 font-medium">
                        {board.period}
                      </span>
                      <a 
                        href={board.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700"
                      >
                        Visit →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-secondary-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Professional Memberships
              </h3>
              <ul className="space-y-3">
                {memberships.map((membership, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700 text-sm">{membership}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              I welcome opportunities for academic collaboration, research partnerships, 
              and speaking engagements. Feel free to reach out for any inquiries related 
              to Medieval Indian History, Maratha-European Relations, or academic administration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:umeshkadam1@gmail.com"
                className="btn-primary"
              >
                Send Email
              </a>
              <a 
                href="mailto:uakadam@jnu.ac.in"
                className="btn-secondary"
              >
                Academic Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
