import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function AboutPart5() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='AboutPart5'>
      <div className="About5text"data-aos="zoom-in-up">
   <p>  <b> Life at Innovative Solutions</b> </p> <p className='About5text2'>
Life at Innovative Solutions is all about Curiosity, Creativity, Care, and Collaborations to seek new windows of opportunity.
</p>
<p className='AboutPart5a'><a href="/sd">Find the Journey</a></p>
      </div>
    </div>
  )
}

export default AboutPart5