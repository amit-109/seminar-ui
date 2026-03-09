const speakers = [
  {
    name: "Dr. Ashish Sharma",
    designation: "Associate Professor",
    department: "Department of Computer Engineering",
    institution: "Manipal University",
    location: "Jaipur, Rajasthan",
    email: "sharma.ashish@jaipur.manipal.edu",
    qualifications: [
      "Ph.D., MNIT Jaipur, 2020",
      "M.Tech., MNIT Jaipur, 2011",
      "B.E., University of Rajasthan, 2004",
    ],
    researchAreas: [
      "CPS",
      "Neural Rehabilitation",
      "Brain Computer Interface and Bio-robotics",
      "High Performance Computing (Embedded, manycore)",
    ],
    image: "/assets/speaker1.JPG",
  },
  {
    name: "Dr. Navin Kumar",
    designation: "Associate Professor",
    department: "Department of Information Technology",
    institution: "Amity University",
    location: "Bihar",
    email: "nkumar6@ptn.amity.edu",
    qualifications: [
      "Ph.D. (CSE), Pondicherry University, 2018",
      "MCA, School of Engineering and Technology, Pondicherry University, 2012",
      "MBA (General), Pondicherry University, 2017",
      "PG Diploma (Statistical and Research Methodology), Pondicherry University, 2015",
    ],
    researchAreas: ["Spatial Data Computation", "Deep Learning", "Data Science"],
    experience: [
      "Professional Membership IEEE",
      "Professional Membership ACM",
      "Life Time Member (Indian Science Congress Association)",
    ],
    image: "/assets/Speaker2.JPG",
  },
  {
    name: "Dr. Divyanshu Awasthi",
    designation: "Assistant Professor",
    department: "Department of Electronics",
    institution: "GLA University",
    location: "Mathura, Uttar Pradesh",
    email: "divyanshu.awasthi@gla.ac.in",
    qualifications: [
      "Ph.D. in Information Security, MNNIT Allahabad, 2024",
      "M.Tech. in Signal Processing, MNNIT Allahabad, 2021",
      "B.Tech. in ECE, University of Allahabad, 2018",
    ],
    researchAreas: [
      "Data Hiding Techniques",
      "Multimedia Security",
      "Image Processing",
      "Cryptography",
      "Deep Learning",
    ],
    experience: [
      "Published 20+ research papers in reputed international journals on secure image watermarking, optimization, and medical image security.",
    ],
    image: "/assets/speaker3.JPG",
  },
  {
    name: "Dr. Prasanjit Dhar",
    designation: "Assistant Professor",
    department: "Department of Computer Science",
    institution: "GLA University",
    location: "Mathura, Uttar Pradesh",
    email: "Prasanjitdhar.cse@gmail.com",
    qualifications: ["Ph.D. (NIT Silchar)"],
    researchAreas: ["Image Processing", "Machine Learning", "Deep Learning"],
    image: "/assets/speaker4.JPG",
  },
  {
    name: "Mr. Devendra Kumar Gupta",
    designation: "Lecturer",
    department: "Department of CSE",
    institution: "Government Polytechnic College Tonk",
    location: "Tonk, Rajasthan",
    email: "Devendra_kr_gupta@yahoo.co.in",
    qualifications: ["B.Tech.", "M.Tech."],
    researchAreas: ["Machine Learning"],
    image: "/assets/Seaker5.JPG",
  },
  {
    name: "Dr. Rajan Prasad",
    designation: "Associate Professor",
    department: "Department of Computer Science",
    institution: "SRMCEM",
    location: "Uttar Pradesh",
    email: "drrajanpd1@bbdu.ac.in",
    qualifications: ["B.Tech.", "M.Tech.", "Ph.D. (Computer Science)"],
    researchAreas: ["Artificial Intelligence", "Fuzzy Systems", "Machine Learning"],
    image: "/assets/Speaker6.JPG",
  },
  {
    name: "Dr. Raj Shree Pandey",
    designation: "Associate Professor, Head",
    department: "Department of Information Technology",
    institution: "BBAU",
    location: "Uttar Pradesh",
    email: "rajshree.bbau2009@gmail.com",
    qualifications: ["MCA", "M.Tech.", "NET", "Ph.D."],
    researchAreas: [
      "Mobile Ad Hoc Networks",
      "Wireless Sensor Network",
      "Routing",
      "Security",
      "Image Processing",
    ],
    experience: ["Teaching: 20 years", "Research: 15 years"],
    achievements: [
      "Recipient of DG's Plaque of Honour and Commandant's Gold Medal at Officers Training Academy, Gwalior.",
      "Awarded Gaurav Samman (2020) by BBAU for academic and research excellence.",
      "Published research papers, books, and patents in wireless networks, mobile computing, and image processing.",
    ],
    image: "/assets/speaker7.JPG",
  },
  {
    name: "Dr. Rashmi Shekhar",
    designation: "Assistant Director",
    department: "Academic Department",
    institution: "AIT Patna, Amity University",
    location: "Bihar",
    email: "rshekhar@ptn.amity.edu",
    qualifications: [
      "Ph.D., T.M. Bhagalpur University, 2019",
      "MCA, IGNOU, 2009",
      "PGDCA, IGNOU, 2007",
      "BCA, Patna University, 2003",
    ],
    researchAreas: [
      "Programming Language",
      "AI Security",
      "Social Engineering",
      "Compiler Design",
      "TOC and IT",
    ],
    experience: [
      "Professional Membership of IEEE",
      "Member of Computer Society of India",
      "ELTAI Member",
    ],
    image: "/assets/speaker8.JPG",
  },
  {
    name: "Smt. Shraddha Saxena",
    designation: "Subject Matter Expert (AI & ML)",
    department: "School of Computing",
    institution: "Amity University",
    location: "Punjab",
    email: "saxena.29shra@gmail.com",
    qualifications: ["M.Tech. (SATI Vidisha)"],
    researchAreas: ["Deep Learning", "Blockchain"],
    experience: ["AI & ML"],
  },
]

