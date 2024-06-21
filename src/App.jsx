// import React from 'react'
// import Home from './Components/Home'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import OffcanvasExample from './Components/NavBar'
// import Card1 from './Components/Card'
// // import Mega from './Components/Megamenu'
// import BlogPage from './Components/BlogPage'
// import Career from './Components/Career'
// import FlyerHome from './Components/FlyerHome'

// // import FadeAni from "./Components/FadeAni"



// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
      
// <OffcanvasExample/>
// {/* <Mega/> */}
//       <Routes>
//         <Route element={<Home/>} path='/'>

//         </Route>
//         <Route element={<Card1/>} path='/link'>

//         </Route>
//         <Route element={<BlogPage/>} path='/blog'>

//         </Route>

//         <Route element={<Career/>} path='/career'>

// </Route>
// <Route element={<FlyerHome/>} path='/FlyerHome'>

// </Route>
//       </Routes>
//       </BrowserRouter>
//       {/* <Image_Slider/> */}
//     </div>
//   )
// }




import React from 'react'
import HomePage from './Pages/HomePage'
import NavPage from './Pages/Navpage'
import AboutUsPage from './Pages/AboutUsPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ServicesPage from './Pages/ServicesPage'

import FooterCurve from './Components/Footer'
import ContactPage from './Pages/ContactPage'
import CutomizedNavBar from './Components/CutomizedNavBar'


export default function App() {
  return (
    <div>
      {/* <OffcanvasExample/> */}
      <BrowserRouter>
      <CutomizedNavBar/>
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<ServicesPage/>} path='/service'/>
        <Route element={<AboutUsPage/>} path='/about'/>
        <Route element={<ContactPage/>} path='/contact'/>

      </Routes>
      <FooterCurve/>
      </BrowserRouter>
     
    </div>
  )
}
