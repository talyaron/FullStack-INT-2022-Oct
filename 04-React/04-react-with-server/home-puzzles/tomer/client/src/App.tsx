import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

interface Ballon{
  img:string;
  name:string;
}

function App() {
  const [ballons, setBallons] = useState<Array<Ballon>>([])
  const [isTrue, setIsTrue]= useState(false)
  useEffect(()=>{
    (async()=>{
      const {data}= await axios.get("/api/get-word");
      const {ok}= data;
      console.log(ok)
      if(ok){
        setIsTrue(ok)
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('api/get-ballons');
      const { ballons } = data;
      setBallons(ballons);
      console.log(ballons)
    })()
  }, [])
  return (
<>
  <h1>{isTrue ? "All Balloons" : "NO BALLOONS"}</h1>
  <div className='main-container'>
    {ballons.map((ballon, i) => {
      const randomTop = Math.floor(Math.random() * 70) + 20; // Random top position between 20% and 90%
      const randomLeft = Math.floor(Math.random() * 80) + 10; // Random left position between 10% and 90%
      const randomDelay = Math.random() * 3; // Random delay between 0 and 3 seconds

      return (
        <div
          key={i}
          className='container-balloons'
          style={{
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
            animationDelay: `${randomDelay}s`,
          }}
        >
          <img src={ballon.img} alt={ballon.name} />
          {/* <h1>{ballon.name}</h1> */}
        </div>
      );
    })}
  </div>
</>
  )
}

export default App
