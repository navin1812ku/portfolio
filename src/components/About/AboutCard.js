import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naveen Kumar </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            <br />
            I am currently pursuing a Bachelor's degree in Information Technology at <span className="purple">Sri Eshwar College of Engineering.</span>
            <br />
            <br />
            I have a good knowledge of Java Programming language by getting certified at Guvi and Coding Ninja with that 
            I have earned a 5-star gold batch in Java at HackerRank, and HackerEarth.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Naveen Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
