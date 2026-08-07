import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      {/* Static image on the left side of About Me in the empty space */}
      <div className="about-image-wrapper">
        <div className="about-image-card">
          <img
            src="/images/avatar.png"
            alt="Prasanna Udumula - Full Stack Engineer"
            className="about-avatar-img"
          />
          <div className="about-avatar-glow"></div>
        </div>
      </div>

      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Full Stack Engineer with <strong>4 years of experience</strong> developing, reviewing,
          and analyzing complex software systems across Java, Python, C++, C#, and SQL.
          Experienced in code reviews, microservices, REST APIs, and database transactions — delivering
          high-quality technical analysis and scalable engineering solutions under tight deadlines.
        </p>
      </div>
    </div>
  );
};

export default About;
