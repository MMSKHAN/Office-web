import React from 'react'
import img from "../Asserts/2.png";
import "./Footer.css"
import { Facebook,Instagram,Linkedin,Twitter } from 'react-bootstrap-icons';
function Footer() {
  return (
    <div className="container-fluid footcol ">
      <div className="row">
        <div className="col-sm-3 borderright">
          <div className="logof"><a href="/"><img src={img} alt="logo" /></a></div>
<div className="footertext"><p>
We believe in redefining the future of Technology in a most interesting way by requiring minimal human interaction.
</p>
</div>
<div className="brandicons">
  <a href="/" > <Facebook style={{color:"#3b5998"}} /></a>
  <a href="/"> <Instagram  style={{color:"#6B2A53"}}/> </a>
  <a href="/"> <Linkedin style={{color:"#0072b1"}}/></a>
 <a href="/"> <Twitter style={{color:"#00acee "}}/></a>
 
  
 
</div>

        </div>
        <div className="col-sm-3 footer-text-center borderright">
          <div className="contant1">
            <div className="footerheader"><a href="/">Company</a></div>
            <div className="footerheader1"><a href="/">Home</a></div>
            <div className="footerheader1"><a href="/">About</a></div>
            <div className="footerheader1"><a href="/">Life At ItZoon</a></div>
          </div>
        </div>
    
        <div className="col-sm-3 footer-text-center borderright">
          <div className="contant1">
            <div className="footerheader"><a href="/">Services</a></div>
            <div className="footerheader1"><a href="/">App Development</a></div>
            <div className="footerheader1"><a href="/">Game Development</a></div>
            <div className="footerheader1"><a href="/">Digital Markiting</a></div>
          </div>
        </div>

        <div className="col-sm-3 footer-text-center ">
          <div className="contant1">
            <div className="footerheader"><a href="/">Support</a></div>
            <div className="footerheader1"><a href="/">Careers</a></div>
            <div className="footerheader1"><a href="/">Contact Us</a></div>
            <div className="footerheader1"><a href="/">Member Login</a></div>
          </div>
        </div>
      
      </div>
      <div className="row footer-text-center">
          © 2019 ITZoon ALL RIGHTS RESERVED
          </div>
    </div>
  )
}

export default Footer