// src/ContactForm.js
import React, { useRef } from 'react';
import "../Css/CantactForm.css"
import emailjs from '@emailjs/browser';
// import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
  const form = useRef();





  



  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    emailjs
    .sendForm('service_s8pt2vu', 'template_vce6193', form.current, {
      publicKey: 'bUl4s3GGAciJWcboD',
    })
    .then(
      () => {
        console.log('SUCCESS!');alert("your message sent successfully")
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  };

  return (
    <div className="contact">  

    <div className="contact-con1">


      <div className="con-sub1">
    <h1 className='con-heading'>Contact Us</h1> 
     <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        
      <div className="form-group">
     
        <input
        placeholder='FirstName'
          type="text"
          id="firstname"
          name="first_name"
     
        
   
        />
       
        <input
        placeholder='LastName'
          type="text"
          id="lasttname"
          name="lastName"
   
  
        />

      </div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
       
        />

<input
          type="number"
          id="phone"
          name="phone"
          placeholder='Phone Number'
     
        />
      </div>
      <div className="form-group">
      
        <textarea
        placeholder='Message'
          id="message"
          name="message"
      
        ></textarea>
      </div>


      <div className="form-group">
      <button type="submit" className='contact-btn'>Submit</button>
      </div>
    </form>
    </div>
    <div className="contact-con2">
   
   
      <ul>
        <li className='ul-h1'> For General and Business Enquiries</li>
        <li>info@flyerssoft.com</li>
        <li>For Career Opportunities</li>
        <li>careers@flyerssoft.com</li>
      </ul>
    
    
    <ul>
   <li>4th Floor, 1561, </li> 
   <li>Phase 3, Jayanagar,</li>
   <li>  Bengaluru, Karnataka - 560069</li>

     <li>+911020304050</li>
     </ul>
    
      
 
    </div>
    </div>
    <div className="map-con">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.65421689759!2d76.94115057355631!3d11.064530353816503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f61886215a79%3A0xfb7eab437542826a!2sDevwemo%20Techn
    ologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1717417085753!5m2!1sen!2sin" width="600" height="450" className='map' allowFullScreen="" loading="lazy"
   referrerPolicy="no-referrer-when-downgrade" title='esponsive google map'></iframe>
</div>
    </div>

  );
};

export default ContactForm;
