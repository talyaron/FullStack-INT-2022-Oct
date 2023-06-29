import { FC, SetStateAction } from "react";
import { FootballPlayer } from "../../App";

interface FootballPlayerProps {
  setFootballPlayers: SetStateAction<any>;
  footballPlayers: FootballPlayer[];
  footballPlayer: FootballPlayer;
}

const FootballPlayer: FC<FootballPlayerProps> = ({ setFootballPlayers, footballPlayers, footballPlayer }) => {
 

  function handleClickFootballPlayer(footballPlayerId: string) {
    try {
      const footballPlayerIndex = footballPlayers.findIndex(
        (footballPlayer) => footballPlayer._id === footballPlayerId
      );
      if (footballPlayerIndex === -1) throw new Error("footballPlayer not found");
      const newFootballPlayers = [...footballPlayers];

      console.log(newFootballPlayers)

     
      setFootballPlayers(newFootballPlayers);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <img
        onClick={() => handleClickFootballPlayer(footballPlayer._id)}
        className="footballPlayer"
        key={footballPlayer._id}
        src={footballPlayer.image}
        alt="footballPlayer"
      />
    </div>
  );
};

export default FootballPlayer;
