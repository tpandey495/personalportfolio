import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mstmovie from "../../Assets/Projects/mstmovie.png";
import travel from "../../Assets/Projects/travel.png";
import amazingui from "../../Assets/Projects/ama.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
           Frontend  Projects
        </p>

         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link=""
            />
          </Col> */}


<Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel  Website"
              description="Full-stack web application using JavaScript serving  Youtube API with React as the frontend."
              link="https://github.com/tpandey495/Travel-Blogging-Website"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazingui}
              isBlog={false}
              title="Amazing Ui"
              description="Website containing  card , login as modal , Navbar , footer wave svg."
                            link="https://amazinguiandux.netlify.app/"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mstmovie}
              isBlog={false}
              title="Blogging Website Template"
              description="Blogging website Template with interactive Ui built using HTML , Css , Bootstrap and JavaScript."
              link="https://github.com/tpandey495/-Blogging-Website-template"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
