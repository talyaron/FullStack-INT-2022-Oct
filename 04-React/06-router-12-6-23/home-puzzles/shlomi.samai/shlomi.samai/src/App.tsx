import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [text, setText] = useState<string>("")

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
      </div>
    </>
  )
}

export default App
