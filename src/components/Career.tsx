import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Cognizant</h5>
              </div>
              <h3>Jul 2025 – Present</h3>
            </div>
            <p>
              Conducted detailed code reviews and technical analysis across Java, Spring Boot, Angular, REST APIs, and SQL-based enterprise applications. Investigated complex software issues by tracing execution across frontend components, REST APIs, microservices, application logs, and database transactions. Reviewed and refactored Spring Boot, Spring Data JPA, and Hibernate services to improve reliability, performance, and maintainability.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>CVS Health</h5>
              </div>
              <h3>Jul 2024 – May 2025</h3>
            </div>
            <p>
              Investigated production issues affecting customer workflows by tracing API requests, application logs, service interactions, and SQL Server records. Supported healthcare customer onboarding and account-management workflows by building Java and Spring Boot services that processed member information and coordinated data across integrated application components. Integrated REST APIs with internal and external services.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Wells Fargo</h5>
              </div>
              <h3>Sep 2022 – Mar 2024</h3>
            </div>
            <p>
              Built and integrated RESTful APIs using Spring MVC and Spring Data JPA, tracing request flows across application services and database layers to validate business logic and ensure accurate processing of customer and transaction data. Analyzed production defects by reviewing Java code, application logs, API requests and responses, and database records to identify root causes and support timely resolution.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Developer</h4>
                <h5>Infosys</h5>
              </div>
              <h3>Nov 2020 – Jul 2022</h3>
            </div>
            <p>
              Assisted in developing and maintaining backend applications using Java, Spring Boot, and MySQL, contributing to the implementation of new features for enterprise applications. Built and enhanced RESTful APIs using Spring MVC and Spring Data JPA. Implemented business logic and database operations using Hibernate and SQL, maintaining data consistency across multiple modules.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
