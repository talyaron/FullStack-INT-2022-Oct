import axios from 'axios';
import { useEffect } from "react"
import './App.css'


export const ballons =
[{src:"https://shorturl.at/bpFL5"},
{src:"https://shorturl.at/dnOS0"}, 
{src:"https://shorturl.at/oLSX5"}, 
{src:"https://shorturl.at/ghsO3"},
{src:"https://shorturl.at/aoEJ5"},
{src:"https://shorturl.at/prwEI"},
]

function App() {

   const ballons =
  [{src:"https://shorturl.at/bpFL5"},
  {src:"https://shorturl.at/dnOS0"}, 
  {src:"https://shorturl.at/oLSX5"}, 
  {src:"https://shorturl.at/ghsO3"},
  {src:"https://shorturl.at/aoEJ5"},
  {src:"https://shorturl.at/prwEI"},
  ]
    
  const newBarray:any = {ballons}
  if (!newBarray) throw new Error("No ballons array");

  useEffect(()=>{
   
    (async ()=>{
      const {data} = await axios.get('/start-game');

      const {message} = data;

      setImg(message)

    })()

  },[])

  useEffect(()=>{
   

    console.log('update')
  },[count])





  return (
    <div>
      
    </div>
  )
}

export default App
