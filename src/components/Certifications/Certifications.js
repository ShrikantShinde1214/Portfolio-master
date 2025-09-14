import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsPatchCheckFill } from "react-icons/bs"; // certificate icon

function Certifications() {
  const certificates = [
    {
      title: "Transaction Banking Domain Expert",
      issuer: "Aurionpro Solutions Private Limited, Navi Mumbai",
      date: "2024",
    },
    {
      title: "Rising Star Award",
      issuer: "Aurionpro Solutions Private Limited, Navi Mumbai",
      date: "2025",
    },
    {
      title: "Excellence in Java Development",
      issuer: "Internship Program",
      date: "2022",
    },
  ];

  return (
    <Container fluid className="about-section">
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
          Certifications & Awards 🎓
        </h2>

        <Row className="justify-content-center">
          {certificates.map((cert, index) => (
            <Col xs={12} sm={10} md={6} lg={4} className="mb-4" key={index}>
              <Card
                className="h-100 text-center p-4"
                style={{
                  borderRadius: "20px",
                  background: "linear-gradient(145deg, #f3e7f8, #e3f0ff)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) rotate(-1deg) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.25)";
                  e.currentTarget.style.background = "linear-gradient(145deg, #d6b8ff, #9ecbff)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) rotate(0deg) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                  e.currentTarget.style.background = "linear-gradient(145deg, #f3e7f8, #e3f0ff)";
                }}
              >
                {/* Ribbon/Badge for Year */}
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "-10px",
                    background: "#6f42c1",
                    color: "#fff",
                    fontWeight: "700",
                    padding: "5px 20px",
                    transform: "rotate(45deg)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  {cert.date}
                </div>

                <BsPatchCheckFill size={50} color="#6f42c1" className="mb-3" />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#4b0082",
                      fontWeight: "700",
                      fontSize: "clamp(1rem, 2vw, 1.3rem)",
                    }}
                  >
                    {cert.title}
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
                  >
                    {cert.issuer}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
