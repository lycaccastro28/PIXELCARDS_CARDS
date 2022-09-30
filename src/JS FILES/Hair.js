import React from "react";
import './App.css';
import { useState } from "react";



function Hairs(){
const [hairs, setHairs] = useState(0);
var hairNames = [

    'hair-0',
    'hair-1',
    'hair-2',
    'hair-3'
]; 
  var hairCollection = [

    { url: "",},
    { url: "http://localhost:3000/hair_00.png",},
    { url: "http://localhost:3000/hair_01.png", },
    { url: "http://localhost:3000/hair_02.png",  },
   
    
];
function Prev(){
 
setHairs(hairs-1)
     

}


function Next(){
setHairs(hairs+1)

}

    return<>       <div>
    <div id="textHere" ><img src ={hairCollection[hairs].url} className ="hair" alt="hair" id="parts"></img>
    
    </div>
    <div>
      
    <button onClick={Prev}>Prev</button><span>{hairNames[hairs]}</span>
   <button onClick={Next}> Next</button>

   
    </div>
  </div></>
};
  export default Hairs;