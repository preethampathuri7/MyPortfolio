import "./styles/WhatIDo.css";

const skills = {
  frontend: {
    title: "FRONTEND",
    subtitle: "Building Interactive UIs",
    description:
      "Crafting responsive, performant interfaces using modern frameworks. From SPAs to enterprise dashboards, delivering pixel-perfect, accessible experiences.",
    tags: [
      "React.JS", "Angular", "TypeScript", "JavaScript",
      "HTML5", "CSS3", "JSON", "Bootstrap",
    ],
  },
  backend: {
    title: "BACKEND",
    subtitle: "Scalable Server Architecture",
    description:
      "Designing robust APIs, microservices, and enterprise backend systems. From banking platforms to healthcare services — backends built to scale, trace, and recover.",
    tags: [
      "Java", "Spring Boot", "Spring MVC",
      "Hibernate", "Spring Data JPA",
      "Python", "Node.js", "REST APIs",
      "Microservices", "MySQL", "PostgreSQL",
      "MongoDB", "SQL Server", "C#", "C++",
    ],
  },
};

const WhatIDo = () => {
  return (
    <section className="whatIDO" id="whatido">
      {/* Section header */}
      <div className="wid-header">
        <p className="wid-label">What I Do</p>
        <h2 className="wid-title">
          Skills &amp; <span>Expertise</span>
        </h2>
        <p className="wid-sub">
          4 years building full-stack systems across Java, Python, and modern JavaScript
        </p>
      </div>

      {/* Cards grid */}
      <div className="wid-grid">
        {/* Frontend card */}
        <div className="wid-card">
          <div className="wid-card-top">
            <div className="wid-icon wid-icon-fe">
              {/* Monitor SVG */}
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

        {/* Backend card */}
        <div className="wid-card">
          <div className="wid-card-top">
            <div className="wid-icon wid-icon-be">
              {/* Server SVG */}
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
      </div>
    </section>
  );
};

export default WhatIDo;
