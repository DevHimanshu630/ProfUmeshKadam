const mPhilStudents = [
  { sr: 1, name: 'Shri Raghuraj M Kurumkar', registeredFor: 'M. Phil', dateOfRegistration: '11th September 2007', yearOfAward: '03-02-2009', university: 'TMU, Pune' },
  { sr: 2, name: 'Miss. Shobha B Vaikar', registeredFor: 'M. Phil', dateOfRegistration: '17th March 2008', yearOfAward: '01-04-2009', university: 'YCMOU, Nashik' },
  { sr: 3, name: 'Shri Amol P Botre', registeredFor: 'M. Phil', dateOfRegistration: '17th March 2008', yearOfAward: '09-04-2009', university: 'YCMOU, Nashik' },
  { sr: 4, name: 'Shri Vijaykumar P Bhanje', registeredFor: 'M. Phil', dateOfRegistration: '31st October 2006', yearOfAward: '03-06-2009', university: 'University of Pune' },
  { sr: 5, name: 'Shri Amol D Gaikwad', registeredFor: 'M. Phil', dateOfRegistration: '19th July 2007', yearOfAward: '15-06-2009', university: 'University of Pune' },
  { sr: 6, name: 'Mrs. Susmita W Barnat', registeredFor: 'M. Phil', dateOfRegistration: '17th March 2008', yearOfAward: '06-07-2009', university: 'YCMOU, Nashik' },
  { sr: 7, name: 'Shri Mahadev L Sontake', registeredFor: 'M. Phil', dateOfRegistration: '29th August 2003', yearOfAward: '17-12-2009', university: 'University of Pune' },
  { sr: 8, name: 'Shri Sharad K Bhamare', registeredFor: 'M. Phil', dateOfRegistration: '19th July 2007', yearOfAward: '24-04-2010', university: 'University of Pune' },
  { sr: 9, name: 'Miss Changuna Kadam', registeredFor: 'M. Phil', dateOfRegistration: '07th September 2008', yearOfAward: '17-12-2010', university: 'University of Pune' },
  { sr: 10, name: 'Shri Sainath Mutkule', registeredFor: 'M. Phil', dateOfRegistration: '07th September 2008', yearOfAward: '13-12-2011', university: 'University of Pune' },
  { sr: 11, name: 'Mr. Jagganath Wadar', registeredFor: 'M. Phil', dateOfRegistration: '23rd December 2009', yearOfAward: '07-07-2012', university: 'University of Pune' },
  { sr: 12, name: 'Mr. Sachin Ohal', registeredFor: 'M. Phil', dateOfRegistration: '23rd December 2009', yearOfAward: '07-07-2012', university: 'University of Pune' },
  { sr: 13, name: 'Mr. Satilal Kannor', registeredFor: 'M. Phil', dateOfRegistration: '23rd December 2009', yearOfAward: '07-07-2012', university: 'University of Pune' },
  { sr: 14, name: 'Miss Anuradha Dhumal', registeredFor: 'M. Phil', dateOfRegistration: '07th September 2008', yearOfAward: '07-01-2013', university: 'University of Pune' },
  { sr: 15, name: 'Mr. Deepak More', registeredFor: 'M. Phil', dateOfRegistration: '23rd December 2009', yearOfAward: '07-01-2013', university: 'University of Pune' },
  { sr: 16, name: 'Mr. Umakant Dandagawal', registeredFor: 'M. Phil', dateOfRegistration: '23rd December 2009', yearOfAward: '06-07-2013', university: 'University of Pune' },
  { sr: 17, name: 'Mr. Ajit Bhalsing', registeredFor: 'M. Phil', dateOfRegistration: '2011', yearOfAward: '30-09-2014', university: 'University of Pune' },
  { sr: 18, name: 'Miss Surekha Kengale', registeredFor: 'M. Phil', dateOfRegistration: '2011', yearOfAward: '30-09-2014', university: 'University of Pune' },
  { sr: 19, name: 'Mr. Deepak Solanki', registeredFor: 'M. Phil', dateOfRegistration: '2014', yearOfAward: 'March 2016', university: 'J.N.U., New Delhi' },
  { sr: 20, name: 'Miss Deepika Kumari', registeredFor: 'M. Phil', dateOfRegistration: '2014', yearOfAward: 'January 2016', university: 'J.N.U., New Delhi' },
  { sr: 21, name: 'Mr. Prashant Chouhan', registeredFor: 'M. Phil', dateOfRegistration: '2014', yearOfAward: 'December 2016', university: 'J.N.U., New Delhi' },
  { sr: 22, name: 'Miss Shelly Christian Lamare', registeredFor: 'M. Phil', dateOfRegistration: '2015', yearOfAward: 'January 2018', university: 'J.N.U., New Delhi' },
  { sr: 23, name: 'Miss Dolly Purohit', registeredFor: 'M. Phil', dateOfRegistration: '2015', yearOfAward: 'January 2018', university: 'J.N.U., New Delhi' },
  { sr: 24, name: 'Miss Shikha Kumari', registeredFor: 'M. Phil', dateOfRegistration: '2015', yearOfAward: 'January 2018', university: 'J.N.U., New Delhi' },
  { sr: 25, name: 'Mr. Aditya Sharma', registeredFor: 'M. Phil', dateOfRegistration: 'February 2019', yearOfAward: '', university: 'J.N.U., New Delhi' },
  { sr: 26, name: 'Mr. S Vedavyasan', registeredFor: 'M. Phil', dateOfRegistration: '2020', yearOfAward: '29-09-2023', university: 'J.N.U., New Delhi' }
]

