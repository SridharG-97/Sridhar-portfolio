import React, { useEffect } from "react";
import "./index.css";
import { Element } from "react-scroll";
import LinearProgressWithLabel from "@material-ui/core/LinearProgress";
import { DiJavascript, DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { Card } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



function Index() {

  const { ref, inView } = useInView({
    threshold: 0.1,

  });
  const animation = useAnimation();
  useEffect(() => {
    console.log("sss", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring", duration: 2 , bounce: 0.1, ease: "easeOut",
        },
        display:"flex"
      });
    }else{
      animation.stop({x:0})
    }
    if (!inView) {
      animation.start({ x: "-15vw" ,})
    }

  }, [inView])



  return (
    <Element id="skills" className="skillE">
      <div className="skill-title">
        <h1>React Skills </h1>
      </div>

      <div ref={ref} className="skillsetM"
      >
        


        {/* REACT -Basic */}


        < motion.div className="skillpage2"
          animate={animation}
        >
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
        </motion.div>

        {/* React Hooks */}


        <motion.div className="skillpage2"
          animate={animation}

        >
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
        </motion.div>

        {/* AXIOS */}

        <motion.div className="skillpage2"
          animate={animation}
        >
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
        </motion.div>

        {/* React  Bootstrap */}

        <motion.div className="skillpage2"
          animate={animation}
        >
          <Card className="cardskill1">
            <Card.Body className="cardBody1">
              <div className="skill-Html">
                <div className="html-logo">

                </div>

                <div className="title1">
                  <p> React <br /> Bootstrap</p>
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
        </motion.div>




      </div>

    </Element>
  );
}

export default Index;
