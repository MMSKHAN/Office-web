import React from 'react'

import "./Home.css"
import HomePart1 from './HomePart1'
// import HomePart2 from './HomePart2'
import HomePart4 from './HomePart4'
// import Cursor from '../Cursor/Cursor'
import HomePart5 from './HomePart5'
import HomePart6 from './HomePart6'
import HomePart7 from './HomePart7'
function Home() {
  return (
    <>
    {/* <Cursor/> */}
    <div className="homeContainer">
      <div className="hometextcontainer">
     <HomePart1/>
      
      </div>
    </div>
      <div className="container-fluid">
        {/* <HomePart2/> */}
        <HomePart4/>
        <HomePart6/>

        <HomePart5/>
        <HomePart7/>
      </div>
    </> )
}

export default Home