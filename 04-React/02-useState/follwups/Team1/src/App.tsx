/* eslint-disable no-inner-declarations */
import { useState } from 'react'
import './App.scss'
import PopUp from "./comps/PopUp"


function App() {
  try {
    const [showPopup, setShopPopup] = useState(false)
  
    function handlePopUp(){
      setShopPopup(!showPopup)
    }

    
    return (
      <>
      <div className='container'>
        <button onClick={handlePopUp}>{showPopup?"Close":"Open"}</button>
        {showPopup?<PopUp text="New popUp"/>:null}
        {showPopup?<PopUp text="New popUp"/>:null}
      </div>
      </>
    )
  } catch (error) {
    console.error(error)
    return null

    
  }
}

export default App
