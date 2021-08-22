import React from "react";
import "./index.css";
import {Card} from "react-bootstrap";
import {FaFacebook} from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";
import { Element } from "react-scroll";

function index() {
  return (
   <Element id="contact" className="Contact">
   
      <Card className="cardBOOT">
        <Card.Body>
          <Card.Title style={{display:"flex",justifyContent:"center",text:"center"}}>Contact</Card.Title>
         
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         
        </Card.Body>
        <Card.Footer style={{fontSize:"30px",display:"flex",justifyContent:"space-around",text:"center"}} >
        <Card.Link href="#">
            <FaFacebook />
          </Card.Link>
          <Card.Link href="#">
            <GrInstagram />
          </Card.Link>
        </Card.Footer>
      </Card>
    </Element>
  );
}

export default index;
