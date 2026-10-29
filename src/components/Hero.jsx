import { profileData } from '../data/profile';

export default function Hero() {
  const { education } = profileData;

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-headline">
      <div className="container hero-grid">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          {/* Status Beacon Pill */}
          <div className="status-pill status-available hero-status-pill">
            <span className="status-dot status-dot-pulse" aria-hidden="true" />
            <span>✦ {profileData.status} • Kolkata / Remote</span>
          </div>

          {/* Hero Headline */}
          <h1 id="hero-headline" className="hero-headline">
            Building intelligent <span className="title-accent">systems</span> into useful software.
          </h1>

          {/* Role & Academic Badges */}
          <div className="hero-role-bar">
            <span className="role-name">{profileData.name}</span>
            <span className="role-divider" aria-hidden="true">|</span>
            <span className="role-badge role-badge-primary">AI/ML & Software Developer</span>
            <span className="role-badge role-badge-secondary">3rd Year B.Tech CS (Data Science)</span>
          </div>

          {/* Concise, Honest Introduction */}
          <p className="hero-bio">
            I am <strong className="text-highlight">{profileData.name}</strong>, a third-year B.Tech
            Computer Science student specializing in <strong className="text-highlight">Data Science</strong> based
            in Kolkata, India. I focus on Python, machine learning fundamentals, and modern full-stack development
            to transform complex models into reliable, everyday applications.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Projects</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a href="#contact" className="btn btn-secondary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L1 7" />
              </svg>
              <span>Contact Me</span>
            </a>

            <a
              href={profileData.socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label={`GitHub profile for ${profileData.name}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          {/* Hero Telemetry Bento Cards */}
          <div className="hero-telemetries" aria-label="Key Academic & Project Signals">
            <div className="telemetry-card">
              <div className="telemetry-num">
                {education.gpa || "8.54 / 10"}
              </div>
              <div className="telemetry-card-desc">B.Tech CSE (Data Science) Cumulative Score</div>
            </div>

            <div className="telemetry-card">
              <div className="telemetry-num">
                5 <span>Programs</span>
              </div>
              <div className="telemetry-card-desc">Google, IBM, Cisco, Deloitte & Udemy Credentials</div>
            </div>

            <div className="telemetry-card">
              <div className="telemetry-num">
                Python <span>+ ML</span>
              </div>
              <div className="telemetry-card-desc">Intelligent Systems & Full-Stack Architectures</div>
            </div>
          </div>
        </div>

        {/* Right Column: Celestial Orrery Portal with Circular Photo */}
        <div className="hero-visual">
          <div className="orrery-stage">
            {/* Subtle Celestial Orbit Rings */}
            <div className="orrery-ring-outer" aria-hidden="true" />
            <div className="orrery-ring-middle" aria-hidden="true" />
            <div className="orrery-node orrery-node-1" aria-hidden="true">✦</div>
            <div className="orrery-node orrery-node-2" aria-hidden="true"></div>

            {/* Circular Profile Photo Portal */}
            <div className="hero-avatar-portal">
              <img
                src="/images/profile.jpg"
                alt={`Portrait of ${profileData.name}`}
                className="hero-profile-photo"
                loading="eager"
              />
            </div>

            {/* Floating Location Beacon - Placed Beside the Orbit, Not Over Face */}
            <div className="solar-badge-floating">
              <span className="badge-sparkle" aria-hidden="true">✨</span>
              <div className="badge-text-wrap">
                <span className="badge-sub">Based in</span>
                <span className="badge-main">{profileData.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
