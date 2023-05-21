import React,{useEffect} from 'react'
import AOS from 'aos';
import img from "../Asserts/b2.jpg"
import tick from "../Asserts/tickgreen.png"
function HomePart6() {
    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <>
    <div className="container-fluid mt-5 mb-5">
        <div className="row mb-5" data-aos="zoom-in-up"><h1 className='pride'> <p>ONE STEP AHEAD IN TECHNOLOGY!
</p> <p className='line ' ></p></h1> </div>
        <div className="row">
            <div className="col-sm-6" data-aos="fade-left"><div className="part4content text-white">
            High Tech but with simplicity garnished on top, our strength is in our teamwork with a solid belief in “We Can” rather than “I Can”. Moving ahead as a team Funsol is providing premier development
services in mobile applications & games, web services with E-Commerce, python prowess, 3D Modelling and iOS Development.

These skills are spiced up with the latest digital marketing trends. And Funsol has surprisingly exceeded its annual sales targets for all its services using the latest digital marketing trends like a wizard in –
<div className="pairagrahs"><p> <span ><img src={tick} alt="check" /></span>  Digital Market Research and PinPoint Analytic’s</p>
<p> <span ><img src={tick} alt="check" /></span> App Search Optimization</p>
<p> <span ><img src={tick} alt="check" /></span> Apps Marketing</p>
<p> <span >  <img src={tick} alt="check" /></span> Search Engine Optimization</p>
<p> <span ><img src={tick} alt="check" /></span> Social Media Marketing</p>
<p> <span ><img src={tick} alt="check" /></span> Ad optimization on display networks like Google, Facebook and Bing.</p>
</div>

                </div></div>
            <div className="col-sm-6" data-aos="fade-right">
                <div className="part6img"><img src={img} alt="" /></div></div>
        </div>
    </div>
    </>
  )
}

export default HomePart6