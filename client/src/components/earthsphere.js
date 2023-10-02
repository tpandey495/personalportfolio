import React from 'react'
import Sphere from 'Assets/images/Sphere.png';
import "styles/earthsphere.css";

const EarthSphere = () => {
  return (
    <>
   <div className="earth-sphere">
      <img src={Sphere} alt="sphere" />
   </div>
   </>
  )
}

export default EarthSphere;

