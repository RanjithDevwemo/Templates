

import React from 'react';
import Marquee from 'react-fast-marquee';
import "../Css/BrandsSlider.css"

import img1 from "../assets/Images/mi.png"
import img2 from "../assets/Images/amazon.png"
import img3 from "../assets/Images/google.png"
import img4 from "../assets/Images/facebook.png"



function ImageScroll() {
  return (
    <div className="brandscroll-App">
      <h1 className='brand-h1'>Trusted by Great Brands</h1>
      <p className='brand-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa nesciunt blanditiis, 
        ea necessitatibus voluptatum ut magnam consequatur assumenda nobis laboriosam vitae! Quas 
        fugit sapiente perspiciatis dicta laboriosam temporibus voluptatum?</p>
  

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
        </Marquee>

        <br />
        <br />
        <Marquee direction="left" speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default ImageScroll;