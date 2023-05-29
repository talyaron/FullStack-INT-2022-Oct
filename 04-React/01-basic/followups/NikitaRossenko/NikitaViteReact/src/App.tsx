import { useState } from 'react'
import './App.scss'
import Box from "./box.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Test React</h1>
      <Box/>
      <Box/>
      <Box/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
