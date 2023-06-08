import { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";
import BalloonComp from "./comp/Balloon";

export interface Balloon {
  image: string;
  _id: string;
  score: number;
}

function sumScore(balloons: Balloon[]) {
  return balloons.reduce((acc, curr) => {
    return acc + curr.score;
  }, 0);
}

function App() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    async function getBalloons() {
      try {
        const { data } = await axios.get("/api/balloons/get-balloons");
      
        const { balloons } = data;
        if (!balloons) throw new Error("no balloons");
        console.log(balloons)
        const newBalloons = balloons.map((balloon:Balloon) => {return {...balloon, score:0}});
        console.log(newBalloons)
        setBalloons(newBalloons);
      } catch (error) {
        console.error(error);
      }
    }
    getBalloons();
  }, []);

  async function handleSubmit(e: any) {
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
         <BalloonComp setBalloons={setBalloons} balloons={balloons} balloon={balloon} />
        ))}
      </div>
    </div>
  );
}

export default App;
