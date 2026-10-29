export default function ProjectCard({ project, isFeatured = false }) {
  const isCompleted = project.status === 'Completed';

  // Render an editorial architecture simulation stage when no screenshot image is provided
  const renderVisual = () => {
    if (project.screenshot) {
      return (
        <div className="project-media-wrapper">
          <img
            src={project.screenshot}
            alt={`Screenshot of ${project.title}`}
            className="project-screenshot"
            loading="lazy"
          />
        </div>
      );
    }

    // CineMatch custom architecture simulation stage
    if (project.id === 'cinematch') {
      return (
        <div className="project-abstract-media project-cinematch-visual" aria-hidden="true">
          <div className="simulation-box">
            <div className="simulation-header">
              <div className="simulation-title">
                <span>⚡ CineMatch Architecture</span>
              </div>
              <span className="simulation-badge">Active DB Pipeline</span>
            </div>

            <div className="pipeline-flow">
              <div className="flow-step">
                <div className="flow-icon">🎬</div>
                <div className="flow-meta">
                  <div className="flow-name">1. OMDb API Title Search</div>
                  <div className="flow-detail">Real-time media search & metadata ingestion</div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-icon">⚛️</div>
                <div className="flow-meta">
                  <div className="flow-name">2. React Client Watchlist</div>
                  <div className="flow-detail">Status tagging (to-watch, watched) & UI state</div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-icon">🌶️</div>
                <div className="flow-meta">
                  <div className="flow-name">3. Flask REST Microservice</div>
                  <div className="flow-detail">Endpoint routing & payload serialization</div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-icon">🗄️</div>
                <div className="flow-meta">
                  <div className="flow-name">4. SQLite Relational Storage</div>
                  <div className="flow-detail">Persistent local database record synchronization</div>
                </div>
              </div>
            </div>

            <div className="simulation-footer-note">
              ✦ End-to-end client-server architecture with persistent state
            </div>
          </div>
        </div>
      );
    }

    // In-Progress AI Project ML workflow pipeline stage
    return (
      <div className="project-abstract-media project-ai-visual" aria-hidden="true">
        <div className="simulation-box">
          <div className="simulation-header">
            <div className="simulation-title">
              <span>🧠 AI Engineering Pipeline</span>
            </div>
            <span className="simulation-badge active">Under Exploration</span>
          </div>

          <div className="pipeline-flow">
            <div className="flow-step">
              <div className="flow-icon">📑</div>
              <div className="flow-meta">
                <div className="flow-name">1. Problem Formulation & Data</div>
                <div className="flow-detail">Dataset curation & pipeline requirements definition</div>
              </div>
            </div>

            <div className="flow-step">
              <div className="flow-icon">⚙️</div>
              <div className="flow-meta">
                <div className="flow-name">2. Feature Pipeline & Prep</div>
                <div className="flow-detail">Cleaning, extraction, and validation algorithms</div>
              </div>
            </div>

            <div className="flow-step">
              <div className="flow-icon">🔬</div>
              <div className="flow-meta">
                <div className="flow-name">3. Model Experimentation</div>
                <div className="flow-detail">Architecture exploration & evaluation benchmarking</div>
              </div>
            </div>

            <div className="flow-step">
              <div className="flow-icon">🔌</div>
              <div className="flow-meta">
                <div className="flow-name">4. Software Client Integration</div>
                <div className="flow-detail">REST API exposure for seamless client consumption</div>
              </div>
            </div>
          </div>

          <div className="simulation-footer-note">
            ✦ Model benchmarking & evaluation pipelines in active development
          </div>
        </div>
      </div>
    );
  };

  return (
    <article
      className={`project-card ${isFeatured ? 'project-card-featured' : ''} ${
        !isCompleted ? 'project-card-in-progress' : ''
      }`}
    >
      {/* Left: Card Content */}
      <div className="project-content">
        <div className="project-header">
          <div className="project-timeline-badge">
            {isCompleted ? '📅 Completed • Full-Stack Project' : '📅 Active Exploration • AI Engineering'}
          </div>
          <h3 className="project-title">{project.title}</h3>
          {project.tagline && <p className="project-tagline">{project.tagline}</p>}
        </div>

        <p className="project-description">{project.description}</p>

        {/* Feature Highlights with Star Bullets */}
        {project.features && project.features.length > 0 && (
          <div className="project-features">
            <span className="features-heading">Implemented Scope</span>
            <ul className="features-list">
              {project.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <span className="feature-star" aria-hidden="true">✦</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies List */}
        <div className="project-tech-wrapper" aria-label="Technologies used">
          <div className="tech-tags-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label={`View source code for ${project.title} on GitHub`}
            >
              <svg
                width="15"
                height="15"
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
              <span>Repository</span>
            </a>
          ) : (
            <span className="project-action-placeholder">
              <span className="placeholder-dot" />
              <span>Repo available upon release</span>
            </span>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label={`Open live demo of ${project.title}`}
            >
              <span>Live Demo</span>
              <svg
                width="14"
                height="14"
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
          )}

          {project.detailsUrl && (
            <a href={project.detailsUrl} className="btn btn-ghost btn-sm">
              <span>Read Case Study</span>
            </a>
          )}

          <span className="project-verified-status">
            ✓ Implementation Verified
          </span>
        </div>
      </div>

      {/* Right: Architecture Simulation Stage */}
      <div className="project-visual-column">
        {renderVisual()}
      </div>
    </article>
  );
}
