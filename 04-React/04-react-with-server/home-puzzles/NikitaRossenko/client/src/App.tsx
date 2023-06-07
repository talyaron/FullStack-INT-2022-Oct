/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [balloons, setBalloons] = useState(0)

  function getBalloons(){
    console.log("getting Balloons")

  }

  useEffect(() => {
    async () => {

      const balloonsDB = await axios.get("/get-balloons")
      console.log(balloonsDB)
    }
  },[])

  return (
    <>
      <div className='balloonsCntainer'>

      </div>
      <button onClick={getBalloons} className='getBallonsBtn'>Get Ballons</button>
    </>
  )
}

export default App
