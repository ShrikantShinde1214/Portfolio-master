import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {

  const joiningDate = new Date("2021-08-11"); // your joining date
  const today = new Date();

  let years = today.getFullYear() - joiningDate.getFullYear();
  let months = today.getMonth() - joiningDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
         <p style={{ textAlign: "justify" }}>
  Hi Everyone, I am <span className="purple">Shrikant Shinde</span> from 
  <span className="purple"> Malkup, India.</span>
  <br />
  I am currently working as a <span className="purple">Software Engineer </span> 
      with <span className="purple">
        {years} years {months} months of professional experience
      </span>
  <br />
  I hold a Bachelor’s degree in Computer Engineering and have been deeply 
  involved in developing enterprise applications using modern full-stack technologies.
  <br />
  <br />
  Beyond work, I am passionate about continuous learning and enjoy exploring 
  areas that help me grow both technically and personally.
</p>

<ul>
  <li className="about-activity">
    <ImPointRight /> Exploring new technologies & frameworks
  </li>
  <li className="about-activity">
    <ImPointRight /> Problem-solving & coding challenges
  </li>
  <li className="about-activity">
    <ImPointRight /> Knowledge sharing & mentoring juniors
  </li>
</ul>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is the sum of small efforts, repeated day in and day out."{" "}
          </p>
          <footer className="blockquote-footer">Shrikant Shinde</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
