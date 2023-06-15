import { useEffect, useState } from 'react'
import axios from 'axios';
import { BalloonComp } from './components/balloon/Balloon';
import './App.css'

function App() {
  interface Balloon {
    width:string,
    height:string,
    color:string
}
  const [index, setIndex] = useState(0);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [balloon,setBalloon] = useState<Balloon>()
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    (async () => {
      const {data} = await axios.get("/api/get-balloons")
      const {balloons} = data;
      console.log(balloons);
      
      
      if(balloons != null) {
        setBalloons(balloons)
        setIsData(true)
      }
      
    })()
  }, [setBalloon])

  
  
  
  function click() {
    if(index == balloons.length-1){
      setIndex(0)
    } else {
      setIndex(index+1)
    }
    setBalloon(balloons[index])
    
  }

  return (
    <div>
      <button onClick={click}>Get</button>
      <h1>{index}</h1>
      <h1>{balloon? balloon.color:"Empty"}</h1>
      {isData? <BalloonComp width={balloons[index].width} height={balloons[index].height} color={balloons[index].color} />:"Empty"}
    </div>
  )
}

export default App
