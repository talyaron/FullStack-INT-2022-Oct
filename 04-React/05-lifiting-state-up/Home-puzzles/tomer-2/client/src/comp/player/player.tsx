import { FC,SetStateAction, useEffect, useState } from "react";
import { Player } from "../../App";

interface PlayerProps{
    setPlayers: SetStateAction<any>;
    players: Player[];
    player: Player;
};
const Player: FC<PlayerProps> = ({ setPlayers, players, player }) => {
  const [message, setMessage] = useState('');

  function handleClickPlayer(playerId: string) {
    try {
      const playerIndex = players.findIndex((player) => player._id === playerId);
      if (playerIndex === -1) throw new Error("Player not found");

      const newPlayers = [...players];
      const tempImage = newPlayers[playerIndex].image1;
      newPlayers[playerIndex].image1 = newPlayers[playerIndex].image2;
      newPlayers[playerIndex].image2 = tempImage;

      setPlayers(newPlayers);
      setMessage('Ouch!');

      setTimeout(() => {
        newPlayers[playerIndex].image1 = tempImage;
        setPlayers(newPlayers);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (message) {
      timer = setTimeout(() => {
        setMessage('');
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <div className="player-container">
      <img
        onClick={() => {
          handleClickPlayer(player._id);
          setMessage('Ouch!');
        }}
        className="player-img"
        key={player._id}
        src={player.image1}
        alt="player"
      />
      {message && (
        <div className="message">{message}</div>
      )}
    </div>
  );
};


export default Player