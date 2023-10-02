import React from "react";
import Typewriter from "typewriter-effect";
import "styles/typewriter.css";
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Full Stack Dev"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;