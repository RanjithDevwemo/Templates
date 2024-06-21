import React from 'react'

import { FaAtom ,FaAppStoreIos,FaBrave, FaArchway,FaApple,FaCentos  } from "react-icons/fa6";

// import ImageWithContent from "./ImageWithContent"

// import img1 from "../assets/Images/banner-half-circle.png"
// import img1 from "../assets/Images/template/"
// import img2 from "../assets/Images/banner-title-icon.png"
// import "../Css/Home.css"
import "../Css/Card.css"
import FadeAnimation from './FadeAnimation';
// import Cliends from './CliendsSay';

import AboutUs from './AboutUs';
const data=[
    {
        icon:<FaApple/>,
        heading:"Web Design",
        value:"With world-class industry and technical expertise, Flyers Soft helps you to unlock maximum value across technology, data, and operations to accelerate your unique digital transformation."
    },
     {
        icon:<FaAppStoreIos />,
        heading:"Application Development",
        value:"Our application services integrate middleware  database, automation, maintenance, infrastructure and application transformation, as well as end-to-end seamless DevOps Processes."
    }, {
        icon:<FaArchway />,
        heading:"Product Engineering",
        value:"We function as an end-to-end product engineering partner and handle diverse aspects of the product lifecycle such as ideation & design, prototyping, full product development, launch, and scaling."
    },
    {
      icon:<FaAtom />,
      heading:"Digital Transformation",
      value:"With world-class industry and technical expertise, Flyers Soft helps you to unlock maximum value across technology, data, and operations to accelerate your unique digital transformation."
  },
   {
      icon:<FaBrave />,
      heading:"Application Development",
      value:"Our application services integrate middleware  database, automation, maintenance, infrastructure and application transformation, as well as end-to-end seamless DevOps Processes."
  }, {
      icon:<FaCentos />,
      heading:"Product Engineering",
      value:"We function as an end-to-end product engineering partner and handle diverse aspects of the product lifecycle such as ideation & design, prototyping, full product development, launch, and scaling."
  }
]
export default function Card1() {
  return (
<div className="card1">
    <div className="home">
      <h1 className='box-h1'>Cart Design (Home)</h1>
    <div className='main-home'>
     

   {
                data.map((val,i) => (
                    <div key={i} className='box'>
                      <h1 className='box-h1'>{val.heading}</h1>
                   
                      {/* <div className="box-1"> */}
                        <div  className='img1'>{val.icon}</div>
                        <p className='box-p'>{val.value}</p>
                      </div>
                    // </div>
                ))
            }
          
</div>
</div>

<FadeAnimation/>


<AboutUs/>
</div>
  )
}
