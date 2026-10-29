import { useState } from 'react';
import { profileData } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { socialLinks } = profileData;

  const handleCopyEmail = () => {
    if (socialLinks.email?.address) {
      navigator.clipboard.writeText(socialLinks.email.address).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      });
    }
  };

  return (
    <section className="section-wrapper" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Initiate Contact</span>
          <h2 id="contact-heading" className="section-title">
            Let's Build Something Together
          </h2>
          <p className="section-subtitle">
            Open to AI/ML, Data Science, and Software Development internship opportunities.
            Feel free to reach out directly via email or connect across developer platforms.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-primary-column">
            <span className="contact-kicker">Direct Communication</span>
            <h3 className="contact-headline">
              Ready to discuss projects, research, or internship opportunities?
            </h3>
            <p className="contact-desc">
              Whether you are looking for an inquisitive student engineer to join your engineering team
              or want to discuss Python, machine learning workflows, or web systems, my inbox is always open.
            </p>

            {/* Email Actions */}
            {socialLinks.email?.url && (
              <div className="contact-email-box">
                <a
                  href={socialLinks.email.url}
                  className="btn btn-primary"
                  aria-label="Send email to Shubhatithi Deb"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L1 7" />
                  </svg>
                  <span>Compose Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  aria-label="Copy email address to clipboard"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Address'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Social Channels List */}
          <div className="contact-links-column">
            <span className="contact-column-label">Profiles & Resources</span>

            <div className="contact-links-list">
              {/* GitHub */}
              {socialLinks.github?.url && (
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="channel-icon-box">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">{socialLinks.github.label}</span>
                    <span className="channel-handle">@{socialLinks.github.username}</span>
                  </div>
                  <span className="channel-arrow">&rarr;</span>
                </a>
              )}

              {/* LinkedIn */}
              {socialLinks.linkedin?.url && (
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="channel-icon-box">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">{socialLinks.linkedin.label}</span>
                    <span className="channel-handle">Profile & Endorsements</span>
                  </div>
                  <span className="channel-arrow">&rarr;</span>
                </a>
              )}

              {/* Résumé (only if url is provided) */}
              {socialLinks.resume?.url && (
                <a
                  href={socialLinks.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="channel-icon-box">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <span className="channel-name">{socialLinks.resume.label}</span>
                    <span className="channel-handle">PDF Document</span>
                  </div>
                  <span className="channel-arrow">&rarr;</span>
                </a>
              )}
            </div>

            <p className="contact-helper-text">
              Looking to customize links? All contact and profile handles are centrally configured in{' '}
              <code className="inline-code">src/data/profile.js</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
