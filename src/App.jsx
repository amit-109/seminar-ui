import { useEffect, useMemo, useState } from "react"

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
//   { label: "Abstract Submission Deadline", value: "March 15, 2026" },
//   { label: "Acceptance Notification", value: "March 24, 2026" },
  { label: "Final Paper Submission", value: "March 30, 2026" },
  { label: "Seminar Date", value: "April 6 & 7 2026 (Hybrid Mode)" },
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

const tickerItems = [
  "Live Topic: AI-driven Threat Detection",
  "Workshop Focus: Ethical Hacking and VAPT",
  "Research Track: Blockchain Security",
  "Special Session: Digital Forensics",
]

const aiTracks = [
  { title: "Threat Detection Models", detail: "ML models for anomaly and malware behavior detection.", level: 92 },
  { title: "Fraud Intelligence", detail: "AI pipelines for financial and identity fraud prevention.", level: 86 },
  { title: "SOC Automation", detail: "Smart triage and response orchestration with AI agents.", level: 88 },
  { title: "Secure GenAI", detail: "Prompt hardening, abuse detection, and policy guardrails.", level: 84 },
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
  const seminarDate = useMemo(() => new Date("2026-04-06T09:00:00+05:30"), [])
  const [now, setNow] = useState(new Date())
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showRegisterDialog, setShowRegisterDialog] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setShowRegisterDialog(true)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - window.innerHeight
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const remaining = Math.max(0, seminarDate.getTime() - now.getTime())
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((remaining / (1000 * 60)) % 60)

  return (
    <div className="site-shell">
      {showRegisterDialog && (
        <div className="dialog-backdrop" role="dialog" aria-modal="true" aria-label="Seminar registration">
          <div className="register-dialog">
            <h3>National Seminar 2026</h3>
            <p>Registrations are open for the seminar on Latest Trends in Cyber Security and AI/ML.</p>
            <a href={formLink} target="_blank" rel="noreferrer" className="button-primary dialog-button blink-cta">
              Register Now
            </a>
            <button
              type="button"
              className="dialog-close"
              onClick={() => setShowRegisterDialog(false)}
            >
              Continue to Website
            </button>
          </div>
        </div>
      )}

      <div className="scroll-progress">
        <span style={ { width: `${scrollProgress}%` } } />
      </div>
      <header className="topbar">
        <div className="brand">
          <img
            src="/assets/college-logo.png"
            alt="MLK College Logo"
            className="college-logo"
          />
          <div>
            <p className="brand-title">MLK (P.G.) College National Seminar 2026</p>
            <p className="brand-subtitle">Balrampur, Uttar Pradesh</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#objective">Objective</a>
          <a href="#themes">Themes</a>
          <a href="#ai-lab">AI Lab</a>
          <a href="#speakers">Invited Guest Speakers
          </a>
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
        <div className="hero-grid-overlay" aria-hidden="true" />
        <p className="kicker">National Seminar</p>
        <h1>
          Latest Trends in <span className="cyber-highlight">Cyber Security</span> and{" "}
          <span className="cyber-highlight">AI/ML</span>
        </h1>
        <p className="hero-line">
          Organized by B.C.A Department of Maharani Lal Kunwari (P.G.) College, Balrampur
        </p>
        <div className="hero-cta">
          <a href={ formLink } target="_blank" rel="noreferrer" className="button-primary">
            Register Now
          </a>
          <a href="#about" className="button-secondary">
            Explore Details
          </a>
        </div>
        <div className="countdown-strip" role="status" aria-live="polite">
          <p className="countdown-title">Seminar Starts In</p>
          <div className="countdown-grid">
            <div className="countdown-chip">
              <span>{days}</span>
              <small>Days</small>
            </div>
            <div className="countdown-chip">
              <span>{hours}</span>
              <small>Hours</small>
            </div>
            <div className="countdown-chip">
              <span>{minutes}</span>
              <small>Minutes</small>
            </div>
          </div>
        </div>
      </section>

      <section className="cyber-ticker" aria-label="Seminar highlights">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={`${item}-${idx}`} className="ticker-item">
              {item}
            </span>
          ))}
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
          { objectivePoints.map((point) => (
            <li key={ point }>{ point }</li>
          )) }
        </ul>
      </section>

      <section id="themes" className="panel">
        <h2>Themes and Sub-Themes</h2>
        <ol>
          { themes.map((theme) => (
            <li key={ theme }>{ theme }</li>
          )) }
        </ol>
      </section>

      <section id="ai-lab" className="panel panel-ai">
        <h2>AI Innovation Lab</h2>
        <p>
          A focused showcase on how AI and ML can strengthen cyber defense through intelligent monitoring,
          predictive analytics, and automated response strategies.
        </p>
        <div className="ai-grid">
          {aiTracks.map((track) => (
            <article key={track.title} className="ai-card">
              <h3>{track.title}</h3>
              <p>{track.detail}</p>
              <div className="ai-meter" role="img" aria-label={`${track.title} readiness ${track.level} percent`}>
                <span style={{ width: `${track.level}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="speakers" className="panel">
        <h2>Invited Guest Speakers
        </h2>
        <div className="grid speakers-grid">
          { speakers.map((speaker) => (
            <article key={ speaker.name } className="speaker-card profile-card">
              { speaker.image ? (
                <img
                  src={ speaker.image }
                  alt={ speaker.name }
                  className="speaker-photo"
                />
              ) : (
                <div className="avatar">{ getInitials(speaker.name) }</div>
              ) }
              <h3>{ speaker.name }</h3>
              <p className="profile-designation">{ speaker.designation }</p>
              <p><strong>Department:</strong> { speaker.department }</p>
              <p><strong>Institution:</strong> { speaker.institution }</p>
              <p><strong>Location:</strong> { speaker.location }</p>
              <p>
                <strong>Email:</strong>{ " " }
                <a href={ `mailto:${speaker.email}` }>{ speaker.email }</a>
              </p>
              <p className="profile-summary">
                <strong>Research:</strong> { speaker.researchAreas.slice(0, 3).join(", ") }
              </p>
            </article>
          )) }
        </div>
      </section>

      <section id="committee" className="panel panel-accent">
        <h2>Organizing Committee</h2>
        <div className="grid committee-grid">
          { committee.map((member) => (
            <article key={ member.name } className="committee-card">
              <h3>{ member.name }</h3>
              <p>{ member.post }</p>
            </article>
          )) }
        </div>
      </section>

      <section id="dates" className="panel">
        <h2>Important Dates</h2>
        <div className="timeline">
          { dates.map((item) => (
            <div key={ item.label } className="timeline-item">
              <p className="timeline-label">{ item.label }</p>
              <p className="timeline-value">{ item.value }</p>
            </div>
          )) }
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
            <a href={ formLink } target="_blank" rel="noreferrer" className="form-link">
              { formLink }
            </a>
            <div className="hero-cta register-actions">
              <a className="button-primary blink-cta" href={ formLink } target="_blank" rel="noreferrer">
                Fill Registration Form
              </a>
              <a className="button-secondary dark-outline" href={ formLink } target="_blank" rel="noreferrer">
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
            <strong>Address:</strong> Department of BCA, Maharani Lal Kunwari (P.G.) College, Tulsipur Road, Balrampur, Uttar Pradesh 271201
          </p>
          <p>
            <strong>Email:</strong> itcsaiml.26@gmail.com , mlk.college1955@gmail.com
          </p>
          <p>
            <strong>Mobile:</strong> 8574759591 , 8858115835 , 9450512588 
          </p>
          <p>
            <strong>Phone:</strong> 05263-234139
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>MLK (P.G.) College | National Seminar 2026 | B.C.A Department</p>
      </footer>
    </div>
  )
}

export default App
