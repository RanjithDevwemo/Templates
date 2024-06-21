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
        heading:"Functional Testing",
        value:" Our experienced QA testing team implements functional testing to majorly focus on user interface, database, security, API's, client or server application and similar functionalities of the application."
    }, {
        icon:<FaGitlab className='icon'/>,
        heading:"Performance Testing",
        value:" Our profound experience in performance testing by executing quality checks and software behavior analysis under load and stress guarantees flawless, reliable and smarter applications."
    },
    {
        icon:<FaGem className='icon'/>,
        heading:"Security Testing",
        value:" Our QA testing services are performed by a talented pool of test engineers who execute risk assessment and penetration testing to shield applications from hackers or malicious threats."
    }, {
        icon:<FaGitlab className='icon'/>,
        heading:"Usability Testing",
        value:" Our software testing services entail an in-depth analysis of user behavior patterns that identify potential usability issues in the initial phase and create a seamless product."
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