const committee = [
  { name: "Prof. J. P. Pandey", post: "Chief Patron, Principal MLK College" },
  { name: "Dr. Kavita Tiwari", post: "Conference Chair, Department of Computer Science" },
  { name: "Dr. Arvind Jain", post: "Organizing Secretary, Cyber Cell" },
  { name: "Ms. Ananya Yadav", post: "Co-Organizing Secretary, AI Club" },
]

const dates = [
  { label: "Abstract Submission Deadline", value: "April 12, 2026" },
  { label: "Acceptance Notification", value: "April 18, 2026" },
  { label: "Final Paper Submission", value: "April 24, 2026" },
  { label: "Seminar Date", value: "May 2, 2026 (Hybrid Mode)" },
]

const formLink = "https://forms.gle/LgZdeZfkKwTZwS1J9"
const objectivePoints = [
  "Latest trends and challenges in Cyber Security",
  "Applications of Artificial Intelligence and Machine Learning in digital security",
  "Research collaboration among scholars and professionals",
  "Emerging cyber threats and preventive security measures",
  "Innovative solutions for secure digital environments",
]

const themes = [
  "Emerging Trends and Challenges in Cyber Security",
  "Ethical Hacking, Penetration Testing and Vulnerability Assessment",
  "Digital Forensics and Cyber Crime Investigation",
  "Applications of Artificial Intelligence in Modern Technologies",
  "Machine Learning Algorithms and Predictive Data Analytics",
  "Deep Learning Techniques and Intelligent Systems",
  "AI-driven Automation and Smart Decision-Making Systems",
  "Artificial Intelligence and Machine Learning for Cyber Threat Detection",
  "AI-based Fraud Detection and Risk Management",
  "Blockchain & Cryptocurrency Security",
  "Future Trends in Intelligent Cyber Defense and Smart Security Systems",
]

