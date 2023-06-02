import { useState } from "react";

import "./App.css";
import PopUp from "./comp/popUp/PopUp";

function App() {
  const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  function handleClick() {
    setCount((count) => count + 1);
  }
  function handleShowPopup() {
    setShowPopup((showPopup) => !showPopup);
    // setShowPopup(!showPopup);
  }

  return (
    <div>
      <button onClick={handleShowPopup}>{showPopup ? "Close" : "Open"}</button>
      {showPopup ? <PopUp /> : null}
      <button onClick={handleClick}>ADD: {count}</button>
    </div>
  );
}

export default App;
