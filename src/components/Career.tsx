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
                <h4>Full Stack Developer</h4>
                <h5>Optum</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Extended the Claims Adjudication and Eligibility Verification modules developing RESTful endpoints using Java and Spring Boot. Refined business rules and optimized repository queries using Spring Data JPA. Managed Secured API transactions using Spring Security and JWT.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>East West Bank</h5>
              </div>
              <h3>Jul 2024 - Dec 2024</h3>
            </div>
            <p>
              Worked on backend services within a MicroServices based banking platform, contributing to customer onboarding, account management, and transaction-processing features using Java and Spring Boot. Worked with data access layers using Spring Data JPA and Hibernate, supporting transactional operations and ensuring consistency for banking records stored in MySQL/PostgreSQL.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Zoho Corporation</h5>
              </div>
              <h3>Jul 2022 - Dec 2023</h3>
            </div>
            <p>
              Engineered Zoho’s SaaS business platform using Java, Spring Boot, Hibernate, and PostgreSQL with Angular frontend. Optimized Invoicing and Subscription Management modules using multithreading.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Flipkart</h5>
              </div>
              <h3>May 2021 - Jun 2022</h3>
            </div>
            <p>
              Developed and enhanced features within product listing and cart management workflows using Java, Spring Boot, Hibernate, and MySQL. Built UI components using HTML, CSS, JavaScript.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
