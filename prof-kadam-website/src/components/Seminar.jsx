const internationalEvents = [
  { title: "2nd International Society for Regional History Conference 2024 on People, Places, Landscapes and Memory", month: "2nd November 2024 to 4th November 2024", place: "Convention Centre, Jawaharlal Nehru University, New Delhi", role: "Convener-Organizer" },
  { title: "Dismantling Casteism: Lessons from Savarkar's – Essentials of Hindutva", month: "25th and 26th October 2021", place: "Indian Council for Historical Research, Government of India", role: "Convener-Organizer" },
  { title: "Historical Methodology and Scientific Evidences in the Aryan Debate – International Webinar", month: "27 July 2020", place: "Jawaharlal Nehru University", role: "Convener-Organizer" },
  { title: "The Sarasvati Civilization: A Paradigm Shift in Indian History – International Webinar", month: "13 June 2020", place: "Jawaharlal Nehru University", role: "Convener-Organizer" },
  { title: "Dispelling the harmful Aryan Myth – International Webinar", month: "30 May 2020", place: "Jawaharlal Nehru University", role: "Convener-Organizer" },
  { title: "Seminar Series every week on themes related to Indian / International Histories National and International faculties", month: "July 2014 to June 2016", place: "Jawaharlal Nehru University", role: "Convener-Coordinator" }
]

const nationalEvents = [
  { title: "Western India in Transition (from 17th to mid-20th century)", date: "February 2013", venue: "Shivaji University", role: "Convener-Coordinator" },
  { title: "Rewriting Histories: New Perspectives on Maratha History", date: "February 2012", venue: "University of Pune", role: "Convener-Coordinator" },
  { title: "New Perspectives on Maratha History", date: "February 2010", venue: "University of Pune", role: "Convener-Coordinator" },
  { title: "Western India in the 18th and 19th Centuries", date: "March 2007", venue: "University of Pune", role: "Convener-Coordinator" }
]

const exhibitions = [
  { title: "'Sardar Patel- The Architect of Unification'", description: "On the occasion of National Unity Day 31st October 2022 in collaboration with Ministry of Education, Ministry of Culture, IGNCA and ICHR." },
  { title: "Medieval India: Glory of Medieval India: Manifestation of the Unexplored Indian Dynasties, 8th to 18th Centuries", description: "In collaboration with Ministry of Education and ICHR to celebrate G20 event." }
]

const refresherCourses = [
  "Participated in the Refresher Course at the Lokshahir Annabhau Sathe Adhyasan, University of Pune, Pune held by Academic Staff College, University of Pune, sponsored by the UGC (2012-2013) from 10th September, 2012 to 30th September, 2012.",
  "Participated in the Refresher Course at the Department of Defence and Strategic Studies, University of Pune, Pune held by Academic Staff College, University of Pune, sponsored by the UGC (2011-2012) from 03rd January, 2012 to 23rd January, 2012.",
  "Participated in the Refresher Course at the Department of History, sponsored by the UGC (2001-2002) from 18th February, 2002 to 13th March, 2002."
]

