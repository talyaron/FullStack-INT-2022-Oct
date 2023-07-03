/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import BalloonDialog from "./components/balloonDialog"

function App() {
  const [count, setCount] = useState(0)
  const [balloons, setBalloons] = useState(0)
  const [balloonDialog, setaddBalloonDialog] = useState(false)
  
  async function getBalloons(){
    console.log("getting Balloons")

    const balloonsDB = await axios.get("/api/get-balloons")
    console.log(balloonsDB)
  }

  function revealBalloonDialog(){
    setaddBalloonDialog(!balloonDialog)
  }

  return (
    <>
      <div className='balloonsContainer'>

      </div>
      <button onClick={getBalloons} className='getBallonsBtn'>Get Ballons</button>
      <button onClick={revealBalloonDialog}>Add Balloon</button>
      <div className="addBalloonDialog">
        {balloonDialog?<BalloonDialog />:null}
      </div>
    </>
  )
}

export default App
