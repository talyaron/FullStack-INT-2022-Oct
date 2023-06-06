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
      <h1>{isTrue ? "All Ballons": "NO BALLONS"}</h1> 
      <div className='main-container'>
        {ballons.map((ballon, i)=>{
          return(
            <div key={i} className='container-ballons'>
              <img src={ballon.img}></img>
              <h1>{ballon.name}</h1>
            </div>
          )
        })}
        </div> 
    </>
  )
}

export default App
