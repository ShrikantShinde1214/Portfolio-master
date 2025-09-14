import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Shrikant.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { SiTelegram } from "react-icons/si"; 
import { AiOutlineMail } from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I am passionate about <b className="purple">Java Full Stack Development</b> and love building scalable, high-performance applications.
  <br />
  <br />I am fluent in technologies like
  <i>
    <b className="purple"> Java, Spring Boot, Microservices, RESTful Web Services, and React.js </b>
  </i>
  for both backend and frontend development.
  <br />
  <br />
  My areas of interest include designing and developing modern &nbsp;
  <i>
    <b className="purple">Web Applications, Enterprise Solutions, and Cloud-based Microservices Architectures.</b>
  </i>
  <br />
  <br />
  I also apply my passion for delivering clean, efficient, and reusable code while working with 
  <b className="purple"> Java frameworks</b> and 
  <i>
    <b className="purple"> modern frontend libraries like React.js.</b>
  </i>
</p>

          </Col>
          <Col md={4} className="myAvtar">
  <Tilt>
    <img src={myImg} className="img-fluid profile-pic" alt="avatar" />
  </Tilt>
</Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ShrikantShinde1214"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shrikant-shinde-3771b6252"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
          <li className="social-icons">
    <a
      href="https://wa.me/919370383946" 
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <BsWhatsapp />
    </a>
  </li>

  <li className="social-icons">
    <a
      href="https://t.me/shrikantshinde" 
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <SiTelegram />
    </a>
  </li>
  <li className="social-icons">
  <a
    href="mailto:shindeshrikant1214@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <AiOutlineMail />
  </a>
</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
