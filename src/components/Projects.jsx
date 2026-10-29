import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  // Only display projects marked as visible
  const visibleProjects = projectsData.filter((p) => p.visible !== false);

  return (
    <section className="section-wrapper" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Featured Work</span>
          <h2 id="projects-heading" className="section-title">
            Selected Projects & System Architecture
          </h2>
          <p className="section-subtitle">
            Functional, end-to-end software built with clean architectures. Only implemented
            capabilities are documented.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeatured={index === 0}
            />
          ))}
        </div>

        {/* Editorial Footnote */}
        <div className="projects-editorial-note">
          <p>
            <span className="note-label">Editability Note:</span> Additional project entries, source code repositories, and live links can be updated directly in{' '}
            <code className="inline-code">src/data/projects.js</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
