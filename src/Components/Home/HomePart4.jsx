import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import laptop from "../Asserts/Lapto.png";
import Mobile from "../Asserts/Mobile.png";
import tablet from "../Asserts/tablet.png";
import web from "../Asserts/web.png"
import app from "../Asserts/apps.png"
import client from "../Asserts/clients.png"
function HomePart4() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="contsiner-fluid mt-5">
       <h1 className='pride mb-5' data-aos="zoom-in-up"> <p>Our Success Our Pride</p> <p className='line' ></p></h1>
       <p className='pridetext' data-aos="zoom-in-up" ><p> From a single team over the years, Now we are  global and known as ItZoon Group of companies</p> <p>
       with  50+ subsidiaries in USA,UK, Australia, UAE and Pakistan.</p>
</p><div className='HomeAchieve'>
<h1 data-aos="zoom-in-up">1000M+</h1>
<p data-aos="zoom-in-up">Clients</p>
</div>
<div className="container" data-aos="zoom-in-up">
  <div className="row d-flex gx-0 success ">
  <div className="col-sm-4 success2 ">
    <div className="mobileimg"><img src={Mobile} alt="mobile" /></div>
    <div className="appdata">
      <img src={app} alt="apps" />
      <p style={{marginTop:"13px"}}><b>300M+</b></p>
      <p>INSTALLS ON </p><p> PLAYSTORE</p>
    </div>
    </div>
  <div className="col-sm-4 success2"><div className="mobileimg"><img src={laptop} alt="mobile" /></div>  
     <div className="appdata"><img src={web} alt="apps" />
      <p style={{marginTop:"13px"}}><b>400M+</b></p>
      <p>Working WebSites</p>
    </div></div>
  <div className="col-sm-4 success2"><div className="mobileimg"><img src={tablet} alt="mobile" /></div>
  <div className="appdata font"> <img src={client} alt="apps" />
      <p style={{marginTop:"13px"}}> <b>100M+</b></p>
      <p >Satified Customers</p>
    </div>
  </div>
 
</div></div>
    </div>
  )
}

export default HomePart4