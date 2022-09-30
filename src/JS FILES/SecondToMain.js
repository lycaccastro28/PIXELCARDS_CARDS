import logo from './FACE.png';
import './App.css';
import CARDS from './CARDS';
import Hair from './Hair';
import Eyes from './eyes';
import Mouth from './mouth';
import Nose from './nose';
import Headacc from './headacc';



function secondtomain() {
  return (
    <>
      
      {/*pindutan*/}
      <div className='row'>
        <div className='col-6'>
          <div className=' avatar'>
        
          <img src={logo}/>
          </div>
        </div>
        
      <div className='col-8'>
       <div className='row'> 
          <div className='col-4note' id="hair" >
              <Hair />
          </div>
          <div className='col-4'>
              <Eyes />
          </div>
          <div className='col-4 '>
              <Mouth />
          </div>
          <div className='col-4 '>
              <Nose />
          </div>
          <div className='col-4 '>
              <Headacc />
          </div>
        </div> 
      </div>

      </div>  
    </>
  );
}
export default secondtomain;
