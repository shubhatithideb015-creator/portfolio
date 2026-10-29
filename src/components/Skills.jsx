import { skillCategories } from '../data/skills';

export default function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case 'ai-data-science':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2v4" />
            <path d="M12 18v4" />
            <path d="m4.93 4.93 2.83 2.83" />
            <path d="m16.24 16.24 2.83 2.83" />
            <path d="M2 12h4" />
            <path d="M18 12h4" />
            <path d="m4.93 19.07 2.83-2.83" />
            <path d="m16.24 7.76 2.83-2.83" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case 'software-development':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
          </svg>
        );
      case 'tools':
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
    }
  };

  return (
    <section className="section-wrapper" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Technical Competencies</span>
          <h2 id="skills-heading" className="section-title">
            Skills & Working Knowledge
          </h2>
          <p className="section-subtitle">
            Curated list of languages, AI/ML concepts, frameworks, and developer workflows I have
            hands-on experience with and can discuss in detail during technical conversations.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon-wrapper" aria-hidden="true">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-subtitle">{category.subtitle}</p>
                </div>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`skill-item ${skill.highlight ? 'skill-item-highlight' : ''}`}
                  >
                    <div className="skill-item-main">
                      <span className="skill-bullet" aria-hidden="true" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    {skill.note && <span className="skill-note">{skill.note}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Transparency */}
        <div className="skills-editorial-footer">
          <div className="editorial-callout">
            <span className="callout-badge">Interview Philosophy</span>
            <p>
              No arbitrary skill progress bars or inflated percentage meters. Only listing core
              competencies backed by coursework, practical code, and genuine understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
