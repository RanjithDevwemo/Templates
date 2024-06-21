import React,{useState,useEffect} from 'react'

import "../Css/FlyHome.css"
import img1 from "../assets/Images/banner-half-circle.png"
import img2 from "../assets/Images/banner-title-icon.png"

export default function FlyerHome() {
  const texts = ["Technology", "invisuvalization", "Innovation"]; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
   
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); 
        setFade(true); 
      }, 1000); 
    }, 3000); 


    return () => clearInterval(interval); 
  }, [texts.length]);

  return (
    <div className='flyerhome-main'>
        <div className="flyerhome-sec1">
        <p className='flyer-p1'>INNOVATIVE SOFTWARE SOLUTIONS</p>
      <h1 className='fade-h'>We Empower businesses <span><img src={img1} alt="banner-half-circle" /></span></h1>
      <div className='fade-h1 fade-h'><span className='attach'>
  <span className='fade-fix'><img src={img2} alt="banner-title-icon" className='banner-title-icon'/> With</span >
       <span className={fade ? "fade-in" : "fade-out"}> {texts[currentIndex]}</span></span> </div> 
       <button className='flyer-btn'>Contact Us !</button>
     
    </div>

    </div>

  )
}