const invitedTalks = [
  { title: "Special Plenary Session at 8th Young Historians National Conference", topic: "\"National Education Policy 2020 & Bhartiya Gyan Pranali Aywam Itihas Lekhan Shastra Tatha Itihas Darshan\"", org: "Organized by Akhil Bhartiya Itihas Sankalan Yojana (ABISY), New Delhi in joint venture with IGNOU, New Delhi and Madhav Sanskrit Nyas, New Delhi", date: "13th & 14th April 2024" },
  { title: "Key-Note Address at STM University, Gwalior, Madhya Pradesh", topic: "\"The Interplay of Media Law and National Education Policy 2020 in Shaping India's Future\"", org: "Sponsored by ICSSR, New Delhi", date: "12th April 2024" },
  { title: "Two Day International Conference \"Shiv-Samvad\"", topic: "Key-Note Address: 'Reconfiguring Borders of Influence- The Geocultural Legacy of Chhatrapati Shivaji Maharaj'", org: "Organized by Vivek Foundation in collaboration with Cultural Affairs Department, Government of Maharashtra, Mumbai at Mumbai University Fort Campus", date: "15th and 16th March 2024" },
  { title: "One Day International Conference \"Recent Trends in Social Sciences, Humanities and Education\"", topic: "Key-Note Address: 'Demystifying Episteme: Pedagogical Challenges in Social Sciences'", org: "Organized by Changu Kana Thakur, College, Panvel, Mumbai", date: "23rd February 2024" },
  { title: "International Webinar of the Regional History Society of Southern Africa (RHSSA)", topic: "Key-Note Address: \"Fragmented Histories: Dialectical Transformation and Challenges- Regional to National\"", org: "", date: "25th November 2022" },
  { title: "Azadi Ka Amrit Mohatsav Lecture Series", topic: "Special Lecture: 'The Legacy of the History of Marathas: Rise of Nationalism'", org: "Organised by Department of History, Sikkim University, Sikkim", date: "29th December 2021" },
  { title: "Two-Day National Seminar on 'Accessing the Aloon Rule: With Special Reference to Lashit Burghakar'", topic: "Valdoltery Address", org: "Organised by Indian Council of Historical Research, New Delhi in association with Tangshahi College, Tangshahi, Dibragain, Asuam", date: "22nd and 23rd December 2021" },
  { title: "International Conference on Terentenary of Attiqail Rezort Resistance or Revolt", topic: "Key-Voice Address at the Inaugural Function", org: "Organised by the Department of History, Government College, Antipolis, Kundu", date: "09th December 2021" },
  { title: "Special Lecture on 'Bhagwan Bitsa Moradi'", topic: "", org: "Organised by the Maharam Gandhi Anstrandphys Hindi Vishawarabiyani (Central University) Nurdua, Maharashtra to commemorate the Bhagwan Bitsa Munda Japidiya Gunar Voice", date: "17th November 2021" },
  { title: "R.P. Vyas Lecture Memorial Lecture Series – VIII", topic: "Key-Voice address: \"Locating Historical Transitions in Medieval Rocaux Marathon, Preexisting Powers and European Companies\"", org: "", date: "July 25, 2021" },
  { title: "National Seminar on \"History and Lecture Working Gates in India: Social Transformations and Challenges\"", topic: "Key-note lecture on \"Engagement Histories Social Transformation and Challenges\"", org: "Department of History, University of Allahabad, Uttar Pradesh", date: "2nd October 2021 (28th & 29th October 2017)" },
  { title: "International Seminar on \"Magnitudes and Semantics: Development of Cross-Cultural India (A Study in Historical Perspective through the Aspsi)\"", topic: "Key-note lecture on \"The Idea of 'A Region, Language and Culture': Concept and Concentualization: A Historical Tripticory\"", org: "Malta Makavadhyalya, Jai Namir Vyas University, Adippur, Rajeshwar", date: "25th July 2021 (35th & 26th July 2017)" },
  { title: "Murambana History Congress", topic: "Chief Guest lecture on \"The Methodology of History: Historical Knowledge and Historical Reality\"", org: "", date: "11th December 2021" },
  { title: "Department of History, Southeast University, Gadalimdi, Maharashtra", topic: "Key-note lecture on \"Regional Histories and Corrections to the Discourse on National History\"", org: "", date: "4th April 2015" },
  { title: "Department of History, Maharajit Ganga Singh University, Bilkeme, Rajeshwar", topic: "Key-note lecture on \"Historically Marginalized Communities: The Semantic Constructs/Reconstruction of the Preexisting versus Proscribed\"", org: "", date: "30th March 2015" },
  { title: "Prestigious Lectures Series at Dr Bahustada Ambedkar Murambana University, Aurangahad", topic: "Chief Guest lecture on \"Relations between the French and Marathas in the 17th Century\"", org: "On the occasion of Silvi-Jayanti", date: "19th February 2011" },
  { title: "Prestigious Dr Appusabbio Pawar Lectures Series at Department of History, Shivaji-Kohapura", topic: "Lecture on \"French-Maratha Relations: India in the 17th Century\"", org: "", date: "21th December 2006" }
]

