import React from "react";
import Particle from "../Particle";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

function Skills() {
  const frontEndSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Bootstrap", level: 90 },
    { name: "JQuery", level: 80 },
    { name: "Ajax", level: 75 },
    { name: "ReactJS", level: 85 },
  ];

  const backEndSkills = [
    { name: "Core Java", level: 90 },
    { name: "Java 8", level: 85 },
    { name: "Servlet", level: 80 },
    { name: "JSP", level: 80 },
    { name: "JDBC", level: 85 },
    { name: "Hibernate", level: 80 },
    { name: "Struts2", level: 75 },
    { name: "Spring Core", level: 85 },
    { name: "Spring Boot", level: 85 },
    { name: "Webservices", level: 80 },
    { name: "Microservices", level: 80 },
    { name: "JUnit Testing", level: 60 },
  ];

  const databaseSkills = [
    { name: "SQL", level: 85 },
    { name: "PL/SQL", level: 80 },
  ];

  const deploymentSkills = [
    { name: "GitHub", level: 90 },
    { name: "GitLab", level: 85 },
    { name: "Docker", level: 75 },
    { name: "Render", level: 70 },
    { name: "Linux", level: 50 },
  ];

  const devTools = [
    { name: "VS Studio", level: 90 },
    { name: "Notepad++", level: 85 },
    { name: "SublimeText", level: 80 },
    { name: "Eclipse", level: 85 },
    { name: "STS", level: 80 },
    { name: "IntelliJ IDEA", level: 90 },
  ];

  const databaseTools = [
    { name: "Oracle 10g", level: 85 },
    { name: "Oracle 19c", level: 80 },
    { name: "MSSQL Server", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 80 },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
        <Card className="shadow-sm p-3 h-100" style={{ borderRadius: "15px" }}>
          <Card.Body>
            <Card.Title style={{ fontWeight: "600", color: "#6f42c1" }}>
              {skill.name}
            </Card.Title>
            <ProgressBar
              now={skill.level}
              label={`${skill.level}%`}
              variant="purple"
              style={{ height: "8px", borderRadius: "5px" }}
            />
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
<Container fluid className="about-section">
       <Particle />
      <Container>&nbsp;&nbsp;
        <h2 className="text-center mb-5" style={{ fontWeight: "bold", background: "linear-gradient(90deg, #6f42c1, #b26ef0)", 
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }} > My Skills 🛠️ </h2>
        <h4 className="mb-3" style={{ color: "#ed980fff", fontWeight: "600" }}>
          Front-End Technologies
        </h4>
        <Row>{renderSkills(frontEndSkills)}</Row>

        <h4 className="mt-5 mb-3" style={{ color: "#ed980fff", fontWeight: "600" }}>
          Back-End Technologies
        </h4>
        <Row>{renderSkills(backEndSkills)}</Row>

        <h4 className="mt-5 mb-3" style={{ color: "#ed980fff", fontWeight: "600" }}>
          Database Technologies
        </h4>
        <Row>{renderSkills(databaseSkills)}</Row>

        <h4 className="mt-5 mb-3" style={{ color: "#ed980fff", fontWeight: "600" }}>
          Deployment Software / Tools
        </h4>
        <Row>{renderSkills(deploymentSkills)}</Row>

        <h4 className="mt-5 mb-3" style={{ color: "#ed980fff", fontWeight: "600" }}>
          Development Software / Tools
        </h4>
        <Row>{renderSkills(devTools)}</Row>

        <h4 className="mt-5 mb-3" style={{ color: "#ed980fff", fontWeight: "600" }}>
          Database Software / Tools
        </h4>
        <Row>{renderSkills(databaseTools)}</Row>
      </Container>
    </Container>
  );
}

export default Skills;
