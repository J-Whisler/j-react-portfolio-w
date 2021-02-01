import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import icelandBoat from "../img/Iceland-Boat.JPG";

const AboutSection = () => {
  return (
    <About>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>
              Hello, My name is <span>Jacob Whisler</span>
            </h2>
          </div>
          <div className="hide">
            <h2>I am a front-end web developer</h2>
          </div>
        </div>
        <p>
          Click one of the links above to learn more about me, my work, or to
          find out how to get in contact with me!
        </p>
      </div>
      {/* <div className="image">
          <img src="" alt=""/>
      </div>  */}
    </About>
  );
};

const About = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background: url(${icelandBoat}) no-repeat center center/cover;
`;

export default AboutSection;
