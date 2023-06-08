import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

interface Balloons {
  img: string;
}

function App() {
  const [_balloons, setBalloons] = useState<Balloons[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/get-balloons");

      const { balloons } = data;
      setBalloons(balloons);
    })();
  }, []);

  return (
    <div>
      {_balloons.map((balloon, i) => (
        <div className="div">

          <img src={balloon.img} key={i} />

        </div>
        
      ))}
    </div>
  );
}

export default App;
