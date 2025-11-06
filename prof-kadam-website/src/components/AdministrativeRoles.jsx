const DATA = [
    {
      sNo: "1",
      post: "Nominated as UGC Chairman Nominee/Representative on the Executive Council",
      organization: "Garhwal University, Srinagar, Uttarakhand (by Ministry of Education, Government of India for a period of three years)",
      duration: "2022 — 2025",
      experience: "03 years",
    },
    {
      sNo: "2",
      post: "Visitors Nominee (President of India) on the Selection Committee of the Himachal Pradesh State University",
      organization: "Central University of Himachal Pradesh / Secretary to the Government of Himachal Pradesh for selection matters",
      duration: "2023",
      experience: "03 years",
    },
    {
      sNo: "3",
      post: "Nominated as Governor Nominee/Representative on the Research Council",
      organization: "Nominee/representative on the Research Council of Mahatma Gandhi University (Madhya Pradesh) 2022-2027",
      duration: "2022 — 2027",
      experience: "05 years",
    },
    {
      sNo: "4",
      post: "Visitors Nominee on the Selection Committee of the State of Himachal Pradesh",
      organization: "Selection Committee of the State for 2022-2025",
      duration: "2022 — 2025",
      experience: "03 years",
    },
    {
      sNo: "5",
      post: "Member, Secretary, Historical Research Council (Ministry of Education)",
      organization: "Historical Research Council, Ministry of Education, Government of India",
      duration: "2022 — 2023",
      experience: "10 MONTHS",
    },
    {
      sNo: "6",
      post: "Member, General Body and Governing Council",
      organization: "Disciplinary Development Research (CDMR) University, Aug 2022",
      duration: "2022 — 2025",
      experience: "03 years",
    },
    {
      sNo: "7",
      post: "Visitors Nominee (President of India) on the Selection Committee — President of India / Vice Chancellor/Executive Council",
      organization: "Jawaharlal Nehru University / Executive Council",
      duration: "2019 — 2025",
      experience: "06 years",
    },
    {
      sNo: "8",
      post: "Visitors Nominee (President of India) on the Selection Committee — President of India / Vice Chancellor/Executive Council",
      organization: "Aligarh Muslim University / Executive Council",
      duration: "2019 — 2022",
      experience: "03 years",
    },
    {
      sNo: "9",
      post: "Statutory Position – Dean / Director",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2017 — 2020",
      experience: "03 years",
    },
    {
      sNo: "10",
      post: "Statutory Position (sample)",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2016 — 2018",
      experience: "02 years",
    },
    {
      sNo: "11",
      post: "Member, Boards and Committees",
      organization: "National Archives of India; Ministry of Culture; Government of India",
      duration: "2018 — 2023",
      experience: "03 years",
    },
    {
      sNo: "12",
      post: "Member, Indian Council of Historical Research / Ministry of Education",
      organization: "Indian Council of Historical Research / Ministry of Education",
      duration: "2019 — 2022",
      experience: "03 years",
    },
    {
      sNo: "13",
      post: "Member, 14th Educational Research and Innovations Committee (ERIC), National Council for Educational Research and Training (NCERT), Ministry of Education, Government of India, New Delhi",
      organization: "National Council for Educational Research and Training (NCERT), Ministry of Education, Government of India, New Delhi",
      duration: "2021 — 2024",
      experience: "03 years",
    },
    {
      sNo: "14",
      post: "Deputy Coordinator, National Resource Centres (NRCs) for Annual Refresher Programme in Teaching (ARPIT) of Higher Education Faculty, through SWAYAM, Ministry of Human Resource Development, Government of India, New Delhi",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2018 — 2020",
      experience: "02 years",
    },
    {
      sNo: "15",
      post: "Deputy Coordinator, UGC-CAS, University Grants Commission, New Delhi",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2018 — 2020",
      experience: "02 years",
    },
    {
      sNo: "16",
      post: "Member, Academic Council of National Defense Academy, Pune",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2018 — 2020",
      experience: "02 years",
    },
    {
      sNo: "17",
      post: "Liaison Officer for SC/ST/OBC, Jawaharlal Nehru University, New Delhi",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2017 — 2018",
      experience: "01 year",
    },
    {
      sNo: "18",
      post: "Member of Board of University Departments and Interdisciplinary Studies, Nominated by Vice-Chancellor of Sholapur University under Maharashtra State University Act2016 Clause 42(2)(g)",
      organization: "Nominated by Vice-Chancellor of Sholapur University under Maharashtra State University Act2016 Clause 42(2)(g)",
      duration: "2018 — 2022",
      experience: "04 years",
    },
    {
      sNo: "19",
      post: "Member, Executive Council, Jawaharlal Nehru University, New Delhi",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2017 — 2020",
      experience: "03 years",
    },
    {
      sNo: "20",
      post: "Member, Academic Council, Jawaharlal Nehru University, New Delhi",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2017 — 2020",
      experience: "03 years",
    },
    {
      sNo: "21",
      post: "Member, Court, Jawaharlal Nehru University, New Delhi",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2017 — 2020",
      experience: "03 years",
    },
    {
      sNo: "22",
      post: "Member Board of Studies, School of Social Sciences, Jawaharlal Nehru University, New Delhi",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2017 — TILL DATE",
      experience: "08 years",
    },
    {
      sNo: "23",
      post: "Member Board of Studies, School of Social Sciences, Department of History, Dr. Babasaheb Ambedkar University, Lucknow, Uttar Pradesh",
      organization: "Department of History, Dr. Babasaheb Ambedkar University, Lucknow, Uttar Pradesh",
      duration: "2017 — 2021",
      experience: "04 years",
    },
    {
      sNo: "24",
      post: "Member Board of Studies, School of Social Sciences, Department of Ancient Indian History, Culture and Archaeology, Indira Gandhi National Tribal University, Amarkantak, Madhya Pradesh",
      organization: "Department of Ancient Indian History, Culture and Archaeology, Indira Gandhi National Tribal University, Amarkantak, Madhya Pradesh",
      duration: "2017 — 2021",
      experience: "04 years",
    },
    {
      sNo: "25",
      post: "Member Board of Studies, School of Social Sciences, Department of History, Indira Gandhi National Tribal University, Amarkantak, Madhya Pradesh",
      organization: "School of Social Sciences, Department of History, Indira Gandhi National Tribal University, Amarkantak, Madhya Pradesh",
      duration: "2017 — 2021",
      experience: "04 years",
    },
    {
      sNo: "26",
      post: "Member Board of Studies, School of Social Sciences, Department of History, Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Wardha, Maharashtra",
      organization: "School of Social Sciences, Department of History, Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Wardha, Maharashtra",
      duration: "2020 — 2022",
      experience: "02 years",
    },
    {
      sNo: "27",
      post: "Member Board of Studies, Faculty of Humanities and Social Sciences, Mumbai University",
      organization: "Faculty of Humanities and Social Sciences, Mumbai University",
      duration: "2018",
      experience: "06 months",
    },
    {
      sNo: "28",
      post: "Director, Chhatrapati Shahu Maharaj Centre for Studies in Maratha History, Shivaji University Kolhapur",
      organization: "Chhatrapati Shahu Maharaj Centre for Studies in Maratha History, Shivaji University Kolhapur",
      duration: "2013 — 2013",
      experience: "10 months",
    },
    {
      sNo: "29",
      post: "Associate Dean of Students-I, Jawaharlal Nehru University, New Delhi",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2016 — 2017",
      experience: "01 year",
    },
    {
      sNo: "30",
      post: "Senior Warden at Brahmaputra Hostel (Ph.D. student hostel), Jawaharlal Nehru University, New Delhi",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2015 — 2016",
      experience: "01 year",
    },
    {
      sNo: "31",
      post: "Senior Warden at Mahanadi Hostel (MRSH), Jawaharlal Nehru University, New Delhi",
      organization: "Jawaharlal Nehru University, New Delhi",
      duration: "2014 — 2015",
      experience: "01 year",
    },
  ];
  

