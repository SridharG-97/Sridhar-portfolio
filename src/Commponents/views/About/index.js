import React from "react";
import "./index.css";
import { Element } from "react-scroll";
import { Card } from "react-bootstrap";
import abtpro from "../../assets/abt.jpg";
import { GoLocation } from "react-icons/go"

function index() {
  return (
    <Element id="about" className="aboutE">
      <div className="cards12">
        <Card className="card1" sm="6">
          <Card.Img
            variant="top"
            src={abtpro}
            className="cardimg"
            width="100%"
          />
        </Card>
        <Card className="card2 " style={{ width: "18rem" }} sm="6">
          <div className="card12">
            <Card.Title className="AboutMe">About Me</Card.Title>
            <div className="location">
              <a href="https://www.google.com/maps/place/Palladam/@10.9891543,77.2535456,12.88z/data=!4m13!1m7!3m6!1s0x3ba9a95673dd8dfb:0x6effc31a8745d016!2sPalladam,+Tamil+Nadu!3b1!8m2!3d10.9955767!4d77.2852097!3m4!1s0x3ba9abe32c4b6f3f:0x28825c3903d8b2ac!8m2!3d10.9943984!4d77.2830291">
              <GoLocation />
              </a>
            </div>
          </div>



          <Card.Body>

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
