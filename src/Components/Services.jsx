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
        para:"Unlock the potential of connected industrial systems with our IIoT solutions, leveraging cutting-edge sensors, analytics, and automation to optimize efficiency and drive business growth."
    },
    {
        icon:<RiCustomerService2Line />,   
head:"Industrial IoT Consulting",
para:"Tap into our expertise in Industrial IoT to navigate the complexities of implementation, strategy, and integration, enabling you to make informed decisions and unlock the full potential of connected industrial systems."

    },
    {
        icon:<SiHotwire />,  
head:"Custom IIoT Solution Development",
para:"Tailor-made for your unique business requirements, our team develops robust and scalable Industrial IoT solutions that seamlessly connect devices, collect data, and drive operational efficiency."  
    },
    {
        icon:<IoSettings />, 
head:"Applications for Industrial IoT Devices",
para:"Empower your business with customized applications specifically designed for Industrial IoT devices, enabling real-time monitoring, data analysis, and enhanced decision-making for improved operational efficiency." 
    },
    {
        icon:<FaMicrosoft />,     
head:"Industrial IoT Solution Testing",
para:"Ensure the reliability and functionality of your Industrial IoT solution with our comprehensive testing services, covering performance, security, and compatibility to deliver a seamless user experience."

    }
]

export default function Services() {
  return (
    <div className="">
    <h1 className='box-h1'>Cart Design (Services)</h1>
    <div className='main-service'>
{
    val.map((data,i)=>(
        <div className="ser-box" key={i}>
            <h1 className='ser-h1'><span>{data.icon}</span> {data.head}</h1>
            <p>{data.para}</p>
        </div>
        ))
}
    </div>
    </div>
  )
}
