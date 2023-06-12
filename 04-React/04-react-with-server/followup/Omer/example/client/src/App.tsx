import { useEffect, useState } from 'react'
import axios from 'axios'
import { User } from './components/user/User'
import './App.css'

function App() {
  const [isEmpty, setIsEmpty] = useState(false)
  const [users, setUsers] = useState([])
  useEffect(() => {
    (async () => {
      const {data} = await axios.get("/api/get-users")
      console.log(data);
      

      if(data[0] != null) {
        setIsEmpty(true)
        setUsers(data)
      }

      
    })()
  }, [])
  

  return (
    <div>
      <h2>{isEmpty? users.map((user:any) => <User name={user.name} age={user.age} />) :"Empty"}</h2>
    </div>
  )
}

export default App
