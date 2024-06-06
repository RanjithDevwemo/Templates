// import React from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import AllComponents from './Components/AllComponents'
// // import NavBar from "./Css/Navbar.css"
// // import Image_Slider from './Components/Image_Slider'
// import NavBar1 from './Components/Navbar'


// export default function App() {
//   return (
//     <div style={{backgroundColor:'rgb(233, 229, 229)'}}>
//       <BrowserRouter>
//  <NavBar1/>
//       <Routes>
//         <Route element={<AllComponents/>} path='/'>

//         </Route>
//       </Routes>
//       </BrowserRouter>
//       {/* <Image_Slider/> */}
//     </div>
//   )
// }

// import React from 'react'
import Image_Slider from './Components/Image_Slider'
import Home from './Components/Home'
import ImageWithContent from './Components/ImageWithContent'
import TapSection from './Components/TapSection'
import Services from './Components/Services'
import ScrollCounding from './Components/ScrollCounding'
import BlogSection from './Components/BlogSection'
import FAQ from './Components/FAQ'
import ContactForm from './Components/ContactForm'
import FooterCurve from './Components/Footer'
import OffcanvasExample from './Components/NavBar'

// import NavBar1 from './Components/Navbar'

// import Clients from './Components/Cliends'
// import NavBar1 from './Components/Navbar'


export default function App() {
  return (
    <div>
     {/* <NavBar1/> */}
     <OffcanvasExample/>
     <Image_Slider/>
     <Home/>
     <ImageWithContent/>
     <TapSection/>
     <Services/>
<ScrollCounding/>
<BlogSection/>
<FAQ/>
<ContactForm/>
<FooterCurve/>

{/* <Clients/> */}
    </div>
  )
}

