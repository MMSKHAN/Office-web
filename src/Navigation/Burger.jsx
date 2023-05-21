import React from 'react'
import "./Nav.css";
import { useState } from 'react';
import NavArray from  "./NavArray";
import { NavLink } from 'react-router-dom';
function Burger() {
  const[movex,setMovex]=useState()
  const[movey,setMovey]=useState()
  window.addEventListener("mousemove",(e)=>{
setMovex(e.pageX)
setMovey(e.pageY)
  }) 
    const [size,setSide]=useState(false)
    const clicked=()=>{
    if(size===false){
        setSide(true)
    }else{
        setSide(false)
    }
    }
    return (

    <>
    
    <div className="navigation">
    <div className='button' onClick={clicked} >
        <div className={size?"bar11":"bar1"}></div>
        <div className={size?"bar12":"bar2"}><div className="span1"></div> <div className="span2"></div> </div>
        <div className={size?"bar13":"bar3"}></div>
    </div>
    <div className={size?"nav":"hidden"}>
        <ul> 
          {
NavArray.map((items)=>{
  return(
    <li className={size?'li':"visiblity"} ><NavLink activeClassName="actived" className={size?"a":"b"} to={items}>{items.name}</NavLink> </li>
  )
})
          }
          <div className="Cursor"
        style={{
          left:movex + "px",
          top:movey + "px"
        }}
        >
        
      </div>
        </ul>
        
      </div></div>
      </> )
}

export default Burger