import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="project-card">
    <ProjectCard
      title="Perform (ICICI Bank)"
      description="Worked on the Perform platform for ICICI Bank, focusing on backend development, database integration, and ensuring smooth execution of core banking modules."
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      title="TRACE (Axis Bank)"
      description="Contributed to the TRACE system for Axis Bank, where I was responsible for Java backend development, API integration, and optimizing system performance for transaction tracking."
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      title="CMP NextGen (SBI)"
      description="Worked on the CMP NextGen project for SBI, involving backend development in Java, Spring Boot, and database enhancements to support high-volume banking operations."
    />
  </Col>
<Col md={4} className="project-card">
  <ProjectCard
    title="Life Insurance (LIC)"
    description="Developed a full-stack Life Insurance project using Java, Spring Boot (backend) and React (frontend). Implemented secure REST APIs, optimized database operations, and built responsive UI features to ensure smooth handling of large-scale insurance transactions."
  />
</Col>

</Row>
      </Container>
    </Container>
  );
}

export default Projects;
