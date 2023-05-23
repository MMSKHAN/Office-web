import React from 'react'
import Home from './Components/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Life from './Components/Life/Life'
import Careers from './Components/Careers/Careers'
import Blogs from './Components/Blogs/Blogs'
import Contact from './Components/Contact/Contact'
import Login from './Components/Form/Login'
import Registration from './Components/Form/Registration'
import Navigation from './Components/Navigation/Navigation'
// import '../node_modules/bootstrap/js/src'

import "./App.css"
import Footer from './Components/Footer/Footer'
import Cursor from './Components/Cursor/Cursor'
// import Cursor from './Cursor/Cursor'
function App() {
  return (<>
    <Cursor/>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path="/Life" element={<Life/>} />
        <Route path="/Careers" element={<Careers/>} />
        <Route path="/Blogs" element={<Blogs />}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/Registration" element={<Registration />} />
      
    </Routes>
        <Cursor/>
    <Footer/>
   </BrowserRouter>
  </> )
}

export default App