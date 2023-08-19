import React from "react";
import Particle from "components/Particle";
import Introduction from "components/Introduction";
import Rocketanimation  from "components/Rocketanimation";
import EarthAnimation from "components/EarthAnimation";
import EarthSphere from "components/EarthSphere";
import About from "components/About";

function Home() {
  return (
    <>
    <Particle />
    <div className="Carousel">
      <Introduction />
      <Rocketanimation />
      <EarthAnimation />
    </div>
    <EarthSphere />
    <About />
    </>
  );
}

export default Home;
