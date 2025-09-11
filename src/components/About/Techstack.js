import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiHtml5, DiCss3, DiJavascript1, DiReact, DiBootstrap, DiGit } from "react-icons/di";
import { SiSpringboot, SiJquery, SiHibernate, SiOracle, SiMysql, SiPostgresql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> {/* Java / Java 8 */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot /> {/* Spring Boot / Spring Core */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate /> {/* Hibernate / JDBC */}
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle /> {/* Oracle / SQL / PLSQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> {/* PostgreSQL */}
      </Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> {/* HTML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> {/* CSS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap /> {/* Bootstrap */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery /> {/* jQuery */}
      </Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git / Version Control */}
      </Col>
    </Row>
  );
}

export default Techstack;
