import React from "react";
import "./index.css";
import { Element } from "react-scroll";

function index() {
  return (
    <Element id="about" className="aboutE">
      <div className="about">
        <div className="aboutMe">
          <h1>
            <u>About Me</u>
          </h1>
        </div>
        <div className="abtMe">
          <h4>Hai,I am Sridhar</h4>
          <p>
            I learn the basics of <span>HTML,CSS ,JAVASCRIPT and REACT </span>{" "}
          </p>
        </div>
      </div>

      
    </Element>
  );
}

export default index;
