import { useState } from 'react'
import PopUp from './componnets/popUp/PopUp'
import './App.css'

function App() {
  const [count, setCount] = useState(50)
  const [isOpen, setIsOpen] = useState(false)
  const handelPopUp =()=>{
    setIsOpen(isOpen=>!isOpen);
  }
  return (
    <div>
      <p>{count}</p>
    <button onClick={()=>setCount(count=>count +count/15)}>add1</button>
    <button onClick={handelPopUp}>{isOpen?"close":"open"}</button>
    {isOpen?<PopUp count={count}/>:null}
    </div>
  )
}

export default App
