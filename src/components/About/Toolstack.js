import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiEclipseide,
  SiIntellijidea,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiDocker,
  SiJenkins,
  SiApachemaven, // ✅ Correct Maven icon
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* IDEs */}
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide /> {/* Eclipse */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea /> {/* IntelliJ IDEA */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code for frontend */}
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit /> {/* Git */}
      </Col>

      {/* Build & CI/CD */}
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven /> {/* Maven */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins /> {/* Jenkins for CI/CD */}
      </Col>

      {/* API Testing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>

      {/* DevOps / Containerization */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /> {/* Docker */}
      </Col>
    </Row>
  );
}

export default Toolstack;
