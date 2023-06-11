import { useState ,useEffect} from 'react'
import axios from 'axios'
import './App.scss'
import PlayerProps from './comp/player/player';

export interface Player{
image1: string;
image2: string;
_id: string;
}

function App() {
  const [players , setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function getPlayers() {
      try {
        const { data } = await axios.get("/api/players/get-players");
        const { players } = data;
        if (!players) throw new Error("no players");
        const newPlayers = players.map((player: Player) => ({ ...player }));
        setPlayers(newPlayers);
      } catch (error) {
        console.error(error);
      }
    }
    getPlayers();
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e.target);
    const image1 = e.target.image1.value;
    const image2 = e.target.image2.value;

    console.log(image1,image2);
    const { data } = await axios.post("/api/players/add-player", { image1,image2 });
    console.log(data);
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="image1" placeholder="player image1 url" />
      <input type="text" name="image2" placeholder="player image2 url" />
      <input type="submit" value="ADD" />
    </form>
    <div className="wrapper">
          {players.map((player) => (
           <PlayerProps setPlayers={setPlayers} players={players} player={player} />
          ))}
        </div>
  </div>
  )
}

export default App
