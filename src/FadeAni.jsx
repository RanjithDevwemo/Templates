import React, { useState, useEffect } from 'react';

import "./Css/FadeAni.css"

function FadeAni() {
  const texts = ["Text 1", "Text 2", "Text 3"]; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); 
        setFade(true); // Start fade-in animation
      }, 1000); // Wait for fade-out animation duration
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup function
  }, [texts.length]);

  return (
    <div className="App">
      <h1 className={fade ? "fade-in" : "fade-out"}>{texts[currentIndex]}</h1>
    </div>
  );
}

export default FadeAni;
