import React from "react";
import "./index.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-scroll";
import Home from "../views/Home/index";


function index() {
  return (
    <div className="Container"  >
      <div className="logo">
        <img src={logo} alt="image" />
        <Link to="home" smooth={true} duration={1200}>
        <h1>Sridhar</h1>
        </Link>
      </div>
   
   
      <div className="Content-side" >
      
        <Link to="about" smooth={true} duration={1200}>
           <h3>About Me</h3>
        </Link>
        <Link to="skills" smooth={true} duration={1200}>
           <h3>Skills</h3>
        </Link>
        <Link to="contact" smooth={true} duration={1200}>
           <h3>Contact </h3>
        </Link>
      </div>

    </div>
  );
}

export default index;
