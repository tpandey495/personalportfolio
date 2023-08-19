import React from 'react'
import Type from './Type';

const Indroduction= () => {
  return (
    <div className="home-content">
       <div>
        <div className="home-header">
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
            <div style={{ padding: 50}}>
            <Type />
            </div>  
        </div>
        </div>
    </div>
    )
}

export default Indroduction;


