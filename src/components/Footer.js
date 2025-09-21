import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
     <Row className="d-flex justify-content-between">
  <Col md="6" className="footer-copywright text-start">
    <h3>All Rights Reserved. Designed and Developed by Shrikant Shinde</h3>
  </Col>
  <Col md="4" className="footer-copywright text-end">
    <h3>Copyright © {year}</h3>
  </Col>
      </Row>
    </Container>
  );
}

export default Footer;
