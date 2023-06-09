import './App.css'
import './index.css'
import { PopUp } from './components/popUp/PopUp'
import { useState } from 'react'

function App() {

  const [usePopUp, setUsePopUp] = useState<boolean>(false)

  function showPopUp() {
    setUsePopUp((usePopUp) => !usePopUp)
  }

  return (
    <div>
      <button onClick={showPopUp}>{usePopUp?"Hide":"Show"}</button>
      {usePopUp?<PopUp />:null}
    </div>
  )
}

export default App
