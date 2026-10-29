import { certificationsData } from '../data/certifications';

export default function Certifications() {
  return (
    <section className="section-wrapper" id="certifications" aria-labelledby="certifications-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Continuous Learning</span>
          <h2 id="certifications-heading" className="section-title">
            Certifications & Specialized Programs
          </h2>
          <p className="section-subtitle">
            Structured coursework and professional learning programs in artificial intelligence,
            responsible machine learning, data analytics, and modern full-stack development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <article key={cert.id} className="certification-card">
              <div className="cert-top-row">
                {/* Tasteful Text-based Issuer Badge */}
                <div className="cert-issuer-badge">
                  <span className="issuer-monogram">{cert.issuerBadge || 'CERT'}</span>
                  <span className="issuer-name">{cert.issuer}</span>
                </div>

                {/* Optional Issue Date */}
                {cert.issueDate ? (
                  <span className="cert-date-badge">{cert.issueDate}</span>
                ) : (
                  <span className="cert-date-badge cert-date-unspecified">
                    Date Unspecified
                  </span>
                )}
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-description">{cert.description}</p>

              {/* Covered Skills */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="cert-skills-list" aria-label="Key topics">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Credential Link or Clean State */}
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
                      strokeWidth="2"
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
                      strokeWidth="2"
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
    </section>
  );
}
