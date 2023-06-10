import { useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    (async () => {
      const data = await axios.get("/api/get-users")
      console.log(data);
      
    })()
  }, [])
  

  return (
    <div>
      <h2>Hello</h2>
    </div>
  )
}

export default App
