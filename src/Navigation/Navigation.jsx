import React from 'react';


import Burger from './Burger';
import Searched from "./Searched";
import Logos from "./Logos";
function Navigation() {

  return (<>
     
        
     <div className=" container-fluid header">
      <div className="row headerrow">

     
     <Burger/>
     <Logos/>
     <Searched/>
     
 </div>      
      </div>
    </> )
}

export default Navigation