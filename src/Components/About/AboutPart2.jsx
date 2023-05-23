// import React,{useState} from 'react'
import Aboutarray from './Aboutarray'

function AboutPart2() {
  // const [left,setLeft]=useState();
  const clicked=()=>{
    document.getElementById('row').scrollLeft +=2000;
  }
  const clicked2=()=>{
    document.getElementById('row').scrollLeft -=2000;
  }
  return (
<>
  <div className="part2container">
<div className="row"> <h1> Commitments</h1>
<p></p>
</div>
<div className="aboutpart2">
<div id='row'>
  { 
  Aboutarray.map((items)=>{
    return(
      <div className="col-sm-4">
<div className="card">
  <div className="aboutcardimd"><img src={items.imgs} alt="lsks" /></div>
  <div className="part2text">
    <div className="part2textchind">
  <h6>{items.title}</h6>
  <p>{items.test}</p>
  </div>
</div></div>
      </div>
    )
  })
   
  }
</div>
<div className="part2btn">
<input type="radio" onClick={clicked2} name="name" id="radio" />
<input type="radio" onClick={clicked} name="name" id="radio" />
</div>
</div>
</div>
 </>
  )
}

export default AboutPart2