import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductArray from './ProductArray'
// import { useState } from 'react';
function HomePart5() {
  useEffect(() => {
    AOS.init();
  }, [])
    
  return (
    <div className="container-fluid mt-5">
        <div className="row mb-5"data-aos="zoom-in-up">   <h1 className='pride2'> <p>OUR SERVICES</p> <p className='line2' ></p></h1> </div>
        <div className=" overflow">
           
            {ProductArray.map((items)=>{
                return(
                    <div className="col-sm-4 "data-aos="zoom-in-up">
                         <div className="cardhome4 ">
                            <div className="cardhome4img">
            <img src={items.img} alt="" />
            </div><h6>{items.title}</h6>
            <p>{items.content}</p>
          </div>
            </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default HomePart5