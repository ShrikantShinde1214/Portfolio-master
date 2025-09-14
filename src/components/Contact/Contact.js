import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>&nbsp;&nbsp;
        <h2
          className="text-center mb-5"
          style={{
            fontWeight: "bold",
            background: "linear-gradient(90deg, #6f42c1, #b26ef0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
          }}
        >
        Contact Me 📞
        </h2>
        
        <Row className="justify-content-center">
          {/* Phone Card */}
          <Col xs={12} md={5} lg={3} className="mb-4">
            <Card
              className="border-0 text-center p-4 h-100"
              style={{
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto 15px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6f42c1, #b26ef0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AiOutlinePhone size={35} color="#fff" />
              </div>
              <h5 style={{ color: "#6f42c1", fontWeight: "600" }}>Phone</h5>
              <Card.Text>
                <a
                  href="tel:9370383946"
                  style={{ textDecoration: "none", color: "#000", fontSize: "1.1rem" }}
                >
                  +91 9370383946
                </a>
              </Card.Text>
            </Card>
          </Col>

          {/* Email Card */}
          <Col xs={12} md={5} lg={3} className="mb-4">
            <Card
              className="border-0 text-center p-4 h-100"
              style={{
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto 15px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6f42c1, #b26ef0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AiOutlineMail size={35} color="#fff" />
              </div>
              <h5 style={{ color: "#6f42c1", fontWeight: "600" }}>Email</h5>
              <Card.Text>
                <a
                  href="mailto:shindeshrikant1214@gmail.com"
                  style={{ textDecoration: "none", color: "#000", fontSize: "1.1rem" }}
                >
                  shindeshrikant1214@gmail.com
                </a>
              </Card.Text>
            </Card>
          </Col>

          {/* GitHub Card */}
          <Col xs={12} md={5} lg={3} className="mb-4">
            <Card
              className="border-0 text-center p-4 h-100"
              style={{
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto 15px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6f42c1, #b26ef0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaGithub size={35} color="#fff" />
              </div>
              <h5 style={{ color: "#6f42c1", fontWeight: "600" }}>GitHub</h5>
              <Card.Text>
                <a
                  href="https://github.com/ShrikantShinde1214"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#000", fontSize: "1.1rem" }}
                >
                  github.com/ShrikantShinde1214
                </a>
              </Card.Text>
            </Card>
          </Col>

          {/* Telegram Card */}
          <Col xs={12} md={5} lg={3} className="mb-4">
            <Card
              className="border-0 text-center p-4 h-100"
              style={{
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto 15px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6f42c1, #b26ef0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaTelegramPlane size={35} color="#fff" />
              </div>
              <h5 style={{ color: "#6f42c1", fontWeight: "600" }}>Telegram</h5>
              <Card.Text>
                <a
                  href="https://t.me/ShrikantShinde"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#000", fontSize: "1.1rem" }}
                >
                  t.me/ShrikantShinde
                </a>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
