import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import './Skill.css';


function About() {
  return (
    
    <Container fluid className="skill-section">
       <Particle />
      <section className="skills" id="skills">
       <div className="max-width">
          <h2 className="title">My skills</h2>
        <div className="skills-content">
          
          <Row>
            <Col md={5}   className="tpp"  style={{justifyContent: "center",paddingTop: "30px",paddingBottom: "50px"}}>
                <div className="column left">
                  <div className="text">My creative skills &amp; experiences.</div>
                  <p>From the start of my college, I started exploring a wide range of 
                    technologies, but i found myself interested in Frontend. To deepen 
                    my understanding, I dedicated myself to developing minor projects 
                    and have now embarked on a major project called Task Exhibitor. 
                    This project aims to integrate a project management app with a to-do 
                    app to enhance productivity and help people focus on their goals. Moreover, 
                    I had the opportunity to intern in full stack development, which allowed me 
                    to work on an HR management system (HRMS). My role in this project was to 
                    automate various HR tasks, which I accomplished through developing the system's software. 
                  </p>
                </div> 
            </Col>
            <Col md={4} className="tpp" style={{justifyContent: "center",paddingTop: "30px",paddingBottom: "50px"}}>
              <div className="column right">
                <div className="bars">
                  <div className="info">
                    <span>HTML</span>
                    <span>90%</span>
                  </div>
                  <div className="line html" />
                </div>
                <div className="bars">
                  <div className="info">
                    <span>CSS</span>
                    <span>80%</span>
                  </div>
                <div className="line css" />
              </div>
            
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>80%</span>
                </div>
                <div className="line js" />
              </div>
            
              <div className="bars">
                <div className="info">
                  <span>React Js</span>
                  <span>80%</span>
                </div>
                <div className="line js" />
              </div>


              <div className="bars">
                <div className="info">
                  <span>Node js</span>
                  <span>60%</span>
                </div>
                <div className="line php" />
              </div>

              
              <div className="bars">
                <div className="info">
                  <span>MySQL</span>
                  <span>60%</span>
                </div>
                <div className="line mysql" />
              </div>
            </div>
            </Col>
            </Row> 

            </div>
            </div>
      </section>

      </Container>
    
  );
}

export default About;
