// import React from "react";
// import {
 
//   NavDropdown,
//   Col,
//   Row,
//   Container,
//   Dropdown,
// } from "react-bootstrap";
// // import { Link } from "react-router-dom";
// // import "./home.css";
// // import "../Css/Megamenu.css"
// import "../Css/Megamenu.css"
// export function Megamenu() {
//   return (
  
  
     


//               <NavDropdown
//                 // className="pr-2 py-2 align-text-top"
//                 className="drop"
//                 title="women"
              
//               >
//                 <Container className="container">
//                   <Row className="row">
//                     <Col  className="col">
//                       <Dropdown.Header>Catering</Dropdown.Header>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link" role="button">
//                             Corporate
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link" role="button">
//                             Private
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                       <Dropdown.Divider />
//                       <Dropdown.Header>
//                         {/* <FontAwesomeIcon
//                           color="black"
//                           icon={"chalkboard-teacher"}
//                           size="1x"
//                           className="pr-1"
//                         /> */}
//                         {"  "}
//                         Classes
//                       </Dropdown.Header>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link" role="button">
//                             Barista 101
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link" role="button">
//                             History of Coffee
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link" role="button">
//                             Intro to Cafe Snobbery
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                       <Dropdown.Divider />
//                     </Col>

//                     <Col className="col" >
//                       <Dropdown.Header>
//                         {/* <FontAwesomeIcon
//                           color="black"
//                           icon={"building"}
//                           size="1x"
//                           className="pr-1"
//                         /> */}
//                         {"  "}
//                         Rentals
//                       </Dropdown.Header>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link" role="button">
//                             Fireside
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link" role="button">
//                             Roasting
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                       <Dropdown.Divider />
//                       <Dropdown.Header>
//                         {/* <FontAwesomeIcon
//                           color="black"
//                           icon={"sun"}
//                           size="1x"
//                           className="pr-1"
//                         /> */}
//                         {"  "}
//                         Seasonal
//                       </Dropdown.Header>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link" role="button">
//                             Coldbrew 
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link " role="button">
//                             Campfire Coffee Class
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                     </Col>
//                     <Col className="col">
//                       <Dropdown.Header>
//                         {/* <FontAwesomeIcon
//                           color="black"
//                           icon={"building"}
//                           size="1x"
//                           className="pr-1"
//                         /> */}
//                         {"  "}
//                         Rentals
//                       </Dropdown.Header>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link" role="button">
//                             Fireside Room
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link" role="button">
//                             Roasting Room
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                       <Dropdown.Divider />
//                       <Dropdown.Header>
//                         {/* <FontAwesomeIcon
//                           color="black"
//                           icon={"sun"}
//                           size="1x"
//                           className="pr-1"
//                         /> */}
//                         {"  "}
//                         Seasonal
//                       </Dropdown.Header>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link" role="button">
//                             Coldbrew Night
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                       <Dropdown.Item>
//                         <div className="NavLink">
//                           <a className="nav-link text-wrap" role="button">
//                             Campfire Coffee Class
//                           </a>
//                         </div>
//                       </Dropdown.Item>
//                     </Col>
//                   </Row>
//                 </Container>
//               </NavDropdown>
//   );
// }


// import React, { useState } from 'react';
// // import './Menu.css'; // Assuming you have a CSS file for styling

// const Megamenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <img src="logo.png" alt="Logo" className="logo" />
//         <button className="menu-toggle" onClick={toggleMenu}>
//           <span className="menu-icon"></span>
//         </button>
//       </div>
//       <ul className={`menu ${isOpen ? 'open' : ''}`}>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Services</a></li>
//         <li className="mega-menu">
//           <a href="#">Mega Menu</a>
//           <div className="mega-menu-content">
//             <div className="row">
//               <div className="column">
//                 <ul>
//                   <li><a href="#">Link 1</a></li>
//                   <li><a href="#">Link 2</a></li>
//                   <li><a href="#">Link 3</a></li>
//                 </ul>
//               </div>
//               <div className="column">
//                 <ul>
//                   <li><a href="#">Link 4</a></li>
//                   <li><a href="#">Link 5</a></li>
//                   <li><a href="#">Link 6</a></li>
//                 </ul>
//               </div>
//               <div className="column">
//                 <ul>
//                   <li><a href="#">Link 7</a></li>
//                   <li><a href="#">Link 8</a></li>
//                   <li><a href="#">Link 9</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Megamenu;