const academicParticipations = [
  { role: "Session Chair", event: "ISSH International Society of Regional History (ISSH), III Global Conference 2025 on \"Migration in a World of Regions\"", org: "International Welfare organised by University of Helsinki Ruralia Institute, Finland", date: "15th to 17th September 2025" },
  { role: "Technical Session", event: "Senna-Hwarah 2015 – A Two Day International Conference on \"Cross-Border Influencing Impact on Socio-Economic Cultural and Political Affairs\"", org: "Jointly organized by Senna Jagma Marsh, Delhi & Medial Nebru College (Evening), University of Delhi", date: "North Campus, University of Delhi, held on 21th-22nd August 2025" },
  { role: "Resource person", event: "Workshop cum romtabible discussion on 'Revisiting Gender Equality Markets: Gender Justice and Empowerment Across Europe and India'", org: "Organised by Centre for Historical Studies, Jawaharlal Nehru University in collaboration with Embassy of Italy, New Delhi", date: "5th March 2024" },
  { role: "Key-Voice Address", event: "'Demyelijitha Epistemic Pedagogical Challenges in Social Sciences' at One Day International Conference, 'Recent Trends in Social Sciences, Humanities and Education'", org: "Organised by Chiang-Kuan Thakur, College, Purwel, Mumbai", date: "27th February 2024" },
  { role: "Key note address", event: "One-day Special National Seminar under Azadika Amri Mahosaw entitled 'Sign of an resume join which Lakademikharamy' at Chennai", org: "Organised by Indian Council of Historical Research, New Delhi", date: "16.10.2022" },
  { role: "Key note address", event: "One-day Special National Seminar under Azadika Amri Mahosaw entitled 'Sign of training and development of skillsings, Magalhaey'", org: "Organised by Indian Council of Historical Research, New Delhi", date: "16.11.2022" },
  { role: "Key note address", event: "One-day Special National Seminar under Azadika Amri Mahosaw entitled 'Retransigning Freedom Movement: Decoupleting Indian Music to Retrieve the Solutions of National Club, Thuringalamjaman, Kenthi'", org: "Organised by Indian Council of Historical Research, New Delhi", date: "16.12.2022" },
  { role: "Resource person", event: "Two Day National Symposia on 'Challenges of Understanding History'", org: "Organised by UKIR, New Delhi at Guanran Bhabad University, Greater Kent", date: "30th and 31 March 2022" },
  { role: "Resource person", event: "Two Day Programme Workshop on 'Endorsals: Social Sciences'", org: "Organised by the Vaidya Bharathi Colanda Shiksha Sanathan, New Delhi", date: "22nd and 23rd January 2022" },
  { role: "National Seminar", event: "'Changing Narratives in Dual Discourse'", org: "Organised by the Australian Foundation New Delhi on the special account of consultation Day at Constitution Week, New Delhi", date: "26th November 2021" },
  { role: "Two-day National Convention", event: "'Transferring North East India'", org: "Organised jointly by Rambasa Mhalgi Pinhoothin and Himalayan University, Himanshai Prabashi at New Delhi", date: "14th and 15th October 2021" },
  { role: "International Seminar", event: "'Negotiating Identities: Attachatism of the Tamilnadu History Committee at the International Seminar on Confidential Early Modern South Asia'", org: "Organised by Trinity College Dublin, University of Delhi in web academia support of Centre for Historical Studies, Jawaharlal Nehru University, New Delhi & funded by European Union Grant Specistered Judd", date: "12-13 November, 2023" },
  { role: "Workshop", event: "'New Trends in Social Science Research' the ICCR sponsored 'The Silver Team Course Group's Building and Training Workshop for Social Science Faculty Members'", org: "Organised by Dr Bahustado Ambedkar Shiksha Centre, Savindhai Trade Panel University", date: "27th February 2015" },
  { role: "Medieval History Journal Seminar", event: "'From Communal Actions: The Representation and Interpretation of Power in Late-Medieval Emission World School of Social Sciences, Jawaharlal Nehru University, New Delhi'", org: "", date: "5th November, 2014" },
  { role: "Workshop", event: "Ten days 'Workshop for Preparing Glossary in History'", org: "Western Region Language Center, These sponsored by the National Translation Mission, Central Institute of Indian Languages, MIBID, Government of India", date: "16th to 27th November 2013" },
  { role: "National Workshop", event: "'Research Trends and Advances in Historical Research Methods with Special reference to social confusion and inclusive policy at the National Local Workshop on Research Methodology in the Area of Social Exclusions and Discrimination'", org: "Organised by Centre for the Study of Social Exclusions and Inclusive Policy", date: "30th & 31th August 2013" },
  { role: "State Level Seminar", event: "'History and Literature: The Consistent and Deconstruct of the Semantic and Pedagogy' at the State Level Seminar on 'Proscribed Literature in India, 1757-1947'", org: "Organized by the Department of History, S.N.D.T. Women's University", date: "21nd and 22nd March 2013" },
  { role: "Two days State Level Seminar", event: "\"Freedom Movement in Western India and the Konban Region\" at the Two days State Level Seminar on \"Freedom Movement in Konban Region\"", org: "Organized by the Department of History, & State Reword Maharaj Mahavidhalaya, Kuala, Shulundang", date: "26th and 27th February 2013" },
  { role: "State Level Seminar", event: "\"The Amalus School of History\" at the State Level Seminar on \"The Amalus School of History\"", org: "Organized by the Department of History, Sainda Bahursu Kual College, Kedapou, Tamad, Pune", date: "17th and 18th March 2012" },
  { role: "National Seminar", event: "\"The Mantha Court and the Embassy of Saicı Lublin: A Trace toward Cordial Relations\" at the National Seminar on \"Western India in Transition (from 11th to mid-20th century)\"", org: "Organized by the Department of History & Club. Shihu Maharaj for Studies of Marathi History", date: "15th and 16th February 2013" },
  { role: "National Seminar", event: "\"The Franco-Dutch Society with the Lasso-Maratha Book in the Decolet\" at the National Seminar on \"Rewriting Histories: New Perspectives on Marathi History\"", org: "Organized by Department of History, University of Pune", date: "23rd to 25th February, 2012" },
  { role: "State Level Seminar", event: "\"The Changing Administration System during the Peaboo World\" at the State Level Seminar on \"The Changes in the Administrative Systems of Marathi Power (1040-1118)\"", org: "Organized by the Department of History, Duka Pauli College, Katjat, Ahmednagar", date: "10th and 11th February 2012" },
  { role: "Regional Symposium", event: "\"Research Methodology in History Understanding: Various Trends\" at the Regional Symposium on Research Methodology", org: "Organized by the Department of History, Shahah Bahursu Kual College, Kedapou, Damad, Pune", date: "31 January 2012" },
  { role: "National Conference", event: "\"The Amalus School-Total History\" at the National Conference on News Trends in Historiography & Computer Application in Historical Research", org: "Organized by Department of History, School of Social Sciences, Nordi, Bharatiya University, Jingbo", date: "January 28th and 29th 2012" },
  { role: "National Level Workshop", event: "National Level Workshop on National Linguistics", org: "Organized by Bharat Rama Dr Babasinde Ambedkar Chair and Dr Babasinde Ambedkar Studies Centre, University of Pune", date: "24th January 2012" },
  { role: "Orientation Program", event: "Department of Department of History, University of Pune in the Orientation Program on \"Human Rights and Dutch Education Program\"", org: "Organized by Department of Law, University of Pune", date: "26th November 2011" },
  { role: "Indo-European Workshop", event: "Representatives of Department of History, University of Pune in the Indo-European Workshop on \"Quality Awareness in Higher Education\"", org: "Jointly organized by University of Pune and Indian University, Sweden", date: "22th November 2011" },
  { role: "Abhil Makarashira Iithas Parishad, 20th Session", event: "\"Programs of Maratha History Lasso-Dutch presence in the Decolet\"", org: "Organized by Mohammed Chavan Warma Mahavidyalaya, Warumayang", date: "21th and 17th November 2011" },
  { role: "First International Conference on Tourism and Management Studies, Algarve", event: "\"Impact of Local Values on Development of Tourism in Iran\" Co-authored by Zahn Mokotai and Umehli Ankokrao Sudan page published in the Proceedings", org: "Etoeba Superior De Gosmo, Hotehrin E Turismo, Feroz Portugal", date: "26th October 2011" },
  { role: "Innovation-2010, Regional Conference for Pune University Teachers", event: "\"Prompture Dutch Maratha Relations, 1640-1818\"", org: "Organized by Board of College and University Development (BCUD), University of Pune, Pune", date: "22nd and 23rd March, 2011" },
  { role: "National Seminar on \"Tankul and Her Inner History\"", event: "\"Risks Tankul Maratha Diplomating: a Premier—Maurice de la Inle Francia/ The First Maratha Queen Diploma: 'Tankul as in Indo-French Sources'\"", org: "Organized by Department of History, Silvaji University Kolingue", date: "18th and 19th March, 2011" },
  { role: "National Seminar on \"Marginal Sections in the Indian Society\"", event: "\"Communities historically Marginalized: Pathoming the Conscience - Do we belong to you?\"", org: "Organized by Department of History, University of Pune, Pune", date: "1st and 25th March, 2011" },
  { role: "International Seminar on \"India and Iran: Our Cultural Legacy of the Past\"", event: "\"Historical Comparison of Indian and India\"", org: "Organized by the Poem College of Arts, Science and Commerce, Pune", date: "5th and 5th March 2011" },
  { role: "State Level Seminar on \"Research in Social Sciences Techniques and Trends\"", event: "\"History and Historiography: Techniques and Trends\"", org: "Organized by the Modern College of Arts, Science & Commerce, Pune", date: "7th and 8th January, 2011" },
  { role: "First Maratha History Conference", event: "\"The Mantha State in the 17th Century and the French Pressure (A Case Study of Franco-Maratha Relations)\"", org: "Organized by Marianna Jyorizzo Public Itibus Akademis, Pune", date: "8th May to 09th May, 2010" },
  { role: "National Seminar on \"New Perspectives on Maratha History\"", event: "\"The Mantha Court and the Embassy of St. Lubin and Montigny: A Trace towards Cordial Relations\"", org: "Organized by Department of History, University of Pune, Pune", date: "24th to 25th Feb, 2010" },
  { role: "Pune University Teachers'Charterness of Session and National Seminar", event: "\"Maratha History-Near Perspective\" at Pune University Teachers'Charterness of Session and the National Seminar on Franklin Historiography in India: 1970 onwards", org: "Organized by C.T. Rara College, Stuart", date: "20th and 21th February, 2010" },
  { role: "National Seminar on \"Club. Silvaji and 17th Century\"", event: "\"The Portuguese-Dutch-French Relations with the Maratha, 1620-1818\"", org: "Organized by Centre for Maratha Studies, Dr Babasinde Ambedkar Marathandu University, Aurangabad", date: "30th to 20th Feb, 2010" },
  { role: "State Level Seminar on \"Research in History Emerging Issues and Challenges\"", event: "\"Emerging Issues and New Trends in History\"", org: "Sponsored by local and organization's Chicago Kana Thakur, Arts, Commerce and Science College, New Forest, University of Maratha", date: "13th to 14th Feb, 2010" },
  { role: "National Seminar on \"Exploring Foreign Sources for the Study of Indian History\"", event: "\"The Franco-Lobato Relations with the Maratha/ Collegio 1819\"", org: "Held at University of Pune, Pune", date: "25th to 31 December 2009" },
  { role: "Symposium on \"Maratha History\"", event: "\"History of the Maratha: The French Connecticut\"", org: "Organized by Centre for Maratha Studies, Dr Babasinde Ambedkar Marathandu University, Aurangabad", date: "20th to 21th Feb, 09" },
  { role: "Workshop on \"Solar Studies in History\"", event: "\"Four courses—History and Its Theory,\" History and Its Practice,\" History of Medieval Europe\" at Debates in Indian History\"", org: "Organized by the POI Lectures organized by the Department of History, University of Pune", date: "17th and 18th February, 2009" },
  { role: "Workshop", event: "\"Nature of Daily Movement\"", org: "Organized by the Bharat Rama Dr Babasinde Ambedkar Research Centre and Ambethari Saaip Centre, University of Pune", date: "14th July and 16th February, 2009" },
  { role: "National Seminar on \"New Approaches to Maratha History\"", event: "\"Culture in the Import religious sense\"", org: "Organized by Gravene College of Arts, Pune", date: "29th January 2009" },
  { role: "National Seminar on \"Rebellion of 1877 with special references to Western India\"", event: "\"Modern Historiography of 1857: Re-Accessing the Reduction\"", org: "Organized by Department of History, Silvaji University, Kolingue", date: "11th to 12th March, 2010" },
  { role: "National Seminar on \"Depiction of 1857 Freedom struggle and characterization of Karl Laxmibal or Raunt in Indian Literature\"", event: "\"Rethinking Historiography: Reflections of 1837\"", org: "Organized by Aykya Bharati Research Institute, Pune", date: "7th to 19th February 2008" },
  { role: "National Symposium on \"Themes and Trends in History\"", event: "", org: "Organized by the Department of History, University of Pune", date: "11th and 12th December, 2007" },
  { role: "National Seminar on \"Globalization and Ambedkarism\"", event: "", org: "Organized by the Bharantanas Dr Babasinde Ambedkar Studies and Research Centre, University of Pune", date: "20th and 21th February, 2006" },
  { role: "International Seminar on \"Studies in Decem History with Special Reference to Maharashtra\"", event: "Paper entitled \"Researching and Reconstructing Muratha History: Muratha in Radiation to the Front (1685–1818)\"", org: "Jointly organized by Department of History and Chlampani Shahu Maharaj Centre for Studies in Muratha History, Shivaji University, Kolhapur", date: "6th to 8th December 2004" },
  { role: "Symposia on \"Concept and Methodology of Urban History\"", event: "Paper on \"The Development and Scope of Urban History\"", org: "Organized by the Department of History, Shivaji University, Kolhapur", date: "22nd and 23rd March 2004" },
  { role: "Workshop on \"New Trends in History\"", event: "", org: "Conducted by the Department of History, University of Pune", date: "11th to 13rd March, 2004" },
  { role: "XI International Seminar on Indo-Peratogenic History: Silver Jubilee Session", event: "Observer", org: "Held at Cidade de Goa, Dona Paula, Goa- India", date: "21st to 25rd September, 2003" },
  { role: "Workshop on \"History and Plan: An Interdisciplinary Approach\"", event: "", org: "Conducted by the Department of History, University of Pune", date: "14th March, 2002" },
  { role: "COURT-2007, Campaign on University Research and Training", event: "", org: "Organized by Shivaji University", date: "10th and 11th March, 2002 (Selected as Best Research student by History Department, Shivaji University)" },
  { role: "COURT-2007, Campaign on University Research and Training", event: "", org: "Organized by Shivaji University", date: "11th March 2001" },
  { role: "National Seminar on \"Society, Religion and Culture in Medieval South India\"", event: "", org: "Organized by the Department of History, Shivaji University", date: "13th to 15th February 2001" }
]

