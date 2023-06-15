import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
      <div>
        <Link to='/second'>Go To Second page</Link>
      </div>
     
    </>
  )
}

export default App
