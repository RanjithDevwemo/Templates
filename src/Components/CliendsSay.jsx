import React from 'react';
import img1 from "../assets/Images/facebook.png"
const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-image">
        <img src={testimonial.image} alt={testimonial.author} />
      </div>
      <div className="testimonial-content">
        <p>{testimonial.text}</p>
        <p>- {testimonial.author}</p>
        <div className="testimonial-rating">
          {renderStars(testimonial.rating)}
        </div>
      </div>
    </div>
  );
};

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} testimonial={testimonial} />
      ))}
    </div>
  );
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="star filled">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
  }
  return stars;
};

const Cliends = () => {
  const testimonials = [
    { 
      image:img1,
      text: "Great experience working with this company!",
      author: "John Doe",
      rating: 5
    },
    { 
      image: img1,
      text: "Their service exceeded my expectations.",
      author: "Jane Smith",
      rating: 4
    },
    { 
      image: img1,
      text: "I highly recommend their services.",
      author: "Alice Johnson",
      rating: 5
    }
  ];

  return (
    <div className="client-testimonials">
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default Cliends;
