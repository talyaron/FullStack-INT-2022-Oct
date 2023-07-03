import { FC, SetStateAction, useState } from "react";
import { Player } from "../pages/Players";
import "../style/player.scss";
import Message from "./Message";

interface PlayerProps {
  setPlayers: SetStateAction<any>;
  players: Player[];
  player: Player;
}

const Player: FC<PlayerProps> = ({ setPlayers, players, player }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handelPopUp =()=>{
    setIsOpen((isOpen)=>!isOpen);
  }
  function handleClickPlayer(playerId: string) {
    const playerIndex = players.findIndex(
      (player: Player) => player._id === playerId,
      handelPopUp()
    );
    if (playerIndex === -1) return;
    const newPlayers = [...players];
    newPlayers[playerIndex].pop++;
    newPlayers[playerIndex].src1 = newPlayers[playerIndex].src2;
    setPlayers(newPlayers);

  }

  return (
    <div className="Container-cards">
      <div className="card">
        <h1>{player.name}</h1>
        <img  onClick={() => handleClickPlayer(player._id)} src={player.src1} />
      </div>
        {isOpen? <Message />:null}
    </div>
  );
};

export default Player;
