import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";


interface Balloons {
  img: string;
  
}

function App() {
  // const [count, setCount] = useState(0);
  const [_balloons, setBalloons] = useState<Balloons[]>([]);
  
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/get-balloons")        ;
        console.log(data)
        console.log("data")
      const { balloons } = data;
      setBalloons(balloons);
    })();
  }, []);

  return (
    <div>
      {_balloons.map((balloon, i) => (
        <div className="div">

          {/* <h1 key={i}>{balloon.img}</h1> */}
          <img src={balloon.img} key={i} />

        </div>
        
      ))}
      {/* {_balloons.map((balloon, i) => (
      ))} */}
    </div>
  );
}

export default App;
