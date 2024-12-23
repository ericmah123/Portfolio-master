import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aspiring Software Developer, Data Analyst, Product Manager, and Tech Salesman — exploring various career paths in tech!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 75, // Adjust typing speed here
        pauseFor: 2000, // Pause for 2 seconds after the string is fully typed
      }}
    />
  );
}

export default Type;
