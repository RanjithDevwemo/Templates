import React from 'react'
// import img1 from "../assets/Images/banner-half-circle.png"
// import img1 from "../assets/Images/template/"
// import img2 from "../assets/Images/banner-title-icon.png"
import "../Css/Home.css"
const data=[
    {
        img:"/Images/banner1.jpg",
        heading:"Digital Transformation",
        value:"With world-class industry and technical expertise, Flyers Soft helps you to unlock maximum value across technology, data, and operations to accelerate your unique digital transformation."
    },
     {
        img:"/Images/banner2.jpg",
        heading:"Application Development",
        value:"Our application services integrate middleware  database, automation, maintenance, infrastructure and application transformation, as well as end-to-end seamless DevOps Processes."
    }, {
        img:"/Images/banner3.jpg",
        heading:"Product Engineering",
        value:"We function as an end-to-end product engineering partner and handle diverse aspects of the product lifecycle such as ideation & design, prototyping, full product development, launch, and scaling."
    }
]
export default function Home() {
  return (
    <div className="">
      <h1 className='box-h1'>Cart Design (Home)</h1>
    <div className='main-home'>
     

   {
                data.map((val,i) => (
                    <div key={i} className='box'>
                      <h1 className='box-h1'>{val.heading}</h1>
                   
                      {/* <div className="box-1"> */}
                        <img src={val.img} alt="" className='img1' />
                        <p>{val.value}</p>
                      </div>
                    // </div>
                ))
            }
          
</div>
</div>
  )
}
