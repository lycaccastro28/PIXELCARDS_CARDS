import logo from '../JS FILES/FACE.png';
import './App.css';
import Hair from './Hair';
import Eyes from './eyes';
import Mouth from './mouth';
import Nose from './nose';
import Headacc from './headacc';
import Color from './Color';


function secondtomain() {
  return (
    <>
      
      {/*pindutan*/}
      <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className=' avatar'>
                <img src={logo} alt="logo" Style="margin-left: -125px;"/>
              </div>
            </div>
            <div className='col-4'>

            <div className=' content text-center' style={{backgroundColor:'blue' }}>
              <h2>HAIR</h2>
            <div className='' id=''><Hair /> </div>
              </div>
              <div className=' content text-center' style={{backgroundColor:'violet'}}>
              <h2>Head Accesories</h2>
            <Headacc /> 
              </div>
              <div className='content text-center' style={{backgroundColor:'pink'}}>
              <h2>Eyes</h2>
            <Eyes /> 
              </div>
              </div>
              <div className='col-4'>
              <div className='content text-center' style={{backgroundColor:'green'}}>
              <h2>Nose</h2>
            <Nose /> 
              </div>
              <div className='content text-center' style={{backgroundColor:'red'}}>
              <h2>Mouth</h2>
            <Mouth /> 
              </div>
              <div className='content text-center' style={{backgroundColor:'yellow'}}>
              <h2>Skin Tone</h2>
            <Color /> 
              </div>
            </div>
        </div>  
        </div>
    </>
  );
}
export default secondtomain;
