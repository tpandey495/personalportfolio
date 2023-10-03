import React from 'react'
import earth from 'Assets/images/earth.png';
import 'styles/earthanimation.css';

const EarthAnimation = () => {
  return (
    <div className="earth-animation">
        <img src={earth} alt="earth" className="earth-image"/>
    </div>
  )
}

export default EarthAnimation;