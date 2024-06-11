// import React from 'react'
// import "../Css/FadeAnimation.css"
// import img1 from "../assets/Images/images.png"
// // import "../Css/Image_Slider.css"
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import ban1 from "../assets//Images/banner1.jpg"
// // import ban2 from "../assets//Images/banner2.jpg"
// // import ban3 from "../assets//Images/banner3.jpg"
// // import ban1 from "../assets/Images/banner1.jpg"
// export default function FadeAnimation() {

    
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     };

//   return (
//     <div className='main-fade'>
//         <div className="con1">
//       <h2>Our Approach</h2>
// <h3>Swift Application Transformation System (SATS)</h3>

// <p className='fade-p'>Flyers Soft, leveraging its partnerships with various independent service vendors (ISVs) and enterprise clients.
//  Flyers Soft SATS (Swift Application Transformation System) Framework is targeted towards providing fast, user-friendly
//   functions to be used in the rapid development of an application or system. The primary aim of SATS is to make the processing
//    time fast and thereby reducing the time to market quicker. Flyers Soft’s SATS is a quick, pre-built template or a framework solution that 
// seriously minimizes the time and effort involved in building any process or application
// </p>
// </div>
// <div className="con2">
//     <div className="sub-1">
//         <img src={img1} alt="" />
//     </div>
//     <div className="fade">

//     <Slider {...settings}>
//                     <div className="slide">
//                         {/* <img src={ban1} className='banner banner1' alt='banner1'/> */}
//                     </div>
//                     <div className="slide">
//                         {/* <img src={ban2} className='banner banner2' alt='banner2'/> */}
//                     </div>
//                     <div className="slide">
//                         {/* <img src={ban3} className='banner banner3' alt='banner3'/> */}
//                     </div>
//                 </Slider>

//     </div>
// </div>
//     </div>
//   )
// }


import React,{useEffect} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/FadeAnimation.css"
import img1 from "../assets/Images/images.png"
import 'aos/dist/aos.css';
import AOS from 'aos';
// import { FaAtom ,FaAppStoreIos,FaBrave, FaArchway,FaApple,FaCentos  } from "react-icons/fa6";
// import { FaBahai,FaAccusoft, FaAdn,FaAngular,FaConnectdevelop, FaDove,FaFirefox,FaKhanda } from "react-icons/fa";

export default function Image_Slider() {

    // const data=[
    //     {
    //         icon:<FaApple/>,
    //     heading:"Web Design"
    //     },
    //     {
    //         icon:<FaAppStoreIos />,
    //         heading:"Application Development"
    //     },
    //     {
    //         icon:<FaArchway />,
    //         heading:"Product Engineering"
    //     },
    //     {
    //         icon:<FaAtom />,
    //         heading:"Digital Transformation"
    //     },
    //     {
    //         icon:<FaBrave />,
    //         heading:"Application Development"
    //     },
    //     {
    //         icon:<FaCentos />,
    //         heading:"Product Engineering"
    //     }
    // ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    useEffect(() => {
        AOS.init({
            once: true,
            // disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
          });
      }, [])

  return (
    <div className="main-fade">
        
        {/* <div className="con1">
       <h2>Our Approach</h2>
<h3>Swift Application Transformation System (SATS)</h3>
 <p className='fade-p'>Flyers Soft, leveraging its partnerships with various independent service vendors (ISVs) and enterprise clients.
  Flyers Soft SATS (Swift Application Transformation System) Framework is targeted towards providing fast, user-friendly
   functions to be used in the rapid development of an application or system. The primary aim of SATS is to make the processing
    time fast and thereby reducing the time to market quicker. Flyers Soft’s SATS is a quick, pre-built template or a framework solution that 
 seriously minimizes the time and effort involved in building any process or application
 </p>
 </div> */}
 <div className="con2" data-aos="fade-left">
    <div className="sub1">
<img src={img1} alt=""  className='img1'/>
    </div>
      <div className="slider">
       
                <Slider {...settings}>
                    <div className="swiper-slide">
                        <div className="icon"></div>
<h1  data-aos-delay='50'>Transformation System 1</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita, ad nobis temporibus autem, velit esse quasi dolore odio, accusantium veniam iste pariatur et illum quaerat
     vitae. Amet, nesciunt tempora?</p>
                    </div>
                    <div className="swiper-slide">
<h1>Transformation System 2</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita, ad nobis temporibus autem, velit esse quasi dolore odio, accusantium veniam iste pariatur et illum quaerat
     vitae. Amet, nesciunt tempora?</p>
                    </div>
                    <div className="swiper-slide">
<h1>Transformation System 3</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita, ad nobis temporibus autem, velit esse quasi dolore odio, accusantium veniam iste pariatur et illum quaerat
     vitae. Amet, nesciunt tempora?</p>
                    </div>
                </Slider>
    </div>
    </div>
    </div>
  )
}













