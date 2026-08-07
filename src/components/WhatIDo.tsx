import "./styles/WhatIDo.css";

const skills = {
  frontend: {
    title: "LANGUAGES & FRONTEND",
    subtitle: "Core Programming & UI",
    description:
      "Developing, reviewing, and analyzing complex software systems. Crafting responsive SPAs and enterprise frontends.",
    tags: [
      "Java", "Python", "C++", "C#", "C", "SQL",
      "JavaScript", "TypeScript", "React.JS", "Angular",
      "HTML5", "CSS3", "JSON",
    ],
  },
  backend: {
    title: "BACKEND & FRAMEWORKS",
    subtitle: "Enterprise Microservices & APIs",
    description:
      "Building and refactoring Spring Boot, REST APIs, JPA, and Hibernate microservices for high availability and clean data flows.",
    tags: [
      "Spring", "Spring Boot", "Spring MVC", "Spring Data JPA",
      "Hibernate", "RESTful APIs", "Microservices", "Node.js",
      "Express.js",
    ],
  },
  database: {
    title: "DATABASES & CLOUD",
    subtitle: "Data Layers & Infrastructure",
    description:
      "Optimizing query performance, database transactions, entity mappings, and cloud infrastructure across multi-cloud environments.",
    tags: [
      "MySQL", "PostgreSQL", "Oracle", "Microsoft SQL Server",
      "MongoDB", "AWS (EC2, S3, Lambda, IAM)", "Azure",
      "Docker", "Kubernetes", "Tomcat",
    ],
  },
  tools: {
    title: "TOOLS & DEVOPS",
    subtitle: "Engineering & Delivery Pipeline",
    description:
      "Conducting detailed code reviews, automated CI/CD deployment, log tracing, production issue resolution, and Agile practices.",
    tags: [
      "Git", "GitHub", "Bitbucket", "JIRA", "Maven",
      "Jenkins", "Postman", "CI/CD", "DevOps",
      "Apache Kafka", "Linux", "Unix", "Agile / Scrum",
    ],
  },
};

const WhatIDo = () => {
  return (
    <section className="whatIDO" id="whatido">
      {/* Section header */}
      <div className="wid-header">
        <p className="wid-label">Technical Skillset</p>
        <h2 className="wid-title">
          Skills &amp; <span>Technologies</span>
        </h2>
        <p className="wid-sub">
          4 years of full-stack engineering expertise across enterprise platforms
        </p>
      </div>

      {/* Cards grid (2x2) */}
      <div className="wid-grid">
        {/* Card 1: Languages & Frontend */}
        <div className="wid-card">
          <div className="wid-card-top">
            <div className="wid-icon wid-icon-fe">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
              </svg>
            </div>
            <div>
              <h3>{skills.frontend.title}</h3>
              <p className="wid-card-sub">{skills.frontend.subtitle}</p>
            </div>
          </div>
          <p className="wid-card-desc">{skills.frontend.description}</p>
          <div className="wid-tags">
            {skills.frontend.tags.map((t) => (
              <span key={t} className="wid-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Card 2: Backend & Frameworks */}
        <div className="wid-card">
          <div className="wid-card-top">
            <div className="wid-icon wid-icon-be">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="2" y="2" width="20" height="8" rx="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2"/>
                <line x1="6" y1="6" x2="6.01" y2="6"/>
                <line x1="6" y1="18" x2="6.01" y2="18"/>
              </svg>
            </div>
            <div>
              <h3>{skills.backend.title}</h3>
              <p className="wid-card-sub">{skills.backend.subtitle}</p>
            </div>
          </div>
          <p className="wid-card-desc">{skills.backend.description}</p>
          <div className="wid-tags">
            {skills.backend.tags.map((t) => (
              <span key={t} className="wid-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Card 3: Databases & Cloud */}
        <div className="wid-card">
          <div className="wid-card-top">
            <div className="wid-icon wid-icon-db">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
              </svg>
            </div>
            <div>
              <h3>{skills.database.title}</h3>
              <p className="wid-card-sub">{skills.database.subtitle}</p>
            </div>
          </div>
          <p className="wid-card-desc">{skills.database.description}</p>
          <div className="wid-tags">
            {skills.database.tags.map((t) => (
              <span key={t} className="wid-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Card 4: Tools & DevOps */}
        <div className="wid-card">
          <div className="wid-card-top">
            <div className="wid-icon wid-icon-tools">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <div>
              <h3>{skills.tools.title}</h3>
              <p className="wid-card-sub">{skills.tools.subtitle}</p>
            </div>
          </div>
          <p className="wid-card-desc">{skills.tools.description}</p>
          <div className="wid-tags">
            {skills.tools.tags.map((t) => (
              <span key={t} className="wid-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
