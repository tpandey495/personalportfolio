import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "components/ProjectCards";
import Particle from "components/Particle";
import Capture from "Assets/Projects/Capture.png";
import clothify from "Assets/Projects/clothify.png";
import tutedude from 'Assets/Projects/tutedude.png';
import retink from "Assets/Projects/retink.png";
import meetfrontend from 'Assets/Projects/meetfrontend.png';
import 'styles/Project.css';

const Projects=()=>{
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <h2 style={{ color: "white" }}>
            Projects
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Capture}
              isBlog={false}
              title="Task Exhibitor"
              description="Task Exhibitor is task and project management system designed to divide and
              prioritize task in way that make individual and organization more productive and focused.."
              link="https://taskexhibitor.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clothify}
              isBlog={false}
              title="Clothify"
              description="Clothify a market place to buy and sell fancy clothes.It provides basic feature of ecommerce store."
              link="https://clothifystore.netlify.app/"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Frontend <strong className="purple">Design</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retink}
              isBlog={false}
              title="Retink"
              description="As part of a  assignment, Developed  landing page for 'Retink' using the  ReactJS framework, focusing on maximizing reusability and maintaining best practices in web development."
              link="https://github.com/tpandey495/retink"
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutedude}
              isBlog={false}
              title="Tute Dude"
              description="Created the TuteDude Dashboard as an assignment, leveraging the power of React JS. This carefully crafted dashboard serves as a dynamic platform designed to offer a rich and user-friendly experience."
              link="https://tutedudereact.netlify.app/"
            />
          </Col>
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meetfrontend}
              isBlog={false}
              title="Meet  Dashboard"
              description="Dashboard, developed as part of a assignment, provides a  candidate profile for job applications, presenting crucial personal information, qualifications, work experience, and key skills in an organized, accessible format."
              link="https://github.com/tpandey495/meet-frontend-assesment"
            />
          </Col>
        </Row>
      </Container>

    </Container>
  );
}

export default Projects;
