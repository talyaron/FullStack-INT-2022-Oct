import { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [img, setImg] = useState<string>('https://i2.wp.com/www.skiptomylou.org/wp-content/uploads/2019/06/dog-drawing.jpg')
  
  useEffect(()=>{
   
    (async ()=>{
      const {data} = await axios.get('https://dog.ceo/api/breeds/image/random');

      const {message} = data;

      setImg(message)

    })()

  },[])

  useEffect(()=>{
   

    console.log('update')
  },[count])
  return (
    <>
      <div>
        <img className="image" src={img}></img>
        <h1 onClick={() => setCount((count) => count + 1)}>Start: {count}</h1>
      </div>
    </>
  );
}

export default App;
