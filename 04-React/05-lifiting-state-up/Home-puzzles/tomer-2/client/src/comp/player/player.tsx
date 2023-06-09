import { FC,SetStateAction, useState } from "react";
import { Player } from "../../App";

interface PlayerProps{
    setPlayers: SetStateAction<any>;
    players: Player[];
    player: Player;
};

const Player: FC<PlayerProps> = ({ setPlayers, players, player }) => {
    const [ouchMessage, setOuchMessage] = useState('');
    function handleClickPlayer(playerId: string) {
        try {
          const playerIndex = players.findIndex((player) => player._id === playerId);
          if (playerIndex === -1) throw new Error("Player not found");
          
          const newPlayers = [...players];
          newPlayers[playerIndex].image1 = newPlayers[playerIndex].image2; // Update image1 with image2
          
          setPlayers(newPlayers);
          setOuchMessage('Ouch!'); // Set the message to display
        } catch (error) {
          console.error(error);
        }
      }
  
    return (
      <div className="player-container">
        <img
          onClick={() => handleClickPlayer(player._id)}
          className="player-img"
          key={player._id}
          src={player.image1}
          alt="player"
        />
         {ouchMessage && (
        <div className="message">{ouchMessage}</div>
      )}
      </div>
    );
  };
  

export default Player