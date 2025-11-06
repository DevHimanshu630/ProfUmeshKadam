import conferenceImg from '../assets/upcoming_eventPoster/conference.jpeg'
import logo1 from '../assets/internationalcollaborationImg/logo1.jpeg'
import logo2 from '../assets/internationalcollaborationImg/logo2.jpeg'
import isrhLogo from '../assets/internationalcollaborationImg/isrh.jpeg'
import editorialBoardLogo from '../assets/internationalcollaborationImg/editorialboard.jpeg'

const memberships = [
  { 
    org: "Member, Association for Spanish and Portuguese Historical Studies",
    detail: "An affiliated society of American Historical Association, University of Kansas, United States.",
    logos: [logo1, logo2]
  },
  { org: "Steering Committee Member, International Society of Regional History (ISRH)", detail: "North West University, Vanderbijlpark, South Africa.", logos: [isrhLogo] }
]

const awards = [
  { title: "Research Grant", detail: "Awarded a research grant by the 'Maison des sciences de l'Homme, Paris under the Indo-French Programme' to undertake research in Paris at the various Archives in Paris for the year 2004.", year: "2004" },
  { title: "Award of Social Scientist", detail: "Award of Social Scientist under the Indo-French Social Scientist Exchange Programme, 2007. Nominated to visit Paris under the Indo-French Cultural Exchange Programme, 2007.", year: "2007" },
  { title: "Scholarship", detail: "Scholarship granted by the Charles Wallace India Trust, London to undertake research in London for the year 2004.", year: "2004" },
  { title: "Post-Doctoral Fellowship", detail: "Awarded the prestigious Post-Doctoral Fellowship by the Charles Wallace India Trust, London to undertake research on the Portuguese and Dutch relations with the Marathas (1630-1818) in United Kingdom for the year 2009.", year: "2009" },
  { title: "Foreign Travel Grant", detail: "Nominated under the Foreign Travel Grant -2004 to visit France for one month to undertake research on French-Maratha Relations. Sponsored by Indian Council of Historical Research, New Delhi.", year: "2004" }
]

const editorialBoard = [
  { journal: "Histories of People and Place", publisher: "Taylor & Francis Online, United Kingdom", url: "https://www.tandfonline.com/action/journalInformation?show=editorialBoard&journalCode=yjrl21", role: "Member Editorial Advisory Board", period: "2023 onwards", logo: editorialBoardLogo }
]

const countriesVisited = [
  { country: "FRANCE", years: "2004, 2007, 2019" },
  { country: "UNITED KINGDOM", years: "2004 & 2009" },
  { country: "AMSTERDAM, NETHERLANDS", years: "2019" },
  { country: "LISBON, PORTUGAL", years: "2019 & 2024" }
]

