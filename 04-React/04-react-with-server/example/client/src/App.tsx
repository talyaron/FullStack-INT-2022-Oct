import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'



function App() {
  // const [count, setCount] = useState(0);
  useEffect(()=>{
    (async()=>{
      const {data} = await axios.get("/api/get-word");
      console.log(data)
    })()
  },[])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
