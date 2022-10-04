import React from "react";
import { useState } from "react";



function Nose(){
const [nose, setnose] = useState(0);
var noseNames = [

    'NONE',
    'nose-1',
    'nose-2',
    'nose-3'
]; 
  var noseCollection = [
    
    "","nose_00.png","nose_01.png","nose_02.png"
      
  ];

function Prev(){

  if (nose <= 0)
  {
    setnose(3)
  }
  else{
    setnose(nose-1)
  }    

}


function Next(){

  if (nose >= 3)
  {
    setnose(0)
  }
  else{
    setnose(nose+1)
  }


}

    return<>       <div>
    <div id="textHere" ><img src ={noseCollection[nose]} className ="nose" alt="" id="parts"></img>
    
    </div>
    <div>
      
    <button className="Prev" onClick={Prev}>Prev</button><span>{noseNames[nose]}</span>
   <button className="Next" onClick={Next}>Next  </button>

   
    </div>
  </div></>
};
  export default Nose;