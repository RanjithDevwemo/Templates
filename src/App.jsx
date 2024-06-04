import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AllComponents from './Components/AllComponents'
import NavBar from './Components/NavBar'
export default function App() {
  return (
    <div style={{backgroundColor:'rgb(233, 229, 229)'}}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<AllComponents/>} path='/'>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
