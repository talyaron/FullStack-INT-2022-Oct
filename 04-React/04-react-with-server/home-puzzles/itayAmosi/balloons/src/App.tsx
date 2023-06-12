import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import BalloonComponent from "./components/Balloons";

export interface BalloonComponent{
splice(balloonIndex: number, arg1: number): unknown;
name: string;
src: string;
score: number;
_id: string;
}
function sumScore(balloons: BalloonComponent[]) {
  return balloons.reduce((acc, curr) => {
    return acc + curr.score;
  }, 0);
}

function App() {
const [balloons, setBalloons] = useState<BalloonComponent[]>([]);

useEffect(() => {
  const fetchBalloons = async () => {
    try {
      const { data } = await axios.get("/api/balloons/get-balloons");
      const { balloonDB } = data;
      if(!balloonDB) return;
      const newBalloons = balloonDB.map((balloon: BalloonComponent) => {
        return {...balloon, score:0}

      });
      setBalloons(newBalloons);
    } catch (error) {
      console.error("Error fetching balloons:", error);
    }
  }

  fetchBalloons();
}, []);

async function handleSubmit(e:any){
  e.preventDefault();
  console.log(e.target);
  const image = e.target.image.value;
  console.log(image);
  const { data } = await axios.post("/api/balloons/add-balloon", { image });
  console.log(data);
}

return (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="image" placeholder="balloon image url" />
      <input type="submit" value="ADD" />
    </form>
    <h2>{sumScore(balloons)}</h2>
    <div className="wrapper">
      {balloons.map((balloon) => (
        <BalloonComponent
          setBalloons={setBalloons}
          balloons={balloons}
          balloon={balloon}
        />
      ))}
    </div>
  </div>
);
}

export default App;
