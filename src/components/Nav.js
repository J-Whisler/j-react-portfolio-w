import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import me from "../img/me.jpg";
const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={me} alt="me" />
        <h2>J.W.</h2>
      </Logo>

      <Links>
        <ul>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>My Projects</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>Contact Me</Link>
          </li>
        </ul>
      </Links>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled(motion.div)`
  min-height: 15vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: transparent;
  /* background: rgba(247, 186, 186, 0.685); */
  position: fixed;
  top: 0;
  left: -5rem;
  z-index: 10;
  img {
    height: 5rem;
    width: 5rem;
    background: transparent no-repeat center;
    background-size: cover;
    border-radius: 50%;
    border: 5px #810505 solid;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  h2 {
    position: relative;
    top: 0.5rem;
    left: 0.5rem;
    font-family: "Raleway", sans-serif;
    color: #810505;
  }
`;

const Links = styled(motion.div)`
  ul {
    display: flex;
    list-style: none;
    position: relative;
    left: 27rem;
    /* justify-content: space-around; */
  }

  li {
    padding-left: 4rem;
    position: relative;
    color: #810505;
    font-size: 1.3rem;
  }

  li:hover {
    cursor: pointer;
    color: black;
  }
`;

const Link = styled(motion.div)`
  /* display: flex; */
`;
