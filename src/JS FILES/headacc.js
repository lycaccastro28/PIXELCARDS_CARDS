import React from "react";
import './App.css';
import { useState } from "react";



function Headacc(){
const [headacc, setheadacc] = useState(0);
var headaccNames = [

    'headacc-0',
    'headacc-1',
    'headacc-2',
    'headacc-3'
]; 
  var headaccCollection = [

    { url: ""},
    { url: "http://localhost:3000/acc_00.png"},
    { url: "http://localhost:3000/acc_01.png" },
    { url: "http://localhost:3000/acc_02.png" },
   
    
];
function Prev(){
 
setheadacc(headacc-1)
     

}


function Next(){
setheadacc(headacc+1)

}

    return<>       <div>
    <div id="textHere" ><img src ={headaccCollection[headacc].url} className ="headacc" alt="headacc" id="parts"></img>
    
    </div>
    <div>
      
    <button onClick={Prev}>Prev</button><span>{headaccNames[headacc]}</span>
   <button onClick={Next}> Next</button>

   
    </div>
  </div></>
};
  export default Headacc;