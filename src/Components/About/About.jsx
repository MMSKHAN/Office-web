import React from 'react'
// import Particals from '../Particals/Particals'
import AboutPart1 from './AboutPart1'
import "./About.css"
import AboutPart2 from './AboutPart2'
import Particals from '../Particals/Particals'
function About() {
  return (<>
    <div className="cntainer-fluid">
        <AboutPart1  />
 <Particals/>
        <AboutPart2/>
         </div>
         </>)
}

export default About