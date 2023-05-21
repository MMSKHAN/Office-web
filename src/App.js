import React from 'react'
import Home from './Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './About/About'
import Services from './Services/Services'
import Life from './Life/Life'
import Careers from './Careers/Careers'
import Blogs from './Blogs/Blogs'
import Contact from './Contact/Contact'
import Login from './Form/Login'
import Registration from './Form/Registration'
import Navigation from './Navigation/Navigation'
// import '../node_modules/bootstrap/js/src'

import "./App.css"
import Footer from './Footer/Footer'
import Cursor from './Cursor/Cursor'
// import Cursor from './Cursor/Cursor'
function App() {
  return (<>
    <Cursor/>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path="/Life" element={<Life/>} />
        <Route path="/Careers" element={<Careers/>} />
        <Route path="/Blogs" element={<Blogs />}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/Registration" element={<Registration />} />
      </Route>
    </Routes>
        <Cursor/>
    <Footer/>
   </BrowserRouter>
  </> )
}

export default App