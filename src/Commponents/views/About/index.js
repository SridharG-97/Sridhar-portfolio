import React from "react";
import "./index.css";
import { Element } from "react-scroll";
import { Card } from "react-bootstrap";
import abtpro from "../../assets/abt.jpg";

function index() {
  return (
    <Element id="about" className="aboutE">
      <div className="cards12">
        <Card className="card1">
          <Card.Img
            variant="top"
            src={abtpro}
            className="cardimg"
            width="100%"
          />
        </Card>
        <Card className="card2 "style={{ width: "18rem"}}>
        <Card.Title className="AboutMe">About Me</Card.Title>

          <Card.Body>
            <Card.Subtitle className="CD-title mb-2 text-muted ">
              Hello! I am <u style={{color:"white"}}>Sridhar</u> from Palladam, TamilNadu.
            </Card.Subtitle>
            <Card.Text className="CD-para">
              I am passionate about learning the new technologies and i like
              myself to be updated to the new technologies.I have hunger for
              knowledge and information and to convert them into actions.I work
              with the team to provide imaginative solutions for our customers.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Element>
  );
}

export default index;
