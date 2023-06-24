import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

interface Player{
  image:string;
  _id:string;
}

function App() {
  const [text, setText] = useState<string>("")
  const [players,setPlayers]=useState<Player[]>([])

useEffect(()=>{
async function getPlayer() {
 const  {data}= await axios.get('/api/get-player') 
 setPlayers(data.player)
}
getPlayer()
},[])

  async function handleSubmit(ev:any){
    ev.preventDefault()
    setText(ev.target.url.value)
    const image= ev.target.url.value
    const {data}= await axios.post('api/add-player',{image})
    console.log(data)
    console.log(image)
  } 

  return (
    <>
      <div>
        <h1>{text}</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" id="url" />
        <button type='submit'>submit</button>
        </form >
        
        {players.map((Player)=><img key={Player._id} src={Player.image} alt="player" />)}

      </div>
    </>
  )
}

export default App
