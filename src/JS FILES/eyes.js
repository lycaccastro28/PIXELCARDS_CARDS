import React from "react";
import { useState } from "react";



function Eyes(){
const [eyes, setEyes] = useState(0);
var eyesNames = [

    'NONE',
    'eyes-1',
    'eyes-2',
    'eyes-3'
]; 
  var eyesCollection = [

    "","eye_01.png","eye_02.png","eye_03.png",
      
  ];
  
function Prev(){
 
  if (eyes <= 0)
  {
    setEyes(3)
  }
  else{
    setEyes(eyes-1)
  }
 
}


function Next(){

  if (eyes >= 3)
  {
    setEyes(0)
  }
  else{
    setEyes(eyes+1)
  }


}

    return<>       <div>
    <div id="textHere" ><img src ={eyesCollection[eyes]} className ="eyes" alt="" id="" ></img>
    
    </div>
    <div>
      
    <button className="Prev" onClick={Prev}> Prev</button><span>{eyesNames[eyes]}</span>
   <button className="Next" onClick={Next}> Next</button>

   
    </div>
  </div></>
};
  export default Eyes;