import React from "react";
import "./index.css";
import { Element } from "react-scroll";
import LinearProgressWithLabel from "@material-ui/core/LinearProgress";
import { DiJavascript,DiHtml5,DiCss3,DiReact } from "react-icons/di";
import { Card } from "react-bootstrap";
import Layout from "../../Layout/index"

function index() {
  return (
    <Element id="skills" className="skillE">
      <div className="skill-title">
        <h1>React Skills </h1>
      </div>
     
      <div className="skillsetM">
        {/* REACT */}
       

               {/* Basic */}


        <div className="skillpage2">
          <Card className="cardskill1">
            <Card.Body className="cardBody1">
              <div className="skill-Html">
                <div className="html-logo">
                
                </div>

                <div className="title1">
                  <p>React - Basics</p>
                </div>
              </div>
              <div className="skill-Container-slider1">
                <div className="linebar">
                  <LinearProgressWithLabel variant="determinate" value={80} />
                </div>
                <div className="percent">
                  <p>80%</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

                {/* axios */}


        <div className="skillpage2">
          <Card className="cardskill1">
            <Card.Body className="cardBody1">
              <div className="skill-Html">
                <div className="html-logo">
                 
                </div>

                <div className="title1">
                  <p> React Hooks</p>
                </div>
              </div>
              <div className="skill-Container-slider1">
                <div className="linebar">
                  <LinearProgressWithLabel variant="determinate" value={75} />
                </div>
                <div className="percent">
                  <p>75%</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="skillpage2">
          <Card className="cardskill1">
            <Card.Body className="cardBody1">
              <div className="skill-Html">
                <div className="html-logo">
                 
                </div>

                <div className="title1">
                  <p> AXIOS</p>
                </div>
              </div>
              <div className="skill-Container-slider1">
                <div className="linebar">
                  <LinearProgressWithLabel variant="determinate" value={70} />
                </div>
                <div className="percent">
                  <p>70%</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="skillpage2">
          <Card className="cardskill1">
            <Card.Body className="cardBody1">
              <div className="skill-Html">
                <div className="html-logo">
                 
                </div>

                <div className="title1">
                  <p> React <br/> Bootstrap</p>
                </div>
              </div>
              <div className="skill-Container-slider1">
                <div className="linebar">
                  <LinearProgressWithLabel variant="determinate" value={80} />
                </div>
                <div className="percent">
                  <p>80%</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

       
      
        
      </div>
    </Element>
  );
}

export default index;
