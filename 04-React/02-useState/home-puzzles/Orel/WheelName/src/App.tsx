// import { useState } from 'react'
import SpinningWheel from './components/wheel/Wheel';
import './App.css'
import TestButton from './components/TestButton/TestButton'

// const names:any = [
//   "Orel" , "yoram" , "michael" , "moshe"
// ]

const  App = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Spinning Wheel</h1>
      <SpinningWheel names={names} />
      <TestButton/>
    </div>
  )
}

export default App
