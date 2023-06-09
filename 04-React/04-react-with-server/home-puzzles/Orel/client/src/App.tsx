import './App.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { IBalloon } from './components/Balloon/Balloon' // interface Ballon
import Navbar from './components/Navbar/Navbar'
import GameBoard from './components/GameBoard/GameBoard'

function App() {
    const [balloons, setBalloons] = useState<Array<IBalloon> | []>([])
  

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/api/balloons/get-balloons');
        const balloonsDB = data.balloons
        if (!balloonsDB) throw new Error("no found balloons in data DB")
        setBalloons(balloonsDB)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <section className='main-container'>
      <Navbar />
      <GameBoard />
    </section>
  )
}

export default App
