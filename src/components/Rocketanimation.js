import React from 'react';
import rocket from "Assets/images/landing-rocket@2x.webp"
 import 'styles/Rocketanimation.css';
const Rocketanimation = () => {
  return (
    <div>
      <div className="rocket-img">
        <img src={rocket} alt="rocket" />
      </div>
    </div>
  )
}

export default Rocketanimation;