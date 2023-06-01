import React, { useState } from 'react'
import "./App.css"
import PopUp from './popUp/PopUp'

function App() {
  // const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [colorIndex, setColorIndex] = useState(0);

  

  function handleShowPopup() {
    setShowPopup((showPopup) => !showPopup);
    // setShowPopup(!showPopup);
  }

  function handleChangeColor() {
    const colors= ["red", "yellow", "pink"]
    
    setColorIndex((colorIndex) => {

       if(colorIndex > colors.length){
        setColorIndex(0)
       }else{
        setColorIndex(colorIndex => colorIndex+1)
       }

    });

   
  }

  return (
    <div>
      <h1>sadasdasdsa</h1>
      <button onClick={handleChangeColor}>change-color</button>
      <button onClick={handleShowPopup}>{showPopup ? "Close" : "Open"}</button>
      {showPopup ? <PopUp /> : null}
     
    </div>
  );
}

export default App;