const internationalPresentations = [
  { 
    title: "The Medieval Maritime Silk Route: A Colossal through-fare of Commerce Communities and Culture, 8th to 18th Centuries", 
    event: "2nd International Society for Regional History Conference 2024", 
    venue: "Jawaharlal Nehru University, New Delhi", 
    date: "4th November to 6th November 2024",
    type: "Research Paper"
  },
  { 
    title: "Partisanship, Synergism, Confederation and Symbiosis: Deccan- A Melting Pot of Cultures", 
    event: "53rd Annual Meeting of the Association for Spanish and Portuguese Historical Studies", 
    venue: "School of Arts and Humanities of the University of Lisbon, Centre for History, University of Lisbon", 
    date: "8th July to 12th July 2024",
    type: "Research Paper"
  },
  { 
    title: "Reconfiguring Borders of Influence- The Geocultural Legacy of Chhatrapati Shivaji Maharaj", 
    event: "Two Day International Conference 'Shiv-Samvad'", 
    venue: "Mumbai University Fort Campus", 
    date: "15th and 16th March 2024",
    type: "Key-Note Address",
    org: "Organized by Vivek Foundation in collaboration with Cultural Affairs Department, Government of Maharashtra, Mumbai"
  },
  { 
    title: "Fragmented Histories: Dialectical Transformation and Challenges- Regional to National", 
    event: "'Unleashing the unspoken voices of peoples and their places' Regional History Society of Southern Africa (RHSSA) webinar", 
    venue: "North West University, South Africa", 
    date: "25th November 2022",
    type: "Webinar"
  },
  { 
    title: "Cultural Heritage, Migration and Indian Diaspora", 
    event: "Workshop organized by Indian Council of Historical Research in collaboration with Arts and Humanities Research UK (AHRC)", 
    venue: "Ahmedabad, Gujarat", 
    date: "30th-31st January 2019",
    type: "Workshop Attendee"
  },
  { 
    title: "Negotiating Identities: Articulation of the 'maratha' in Maratha History", 
    event: "International Seminar on 'Configuring Early Modern South Asia'", 
    venue: "Trinity College Dublin, University of Dublin", 
    date: "12-13 November, 2015",
    type: "Research Paper",
    org: "Organized by Trinity College Dublin, University of Dublin with academic support of Centre for Historical Studies, Jawaharlal Nehru Institute of Advanced Studies, Jawaharlal Nehru University, New Delhi & funded by European Union Grant (Spectress)"
  },
  { 
    title: "Impact of Local Values on Development of Tourism in Iran", 
    event: "First International Conference on Tourism and Management Studies, Algarve", 
    venue: "Escola Superior De Geatao, Hotelaria E Turismo, Faro, Portugal", 
    date: "26-29 October 2011",
    type: "Research Paper",
    coAuthored: "Co-authored by Zahra Mohebbi and Umesh Ashok Kadam paper published in the Proceedings"
  },
  { 
    title: "Historical Comparison of Isfahan and India", 
    event: "International Seminar on 'India and Iran: Our Cultural Legacy of the Past'", 
    venue: "Poona College of Arts, Science and Commerce, Pune", 
    date: "3rd, 4th and 5th March 2011",
    type: "Research Paper"
  },
  { 
    title: "Researching and Reconstructing Maratha History: Marathas in Relation to the French (1668-1818)", 
    event: "International Seminar on 'Studies in Deccan History with Special Reference to Maharashtra'", 
    venue: "Shivaji University, Kolhapur", 
    date: "6th to 8th December 2005",
    type: "Research Paper",
    org: "Jointly organized by Department of History and Chhatrapati Shahu Maharaj Centre for Studies in Maratha History"
  },
  { 
    title: "Luso-French Relations with the Marathas", 
    event: "Silver Jubilee Session, XI International Seminar on 'Indo-Portuguese History: Global Trends'", 
    venue: "Cidade de Goa, Dona Paula- Goa", 
    date: "21st to 25th September 2003",
    type: "Research Paper",
    org: "Organized by ISIPH"
  },
  { 
    title: "Demystifying Episteme: Pedagogical Challenges in Social Sciences", 
    event: "One Day International Conference 'Recent Trends in Social Sciences, Humanities and Education'", 
    venue: "Changu Kana Thakur, College, Panvel, Mumbai", 
    date: "23rd February 2024",
    type: "Key-Note Address"
  }
]

const conferenceSessionsChaired = [
  {
    event: "ISRH International Society of Regional History (ISRH), III Global Conference 2025 on 'Migration in a World of Regions'",
    organizer: "International Webinar organized by University of Helsinki Ruralia Institute, Finland",
    date: "15th to 17th September 2025",
    role: "Session Chair"
  }
]

function SectionCard({ title, children }) {
  return (
    <div className="mb-8">
      <div className="mx-auto rounded-2xl border border-primary-100 bg-white shadow-sm">
        <div className="px-4 sm:px-6 py-4 border-b border-primary-100">
          <h3 className="text-lg sm:text-xl font-semibold text-primary-700">{title}</h3>
        </div>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </div>
  )
}

