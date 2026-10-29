/**
 * SKILLS DATA
 * =============================================================================
 * Editable skill categories.
 * - Only skills genuinely learned and ready to discuss in technical interviews.
 * - No percentage progress bars or arbitrary numeric ratings.
 * - Grouped logically into four clear domains.
 * =============================================================================
 */

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    subtitle: "Core languages for algorithmic problem-solving and software implementation",
    skills: [
      { name: "Python", highlight: true, note: "Data analysis, ML scripts, backend development" },
      { name: "SQL", highlight: true, note: "Relational queries, schema design, filtering" },
      { name: "C / C++", highlight: false, note: "Object-oriented fundamentals, data structures" },
      { name: "JavaScript (ES6+)", highlight: true, note: "Frontend logic, DOM manipulation, asynchronous flow" },
      { name: "HTML5 & CSS3", highlight: false, note: "Semantic layout, responsive design, modern styling" }
    ]
  },
  {
    id: "ai-data-science",
    title: "AI & Data Science",
    subtitle: "Foundational machine learning concepts, data processing, and ethical AI",
    skills: [
      { name: "Machine Learning Fundamentals", highlight: true, note: "Supervised & unsupervised learning, classification, regression" },
      { name: "Data Analysis & Exploration", highlight: true, note: "Data cleaning, feature preparation, exploratory analysis" },
      { name: "Data Visualization", highlight: false, note: "Insight extraction and clear visual reporting" },
      { name: "Neural Networks (Foundations)", highlight: false, note: "Perceptrons, multi-layer networks, activation functions" },
      { name: "Responsible AI & Ethics", highlight: true, note: "Fairness, bias mitigation, privacy, transparency" }
    ]
  },
  {
    id: "software-development",
    title: "Software Development",
    subtitle: "Frameworks, web architectures, and client-server integration",
    skills: [
      { name: "React", highlight: true, note: "Component architecture, hooks, state management" },
      { name: "Flask", highlight: true, note: "Lightweight Python REST APIs, endpoint routing" },
      { name: "SQLite", highlight: false, note: "Local relational database persistence" },
      { name: "RESTful APIs", highlight: true, note: "API consumption, JSON serialization, HTTP methods" },
      { name: "Responsive UI Architecture", highlight: false, note: "Mobile-first layouts, accessible markup" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Workflows",
    subtitle: "Environment, version control, and development toolchain",
    skills: [
      { name: "Git & GitHub", highlight: true, note: "Version control, commits, branching, repository management" },
      { name: "VS Code", highlight: false, note: "Primary IDE, debugging, extensions" },
      { name: "Jupyter Notebooks", highlight: true, note: "Interactive data exploration and prototyping" },
      { name: "Postman", highlight: false, note: "API testing, request validation" },
      { name: "Command Line / Shell", highlight: false, note: "Basic terminal operations and script execution" }
    ]
  }
];
