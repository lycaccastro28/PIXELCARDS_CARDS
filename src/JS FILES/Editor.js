import React, { useState } from 'react';
import '../editor.css'
import SecondToMain from './SecondToMain';


function Editor() {
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingCanvas, setHideDrawingCanvas] = useState(true);
  //const [buttonText, setButtonText] = useState('Start drawing');
  const initializeCanvas = () => {
    setHideOptions(!hideOptions);
    setHideDrawingCanvas(!hideDrawingCanvas);
  };


  const handleGoBack = () => {
    setHideOptions(false);
    setHideDrawingCanvas(true);
  };
 
  return (
    <div id="editor">
      <h1>PIXEL EDITOR</h1>

      {hideDrawingCanvas && (
        <button 
          className='button' id='start'
          onClick={initializeCanvas}
        > Start Drawing
        </button>
      )}
      {hideOptions && (
        <>
          <button 
            className='button'
            onClick={handleGoBack}> 
            Reset
          </button>
          < SecondToMain/>
          
        </>
      )}
    </div> 
  )
}

export default Editor;