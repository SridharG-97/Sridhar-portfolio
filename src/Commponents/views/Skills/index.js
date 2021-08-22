import React from "react";
import "./index.css";
import { Element } from "react-scroll";
import LinearProgressWithLabel from "@material-ui/core/LinearProgress";
import { FaReact } from "react-icons/fa";
import { SiHtml5, SiCss3 } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import Layout from "../../Layout/index"

function index() {
  return (
    <Element id="skills" className="skillE">
      <div className="skill-title">
        <h1>Skill Set</h1>
      </div>
      <div className="skillsetM">
        <div className="skillpage">
          <div className="skill-Html">
            <div className="html-logo">
              <SiHtml5 className="Icons-Html" style={{ fontSize: "50px" }} />
            </div>
            <div className="title1">
              <p> HTML</p>
            </div>
          </div>
          <div className="skill-Container-slider2">
            <div className="linebar2">
              <LinearProgressWithLabel variant="determinate" value={90} />
            </div>
            <div className="percent2">
              <p>90%</p>
            </div>
          </div>
        </div>

        {/*  css */}

        <div className="skillpage">
          <div className="skill-css">
            <div className="CSS-logo">
              <SiCss3 className="Icons-Css" style={{ fontSize: "50px" }} />
            </div>
            <div className="title2">
              <p> CSS</p>
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
        </div>

        {/* JAVASCRIPT */}

        <div className="skillpage">
          <div className="skill-css">
            <div className="html-logo">
              <DiJavascript
                className="Icons-js"
                style={{ fontSize: "60px", paddingRight: "10px" }}
              />
            </div>
            <div className="title3">
              <p> Js</p>
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
        </div>

        {/*   React */}
        <div className="skillpage">
          <div className="skill-react">
            <div className="CSS-logo">
              <FaReact className="Icons-Css" style={{ fontSize: "50px" }} />
              
            </div>
            <div className="title4">
              <p> React</p>
            </div>
          </div>
          <div className="skill-Container-slider4">
            <div className="linebar4">
              <LinearProgressWithLabel variant="determinate" value={60} />
            </div>
            <div className="percent4">
              <p>60%</p>
            </div>
          </div>
        </div>
        
      </div>


    </Element>
  );
}

export default index;
