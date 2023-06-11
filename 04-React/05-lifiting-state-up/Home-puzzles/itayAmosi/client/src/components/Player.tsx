import { FC, SetStateAction, useState } from "react";
import { Player } from "../App";
import "../style/player.scss";
import Message from "./Message";

interface PlayerProps {
  setPlayers: SetStateAction<any>;
  players: Player[];
  player: Player;
}

const Player: FC<PlayerProps> = ({ setPlayers, players, player }) => {
  const [message, setMessage] = useState("");
  
  function handleClickPlayer(playerId: string) {
    const playerIndex = players.findIndex(
      (player: Player) => player._id === playerId
    );
    if (playerIndex === -1) return;
    const newPlayers = [...players];
    newPlayers[playerIndex].pop++;
    newPlayers[playerIndex].src1 = newPlayers[playerIndex].src2;
    setPlayers(newPlayers);
    setMessage("Uoch");
  }

  return (
    <div>
      <div className="card">
        <h1>{player.name}</h1>
        <img onClick={() => handleClickPlayer(player._id)} src={player.src1} />
        {Message() && <div className="messagePopUp">{message}</div>}
      </div>
    </div>
  );
};

export default Player;
