import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Skill from '../Skill/Skill';

function Home2() {
  return (
  
    <Container   className="home-about-section" id="about">
      <div className="home-about-description ml-auto mr-auto">
            <h1>My, Myself & I </h1>
    <p className="home-about-body ml-auto mr-auto">
            I’m a Software Developer located in New Delhi.  
            I am passionate about problem solving and building excellent software that improves the lives of the peoples.
            I like doing personal projects, which you will find in the project section of this website. 
            My specialties can be found on the homepage, of which mostly comprises of Full Stack Developement and  block chain developement.
      <br /> <br /> <br />    Apart from coding, some other activities that I love to do!<br />
              Playing Chess <br />
              Internet Surfing<br />
              Travelling <br />
              </p>
               </div>
       
     
         <Skill />
      
        
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/tpandey495"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/tpandey495"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tpandey495/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tpandey495/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      
    </Container>
    
  );
}
export default Home2;
