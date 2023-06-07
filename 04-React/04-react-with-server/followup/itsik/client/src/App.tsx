import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface Prime{
  img:string;
  name?:string;
  info?:string;
}


function App() {

  const [primeMinisters, setPrime] = useState<Array<Prime>>([])

  const [isTrue, setIsTrue] = useState(false)


    
  return (
   
   <div className="container">
   <h1>"Israel Prime-Ministers"</h1>

   <div key={i} className="img">
    <img src={primeMinisters.img} alt="prime mister img"/>
    <h2>{primeMinisters.name}</h2>
    <p>{primeMinisters.info}</p>
    </div>
    </div>

  );
}

export default App
