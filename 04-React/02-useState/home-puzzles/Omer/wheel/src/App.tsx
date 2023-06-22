import { useState } from 'react'
import './App.css'
import CSS from 'csstype';
import { Box } from './comp/box/Box';

const students = ["Omer", "Guy", "Ben", "Alon"];
const colors = ["Blue", "Black", "Red", "Green"]

function App() {
  
  const [num, setNum] = useState(0);

  function randomNumberInRange(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(0, 3));
    setColorNum(randomNumberInRange(0, 3));
  };

  const [colorNum, setColorNum] = useState(0);
  const color = colors[colorNum];
  
  
  const divStyle : CSS.Properties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor : `${color}`,
    color: "White"
  }

  return (
    <div style={divStyle}>
      <div>
        <Box color={color}/>
        <h2>{students[num]}</h2>
        <button onClick={handleClick}>Get random student and color</button>
      </div>
    </div>
  )
}

export default App