const AdministrativeRoles = ({ id = 'administrative-roles', setActiveSection }) => {
  return (
    <section id={id} className=" sm:py-20 lg:py-24 lg:mt-16 bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mt-8">
          <div className="mx-auto max-w-4xl text-center rounded-2xl border border-primary-100 bg-white shadow-md px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-700">Administrative Roles</h2>
            <p className="mt-3 text-sm sm:text-base text-secondary-600">
              Key appointments and governance contributions across institutions.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-primary-100 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left align-middle">
              <thead className="bg-primary-50 text-primary-700 text-xs sm:text-sm uppercase">
                <tr>
                  <th className="px-3 sm:px-4 py-3 font-semibold whitespace-nowrap">S. No.</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold">Post</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold">Organization</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold whitespace-nowrap">Duration</th>
                  <th className="px-3 sm:px-4 py-3 font-semibold whitespace-nowrap">Experience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-100 text-secondary-700">
                {DATA.map((row) => (
                  <tr key={row.sNo} className="hover:bg-primary-50/40">
                    <td className="px-3 sm:px-4 py-3 align-top text-xs sm:text-sm font-medium text-secondary-600">
                      {row.sNo}
                    </td>
                    <td className="px-3 sm:px-4 py-3 align-top text-sm sm:text-base font-semibold text-primary-700">
                      {row.post}
                    </td>
                    <td className="px-3 sm:px-4 py-3 align-top text-sm sm:text-base">
                      {row.organization}
                    </td>
                    <td className="px-3 sm:px-4 py-3 align-top text-xs sm:text-sm whitespace-nowrap">
                      {row.duration || '—'}
                    </td>
                    <td className="px-3 sm:px-4 py-3 align-top text-xs sm:text-sm whitespace-nowrap">
                      {row.experience || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdministrativeRoles


