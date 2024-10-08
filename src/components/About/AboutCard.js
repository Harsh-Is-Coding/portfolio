import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harsh Shukla </span>
            from <span className="purple"> Ontario, Canada</span>
            <br />
            I am currently in My Second year of Software Engineering at McMaster University.
            <br />
            I have previously worked as a Software Developer Intern at <span className="purple">Site4U</span> 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Motorsports
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
