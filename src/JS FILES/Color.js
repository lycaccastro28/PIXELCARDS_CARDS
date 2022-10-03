import { CompactPicker } from "react-color";
import { useState } from "react";

function Color() {
 
  const [CompactPickerColor, setCompactPickerColor] = useState("#37d67a");

  return (
    <div className="App">
      <div className="CompactPicker">
       <h2> Skin Tone</h2>
       
        <div
          style={{
            backgroundColor: `${CompactPickerColor}`,
            width: 100,
            height: 50,
            border: "2px solid white",
            
          }}
        ></div>
       
        <CompactPicker
          color={CompactPickerColor}
          onChange={(color) => {
            setCompactPickerColor(color.hex);
          }}
        />
      </div>
    </div>
  );
}
export default Color;