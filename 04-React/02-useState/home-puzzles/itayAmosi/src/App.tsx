import { useState } from 'react'
import './App.scss'
import PopUp from './components/PupUp'





function App() {

  const [color, setColor] = useState(false) 
  const [isOpen, setIsOpen] = useState(false)
  const handelPopUp =()=>{
    setIsOpen((isOpen)=>!isOpen);
  }
  const handelColor =()=>{
    setColor((color)=>!color);
  }

  return (
    <div className="container">
    <div>
    <button role="button" className='button-49' onClick={handelColor}>Color  + Name</button>
    <button role="button" className='button-49' onClick={handelPopUp}>{isOpen?"close":"open"}</button>
    {isOpen?<PopUp />:null}
    </div>
</div>
  )
}

export default App
