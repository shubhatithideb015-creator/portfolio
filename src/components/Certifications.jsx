import { certificationsData } from '../data/certifications';
import { profileData } from '../data/profile';

export default function Certifications() {
  const { education } = profileData;

  return (
    <section className="section-wrapper" id="education" aria-labelledby="education-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Waypoint • Milestones & Academy</span>
          <h2 id="education-heading" className="section-title">
            Education & Certifications
          </h2>
          <p className="section-subtitle">
            Academic foundation, coursework distinctions, and verified engineering credentials.
          </p>
        </div>

        <div className="milestones-layout">
          {/* Left Column: Education Timeline Track */}
          <div className="timeline-track">
            <div className="timeline-track-header">
              <span className="timeline-track-icon">🎓</span>
              <h3 className="timeline-track-title">Academic Journey</h3>
            </div>

            <div className="timeline-node">
              <div className="timeline-marker" aria-hidden="true">🪐</div>
              <div className="timeline-card">
                <span className="timeline-period">{education.year}</span>
                <h4 className="timeline-degree">{education.degree}</h4>
                <div className="timeline-spec">{education.specialization}</div>
                <div className="timeline-institution">{education.institution}</div>

                <div className="timeline-score-badge">
                  <span className="score-icon">🌟</span>
                  <span>Cumulative Score:</span>
                  <strong className="score-val">{education.gpa || "8.54 / 10"} CGPA</strong>
                </div>

                <div className="timeline-coursework">
                  <span className="coursework-title">Foundational Coursework:</span>
                  <div className="coursework-pills">
                    {education.focusAreas.map((area) => (
                      <span key={area} className="tech-pill">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="timeline-note">
                  Location: {education.location} • Institution details editable in <code className="inline-code">src/data/profile.js</code>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Certifications Constellation */}
          <div className="certs-panel">
            <div className="certs-header-box">
              <span className="certs-header-badge">🏅</span>
              <div>
                <h3 className="certs-header-title">Verified Certifications</h3>
                <p className="certs-header-meta">Professional Coursework & Technical Programs</p>
              </div>
            </div>

            <div className="certs-grid">
              {certificationsData.map((cert) => (
                <article key={cert.id} className="certification-card">
                  <div className="cert-top-row">
                    <div className="cert-issuer-badge">
                      <span className="issuer-monogram">{cert.issuerBadge || 'CERT'}</span>
                      <span className="issuer-name">{cert.issuer}</span>
                    </div>

                    {cert.issueDate ? (
                      <span className="cert-date-badge">{cert.issueDate}</span>
                    ) : (
                      <span className="cert-date-badge cert-date-unspecified">
                        Date Unspecified
                      </span>
                    )}
                  </div>

                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-description">{cert.description}</p>

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="cert-skills-list" aria-label="Key topics">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="tech-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="cert-footer">
                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-verify-link"
                        aria-label={`Verify ${cert.title} credential`}
                      >
                        <span>Verify Credential</span>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ) : (
                      <span className="cert-verified-state">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span>Coursework Completed</span>
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
