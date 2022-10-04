import React from "react";
import './App.css';
import { useState } from "react";



function Headacc(){
const [headacc, setheadacc] = useState(0);
var headaccNames = [

    'NONE',
    'headacc-1',
    'headacc-2',
    'headacc-3'
]; 
  var headaccCollection = [

 "","acc_00.png","acc_01.png","acc_02.png"  
    
  ];
  
function Prev(){
 
  if (headacc <= 0)
  {
    setheadacc(3)
  }
  else{
    setheadacc(headacc-1)
  }    

}


function Next(){

    if (headacc >= 3)
  {
    setheadacc(0)
  }
  else{
    setheadacc(headacc+1)
  }

}

    return<>       
    <div>
      <div id="textHere" ><img src ={headaccCollection[headacc]} className ="headacc" alt="" id=""></img>
    
      </div>
    <div>
      
    <button className="Prev"onClick={Prev}>Prev</button><span>{headaccNames[headacc]}</span>
   <button className="Next"onClick={Next}> Next</button>

   
    </div>
  </div></>
};
  export default Headacc;