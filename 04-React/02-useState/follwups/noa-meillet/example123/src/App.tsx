import './App.css';
import { useState } from "react";
import PopUp from './components/PopUp';

function App() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  function handleShowPopup() {
    setShowPopup((showPopup) => !showPopup);
    // setShowPopup(!showPopup);
  }
  return (
    <div>
      <button onClick={handleShowPopup}>{showPopup ? "Close" : "Daily Joke"}</button>
      {showPopup ? <PopUp /> : null}
    </div>
  )
}

export default App

