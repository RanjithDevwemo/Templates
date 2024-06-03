// src/ContactForm.js
import React, { useState } from 'react';
import "../Css/CantactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact">  
    <h1 className='con-heading'>Contact Form</h1> 
     <form className="contact-form" onSubmit={handleSubmit}>
        
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.65421689759!2d76.94115057355631!3d11.064530353816503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f61886215a79%3A0xfb7eab437542826a!2sDevwemo%20Techn
    ologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1717417085753!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"
   referrerPolicy="no-referrer-when-downgrade" title='esponsive google map'></iframe> */}
    </div>

  );
};

export default ContactForm;