const coordinatorPrograms = [
  "Coordinator for the 3rd Refugee Course in History held during by the Human Resources Development Centre, Jawaharlal Nehru University, New Delhi held from 8th March 2000 to 29th March 2003.",
  "Coordinator for the 1st Interdisciplinary Refresher Course in Environment Studies held at the Human Resource Development Centre, Jawaharlal Nehru University, New Delhi held from 3rd September 2016 to 12th September 2016.",
  "Coordinator for the Medieval Unit, CHS / SSS / JNU for the academic year 2016-2018.",
  "Coordinator for the Refresher Course in History held at the Academic Staff College, Jawaharlal Nehru University, New Delhi held from 22nd September 2016 to 17th October 2014.",
  "Coordinator for the Weekly Seminars at CHS / SSS / JNU for the academic year 2014-2016.",
  "Coordinator for Chh. Shahu Maharaj Centre for Studies of Maratha History, Shivaji University, Kolhapur.",
  "Coordinator for UGC - NAAC, Department of History, Shivaji University, Kolhapur.",
  "Coordinator for a National Seminar on \"Revisiting Histories: New Perspectives on Maratha History\", organized by the Department of History, University of Pune from 22nd to 24th July, 2012.",
  "Coordinator for the Protagonist Lokmanya Bal Gangadhar Tilak Lecture for the year 2010-11.",
  "Coordinator for the Protagonist Lokmanya Bal Gangadhar Tilak Lecture for the year 2009-10.",
  "Coordinator for the Refresher Course \"Recent trends and Advances in History\", 2009.",
  "Coordinator for the Protagonist Lokmanya Bal Gangadhar Tilak Lecture for the year 2008-09.",
  "Coordinator for a National Seminar on \"Western India in the 18th and 19th centuries\", organized by the Department of History, University of Pune from 6th to 8th March, 2007.",
  "Coordinator for a Workshop on \"New Syllabi Introduced at the Under-graduate level in History\", organized by the Department of History, University of Pune from 27th to 28th March, 2006."
]

