import axios from "axios";
import { useEffect, useState } from "react";
import PlayerProps from "../components/Player";
import "../style/player.scss"


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


const Players = () => {

    const [pop, setPop] = useState(0);
    const [players, setPlayers] = useState<Player[]>([]);
  
    useEffect(() => {
      async function getPlayers() {
        try {
          const { data } = await axios.get("/api/players/get-players");
          const { players } = data;
          if (!players) return;
          const newPlayers = players.map((players: Player) => {
            return {
              ...players,
              name: players.name,
              src1: players.src1,
              src2: players.src2,
              pop,
            };
          });
          setPlayers(newPlayers);
        } catch (error) {
          console.error(error);
        }
      }
      getPlayers();
    }, []);


  return (
    <div>

      <h1>{sumPop(players)}</h1>
      {players.map((player) => (
        <PlayerProps
          players={players}
          setPlayers={setPlayers}
          player={player}
        />
      ))}
    </div>
  );
};

export default Players;
