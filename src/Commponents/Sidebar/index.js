import React from "react";
import "./index.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-scroll";
import Home from "../views/Home/index";


function index() {
  return (
    <div className="Container"  sm="6">
      <div className="logo">
        <img src={logo} alt="image" />
        <h1>Sridhar.G</h1>
      <b>   <hr/></b>
      </div>
   
   
      <div className="Content-side">
        <Link to="home" smooth={true} duration={500}>
           <h3>Home</h3>
        </Link>
        <Link to="about" smooth={true} duration={500}>
           <h3>About Me</h3>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
           <h3>Skills</h3>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
           <h3>Contact </h3>
        </Link>
      </div>

    </div>
  );
}

export default index;
