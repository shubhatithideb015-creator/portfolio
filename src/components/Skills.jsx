import { useState } from 'react';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Flatten skills with category metadata for filtering
  const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      categoryId: category.id,
      categoryTitle: category.title
    }))
  );

  const filterTabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'ai-data-science', label: 'AI & Data Science' },
    { id: 'software-development', label: 'Software Dev' },
    { id: 'tools', label: 'Tools & CI/CD' }
  ];

  const filteredSkills =
    activeFilter === 'all'
      ? allSkills
      : allSkills.filter((skill) => skill.categoryId === activeFilter);

  const getSkillIcon = (name) => {
    switch (name) {
      case 'Python':
        return '🐍';
      case 'SQL':
        return '📊';
      case 'C / C++':
        return '⚡';
      case 'JavaScript (ES6+)':
        return '🟡';
      case 'HTML5 & CSS3':
        return '🎨';
      case 'Machine Learning Fundamentals':
        return '🧠';
      case 'Data Analysis & Exploration':
        return '📈';
      case 'Data Visualization':
        return '📉';
      case 'Neural Networks (Foundations)':
        return '🕸️';
      case 'Responsible AI & Ethics':
        return '⚖️';
      case 'React':
        return '⚛️';
      case 'Flask':
        return '🌶️';
      case 'SQLite':
        return '🗄️';
      case 'RESTful APIs':
        return '🔌';
      case 'Responsive UI Architecture':
        return '📱';
      case 'Git & GitHub':
        return '🐙';
      case 'VS Code':
        return '💻';
      case 'Jupyter Notebooks':
        return '🪐';
      case 'Postman':
        return '📮';
      case 'Command Line / Shell':
      default:
        return '🛠️';
    }
  };

  const getCategoryBadge = (categoryId) => {
    switch (categoryId) {
      case 'programming':
        return 'LANGUAGE';
      case 'ai-data-science':
        return 'AI / DATA';
      case 'software-development':
        return 'FRAMEWORK';
      case 'tools':
      default:
        return 'TOOLCHAIN';
    }
  };

  return (
    <section className="section-wrapper" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Waypoint • Skills Constellation</span>
          <h2 id="skills-heading" className="section-title">
            Skills & Working Technologies
          </h2>
          <p className="section-subtitle">
            A curated stack of programming languages, machine learning concepts, frameworks, and developer toolchains.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="skills-filter-nav" role="tablist" aria-label="Skill Categories">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeFilter === tab.id}
              className={`filter-tab ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Structured Skills Grid */}
        <div className="skills-cards-grid">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`skill-showcase-card ${skill.highlight ? 'skill-highlight' : ''}`}
            >
              <div className="skill-card-top">
                <div className="skill-orb-wrap">
                  <span className="skill-emoji">{getSkillIcon(skill.name)}</span>
                </div>
                <span className="skill-category-badge">
                  {getCategoryBadge(skill.categoryId)}
                </span>
              </div>

              <div className="skill-name">{skill.name}</div>
              <div className="skill-note">{skill.note}</div>

              <div className="skill-competency-row">
                <span className="competency-indicator">Verified Knowledge</span>
                <span className="competency-glyph">✦</span>
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
