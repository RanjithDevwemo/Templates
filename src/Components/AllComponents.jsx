import React from 'react'
// import NavBar from './NavBar'
import Home from './Home'
import ImageWithContent from './ImageWithContent'
import ScrollCounding from './ScrollCounding'
import ImageScroll from './BrandsSliders'
import Image_Slider from './Image_Slider'
import Services from './Services'
import Clients from './Cliends'
import FooterCurve from './Footer'
import ContactForm from './ContactForm'
import Calender from './Calender'
import TapSection from './TapSection'
import FAQ from './FAQ'
// import MySlider from './BlogSection'
import BlogSection from './BlogSection'
import Megamenu from './Megamenu'
import { Megamenu1 } from './Megamenu2'

// import Popup from './Popup'

// import Image from './Image'

export default function AllComponents() {
  return (
    <div>
      
      {/* <NavBar/> */}
      {/* <Image/> */}
      {/* <Popup/> */}
      <Home/>
      <Megamenu/>
      <br />
      <Megamenu1/>
      <ImageWithContent/>
      <ImageScroll/>
      <ScrollCounding/>
      <TapSection/>
      <Services/>
     <Image_Slider/>
     <FAQ/>
     <Clients/>
     <ContactForm/>
     <Calender/>
     <BlogSection/>
     {/* <MySlider/> */}
     <FooterCurve/>
  
    </div>
  )
}
