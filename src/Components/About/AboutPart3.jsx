import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aboutarray from './Aboutarray';
import "./About.css"
function AboutPart3() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
   <>
   <div className="AboutPart3">

    <div className="part3_text"data-aos="zoom-in-up">
        <p>Our upcoming projets</p>
        <p></p>
    </div>
    <div className="row part3row"data-aos="zoom-in-up">
{
Aboutarray.slice(6,9).map((items)=>{
    return(
        <div className="col-sm-4">
        <div className="card_part3">
            <div className="img_part3">
                <img src={items.imgs} alt="" />
            </div>
            <div className="btn_Part3">
                {items.but}
            </div>
        </div>
        </div>
    )
})
}
</div>
<div className="row part3row mt-4"data-aos="zoom-in-up">
{
    Aboutarray.slice(9,12).map((items)=>{
        return(
            <div className="col-sm-4">
            <div className="card_part3">
                <div className="img_part3">
                    <img src={items.imgs} alt="" />
                </div>
                <div className="btn_Part3">
                    {items.but}
                </div>
            </div>
            </div>
        )
    })
    }

</div>
   </div>
   
   </>
  )
}

export default AboutPart3