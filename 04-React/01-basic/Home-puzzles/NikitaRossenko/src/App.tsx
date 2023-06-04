import { useState } from 'react'
import './style/App.scss'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  const cardsArray = [<Card  title="Post1" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>,<Card  title="Post2" text="2."/>]


  return (
    <>
    <h1>Blog - Posts</h1>
      <div className="container">
        {cardsArray}
      </div>
    </>
  )
}

export default App
