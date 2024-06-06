import React from 'react'
import { FaOldRepublic } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiHotwire } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { FaMicrosoft } from "react-icons/fa6";
import "../Css/Services.css"
const val=[
    {
        icon:<FaOldRepublic />,
        head:"IIoT Solutions",
        para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus est vel nobis laborum, amet reprehenderit reiciendis libero labore rem soluta corporis, at assumenda quam a. Obcaecati voluptatibus aperiam quasi voluptates."
       },
    {
        icon:<RiCustomerService2Line />,   
head:"Industrial IoT Consulting",
para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus est vel nobis laborum, amet reprehenderit reiciendis libero labore rem soluta corporis, at assumenda quam a. Obcaecati voluptatibus aperiam quasi voluptates."
    },
    {
        icon:<RiCustomerService2Line />,   
head:"Industrial IoT Consulting",
para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus est vel nobis laborum, amet reprehenderit reiciendis libero labore rem soluta corporis, at assumenda quam a. Obcaecati voluptatibus aperiam quasi voluptates."
    },
    {
        icon:<SiHotwire />,  
head:"Custom IIoT Solution Development",
para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus est vel nobis laborum, amet reprehenderit reiciendis libero labore rem soluta corporis, at assumenda quam a. Obcaecati voluptatibus aperiam quasi voluptates."
    },
    {
        icon:<IoSettings />, 
head:"Applications for Industrial IoT Devices",
para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus est vel nobis laborum, amet reprehenderit reiciendis libero labore rem soluta corporis, at assumenda quam a. Obcaecati voluptatibus aperiam quasi voluptates."
    },
    {
        icon:<FaMicrosoft />,     
head:"Industrial IoT Solution Testing",
para:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus est vel nobis laborum, amet reprehenderit reiciendis libero labore rem soluta corporis, at assumenda quam a. Obcaecati voluptatibus aperiam quasi voluptates."
    }
]

export default function Services() {
  return (
    <div className="servises">
    <h1 className='box-h1'>Cart Design (Services)</h1>
    <div className='main-service'>
        <div className="container">
{
    val.map((data,i)=>(
        <div className="ser-box" key={i}>
            <div className='ser-icon'>{data.icon}</div>
            <div className="content">
            <h2 className='ser-h1'> {data.head}</h2>
            <p className='ser-p'>{data.para}</p>
            </div>
        </div>
        ))
}
</div>
    </div>
    </div>
  )
}
