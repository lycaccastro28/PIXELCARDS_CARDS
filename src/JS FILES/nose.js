import React from "react";
import { useState } from "react";



function Nose(){
const [nose, setnose] = useState(0);
var noseNames = [

    'nose-0',
    'nose-1',
    'nose-2',
    'nose-3'
    
    
]; 
  var noseCollection = [
    
    { url: ""},
    { url: "http://localhost:3000/nose_00.png"},
    { url: "http://localhost:3000/nose_01.png" },
    { url: "http://localhost:3000/nose_02.png" },
   
    
];
function Prev(){
 
setnose(nose-1)
     

}


function Next(){
setnose(nose+1)

}

    return<>       <div>
    <div id="textHere" ><img src ={noseCollection[nose].url} className ="nose" alt="nose" id="parts"></img>
    
    </div>
    <div>
      
    <button onClick={Prev}>Prev</button><span>{noseNames[nose]}</span>
   <button onClick={Next}>Next  </button>

   
    </div>
  </div></>
};
  export default Nose;