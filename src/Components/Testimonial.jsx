// import React, { useState, useEffect } from 'react';
// // import './Slider.css'; // Assuming you have a CSS file for styling
// import "../Css/Testimonial.css"

// const members = [
//   {
//     id: 1,
//     name: "John Doe",
//     position: "Developer",
//     image: "member1.jpg"
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     position: "Designer",
//     image: "member2.jpg"
//   },
//   {
//     id: 3,
//     name: "Mark Johnson",
//     position: "Manager",
//     image: "member3.jpg"
//   },
//   {
//     id: 4,
//     name: "Emily Brown",
//     position: "Marketing",
//     image: "member4.jpg"
//   },
//   {
//     id: 5,
//     name: "Michael Clark",
//     position: "Engineer",
//     image: "member5.jpg"
//   },
//   {
//     id: 6,
//     name: "Sarah Wilson",
//     position: "Analyst",
//     image: "member6.jpg"
//   },
// ];

// const Testimonials = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide(prevSlide => (prevSlide + 1) % members.length);
//     }, 5000); // Change slide duration (milliseconds)
    
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide(prevSlide => (prevSlide + 1) % members.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(prevSlide => (prevSlide - 1 + members.length) % members.length);
//   };

//   return (
//     <div className="slider">
//       <button className="arrow left" onClick={prevSlide}>{'<'}</button>
//       <div className="slides-container">
//         <div className="slides" style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
//           {members.map(member => (
//             <div className="slide" key={member.id}>
//               <img src={member.image} alt={member.name} className="slide-image" />
//               <div className="slide-details">
//                 <p className="slide-name">{member.name}</p>
//                 <p className="slide-position">{member.position}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="arrow right" onClick={nextSlide}>{'>'}</button>
//     </div>
//   );
// };

// export default Testimonials;



import React, { useState, useEffect } from 'react';
// import './Slider.css'; // Assuming you have a CSS file for styling
import "../Css/Testimonial.css"
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'; // Assuming you have arrow icons imported

const members = [
  {
    id: 1,
    name: "John Doe",
    position: "Developer",
    image: "member1.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Designer",
    image: "member2.jpg"
  },
  {
    id: 3,
    name: "Mark Johnson",
    position: "Manager",
    image: "member3.jpg"
  },
  {
    id: 4,
    name: "Emily Brown",
    position: "Marketing",
    image: "member4.jpg"
  },
  {
    id: 5,
    name: "Michael Clark",
    position: "Engineer",
    image: "member5.jpg"
  },
  {
    id: 6,
    name: "Sarah Wilson",
    position: "Analyst",
    image: "member6.jpg"
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % members.length);
    }, 5000); // Change slide duration (milliseconds)

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % members.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + members.length) % members.length);
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}><BsArrowLeft /></button>
      <div className="slides-container">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
          {members.map((member, index) => (
            <div className="slide" key={member.id}>
              <img src={member.image} alt={member.name} className="slide-image" />
              <div className="slide-details">
                <p className="slide-name">{member.name}</p>
                <p className="slide-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right" onClick={nextSlide}><BsArrowRight /></button>
    </div>
  );
};

export default Testimonials;
