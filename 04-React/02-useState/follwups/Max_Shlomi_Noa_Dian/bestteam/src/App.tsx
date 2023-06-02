import { useState } from 'react'
import './App.css'
import PopUp from './comp/popUP/PopUp'


function App() {
  let [count, setCount] = useState(0)
  const [showPopup, setShowPopup] = useState <boolean>(false)

  function handleCounter(){
    setCount((count) =  count +1)
  }
  function showPopupOnDom(){
    setShowPopup((showPopup)=> !showPopup)
  }

  return (

      <div>
        <button onClick={handleCounter}>ADD {count}</button>
        <button onClick={showPopupOnDom}>{showPopup? "Close" : "Open"}</button>
        {showPopup? <PopUp /> : null}


      </div>
  )
}

export default App
