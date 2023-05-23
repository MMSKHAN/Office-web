import React,{useEffect} from 'react'
import AOS from 'aos';
import img from "../Asserts/b1.jpg"
import  Typewriter  from 'typewriter-effect';
function HomePart7() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="container-fluid mt-5 ">
        <div className="row mb-5" data-aos="zoom-in-up">   <h1 className='pride2'> <p>CEO Address</p> <p className='line2' ></p></h1></div>
        <div className="row">
            <div className="col-sm-6"  data-aos="fade-left"> <div className="part6img"><img src={img} alt="ceo" /></div> </div>
            <div className="col-sm-6"  data-aos="fade-right"> <div className="part4content" id='center'>
                
            <h1 className='text-success'>
      
      <Typewriter
      options={{
       autoStart:true,
       loop:true,
       delay:40,
       strings:[
  " We are The Developers   ",
  " We are The innovators",
  " We are  The  Believers",
  " We are The Hardworkers",
  " We are ItZoon",
  " We are  The  World Changers"
  
       ]}} /></h1>
                 Smart Growth is our vision and that is only possible when you are out of your comfort zones. We already are, so come forth out of your comfort zones and join the excitement to make this world a better digitized experience.

<p className='text-success' >Junaid Iqbal</p>
<p>Chief Executive Officer</p> </div> </div>
             </div>
    </div>
  )
}

export default HomePart7