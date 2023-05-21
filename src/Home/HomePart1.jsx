import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePart1() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <div className="row text-center text-success" data-aos="zoom-in-down"><h1>ITZoon COPORATION</h1>
</div>
        <div className="paragraph">
    Since its inception in 2019, ITZoon Technology has reached a 500M+ combined download volume of 250+ apps and games on Google Play Store with an ever increasing upward trend.
    And there 300+ websites running on web server buit by iTZoon Technology.
    </div>
        <a href="/" className="homepartbtn1" >About Us</a>
  
    </>
  )
}

export default HomePart1