import { profileData } from '../data/profile';

export default function About() {
  const { education, currentFocus } = profileData;

  const corePillars = [
    {
      icon: "💻",
      title: "Full-Stack Systems",
      desc: "Responsive React frontends, lightweight Python Flask services, and persistent SQLite relational data layers."
    },
    {
      icon: "📊",
      title: "Data Science & Analysis",
      desc: "Exploratory data analysis, feature preparation, SQL schemas, and visual insight extraction."
    },
    {
      icon: "🧠",
      title: "AI & Machine Learning",
      desc: "Foundational ML models, evaluation metrics, supervised learning, and AI application pipeline design."
    },
    {
      icon: "⚖️",
      title: "Responsible AI & Ethics",
      desc: "Bias mitigation, transparency, data privacy, and ethical development frameworks in intelligent software."
    }
  ];

  return (
    <section className="section-wrapper" id="about" aria-labelledby="about-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Waypoint • About Me</span>
          <h2 id="about-heading" className="section-title">
            About & Academic Foundation
          </h2>
          <p className="section-subtitle">
            Bridging machine learning fundamentals with dependable, intuitive software systems.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative Lead & 4 Core Pillars */}
          <div className="about-narrative-column">
            <div className="about-narrative-lead">
              A computer science student combining <span className="text-highlight">machine learning fundamentals</span>, analytical data processing, and <span className="text-highlight">practical web engineering</span>.
            </div>

            <div className="about-text-content">
              <p>
                I am a third-year Computer Science student specializing in Data Science based in Kolkata,
                India. My primary technical interest lies at the intersection of <strong className="text-highlight">practical artificial intelligence</strong> and <strong className="text-highlight">robust software systems</strong>.
              </p>
              <p>
                Rather than treating machine learning as purely abstract math or isolated Jupyter
                experiments, I care about how intelligent components integrate into real-world software—handling
                user inputs, interacting with APIs, and delivering dependable outcomes.
              </p>
              <p>
                I am actively seeking <strong className="text-highlight">internships in AI/ML, Data Science, and Software Development</strong> where
                I can contribute to real codebases, collaborate with experienced engineers, and continuously
                sharpen my problem-solving abilities.
              </p>
            </div>

            {/* 4 Core Pillars Bento Grid */}
            <div className="about-pillars-grid">
              {corePillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon-orbit" aria-hidden="true">{pillar.icon}</div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mission Dossier Card & Active Focus */}
          <div className="about-sidebar-column">
            {/* Dossier Card */}
            <div className="mission-dossier-card">
              <div className="dossier-header">
                <div>
                  <h3 className="dossier-heading">Profile Overview</h3>
                  <span className="dossier-subheading">Academic Information</span>
                </div>
                <span className="dossier-status-stamp">OPEN TO WORK</span>
              </div>

              <ul className="dossier-list">
                <li className="dossier-item">
                  <span className="dossier-label">Student Name</span>
                  <span className="dossier-val">{profileData.name}</span>
                </li>
                <li className="dossier-item">
                  <span className="dossier-label">Degree Mission</span>
                  <span className="dossier-val">{education.degree}</span>
                </li>
                <li className="dossier-item">
                  <span className="dossier-label">Specialization</span>
                  <span className="dossier-val accent-mint">{education.specialization}</span>
                </li>
                <li className="dossier-item">
                  <span className="dossier-label">Cumulative Score</span>
                  <span className="dossier-val accent-gold">{education.gpa || "8.54 / 10"} CGPA</span>
                </li>
                <li className="dossier-item">
                  <span className="dossier-label">Academic Status</span>
                  <span className="dossier-val">{education.year}</span>
                </li>
                <li className="dossier-item">
                  <span className="dossier-label">Base Location</span>
                  <span className="dossier-val">{education.location}</span>
                </li>
              </ul>
            </div>

            {/* Active Learning Focus Card */}
            <div className="curiosity-quote-card">
              <div className="curiosity-icon">🪐</div>
              <div>
                <h4 className="curiosity-title">Current Technical Focus</h4>
                <ul className="curiosity-items-list">
                  {currentFocus.map((item, idx) => (
                    <li key={idx} className="curiosity-item">
                      <span className="curiosity-bullet">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
