import React from 'react'
// import "../Css/Image_Slider.css"
import "../Css/Image_Slider.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ban1 from "../assets//Images/banner1.jpg"
import ban2 from "../assets//Images/banner2.jpg"
import ban3 from "../assets//Images/banner3.jpg"

export default function Image_Slider() {

    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

  return (
      <div className="swiper">
       
                <Slider {...settings}>
                    <div className="swiper-slide">
                        <img src={ban1} className='banner banner1' alt='banner1'/>
                    </div>
                    <div className="swiper-slide">
                        <img src={ban2} className='banner banner2' alt='banner2'/>
                    </div>
                    <div className="swiper-slide">
                        <img src={ban3} className='banner banner3' alt='banner3'/>
                    </div>
                </Slider>
    </div>
  )
}
