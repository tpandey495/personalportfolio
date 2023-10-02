import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Capture from "Assets/Projects/Capture.png";
import clothify from "Assets/Projects/clothify.png";
import tutedude from 'Assets/Projects/tutedude.png';
import retink from "Assets/Projects/retink.png";
import meetfrontend from 'Assets/Projects/meetfrontend.png';

const Projects=()=>{
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
            Projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Capture}
              isBlog={false}
              title="Task Exhibitor"
              description="Task Exhibitor is task and project management system designed to divide and
              prioritize task in way that make individual and organization more productive and focused.."
              link="https://github.com/praveen4star/Tracker"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clothify}
              isBlog={false}
              title="Clothify"
              description="Clothify a market place to buy and sell fancy clothes.It provides basic feature of ecommerce store."
              link="https://clothifystore.onrender.com/"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Frontend <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retink}
              isBlog={false}
              title="Retink"
              description="Hghly scalable YouTube clone app built  using modern web technologies, including React, Redux, and Tailwind CSS, and is powered by YouTube API v3. It offers an array of features, such as the ability to search and watch videos, live chat with other users, and discover related videos."
              link="https://tarunyoutube.netlify.app/"
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutedude}
              isBlog={false}
              title="Task Exhibitor"
              description="Task Exhibitor is task and project management system designed to divide and
              prioritize task in way that make individual and organization more productive and focused.."
              link="https://tutedudereact.netlify.app/"
            />
          </Col>
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meetfrontend}
              isBlog={false}
              title="Clothify"
              description="Clothify a market place to buy and sell fancy clothes.It provides basic feature of ecommerce store."
              link="https://clothifystore.onrender.com/"
            />
          </Col>
        </Row>
      </Container>

    </Container>
  );
}

export default Projects;
