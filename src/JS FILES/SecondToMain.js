import logo from '../JS FILES/FACE.png';
import './App.css';
import Hair from './Hair';
import Eyes from './eyes';
import Mouth from './mouth';
import Nose from './nose';
import Headacc from './headacc';
import Colors from './Color';
import { useState } from "react";


function SecondToMain () {
  const [CompactPickerColor, setCompactPickerColor] = useState("#37d67a");
  return (
    <>
      
      {/*pindutan*/}
      <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className=' avatar'>
                <img src={logo} alt="logo" style={{backgroundColor:CompactPickerColor }}/>
                {/* <img src={hairCollection}/> */}
              </div>
            </div>
            <div className='col-md-4'>  

            <div className=' content text-center' style={{backgroundColor: '#F8B400'  }}>
              <h2 className='card-txt'>HAIR</h2>
            <div className='' id=''><Hair /> </div>
              </div>
              <div className=' card content text-center' style={{backgroundColor:'#2192FF'}}>
              <h2 className='card-txt'>Head Accesories</h2>
            <Headacc /> 
              </div>
              <div className='card content text-center' style={{backgroundColor:'#38E54D'}}>
              <h2 className='card-txt' >Eyes</h2>
            <Eyes /> 
              </div>
              </div>
              <div className='col-md-4'>
              <div className='content text-center' style={{backgroundColor:'#E8AA42'}}>
              <h2 className='card-txt' >Nose</h2>
            <Nose /> 
              </div>
              <div className='content text-center' style={{backgroundColor:'#F07DEA'}}>
              <h2 className='card-txt' >Mouth</h2>
            <Mouth /> 
              </div>
              <div className='content text-center' style={{backgroundColor:'#FCD900'}}>
             <Colors CompactPickerColor={CompactPickerColor} setCompactPickerColor={setCompactPickerColor}/>
              </div>
            </div>
            <button onClick={window.print} className = "print button" id='btn-bottom'>Print</button>
        </div>  
        </div>  
    </>
  );
  
}
export default SecondToMain;
