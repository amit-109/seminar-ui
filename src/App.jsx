const speakers = [
  { name: "Dr. A. K. Sharma", role: "Keynote Speaker, Cyber Forensics", initials: "AS" },
  { name: "Prof. Neha Verma", role: "AI Governance and Ethics", initials: "NV" },
  { name: "Mr. Raghav Singh", role: "SOC Lead, Threat Intelligence", initials: "RS" },
  { name: "Dr. Fatima Khan", role: "Machine Learning Security", initials: "FK" },
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
          <a href="#speakers">Speakers</a>
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
        <h2>Invited Speakers</h2>
        <div className="grid speakers-grid">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="speaker-card">
              <div className="avatar">{speaker.initials}</div>
              <h3>{speaker.name}</h3>
              <p>{speaker.role}</p>
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
