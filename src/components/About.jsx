import { profileData } from '../data/profile';

export default function About() {
  const { education, currentFocus } = profileData;

  return (
    <section className="section-wrapper" id="about" aria-labelledby="about-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Background & Direction</span>
          <h2 id="about-heading" className="section-title">
            About & Academic Foundation
          </h2>
          <p className="section-subtitle">
            An engineering journey combining rigorous computer science fundamentals, data-driven
            modeling, and practical application building.
          </p>
        </div>

        <div className="about-layout">
          {/* Main Biography Column */}
          <div className="about-bio-column">
            <h3 className="about-column-heading">Engineering Narrative</h3>
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

            {/* Current Active Exploration */}
            <div className="about-learning-card">
              <div className="learning-card-header">
                <span className="learning-pulse-dot" />
                <h4 className="learning-card-title">Current Technical Focus</h4>
              </div>
              <ul className="learning-items-list">
                {currentFocus.map((item, idx) => (
                  <li key={idx} className="learning-item">
                    <span className="learning-item-bullet">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education & Academic Column */}
          <div className="about-education-column">
            <h3 className="about-column-heading">Academic Record</h3>

            <div className="education-card">
              <div className="education-header">
                <div className="education-badge">B.Tech</div>
                <div>
                  <h4 className="education-degree">{education.degree}</h4>
                  <span className="education-spec">{education.specialization}</span>
                </div>
              </div>

              <div className="education-details">
                <div className="edu-detail-row">
                  <span className="edu-label">Institution:</span>
                  <span className="edu-value edu-placeholder">{education.institution}</span>
                </div>
                <div className="edu-detail-row">
                  <span className="edu-label">Academic Status:</span>
                  <span className="edu-value">{education.year}</span>
                </div>
                <div className="edu-detail-row">
                  <span className="edu-label">Location:</span>
                  <span className="edu-value">{education.location}</span>
                </div>
              </div>

              {/* Coursework Focus Areas */}
              <div className="education-coursework">
                <span className="coursework-label">Core Coursework & Foundations:</span>
                <div className="coursework-tags">
                  {education.focusAreas.map((area) => (
                    <span key={area} className="tech-tag">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="education-note">
                <span className="edu-hint">
                  College details and graduation date can be customized in <code className="inline-code">src/data/profile.js</code>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
