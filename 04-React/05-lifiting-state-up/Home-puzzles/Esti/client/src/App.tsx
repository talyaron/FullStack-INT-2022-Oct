import { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";
import FootballPlayerComp from "./comp/FootballPlayer/footballPlayer";

export interface FootballPlayer {
  image: string;
  _id: string;
}


function App() {
  const [footballPlayers, setFootballPlayers] = useState<FootballPlayer[]>([]);

  useEffect(() => {
    async function getFootballPlayers() {
      try {
        const { data } = await axios.get("/api/footballPlayers/get-footballPlayers");
      
        const { footballPlayers } = data;
        if (!footballPlayers) throw new Error("no FootballPlayer");
        console.log(footballPlayers)
        const newFootballPlayers = footballPlayers.map((footballPlayer:FootballPlayer) => {return {...footballPlayer, score:0}});
        console.log(newFootballPlayers)
        setFootballPlayers(newFootballPlayers);
      } catch (error) {
        console.error(error);
      }
    }
    getFootballPlayers();
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e.target);
    const image = e.target.image.value;
    console.log(image);
    const { data } = await axios.post("/api/footballPlayers/add-footballPlayer", { image });
    console.log(data);
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="image" placeholder="footballPlayer image url" />
        <input type="submit" value="ADD" />
      </form>
      {/* <h2>{sumScore(footballPlayers)}</h2> */}
      <div className="wrapper">
        {footballPlayers.map((footballPlayer) => (
         <FootballPlayerComp setFootballPlayers={setFootballPlayers} footballPlayers={footballPlayers} footballPlayer={footballPlayer} />
        ))}
      </div>
    </div>
  );
}

export default App;
