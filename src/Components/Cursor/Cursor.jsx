// import React,{useState} from 'react'

// import "./Cursor.css"

// function Cursor() {
//     const [cursorX,setCursorX]=useState()
// const [cursorY,setCursorY]=useState()
// window.addEventListener("mousemove",(e)=>{
//     // setCursorX(e.pageX)
//     // setCursorY(e.pageY)
// })
//   return (<>
//     <div className="cursor-dot" 
//     // style={{
//     //     left:cursorX+"px",
//     //     top:cursorY+"px"
//     // }}
//     ></div>
//     <div className="cursor-outline" 
//     // style={{ left:cursorX+"px",
//         // top:cursorY+"px"}}
//         >

//         </div>
//     </>)
// }

// export default Cursor
import React from 'react'
import AnimatedCursor from "react-animated-cursor"
function Cursor() {
  return (
    <AnimatedCursor
    innerSize={15}
    outerSize={20}
    color='157, 157, 218'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]}
  />
  )
}

export default Cursor