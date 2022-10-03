import { CompactPicker } from "react-color";
import { useState } from "react";

function Color({CompactPickerColor , setCompactPickerColor})
 {
 

  return (
    <div className="App">
      <div className="CompactPicker">
       <h2> Skin Tone</h2>
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