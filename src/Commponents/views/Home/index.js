import React from 'react';
import "./index.css";
import { Element } from "react-scroll";
import { Button } from "react-bootstrap";



function Index() {

  
   return (
      <Element id="home" className="homeE" >
        
            <div className="homepage"
               >


               <h1>Hai. I am <span> Sridhar</span></h1>
               <p>I am a React-Developer</p>
               <a href="https://api.whatsapp.com/send?phone=918754892297">
                  <Button className="btn-Contact">Contact Me</Button></a>
         
         </div>

      </Element>



   )
}

export default Index
