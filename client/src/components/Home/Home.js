import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/images/Sajawat.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";


function Home() {
  return (
<>
    <section>
    <Particle />
       
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" >
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Tarun Pandey</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            </Row>
</Container>
</section>



<div  className="home-section" id="home">
  <img
  src={homeLogo}
  alt="home pic"
  className="img-fluid"
  />
</div>

<Home2 />
    
    </>
  );
}

export default Home;
