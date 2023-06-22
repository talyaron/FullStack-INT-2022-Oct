import { useState } from 'react'
import './App.scss'
import PopUp from './components/PupUp'





function App() {
  const [name, setName] = useState(true)
  const [color, setColor] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const handelPopUp =()=>{
    setIsOpen((isOpen)=>!isOpen);
  }
  const handelColor =()=>{
    setColor((color)=>!color);
  }
  const handelRandomName =()=>{
    const months = ["itay", "matan", "assaf", "tal", "tomer", "nikita", "vladi"];
    const random = Math.floor(Math.random() * months.length);
    setName((name)=>!name);
    console.log(random, months[random]);
  }
  return (
    <div className="container">
    <div>
    <button onClick={handelRandomName}>name</button>
    <button onClick={handelColor}>add1</button>
    <button onClick={handelPopUp}>{isOpen?"close":"open"}</button>
    {isOpen?<PopUp />:null}
    </div>
</div>
  )
}

export default App
