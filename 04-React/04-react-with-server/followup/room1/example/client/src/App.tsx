import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface Flower{
  img:string;
  name:string;
}

function App() {
  // const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false)
  const [flowers, setFlowers] = useState([])
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/get-word");
      const { flowers } = data
      setFlowers(flowers)
      const { ok } = data;
      console.log(ok)
      if (ok) {
        setIsTrue(ok)
      }
    })();
  }, []);

  return (
    <div>
      <h1>Hello: {isTrue ? "Hi all" : "good?"}</h1>
      {flowers.map((flower:Flower)=>{
        return <div>
          <span>{flower.name}</span>
          <img src={flower.img}></img>
        </div>
      })
      }
    </div>
  );
}

export default App;
