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

    { url: ""},
    { url: "http://localhost:3000/eye_00.png",},
    { url: "http://localhost:3000/eye_01.png", },
    { url: "http://localhost:3000/eye_02.png" },
   
    
];
function Prev(){
 
setEyes(eyes-1)
     

}


function Next(){
setEyes(eyes+1)

}

    return<>       <div>
    <div id="textHere" ><img src ={eyesCollection[eyes].url} className ="eyes" alt="" id="parts" ></img>
    
    </div>
    <div>
      
    <button className="Prev" onClick={Prev}> Prev</button><span>{eyesNames[eyes]}</span>
   <button className="Next" onClick={Next}> Next</button>

   
    </div>
  </div></>
};
  export default Eyes;