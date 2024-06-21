import React from 'react'
import logo from "../assets/Images/flyers-soft-footer-logo.svg"
import "../Css/Footer.css"

export default function FooterCurve() {
  return (
    <div>
       
    <div className='footer'>
        
      <div className='f-con'>
        <img src={logo} alt='logo'className='logo-footer' />
        <p>Our Clinic has grown to provide a world class facility for the <br></br>
            clinic advanced restorative dentistry.<br></br>
             We are among the most qualified implant providers in the aus.</p>
      </div>
      <div className='f-con'>
        <h3 className='f-h1'>Departments</h3>
     <ul>
     <li>Laser Gum Surgery
</li>
     <li>Laser Depigmentation</li>
     <li>Laser Teeth Whitening</li>
 
 
     </ul>
      </div>
      <div className='f-con'>
        <h3 className='f-h1'>Contact Us</h3>
        <address>
            <ul className='address'>
       <li> Kodambakkam(Near Gokulam Signal)</li>
       <li>  No.28, 1st Cross Street, Trust Puram,</li>
       <li>Kodambakkam, Chennai-600024.</li>
       <li>For Appointment : +91 97908 97502</li>
</ul>
        </address>
      </div>

      </div>
      <div className="copy">
      Copyright © 2024 
      </div>
    </div>
  )
}
