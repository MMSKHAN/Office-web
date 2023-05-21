import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../Asserts/part1.jpg"
import img2 from "../Asserts/b1.jpg"
import img3 from "../Asserts/part3.jpg"
import img4 from "../Asserts/part2.jpg"
import img5 from "../Asserts/part4.jpg"
import img6 from "../Asserts/part5.jpg"
import img7 from "../Asserts/part6.jpg"
function HomePart2() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="container-fluid part2 ">
        <div className="row gx-0 mt-2" data-aos="zoom-in-up">
            <div className="col-sm-3 group"> <img src={img1} alt="/" /> </div>
            <div className="col-sm-6 group"><img src={img2} alt="/" /> </div>
            <div className="col-sm-3 group"> <img src={img3} alt="/" /> </div>
        </div>
        <div className="row mt-4"data-aos="zoom-in-up">
            <div className="col-sm-3 group"> <img src={img4} alt="/" /> </div>
            <div className="col-sm-3 group"><img src={img5} alt="/" /> </div>
            <div className="col-sm-4 group"> <img src={img6} alt="/" /> </div>
            <div className="col-sm-2 group"> <img src={img7} alt="/" /> </div>
        </div>
    </div>
  )
}

export default HomePart2