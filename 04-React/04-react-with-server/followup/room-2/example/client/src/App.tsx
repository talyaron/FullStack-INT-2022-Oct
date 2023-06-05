import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [flowers, setFlowers] = useState([])
  const [isTrue, setIsTrue] = useState(false)
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/get-word");
      const { ok } = data;
      console.log(ok)
      if (ok) {
        setIsTrue(ok)
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('api/get-flowers')
      const { flowers } = data
      setFlowers(flowers)

      console.log(flowers)
    })()
  }, [])

  return (
    <div>
      <h1> {isTrue ? "All Flowers" : "good?"}</h1>
      <div className="main-container">

        {flowers.map((flower , i )=> {
          const { img, name } = flower
          return (
            <div key={i} className="container-flowers">
              <img src={img}  ></img>
              <h2>{name}</h2>
            </div>

          )
        })}

      </div>
    </div>
  );
}

export default App;