const phdStudents = [
  { sr: 1, name: 'Miss Zahra Mohebbi', registeredFor: 'Ph.D.', dateOfRegistration: '04th September 2006', yearOfAward: '22-02-2011', university: 'University of Pune' },
  { sr: 2, name: 'Mr. Simon Yesu', registeredFor: 'Ph.D.', dateOfRegistration: '05th November 2009', yearOfAward: '01-10-2013', university: 'TMU, Pune' },
  { sr: 3, name: 'Shri Raghuraj M Kurumkar', registeredFor: 'Ph.D.', dateOfRegistration: '13th January 2011', yearOfAward: '18-05-2015', university: 'TMU, Pune' },
  { sr: 4, name: 'Mr. Suresh Chavan', registeredFor: 'Ph.D.', dateOfRegistration: '28th August 2010', yearOfAward: '25-09-2015', university: 'University of Pune' },
  { sr: 5, name: 'Mr. Rohit Phalgaonkar', registeredFor: 'Ph.D.', dateOfRegistration: '21st August 2010', yearOfAward: '25-09-2015', university: 'University of Pune' },
  { sr: 6, name: 'Mr. Prabhakar Kolekar', registeredFor: 'Ph.D.', dateOfRegistration: '28th August 2010', yearOfAward: '26-09-2015', university: 'University of Pune' },
  { sr: 7, name: 'Mr. Vinayak Kale', registeredFor: 'Ph.D.', dateOfRegistration: '28th August 2010', yearOfAward: '27-01-2016', university: 'University of Pune' },
  { sr: 8, name: 'Mr. Shyam Ranadive', registeredFor: 'Ph.D.', dateOfRegistration: '21st August 2010', yearOfAward: '05-06-2017', university: 'University of Pune' },
  { sr: 9, name: 'Mr. Sharad Kautik Bhamare', registeredFor: 'Ph.D.', dateOfRegistration: '08th August 2011', yearOfAward: '05-06-2017', university: 'University of Pune' },
  { sr: 10, name: 'Mr. Vivekanand', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2013', yearOfAward: '12-04-2019', university: 'J.N.U., New Delhi' },
  { sr: 11, name: 'Miss Ankita Kumar', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2014', yearOfAward: '10-07-2020', university: 'J.N.U., New Delhi' },
  { sr: 12, name: 'Mr. Anil Kumar', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2015', yearOfAward: '30-10-2020', university: 'J.N.U., New Delhi' },
  { sr: 13, name: 'Miss Neha Singh Aurora', registeredFor: 'Ph.D.', dateOfRegistration: 'January 2015', yearOfAward: '30-10-2020', university: 'J.N.U., New Delhi' },
  { sr: 14, name: 'Ms. Anuradha Pradhan', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2015', yearOfAward: '23-03-2021', university: 'J.N.U., New Delhi' },
  { sr: 15, name: 'Mr. Deepak Solanki', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2016', yearOfAward: '23-03-2021', university: 'J.N.U., New Delhi' },
  { sr: 16, name: 'Miss Deepika Kumari', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2016', yearOfAward: '23-03-2021', university: 'J.N.U., New Delhi' },
  { sr: 17, name: 'Mr. Prateek', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2017', yearOfAward: '30-03-2021', university: 'J.N.U., New Delhi' },
  { sr: 18, name: 'Ms. Shachi Meena', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2012', yearOfAward: '24-05-2021', university: 'J.N.U., New Delhi' },
  { sr: 19, name: 'Mr. Jyotirmaya Khatri', registeredFor: 'Ph.D.', dateOfRegistration: 'July 1993', yearOfAward: '23-03-2021', university: 'J.N.U., New Delhi' },
  { sr: 20, name: 'Ms. Dolly Purohit', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2017', yearOfAward: '25-07-2022', university: 'J.N.U., New Delhi' },
  { sr: 21, name: 'Ms. Shikha Kumari', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2017', yearOfAward: '26-07-2022', university: 'J.N.U., New Delhi' },
  { sr: 22, name: 'Miss Shelly Christian Lamare', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2017', yearOfAward: '09-08-2022', university: 'J.N.U., New Delhi' },
  { sr: 23, name: 'Miss Preetima Gogoi', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2017', yearOfAward: '11-10-2022', university: 'J.N.U., New Delhi' },
  { sr: 24, name: 'Miss Divya Surana', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2007', yearOfAward: '31-03-2023', university: 'J.N.U., New Delhi' },
  { sr: 25, name: 'Mr. Anwit Shahi', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2020', yearOfAward: '29-09-2023', university: 'J.N.U., New Delhi' },
  { sr: 26, name: 'Miss Teena Kunjkuty', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2018', yearOfAward: '22-12-2023', university: 'J.N.U., New Delhi' },
  { sr: 27, name: 'Mr. Mohammed Shamim', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2018', yearOfAward: '22-12-2023', university: 'J.N.U., New Delhi' },
  { sr: 28, name: 'Mr. Aditya Sharma', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2019', yearOfAward: '28-05-2024', university: 'J.N.U., New Delhi' },
  { sr: 29, name: 'Mr. Abhinav Yadav', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2021', yearOfAward: 'Work in Progress', university: 'J.N.U., New Delhi' },
  { sr: 30, name: 'Mr. Lalkrishna', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2021', yearOfAward: 'Work in Progress', university: 'J.N.U., New Delhi' },
  { sr: 31, name: 'Mr. Rajiv Ranjan', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2021', yearOfAward: 'Work in Progress', university: 'J.N.U., New Delhi' },
  { sr: 32, name: 'Mr. Arjav Jain', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2021', yearOfAward: 'Work in Progress', university: 'J.N.U., New Delhi' },
  { sr: 33, name: 'Mr. Sameer Mani Tripathi', registeredFor: 'Ph.D.', dateOfRegistration: 'January 2023', yearOfAward: 'Work in Progress', university: 'J.N.U., New Delhi' },
  { sr: 34, name: 'Miss Smile Arora', registeredFor: 'Ph.D.', dateOfRegistration: 'January 2023', yearOfAward: 'Work in Progress', university: 'J.N.U., New Delhi' },
  { sr: 35, name: 'Miss Ananya Jeff', registeredFor: 'Ph.D.', dateOfRegistration: 'July 2024', yearOfAward: 'Work in Progress', university: 'J.N.U., New Delhi' },
  { sr: 36, name: 'Suryaprakash', registeredFor: 'Ph.D.', dateOfRegistration: 'August 2025', yearOfAward: 'Work in Progress', university: 'J.N.U., New Delhi' },
  { sr: 37, name: 'Arpita Tarafdar', registeredFor: 'Ph.D.', dateOfRegistration: 'August 2025', yearOfAward: 'Work in Progress', university: 'J.N.U., New Delhi' }
]

const pdfStudents = [
  { sr: 1, name: 'Dr. Ragini Kapoor', registeredFor: 'PDF-ICHR', dateOfRegistration: '2023', yearOfAward: '', institution: 'ICHR' },
  { sr: 2, name: 'Dr. Dolly Purohit', registeredFor: 'PDF-ICSSR', dateOfRegistration: '2023', yearOfAward: '', institution: 'ICSSR' },
  { sr: 3, name: 'Dr. Anusha Shakya', registeredFor: 'PDF-ICSSR', dateOfRegistration: '2023', yearOfAward: '', institution: 'ICSSR' }
]

const mbaStudents = [
  { sr: 1, name: 'Mr. Bhagwan Ramchandra Patil (ACP)', registeredFor: 'M.B.A. - P.P.M', dateOfRegistration: '2011-2012', yearOfAward: '2012', university: 'YCMOU, Nashik' },
  { sr: 2, name: 'Miss Jyoti Tukaram Amane (PSI)', registeredFor: 'M.B.A. - P.P.M', dateOfRegistration: '2011-2012', yearOfAward: '2012', university: 'YCMOU, Nashik' },
  { sr: 3, name: 'Mrs. Neelima Vijay Chopade (PSI)', registeredFor: 'M.B.A. - P.P.M', dateOfRegistration: '2011-2012', yearOfAward: '2012', university: 'YCMOU, Nashik' }
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

function DataTable({ columns, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-primary-50 text-primary-700">
          <tr>
            {columns.map((c) => (
              <th key={c} className="px-3 sm:px-4 py-2 text-left font-semibold whitespace-nowrap">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-primary-100">
          {rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-primary-50/40">
              {columns.map((c) => (
                <td key={c} className="px-3 sm:px-4 py-2 align-top text-secondary-700 whitespace-pre-wrap">{row[colKey(c)] ?? ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function colKey(col) {
  const map = {
    'Sr.No': 'sr',
    'Name of student': 'name',
    'Registered for M.Phil.': 'registeredFor',
    'Registered for Ph.D.': 'registeredFor',
    'Registered for PDF': 'registeredFor',
    'Registered for Project': 'registeredFor',
    'Date of Registration': 'dateOfRegistration',
    'Year of award Degree': 'yearOfAward',
    'Year of award': 'yearOfAward',
    'University': 'university',
    'Institution': 'institution'
  }
  return map[col] || col
}

const ResearchGuidance = () => {
  return (
    <section className="pt-18 sm:pt-28 lg:mt-16 lg:pt-32 pb-16 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary-100 bg-white shadow-md px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-700">Research Guidance</h2>
            <p className="mt-2 text-sm text-secondary-600">Details of guidance to M.Phil., Ph.D., PDF and MBA students.</p>
          </div>
        </div>

        <SectionCard title="M.Phil. Students (26 awarded)">
          <DataTable
            columns={[
              'Sr.No',
              'Name of student',
              'Registered for M.Phil.',
              'Date of Registration',
              'Year of award Degree',
              'University'
            ]}
            rows={mPhilStudents}
          />
        </SectionCard>

        <SectionCard title="Ph.D. Students (28 awarded)">
          <DataTable
            columns={[
              'Sr.No',
              'Name of student',
              'Registered for Ph.D.',
              'Date of Registration',
              'Year of award',
              'University'
            ]}
            rows={phdStudents}
          />
        </SectionCard>

        <SectionCard title="PDF Students (3 awarded)">
          <DataTable
            columns={[
              'Sr.No',
              'Name of student',
              'Registered for PDF',
              'Date of Registration',
              'Year of award Degree',
              'Institution'
            ]}
            rows={pdfStudents}
          />
        </SectionCard>

        <SectionCard title="M.B.A. - P.P.M. Students (3 awarded)">
          <DataTable
            columns={[
              'Sr.No',
              'Name of student',
              'Registered for Project',
              'Date of Registration',
              'Year of award Degree',
              'University'
            ]}
            rows={mbaStudents}
          />
        </SectionCard>
      </div>
    </section>
  )
}

export default ResearchGuidance


