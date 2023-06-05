import { useState } from 'react'
import './App.scss'
import PopUp from './components/popUp/popUp'


function App() {
  const [color,setColor] = useState(false)
  const[PopOpen,setPopOpen] =useState(false)
  const handelPopUp =()=>{
    setPopOpen((PopOpen)=>!PopOpen);
  }
  const handelColor =()=>{
    setColor((color)=>!color);
  }
  return (
    <>
    <div className='mainPage'>
      <div>
        <button onClick={handelColor}> Flip Againe</button>
        <button onClick={handelPopUp}>{PopOpen?"Dont Show":"Show"}</button>
        {PopOpen?<PopUp />:null}
      </div>
  </div>
    </>
  )
}

export default App
