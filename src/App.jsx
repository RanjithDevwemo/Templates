import React from 'react'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import OffcanvasExample from './Components/NavBar'
import Card1 from './Components/Card'
// import AllComponents from './Components/AllComponents'




export default function App() {
  return (
    <div style={{backgroundColor:'rgb(233, 229, 229)'}}>
      <BrowserRouter>
<OffcanvasExample/>
      <Routes>
        <Route element={<Home/>} path='/'>

        </Route>
        <Route element={<Card1/>} path='/link'>

        </Route>
      </Routes>
      </BrowserRouter>
      {/* <Image_Slider/> */}
    </div>
  )
}

// // import React from 'react'
// import Image_Slider from './Components/Image_Slider'
// import Home from './Components/Home'
// import ImageWithContent from './Components/ImageWithContent'
// import TapSection from './Components/TapSection'
// import Services from './Components/Services'
// import ScrollCounding from './Components/ScrollCounding'
// import BlogSection from './Components/BlogSection'
// import FAQ from './Components/FAQ'
// import ContactForm from './Components/ContactForm'
// import FooterCurve from './Components/Footer'
// import OffcanvasExample from './Components/NavBar'
// // import { BrowserRouter,Routes,Route } from 'react-router-dom'
// // import NavBar1 from './Components/Navbar'

// // import Clients from './Components/Cliends'
// // import NavBar1 from './Components/Navbar'


// export default function App() {
//   return (
//     <div>
//       {/* <BrowserRouter> */}
//      {/* <NavBar1/> */}
//      <OffcanvasExample/>
//      <Image_Slider/>
//      <Home/>
//      <ImageWithContent/>
//      <TapSection/>
//      <Services/>
// <ScrollCounding/>
// <BlogSection/>
// <FAQ/>
// <ContactForm/>
// <FooterCurve/>
// {/* </BrowserRouter> */}
// {/* <Clients/> */}
//     </div>
//   )
// }

