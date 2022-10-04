import React from "react";
import './App.css';
import { useState } from "react";



function Hair(){
const [hair, sethair] = useState(0);
var hairNames = [

    'NONE',
    'hair-1',
    'hair-2',
    'hair-3'
]; 
  var hairCollection = [

  "","hair_00.png","hair_01.png","hair_02.png","hair_03.png"
      
  ];
function Prev(){
  
  if (hair <= 0)
  {
    sethair(3)
  }
  else{
    sethair(hair-1)
  }
 
}


function Next(){

  if (hair >= 3)
  {
    sethair(0)
  }
  else{
    sethair(hair+1)
  }

}

    return<>      
    <div>
      <div id="textHere" ><img src ={hairCollection[hair]} className ="hair" alt="" id="parts"></img> 
    
    </div>
    <div>
    <button className="Prev" onClick={Prev}>Prev</button><span>{hairNames[hair]}</span>
    <button className ="Next" onClick={Next}> Next</button>

   
    </div>
  </div></>
};
  export default Hair;