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
      const bootballPlayerIndex = footballPlayers.findIndex(
        (footballPlayer) => footballPlayer._id === footballPlayerId
      );
      if (bootballPlayerIndex === -1) throw new Error("bootballPlayer not found");
      const newFootballPlayers = [...footballPlayers];

      console.log(newFootballPlayers)

      //   newBootballPlayers.splice(bootballPlayerIndex, 1);
      setFootballPlayers(newFootballPlayers);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <img
        onClick={() => handleClickFootballPlayer(footballPlayer._id)}
        className="bootballPlayer"
        key={footballPlayer._id}
        src={footballPlayer.image}
        alt="footballPlayer"
      />
    </div>
  );
};

export default FootballPlayer;
