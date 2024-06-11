import React from 'react'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import OffcanvasExample from './Components/NavBar'
import Card1 from './Components/Card'
// import Mega from './Components/Megamenu'
import BlogPage from './Components/BlogPage'
import Career from './Components/Career'
import FlyerHome from './Components/FlyerHome'

// import FadeAni from "./Components/FadeAni"



export default function App() {
  return (
    <div>
      <BrowserRouter>
      
<OffcanvasExample/>
{/* <Mega/> */}
      <Routes>
        <Route element={<Home/>} path='/'>

        </Route>
        <Route element={<Card1/>} path='/link'>

        </Route>
        <Route element={<BlogPage/>} path='/blog'>

        </Route>

        <Route element={<Career/>} path='/career'>

</Route>
<Route element={<FlyerHome/>} path='/FlyerHome'>

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

