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
    
    { url: ""},
    { url: "http://localhost:3000/mouth_00.png"},
    { url: "http://localhost:3000/mouth_01.png" },
    { url: "http://localhost:3000/mouth_02.png" },
    { url: "http://localhost:3000/mouth_03.png" },
    { url: "http://localhost:3000/mouth_04.png" },
    { url: "http://localhost:3000/mouth_05.png" },
   
    
];
function Prev(){
 
setmouth(mouth-1)
     

}


function Next(){
setmouth(mouth+1)

}

    return<>
    <div>
    <div id="textHere" ><img src ={mouthCollection[mouth].url} className ="mouth" alt="" id="part"></img>
    
    </div>
    <div>
      
    <button className="Prev" onClick={Prev}> Prev</button><span>{mouthNames[mouth]}</span>
   <button className="Next" onClick={Next}> Next</button>

   
    </div>
  </div></>
};
  export default Mouth;