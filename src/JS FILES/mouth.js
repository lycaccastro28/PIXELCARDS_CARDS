import React from "react";
import { useState } from "react";



function Mouth(){
const [mouth, setmouth] = useState(0);
var mouthNames = [

    'NONE', 
    'mouth-1',
    'mouth-2',
    'mouth-3',
    'mouth-4',
    'mouth-5'
    
]; 
  var mouthCollection = [
    
    "","mouth_00.png","mouth_01.png","mouth_02.png","mouth_03.png","mouth_04.png","mouth_05.png"
   
    
  ];
  
function Prev(){
 
  if (mouth <= 0)
  {
    setmouth(5)
  }
  else{
    setmouth(mouth-1)
  }   

}


function Next(){

  if (mouth >= 3)
  {
    setmouth(0)
  }
  else{
    setmouth(mouth+1)
  }

}

    return<>
    <div>
    <div id="textHere" ><img src ={mouthCollection[mouth]} className ="mouth" alt="" id="part"></img>
    
    </div>
    <div>
      
    <button className="Prev" onClick={Prev}> Prev</button><span>{mouthNames[mouth]}</span>
   <button className="Next" onClick={Next}> Next</button>

   
    </div>
  </div></>
};
  export default Mouth;