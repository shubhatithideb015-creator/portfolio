export default function ProjectCard({ project, isFeatured = false }) {
  const isCompleted = project.status === 'Completed';

  // Render an editorial SVG visual placeholder when no screenshot image is provided
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

    // CineMatch custom editorial blueprint
    if (project.id === 'cinematch') {
      return (
        <div className="project-abstract-media project-cinematch-visual" aria-hidden="true">
          <div className="abstract-card-ui">
            <div className="abstract-ui-bar">
              <span className="abstract-circle-dot red" />
              <span className="abstract-circle-dot yellow" />
              <span className="abstract-circle-dot green" />
              <span className="abstract-ui-title">api.omdb.org / watchlist.db</span>
            </div>
            <div className="abstract-ui-body">
              <div className="abstract-film-strip">
                <div className="abstract-poster">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="m9 8 6 4-6 4Z" />
                  </svg>
                </div>
                <div className="abstract-meta-lines">
                  <div className="abstract-line short" />
                  <div className="abstract-line medium" />
                  <div className="abstract-badge-row">
                    <span className="abstract-mini-tag">React</span>
                    <span className="abstract-mini-tag">Flask</span>
                    <span className="abstract-mini-tag">SQLite</span>
                  </div>
                </div>
              </div>
              <div className="abstract-watchlist-rows">
                <div className="abstract-row checked">
                  <span className="abstract-check">✓</span>
                  <span className="abstract-row-text">Search titles & metadata</span>
                </div>
                <div className="abstract-row checked">
                  <span className="abstract-check">✓</span>
                  <span className="abstract-row-text">SQLite persistence</span>
                </div>
                <div className="abstract-row checked">
                  <span className="abstract-check">✓</span>
                  <span className="abstract-row-text">Custom watch status</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // In-Progress AI Project blueprint
    return (
      <div className="project-abstract-media project-ai-visual" aria-hidden="true">
        <div className="abstract-card-ui">
          <div className="abstract-ui-bar">
            <span className="abstract-circle-dot violet" />
            <span className="abstract-ui-title">pipeline: data_prep &rarr; model &rarr; eval</span>
          </div>
          <div className="abstract-pipeline-body">
            <div className="pipeline-nodes">
              <div className="pipeline-node">
                <span className="pipeline-node-icon">&bull;</span>
                <span className="pipeline-node-label">Dataset</span>
              </div>
              <span className="pipeline-arrow">&rarr;</span>
              <div className="pipeline-node active">
                <span className="pipeline-node-icon">&bull;</span>
                <span className="pipeline-node-label">Model Training</span>
              </div>
              <span className="pipeline-arrow">&rarr;</span>
              <div className="pipeline-node">
                <span className="pipeline-node-icon">&bull;</span>
                <span className="pipeline-node-label">Evaluation</span>
              </div>
            </div>
            <div className="pipeline-status-banner">
              <span className="pipeline-pulse-dot" />
              <span>Active Architecture & Dataset Exploration</span>
            </div>
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
      {/* Top Media / Abstract UI */}
      {renderVisual()}

      {/* Card Content */}
      <div className="project-content">
        <div className="project-header">
          <div className="project-header-main">
            <span className="project-category">{project.category}</span>
            <h3 className="project-title">{project.title}</h3>
            {project.tagline && <p className="project-tagline">{project.tagline}</p>}
          </div>

          <div
            className={`status-pill ${
              isCompleted ? 'status-available' : 'status-progress'
            } project-status-badge`}
          >
            <span className="status-dot" aria-hidden="true" />
            <span>{project.status}</span>
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        {/* Feature Highlights */}
        {project.features && project.features.length > 0 && (
          <div className="project-features">
            <span className="features-heading">Implemented Scope</span>
            <ul className="features-list">
              {project.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <span className="feature-bullet" aria-hidden="true">
                    —
                  </span>
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
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links / Action Buttons - Gracefully Hiding Unavailable Links */}
        <div className="project-actions">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label={`View source code for ${project.title} on GitHub`}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
              className="btn btn-primary btn-sm"
              aria-label={`Open live demo of ${project.title}`}
            >
              <span>Live Demo</span>
              <svg
                width="14"
                height="14"
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
          )}

          {project.detailsUrl && (
            <a href={project.detailsUrl} className="btn btn-ghost btn-sm">
              <span>Read Case Study</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
