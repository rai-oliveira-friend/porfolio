import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jose Raimundo Oliveira da silva </span>
            from <span className="purple"> Brasilia, Brazil.</span>
            <br />
            I am currently employed as a <span className="purple">Senior Software Engineer</span> at <span className="purple">Plasbit</span>.
            <br />
            I have completed a crypto exchange platform as a year project in my last company.
            <br />
            <br />
            Apart from computer engineering, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rai Oliveira</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
