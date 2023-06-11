import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import PlayerProps from "./components/Player";

export interface Player {
  _id: string;
  name: string;
  src1: string;
  src2: string;
  pop: number;
}

function sumPop(players: Player[]) {
  return players.reduce((acc, curr) => {
    return acc + curr.pop;
  }, 0);
}

function App() {
  const [pop, setPop] = useState(0);
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function getPlayers() {
      try {
        const { data } = await axios.get("/api/players/get-players");
        const { players } = data;
        if (!players) return;
        const newPlayers = players.map((players: Player) => {
          return { ...players, name: players.name, src1: players.src1, src2: players.src2, pop };
        });
        setPlayers(newPlayers);
      } catch (error) {
        console.error(error);
      }
    }
    getPlayers();
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const name = e.target.name.value;
    const src1 = e.target.src1.value;
    const src2 = e.target.src2.value;
    const { data } = await axios.post("/api/players/add-player", { name, src1, src2 });
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Player Name" />
        <input type="text" name="src1" placeholder="Player url-1" />
        <input type="text" name="src2" placeholder="Player url-2" />
        <button type="submit">create</button>
      </form>
      <h1>{sumPop(players)}</h1>
      {players.map((player) => (
        <PlayerProps
          players={players}
          setPlayers={setPlayers}
          player={player}
        />
      ))}
    </>
  );
}

export default App;
