import React from "react";
import "./index.css";
import { Element } from "react-scroll";
import LinearProgressWithLabel from "@material-ui/core/LinearProgress";

function index() {
  return (
    <Element id="skills" className="skillE">
      <div className="skill-title">
        <h1>Skill Set</h1>
      </div>
      <div className="skillsetM">
      <div className="skillpage">
         <div className="skill-Icon">
        {/* <img src="" alt="icon" /> */}
        <h4>HTML</h4>
        </div>

        <div className="skill-Container-slider1">
        <LinearProgressWithLabel value={50} />
        
        </div>
      </div>
      <div className="skillpage">
      <div className="skill-Icon">
        {/* <img src="" alt="icon" /> */}
        <h4>CSS</h4>
        </div>
        <div className="skill-Container-slider2">
        <LinearProgressWithLabel value={80} />
        </div>
      </div>
      <div className="skillpage">
      <div className="skill-Icon">
        {/* <img src="" alt="icon" /> */}
        <h4>JavaScript</h4>
        </div>
        <div className="skill-Container-slider3">
        <LinearProgressWithLabel value={70} />
        </div>
      </div>
      <div className="skillpage">
      <div className="skill-Icon">
        {/* <img src="" alt="icon" /> */}
        <h4>REACT</h4>
        </div>
        <div className="skill-Container-slider4">
        <LinearProgressWithLabel value={60} />
        </div>
      </div>
      </div>
    </Element>
  );
}

export default index;
