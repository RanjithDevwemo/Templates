import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import ImageWithContent from './Components/ImageWithContent'
import ScrollCounding from './Components/ScrollCounding'
import ImageScroll from './Components/BrandsSliders'
import Image_Slider from './Components/Image_Slider'
import Services from './Components/Services'
import Clients from './Components/Cliends'
import FooterCurve from './Components/Footer'
import ContactForm from './Components/ContactForm'
// import Image from './Components/Image'

export default function App() {
  return (
    <div>
      <NavBar/>
      {/* <Image/> */}
      <Home/>
      <ImageWithContent/>
      <ImageScroll/>
      <ScrollCounding/>
      <Services/>
     <Image_Slider/>
     <Clients/>
     <ContactForm/>
     <FooterCurve/>
  
    </div>
  )
}
