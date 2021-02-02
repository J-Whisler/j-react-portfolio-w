import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import icelandBoat from "../img/Iceland-Boat.JPG";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <Title>
          <div className="hide">
            <h2>
              Hello, My name is <span>Jacob Whisler</span>
            </h2>
          </div>
          <div className="hide">
            <h4>I am a front-end web developer based in Cleveland, Ohio</h4>
          </div>
        </Title>
        <p>
          Click one of the links above to learn more about me, my work, or to
          find out how to get in contact with me!
        </p>
      </Description>
      {/* <div className="image">
          <img src="" alt=""/>
      </div>  */}
    </About>
  );
};

const About = styled(motion.div)`
  position: relative;
  height: 100vh;
  width: 100%;
  background: url(${icelandBoat}) no-repeat center center/cover;
  background-color: #f59087;
  /* background-color: #6d5555; */
  background-blend-mode: darken;
  z-index: -1;
`;

const Description = styled(motion.div)`
  position: fixed;
  top: 30%;
  left: 14%;
  z-index: 10;
  p {
    font-size: 1.4rem;
    margin-top: 3rem;
  }
`;

const Title = styled(motion.div)`
  h2 {
    font-size: 2.5rem;
    letter-spacing: 0.3rem;
  }
  h4 {
    font-size: 1.7rem;
    font-weight: 400;
  }
  span {
    color: #8a0808;
    letter-spacing: 0.4rem;
  }
`;

export default AboutSection;
