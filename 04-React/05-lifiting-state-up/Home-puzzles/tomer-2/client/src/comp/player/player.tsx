import { FC,SetStateAction } from "react";
import { Player } from "../../App";

interface PlayerProps{
    setPlayers: SetStateAction<any>;
    players: Player[];
    player: Player;
};

const Player: FC<PlayerProps> = ({ setPlayers, players, player }) => {
    function handleClickPlayer(playerId: string) {
      try {
        const playerIndex = players.findIndex((player) => player._id === playerId);
        if (playerIndex === -1) throw new Error("Player not found");
        
        const newPlayers = [...players];
        newPlayers[playerIndex].image1 = newPlayers[playerIndex].image2; // Update image1 with image2
        
        setPlayers(newPlayers);
      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <div>
        <img
          onClick={() => handleClickPlayer(player._id)}
          className="player"
          key={player._id}
          src={player.image1}
          alt="player"
        />
      </div>
    );
  };
  

export default Player