const getInitials = (name) =>
  name
    .replace(/\b(Dr|Mr|Mrs|Ms|Smt)\.?\s*/gi, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("")

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand">
          <img
            src="/assets/college-logo.png"
            alt="MLK College Logo"
            className="college-logo"
          />
          <div>
            <p className="brand-title">MLK College National Seminar 2026</p>
            <p className="brand-subtitle">Balrampur, Uttar Pradesh</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#objective">Objective</a>
          <a href="#themes">Themes</a>
          <a href="#speakers">Advisory</a>
          <a href="#committee">Committee</a>
          <a href="#dates">Important Dates</a>
          <a href="#register">Registration</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <img
          src="/assets/college-photo.jpg"
          alt="MLK College Campus"
          className="hero-bg-image"
        />
        <p className="kicker">National Seminar</p>
        <h1>Latest Trends in Cyber Security and AI/ML</h1>
        <p className="hero-line">
          Organized by Maharani Lal Kunwari (P.G.) College, Balrampur
        </p>
        <div className="hero-cta">
          <a href={formLink} target="_blank" rel="noreferrer" className="button-primary">
            Register Now
          </a>
          <a href="#about" className="button-secondary">
            Explore Details
          </a>
        </div>
      </section>

      <section id="about" className="panel">
        <h2>About the Seminar</h2>
        <p>
          In the present digital era, rapid advancements in information technology, cloud computing,
          and global connectivity have transformed the way individuals, organizations, and governments
          operate. While these developments have enhanced communication, efficiency, and innovation,
          they have also created new vulnerabilities in cyberspace. Cyber threats such as ransomware,
          phishing, identity theft, data breaches, and malware are increasing rapidly, affecting
          individuals, businesses, and critical infrastructures. As a result, cyber security has become
          essential for protecting information systems, safeguarding sensitive data, and ensuring secure
          digital services.
        </p>
        <p>
          At the same time, emerging technologies such as Artificial Intelligence (AI) and Machine
          Learning (ML) are playing a significant role in strengthening cybersecurity by enabling
          intelligent threat detection, predictive analysis, and automated security responses. With the
          growing use of digital platforms and smart technologies, there is a strong need for advanced
          and intelligent security systems. The National Seminar on “Latest Trends in Cyber Security and
          A.I. & M.L. (LTSCAIML-2026)” aims to provide a platform for academicians, researchers,
          industry experts, and students to share knowledge, discuss emerging challenges, and explore
          innovative solutions for building a secure and intelligent digital ecosystem.
        </p>
      </section>

      <section id="objective" className="panel panel-accent">
        <h2>Objective of the Seminar</h2>
        <p>
          The objective of the seminar is to create awareness and promote academic discussion on recent
          developments in Cyber Security, Artificial Intelligence, and Machine Learning. It aims to
          provide a platform for researchers, academicians, and professionals to share ideas and
          innovative solutions for addressing modern cyber challenges.
        </p>
        <ul>
          {objectivePoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section id="themes" className="panel">
        <h2>Themes and Sub-Themes</h2>
        <ol>
          {themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ol>
      </section>

      <section id="speakers" className="panel">
        <h2>National Advisory Committee (External)</h2>
        <div className="grid speakers-grid">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="speaker-card profile-card">
              {speaker.image ? (
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="speaker-photo"
                />
              ) : (
                <div className="avatar">{getInitials(speaker.name)}</div>
              )}
              <h3>{speaker.name}</h3>
              <p className="profile-designation">{speaker.designation}</p>
              <p><strong>Department:</strong> {speaker.department}</p>
              <p><strong>Institution:</strong> {speaker.institution}</p>
              <p><strong>Location:</strong> {speaker.location}</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${speaker.email}`}>{speaker.email}</a>
              </p>
              <p className="profile-heading"><strong>Academic Qualification</strong></p>
              <ul className="profile-list">
                {speaker.qualifications.map((item) => (
                  <li key={`${speaker.name}-q-${item}`}>{item}</li>
                ))}
              </ul>
              <p className="profile-heading"><strong>Research Areas</strong></p>
              <ul className="profile-list">
                {speaker.researchAreas.map((item) => (
                  <li key={`${speaker.name}-r-${item}`}>{item}</li>
                ))}
              </ul>
              {speaker.experience && (
                <>
                  <p className="profile-heading"><strong>Professional Experience</strong></p>
                  <ul className="profile-list">
                    {speaker.experience.map((item) => (
                      <li key={`${speaker.name}-e-${item}`}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {speaker.achievements && (
                <>
                  <p className="profile-heading"><strong>Achievements</strong></p>
                  <ul className="profile-list">
                    {speaker.achievements.map((item) => (
                      <li key={`${speaker.name}-a-${item}`}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="committee" className="panel panel-accent">
        <h2>Organizing Committee</h2>
        <div className="grid committee-grid">
          {committee.map((member) => (
            <article key={member.name} className="committee-card">
              <h3>{member.name}</h3>
              <p>{member.post}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="dates" className="panel">
        <h2>Important Dates</h2>
        <div className="timeline">
          {dates.map((item) => (
            <div key={item.label} className="timeline-item">
              <p className="timeline-label">{item.label}</p>
              <p className="timeline-value">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="register" className="panel panel-accent">
        <h2>Registration</h2>
        <p>
          Participation is open for UG/PG students, research scholars, and faculty members.
          Submit your details through the registration form and include your payment transaction ID.
        </p>
        <div className="register-box">
          <img
            src="/assets/google-form-qr.png.jpeg"
            alt="Google Form QR Code"
            className="qr-image"
          />
          <div className="register-content">
            <p className="register-link-label">Google Form Link:</p>
            <a href={formLink} target="_blank" rel="noreferrer" className="form-link">
              {formLink}
            </a>
            <div className="hero-cta register-actions">
              <a className="button-primary" href={formLink} target="_blank" rel="noreferrer">
                Fill Registration Form
              </a>
              <a className="button-secondary dark-outline" href={formLink} target="_blank" rel="noreferrer">
                Open Form in New Tab
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="panel">
        <h2>Contact Information</h2>
        <div className="contact-grid">
          <p>
            <strong>Address:</strong> Maharani Lal Kunwari (P.G.) College, Tulsipur Road, Balrampur, Uttar Pradesh 271201
          </p>
          <p>
            <strong>Email:</strong> mlk.college1955@gmail.com
          </p>
          <p>
            <strong>Mobile:</strong> +91-97239-73715
          </p>
          <p>
            <strong>Phone:</strong> 05263-234139
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>MLK College | National Seminar 2026 | Department of Computer Science</p>
      </footer>
    </div>
  )
}

export default App
