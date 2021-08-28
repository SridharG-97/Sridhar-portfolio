import React from 'react';
import "./index.css";
import { Element } from "react-scroll";
import img2 from "../../assets/home2.jpg";
import { Button } from "react-bootstrap"


function index({ children }) {
   return (
      <Element id="home" className="homeE" >
         <div className="homepage">


            <h1>Hai. I am <span> Sridhar</span></h1>
            <p>I am a React-Developer</p>
            <a href="https://api.whatsapp.com/send?phone=91874892297">
               <Button className="btn-Contact">Contact Me</Button></a>
         </div>






      </Element>



   )
}

export default index
