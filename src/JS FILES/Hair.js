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

    { url: ""},
    { url: "http://localhost:3000/hair_00.png"},
    { url: "http://localhost:3000/hair_01.png" },
    { url: "http://localhost:3000/hair_02.png" },
   
    
];
function Prev(){
 
sethair(hair-1)
     

}


function Next(){
sethair(hair+1)

}

    return<>      
    <div>
      <div id="textHere" ><img src ={hairCollection[hair].url} className ="hair" alt="" id="parts"></img>
    
    </div>
    <div>
    <button className="Prev" onClick={Prev}>Prev</button><span>{hairNames[hair]}</span>
    <button className ="Next" onClick={Next}> Next</button>

   
    </div>
  </div></>
};
  export default Hair;