const InternationalCollaboration = () => {
  return (
    <section className="pt-18 lg:mt-16 sm:pt-28 lg:pt-32 pb-16 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary-100 bg-white shadow-md px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-700">International Collaboration</h2>
            <p className="mt-2 text-sm text-secondary-600">Memberships, awards, research grants, and international academic engagements.</p>
          </div>
        </div>

        <SectionCard title="Overview">
          <p className="text-sm sm:text-base text-secondary-700 leading-relaxed">
            Umesh Ashok Kadam is Professor of Medieval Indian History and Early Modern History at the Centre for Historical Studies, Jawaharlal Nehru University, New Delhi, and Former Member Secretary, Council of Historical Research, New Delhi, and Member of many apex governing bodies with a 24 years long teaching and research experience at various universities at the Post graduate level. He specializes in History of Deccan and Western India, History of the Marathas and European powers, Bhakti movement 10th to 17th century, Maritime History of India with special reference to Silk Routes, Urbanization in the Medieval Maratha country. Since last two decades, he has been visiting universities in Netherlands, France, Portugal, and United Kingdom to promote advanced research on History of Deccan.
          </p>
        </SectionCard>

        <SectionCard title="Upcoming News">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div>
              <img
                src={conferenceImg}
                alt="Upcoming International Collaboration Event"
                className="w-full rounded-xl border border-primary-100 shadow-sm object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-primary-700 font-semibold text-base sm:text-lg">Stay tuned for upcoming international collaboration events</h4>
              <p className="text-sm text-secondary-700">Latest conferences, workshops and announcements will appear here.</p>
              <a
                href="https://isrh.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 underline"
              >
                Visit ISRH.org
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="International Memberships">
          <div className="space-y-4">
            {memberships.map((member, idx) => (
              <div key={idx} className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                {member.logos ? (
                  <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-primary-700 mb-1 break-words">{member.org}</h4>
                      <p className="text-sm text-secondary-700 break-words">{member.detail}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {member.logos.map((src, i) => (
                        <img key={i} src={src} alt="membership logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain border border-primary-100 rounded bg-white p-1" />
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <h4 className="font-semibold text-primary-700 mb-1">{member.org}</h4>
                    <p className="text-sm text-secondary-700">{member.detail}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Awards, Fellowships & Grants">
          <div className="space-y-4">
            {awards.map((award, idx) => (
              <div key={idx} className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-primary-700">{award.title}</h4>
                  <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded">{award.year}</span>
                </div>
                <p className="text-sm text-secondary-700">{award.detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Editorial Board Memberships">
          <div className="space-y-4">
            {editorialBoard.map((item, idx) => (
              <div key={idx} className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                {item.logo ? (
                  <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-primary-700 mb-1 break-words">{item.journal}</h4>
                      <p className="text-sm text-secondary-700 mb-1 break-words">{item.publisher}</p>
                      <p className="text-sm text-secondary-600 mb-2">
                        <span className="font-medium">{item.role}</span> ({item.period})
                      </p>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700 underline">
                        View Editorial Board
                      </a>
                    </div>
                    <img
                      src={item.logo}
                      alt="editorial board logo"
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain border border-primary-100 rounded bg-white p-1 flex-shrink-0"
                    />
                  </div>
                ) : (
                  <>
                    <h4 className="font-semibold text-primary-700 mb-1">{item.journal}</h4>
                    <p className="text-sm text-secondary-700 mb-1">{item.publisher}</p>
                    <p className="text-sm text-secondary-600 mb-2">
                      <span className="font-medium">{item.role}</span> ({item.period})
                    </p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700 underline">
                      View Editorial Board
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Countries Visited">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {countriesVisited.map((item, idx) => (
              <div key={idx} className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                <h4 className="font-semibold text-primary-700 mb-1">{item.country}</h4>
                <p className="text-sm text-secondary-700">{item.years}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="International Presentations & Engagements">
          <div className="space-y-4">
            {internationalPresentations.map((presentation, idx) => (
              <div key={idx} className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-primary-700 flex-1">{presentation.title}</h4>
                  <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded ml-2 whitespace-nowrap">{presentation.type}</span>
                </div>
                <p className="text-sm text-secondary-700 mb-1">
                  <span className="font-medium">Event:</span> {presentation.event}
                </p>
                <p className="text-sm text-secondary-700 mb-1">
                  <span className="font-medium">Venue:</span> {presentation.venue}
                </p>
                {presentation.org && (
                  <p className="text-sm text-secondary-600 mb-1 italic">{presentation.org}</p>
                )}
                {presentation.coAuthored && (
                  <p className="text-sm text-secondary-600 mb-1">{presentation.coAuthored}</p>
                )}
                <p className="text-xs text-secondary-500 mt-2">
                  <span className="font-medium">Date:</span> {presentation.date}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Conference Session Chaired">
          <div className="space-y-4">
            {conferenceSessionsChaired.map((session, idx) => (
              <div key={idx} className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-primary-700 flex-1">Session Chair</h4>
                  <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded ml-2 whitespace-nowrap">Session Chair</span>
                </div>
                <p className="text-sm text-secondary-700 mb-1">
                  <span className="font-medium">Event:</span> {session.event}
                </p>
                <p className="text-sm text-secondary-700 mb-1">
                  <span className="font-medium">Organizer:</span> {session.organizer}
                </p>
                <p className="text-xs text-secondary-500 mt-2">
                  <span className="font-medium">Date:</span> {session.date}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </section>
  )
}

export default InternationalCollaboration

