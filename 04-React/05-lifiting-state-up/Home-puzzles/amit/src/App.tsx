import { useState } from 'react'
import './App.scss'
import Mole, { MoleInterface } from './components/mole/mole'


function App() {
  const [moleIndex, setMoleIndex] = useState(0)
  const [moles, setMoles] = useState<MoleInterface[]>([{ id: "1", name: "moleOne", score: 0 }, { id: "2", name: "moleTwo", score: 0 }, { id: "3", name: "moleThree", score: 0 }]);

  function sumScore(moles: MoleInterface[]) {
    return moles.reduce((acc, curr) => {
      return acc + curr.score;
    }, 0);
  }
  let intervalId: any

  function handleResetEmergingMole() {
    try {
      setMoleIndex((moleIndex) => {
        const randomMoleIndex = Math.floor(Math.random() * moles.length)
        moleIndex = randomMoleIndex
        return moleIndex
      })
    } catch (error) {
      console.error(error)
      return null
    }
  }


  function handlePlay() {
    try {
      if (intervalId !== null) intervalId = setInterval(handleResetEmergingMole, 7000)
    } catch (error) {
      console.error(error)
      return null
    }
  }

  function handleStop() {
    try {
      window.location.reload()
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return (
    <div>
      <div className='garden'>
        <div className="controlersWrapper">
          <h1>whac-a-mole</h1>
          <h2>score: {sumScore(moles)}</h2>
          <button onClick={handlePlay}>play</button>
          <button onClick={handleStop}>stop</button>
        </div>
        <div className='garden__holesContainer'>
          {moles.map((mole: MoleInterface) => {
            return <div key={`${mole.id}-holeMole`} className='garden__holesContainer__holeAndMoleWrapper'>
              <div key={`${mole.id}-hole`} className='garden__holesContainer__holeAndMoleWrapper__hole'>
                <Mole key={mole.id} setMoles={setMoles} moles={moles} mole={mole} emerges={moles[moleIndex].name === mole.name} />
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App

