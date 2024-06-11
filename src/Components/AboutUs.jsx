import React from 'react'
import "../Css/AboutUs.css"
import { AiFillOpenAI } from "react-icons/ai";
import { FaGitlab,FaGem } from "react-icons/fa";
import { FaGitAlt } from 'react-icons/fa6';

export default function AboutUs() {

 const val=[
    {
        icon:<AiFillOpenAI className='icon'/>,
        heading:"Saas Solutions",
        value:" Our software as a Service (SaaS) solutions offer scalable and customizable applications that can be accessed from anywhere, anytime, enabling businesses to streamline processes, increase productivity, and reduce costs."
    }, {
        icon:<FaGitAlt className='icon'/>,
        heading:"Saas Solutions",
        value:" Our software as a Service (SaaS) solutions offer scalable and customizable applications that can be accessed from anywhere, anytime, enabling businesses to streamline processes, increase productivity, and reduce costs."
    }, {
        icon:<FaGitlab className='icon'/>,
        heading:"Saas Solutions",
        value:" Our software as a Service (SaaS) solutions offer scalable and customizable applications that can be accessed from anywhere, anytime, enabling businesses to streamline processes, increase productivity, and reduce costs."
    },
    {
        icon:<FaGem className='icon'/>,
        heading:"Saas Solutions",
        value:" Our software as a Service (SaaS) solutions offer scalable and customizable applications that can be accessed from anywhere, anytime, enabling businesses to streamline processes, increase productivity, and reduce costs."
    }, {
        icon:<FaGitlab className='icon'/>,
        heading:"Saas Solutions",
        value:" Our software as a Service (SaaS) solutions offer scalable and customizable applications that can be accessed from anywhere, anytime, enabling businesses to streamline processes, increase productivity, and reduce costs."
    },
    {
        icon:<FaGem className='icon'/>,
        heading:"Saas Solutions",
        value:" Our software as a Service (SaaS) solutions offer scalable and customizable applications that can be accessed from anywhere, anytime, enabling businesses to streamline processes, increase productivity, and reduce costs."
    }
 ]

  return (
    <div className='about-main'>
        <div className="about-con-1">
<h1 className='about-h1'>We are Leader in Application Development Services</h1>
        </div>
        <div className="about-con-2">
{
    val.map((data,i)=>(
            <div className="about-box" key={i}>
<h2 className='about-h2'><span>{data.icon}</span> {data.heading}</h2>
<p className='about-p'>{data.value}</p>
        </div>
        ))
}
      
        
        
        </div>
    </div>
  )
}
