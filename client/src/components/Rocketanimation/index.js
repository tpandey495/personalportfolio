import React from 'react';
import rocket from "Assets/images/landing-rocket@2x.webp"
import './index.css';
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