const academicDiscussions = [
  "Ultrawilhead Governor's Nominee as Member Selection Committee (CAS promotion) at Kumuru University, Nainhai 2025.",
  "Delivered two lectures as Resource person at the Research Methodology Course sponsored by ICSSR organized by Department of Geography, SNOT Women's University Pune on 29th January 2013. Topics-History as a source of Research in Social Sciences and Issues in Social Sciences Research: Historical Perspectives.",
  "Delivered a Lecture as Resource person at a Refresher course on Indian Philosophy, Tradition and Culture at CPDHE, ICC-HERC New Delhi on Bhakai Movement: A Refermation to create social dynamism on 23rd January 2019.",
  "Delivered a Lecture as Resource person at CPDHE, ICC-HERC, University of Delhi on Nelson Building on 21th December 2018.",
  "Delivered a Special Issue on Social History: Implications and Applications at Department of History Babasaheb Bhimno Arab-Ghat University, Ludebox, UT on 30th August 2018.",
  "Delivered two Guest lectures on Social Exclusion and Policies' and Marginal Communities in India' organized by the Dr. Babasaheb Arab-Ghat's Geographical Examination Centre, University of Solapura on 11th and 12th March 2013.",
  "Delivered a Guest lecture on \"Trends of Movement in Kerala\" at the UGC sponsored Two-day State Level Seminar organized by Sinai Rasool Maharaj Mahavidyalaya, Sedan on 26th and 27th February 2013.",
  "Delivered a Guest Lecture at Saram Dayamud College Solapur on \"Recent Trends of Historiography\" on 12th January 2013.",
  "Delivered a Guest lecture on \"New Research Trends in Historiography\" at the One Day Seminar on \"New Research Trends in Historiography\", organized by Danari Tanda Atar and commerce College, Durand, Pune, held on 04th February 2012.",
  "Delivered a Guest lecture on \"Use and Abuse of Indian History\" at the Lavale-Kemp, organized by Poena College of Pharmacy, Pune, held on 08th January 2012.",
  "Delivered a Guest lecture on \"Recent Trends in Social Science\" at the One Day Seminar on \"New Research Trends in Social Science\" under the East College Press Program, organized by D.D. Shinde Sahar College, Shivaji University, Kolhapur, held on 19th December 2011.",
  "Delivered five lectures on Historiography and Advances in History under the UGC Remedial Coaching Scheme at the Department of History, Shivaji University, on 09th & 16th December, 2011.",
  "Delivered a lecture on Historiography and the UGC Remedial Coaching Scheme at the Department of History, University of Pune on 28th November, 2011.",
  "Delivered a Guest lecture on \"Challenges to the Writing of Muratha History\" at the Philipse-Julhavano Wada jointly conducted by HSE College, Waghdi and Subhedar Philipse Juhhavano Memorial Centrable Trust, Waghdi on 21th July 2011.",
  "Delivered a Guest lecture on \"National Integration A Historical Perspective\", at the Workshop on National Integration organized by the Modern College of Arts, Science & Commerce, Pune under the Adult Education and Extension Programme, No 1st February, 2011.",
  "Delivered a Guest lecture on \"Teorians and History\" at the Workshop on Travel and Tourism', organized by the Bhuriya Jan Sandhunha College of Arts, Science and Commerce on 11th February, 2011.",
  "Delivered a Guest lecture on \"Understanding New Trends in History Writing\" at the Kitam Year Mahavidhyalaya, Wah Siana on 30th December, 2010.",
  "Delivered Six lectures on Historiography, Maratha History, Eighteenth Century Debate and 'Regional History' under the UGC Remedial Coaching Scheme at the Department of History, Shivaji University, on 03[rd] & 04[th] December, 2010.",
  "Delivered a Guest lecture on \"History Scope and Understanding\" at the Bharatratna Dr Babasaheb Ambedkar College, Aundh, Pune on 01[th] February, 2010.",
  "Delivered a Guest lecture on \"Village Hygiene and Cleanliness\" at the NSS Camp, organized by University of Pune at village Sadumbare, Chakan, Pune, on 31[th] January, 2009.",
  "Delivered a Guest lecture on \"Western Trends in Historiography\" at the Shivaji College of Science, Arts and Commerce, Satara on 24[th] January, 2009.",
  "Delivered a Guest lecture on \"Understanding History Today\" at the Shrimant Bhaiyasaheb Rajmane College of Science, Arts and Commerce, Mahswad, Phaltan, Satara on 23[rd] August, 2008.",
  "Delivered a Guest lecture on \"Recent Trends in History- with special reference to Subaltern Historiography\" at the 4[th] Solapur University History Conference, held at Dayanand College of Arts and Science, Solapur on 24[th] and 25[th] January, 2008.",
  "Delivered a Guest lecture on \"Subaltern History: New Dimensions\" at the 4[th] Solapur University History Conference, held at Dayanand College of Arts and Science, Solapur on 24[th] and 25[th] January, 2008.",
  "Delivered two lectures on 'Eighteenth Century Debate' and 'Regional History' under the Guest Lecture Series at the Department of History, Shivaji University on 29[th] & 31[st] August, 2007.",
  "Delivered a lecture on \"French-Maratha Relations: India in the 17[th] Century\" under the Prestigious Appasaheb Pawar Lecture Series at the Department of History, Shivaji Kolhapur on 21[st] December 2006.",
  "Delivered a lecture on \"Marathas in Relation to Foreign Powers: Portuguese, French and the Dutch\" at Deccan College, Department of Archaeology, Pune, for the Certificate Course on 'Historical Maharashtra' on 28[th] November 2004.",
  "Delivered a lecture on \"Maratha History – New Perspectives\" under the Guest Lecture Series at the Narayangaon College of Arts, Commerce and Science, Narayangaon, Pune on IMA 10[th] March, 2004.",
  "Delivered three lectures on 'Structuralism', 'Post-Structuralism' and 'Post-Modernism' under the Guest Lecture Series at the Department of History, Shivaji University on 27[th] & 28[th] November, 2003."
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

function DataTable({ columns, rows, columnMap }) {
  const getValue = (row, col) => {
    const key = columnMap?.[col] || col.toLowerCase().replace(/\s+/g, '')
    return row[key] ?? ''
  }
  
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
                <td key={c} className="px-3 sm:px-4 py-2 align-top text-secondary-700 whitespace-pre-wrap">{getValue(row, c)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Seminar = () => {
  return (
    <section className="pt-18 sm:pt-28 lg:mt-16 lg:pt-32 pb-16 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary-100 bg-white shadow-md px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-700">Seminars, Workshops & Conferences</h2>
            <p className="mt-2 text-sm text-secondary-600">Exhibitions, events organized, and academic participations.</p>
          </div>
        </div>

        <SectionCard title="Exhibitions: Theme, Concept, Design and Execution">
          <div className="space-y-4">
            {exhibitions.map((exh, idx) => (
              <div key={idx} className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                <h4 className="font-semibold text-primary-700 mb-2">{idx + 1}) {exh.title}</h4>
                <p className="text-sm text-secondary-700">{exh.description}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="SEMINAR/ WORKSHOPS/ CONFERENCES/ SYMPOSIUM/ REFRESHER COURSES">
          <div className="mb-4 p-3 bg-primary-50 rounded-lg border border-primary-100">
            <p className="text-sm text-secondary-700">➡ Experience of organizing events such as workshops, seminars, conference at International level within the country in the field of higher education:</p>
          </div>

          <h4 className="text-md font-semibold text-primary-700 mb-3 mt-6">International Level Events Organized</h4>
          <DataTable
            columns={['Title', 'Month & Year', 'Place', 'Role']}
            rows={internationalEvents}
            columnMap={{
              'Title': 'title',
              'Month & Year': 'month',
              'Place': 'place',
              'Role': 'role'
            }}
          />

          <h4 className="text-md font-semibold text-primary-700 mb-3 mt-6">National Level Events</h4>
          <DataTable
            columns={['Title', 'Date', 'Venue', 'Role']}
            rows={nationalEvents}
            columnMap={{
              'Title': 'title',
              'Date': 'date',
              'Venue': 'venue',
              'Role': 'role'
            }}
          />
        </SectionCard>

        <SectionCard title="Refresher Courses: Participated">
          <ul className="space-y-3">
            {refresherCourses.map((course, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-secondary-700">
                <span className="text-primary-600 mt-1">•</span>
                <span>{course}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Invited Talks / Prestigious Lectures">
          <div className="space-y-4">
            {invitedTalks.map((talk, idx) => (
              <div key={idx} className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                <h4 className="font-semibold text-primary-700 mb-2">{talk.title}</h4>
                {talk.topic && <p className="text-sm text-secondary-700 mb-1 italic">{talk.topic}</p>}
                {talk.org && <p className="text-sm text-secondary-600 mb-1">{talk.org}</p>}
                <p className="text-xs text-secondary-500">{talk.date}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Academic Participations">
          <div className="space-y-4">
            {academicParticipations.map((participation, idx) => (
              <div key={idx} className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                <h4 className="font-semibold text-primary-700 mb-2">{participation.role}</h4>
                <p className="text-sm text-secondary-700 mb-1">{participation.event}</p>
                {participation.org && <p className="text-sm text-secondary-600 mb-1">{participation.org}</p>}
                <p className="text-xs text-secondary-500">{participation.date}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Coordinator Programs">
          <div className="space-y-3">
            <h4 className="font-semibold text-primary-700 mb-3">Seminar/ Conference/ Symposia/ Workshop/ Refresher Courses</h4>
            <ul className="space-y-2">
              {coordinatorPrograms.map((program, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-secondary-700">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>{program}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionCard>

        <SectionCard title="Academic Discussions">
          <div className="space-y-3">
            {academicDiscussions.map((discussion, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-secondary-700 p-3 bg-primary-50 rounded-lg border border-primary-100">
                <span className="text-primary-600 mt-1">•</span>
                <span>{discussion}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </section>
  )
}

export default Seminar
