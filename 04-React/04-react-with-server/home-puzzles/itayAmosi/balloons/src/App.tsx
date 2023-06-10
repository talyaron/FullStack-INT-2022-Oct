import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import BalloonComponent from "./components/Balloons";

export interface BalloonComponent{
name: string;
src: string;
score: number;
_id: string;
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

  return (
    <div className="continer">
          <h3>PopUpBalloons</h3>
    <h4>Rules: <span>One click = change color ||
        Click = blow up the balloon</span></h4>

    <div className="wrapper">
      {/* <BalloonComponent /> */}
    </div>
    </div>
  );
}

export default App;
