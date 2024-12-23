import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am currently a 4th Computer Science student at the University of Alberta.
            <br></br>
            <br></br>

            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Training bodybuilding, and MMA (mixed martial arts)
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking, but more importantly, eating!
            </li>
          </ul>

       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
