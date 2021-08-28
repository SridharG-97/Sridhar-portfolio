import React from "react";
import "./index.css";
import { Card } from "react-bootstrap";
import { FaFacebook,FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import {FaGithubSquare} from "react-icons/fa"
import { Element } from "react-scroll";

function index() {
  return (
    <Element id="contact" className="Contact">
      <Card className="cardBOOT" sm="6">
        <Card.Body>
          <Card.Title
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "35px",
           
            }}
          >
            Contact
          </Card.Title>

          <Card.Text    className="mail-git" style={{fontSize:"25px"}}>
            <p>Email : sridhar11chandra@gmail.com</p>
           
            <p>
             Mobile :
             874892297
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent:"space-between",
            flexDirection:"row",
            
            
          }}
        >
           <Card.Link  className="link1"  style={{justifyContent:"space-around",flex:"0.5",color:"white"}}  href="https://www.linkedin.com/in/sridhar-vip-4751ab20b/ ">
            <FaLinkedin className="linkedin"/>
          </Card.Link>
          <Card.Link className="link2" style={{display:"flex", marginLeft:"45px", justifyContent:"space-around",flex:"1",color:"white"}} href="https://github.com/SridharG-97/Sridhar-portfolio">
            <FaGithubSquare  className="github"/>
          </Card.Link>
         
        </Card.Footer>
      </Card>
    </Element>
  );
}

export default index;
