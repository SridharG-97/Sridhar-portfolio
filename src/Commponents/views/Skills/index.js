import React from "react";
import "./index.css";
import { Element } from "react-scroll";
import LinearProgressWithLabel from "@material-ui/core/LinearProgress";
import { DiJavascript,DiHtml5,DiCss3,DiReact } from "react-icons/di";
import { Card } from "react-bootstrap";


function index() {
  return (
    <Element id="skills" className="skillE">
      <div className="skill-title">
        <h1>Skill Set</h1>
      </div>

      <div className="skillsetM">
        {/* html */}
        <div className="skillpage1" sm="6">
          <Card className="cardskill1" sm="12">
            <Card.Body className="cardBody1">
              <div className="skill-Html">
                <div className="html-logo">
                  <DiHtml5
                    className="Icons-Html"
                    style={{ fontSize: "50px",color:"white" }}
                  />
                </div>

                <div className="title1">
                  <p> HTML</p>
                </div>
              </div>
              <div className="skill-Container-slider1">
                <div className="linebar">
                  <LinearProgressWithLabel className="bar1" variant="determinate" value={90} />
                </div>
                <div className="percent">
                  <p>90%</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        {/*  css */}

        <div className="skillpage2">
          <Card className="cardskill1">
            <Card.Body className="cardBody1">
              <div className="skill-Html">
                <div className="html-logo">
                  <DiCss3
                    className="Icons-Html"
                    style={{ fontSize: "50px",color:"white" }}
                  />
                </div>

                <div className="title1">
                  <p> CSS</p>
                </div>
              </div>
              <div className="skill-Container-slider1">
                <div className="linebar">
                  <LinearProgressWithLabel variant="determinate" value={90} />
                </div>
                <div className="percent">
                  <p>90%</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* JAVASCRIPT */}

        <div className="skillpage2">
          <Card className="cardskill1">
            <Card.Body className="cardBody1">
              <div className="skill-Html">
                <div className="html-logo">
                  <DiJavascript
                    className="Icons-Html"
                    style={{ fontSize: "50px",color:"white" }}
                  />
                </div>

                <div className="title1">
                  <p> JS</p>
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

        {/*   React */}
        <div className="skillpage2">
          <Card className="cardskill1">
            <Card.Body className="cardBody1">
              <div className="skill-Html">
                <div className="html-logo">
                  <DiReact
                    className="Icons-Html"
                    style={{ fontSize: "50px",color:"white" }}
                  />
                </div>

                <div className="title1">
                  <p> React</p>
                </div>
              </div>
              <div className="skill-Container-slider1">
                <div className="linebar">
                  <LinearProgressWithLabel variant="determinate" value={65} />
                </div>
                <div className="percent">
                  <p>65%</p>
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
