import React from 'react'
import headimg from "../assets/Images/banner-title-icon.png"
import { IoIosArrowRoundDown } from "react-icons/io";
import "../Css/Career.css"

export default function Career() {
  return (
    <div className='main-career'>
        <div className="career-sec1">
      <p>READY TO CREATE SOMETHING AMAZING?</p>
<h1 className='blog-h1'><span><img src={headimg} alt="Logo-imag" className='blog-logo' /></span> Work with us</h1>
<p>You're going to need a big smile, a small ego, and a bucketload of curiosity and drive. It all starts here. 
    Join our team of hybrid, diverse talents to challenge the status quo and solve problems</p>
      <button className='career-btn'>View Current Openings <span><IoIosArrowRoundDown className='career-icon'/></span></button>
      </div>

      <div className="career-sec2">
        <h1 className='career-h1'>Why Join Us?</h1>
        <ul className='career-ul'>
            <li>We believe in justifying the time and energy our employees choose to invest in us by creating an 
                amazing environment to them to learn and grow.​</li>
            <li>As part of our global, entrepreneurial team, you’ll become a part of the innovation from day one.
                 We’re looking for individuals who challenge the norm, and constantly strive to 
                build something new for the firm and the world around us.​</li>
            <li>The plethora of some of the perks and benefits listed below are simply an extension of our belief.</li>
        </ul>
      </div>
    </div>
  )
}
