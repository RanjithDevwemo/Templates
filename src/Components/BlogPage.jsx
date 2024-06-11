import React from 'react'
import headimg from "../assets/Images/banner-title-icon.png"
import "../Css/BlogPage.css"
import blog1 from "../assets/Images/blog1.jpg"
import blog2 from "../assets/Images/blog2.jpg"
import blog3 from "../assets/Images/blog3.png"
import blog4 from "../assets/Images/blog4.jpg"
import blog5 from "../assets/Images/blog5.png"
import blog6 from "../assets/Images/blog6.svg"
import blog7 from "../assets/Images/blog7.svg"
import blog8 from "../assets/Images/blog8.svg"
import blog9 from "../assets/Images/blog9.svg"
import blog10 from "../assets/Images/blog10.svg"
import blog11 from "../assets/Images/blog11.svg"
import blog12 from "../assets/Images/blog12.svg"
import blog13 from "../assets/Images/blog13.svg"
import blog14 from "../assets/Images/blog14.svg"
// import blog15 from "../assets/Images/blog15.png"

import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function BlogPage() {

    const data=[
        {
            image:blog1,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog2,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog3,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog4,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog5,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog6,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog7,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog8,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog9,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog10,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog11,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog12,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog13,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog14,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }, {
            image:blog5,
            heading:"Emerging Technology Trends Of 2024",
            date:"12 Nov,2023 by Flyers Admin ",
            icon:<IoIosArrowDroprightCircle className='arrow'/>
            
        }
    ]
  return (
    <div className='main-blog'>
      <div className="section1">
<h1 className='blog-h1'><span><img src={headimg} alt="Logo-imag" className='blog-logo' /></span> Our Blog</h1>
<p>Flyers Soft is a fast-growing digital transformation and custom software development company based out in India. We have some of the best in-house developers and technical architects when it comes to Web and Mobile Application development, Cloud Services, DevOps services and Quality Assurance services. At Flyers Soft, we develop creative and innovative products and solutions that offer a wide range of services in diversified industries.</p>
      </div>

      <div className="section2">

{
    data.map((val,i)=>(

<div className="blog-card" key={i}>
<img src={val.image} alt="blog-image-1" className='blog-img' />
<h3 className='blog-card-h'>{val.heading}</h3>
<div className="p-con">
<p className='blog-card-p'>{val.date} </p> <span>{val.icon}</span></div>
</div>

))
}



      </div>
    </div>
  )
}
