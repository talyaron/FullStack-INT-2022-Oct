import React, { useState } from "react";
import "./App.css";
import PopUp from "./popUp/PopUp";

function App() {
  // const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [colorIndex, setColorIndex] = useState<number>(0);
  const colors = ["red", "yellow", "pink", "green", "gold"];

  function handleShowPopup() {
    setShowPopup((showPopup) => !showPopup);
    // setShowPopup(!showPopup);
  }

  function handleChangeColor() {
    setColorIndex((colorIndex) => {
      let _colorIndex = colorIndex;
      if (_colorIndex >= colors.length) {
        _colorIndex = 0;
      } else {
        _colorIndex++;
      }
      return _colorIndex;
    });
  }
  console.log(colorIndex);
  return (
    <div style={{ backgroundColor: colors[colorIndex] }}>
      <h1>sadasdasdsa</h1>
      <button onClick={handleChangeColor}>change-color</button>
      <button onClick={handleShowPopup}>{showPopup ? "Close" : "Open"}</button>
      {showPopup ? <PopUp /> : null}
    </div>
  );
}

export default App;
