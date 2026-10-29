/**
 * CERTIFICATIONS DATA
 * =============================================================================
 * Credential records for completed courses, workshops, and virtual programs.
 * - `issueDate`: Format as string (e.g. "July 2026") or set to null if unspecified/unverified.
 * - `verificationUrl`: Put exact verification URL or set to null to hide the link.
 *   Never fabricate verification links.
 * - `issuer`: Organization or platform providing the credential.
 * - `skills`: Key topics and domains covered by the program.
 * =============================================================================
 */

export const certificationsData = [
  {
    id: "gcp-responsible-ai",
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud Skills Boost",
    issuerBadge: "GCP",
    issueDate: "July 2026",
    description:
      "Core principles of responsible artificial intelligence, including fairness, model transparency, data privacy, bias identification and mitigation, and ethical AI development frameworks.",
    skills: ["Responsible AI", "Ethics in AI", "Bias Mitigation", "Model Transparency", "Data Privacy"],
    verificationUrl: null // Set to your credential link or null to hide
  },
  {
    id: "ibm-ai-fundamentals",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    issuerBadge: "IBM",
    issueDate: "July 2026",
    description:
      "Foundational concepts of artificial intelligence, machine learning principles, neural network architectures, natural language processing (NLP), and computer vision applications.",
    skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "NLP", "Computer Vision"],
    verificationUrl: null
  },
  {
    id: "cisco-modern-ai",
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    issuerBadge: "Cisco",
    issueDate: "July 2026",
    description:
      "Overview of modern artificial intelligence landscape, foundational ML concepts, data-driven reasoning, and real-world software and networking applications.",
    skills: ["Modern AI", "ML Fundamentals", "Data Applications", "Intelligent Systems"],
    verificationUrl: null
  },
  {
    id: "deloitte-data-analytics",
    title: "Deloitte Data Analytics Virtual Experience Program",
    issuer: "Deloitte / Forage",
    issuerBadge: "Deloitte",
    issueDate: null, // Left unspecified until verified by user
    description:
      "Practical simulation focusing on data analysis, data visualization, business analytics problem framing, and communicating analytical insights to stakeholders.",
    skills: ["Data Analytics", "Data Visualization", "Business Intelligence", "Insight Communication"],
    verificationUrl: null
  },
  {
    id: "udemy-web-development",
    title: "Complete Web Development Course",
    issuer: "Udemy",
    issuerBadge: "Udemy",
    issueDate: "May 2026",
    description:
      "Comprehensive web development curriculum covering front-end architecture, modern JavaScript, responsive CSS layout, server-side fundamentals, and practical web project deployment.",
    skills: ["Web Development", "JavaScript", "Responsive Design", "Frontend & Backend Fundamentals"],
    verificationUrl: null
  }
];
