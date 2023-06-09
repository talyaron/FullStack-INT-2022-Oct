import { FC, SetStateAction } from "react";
import { Balloon } from "../App";

interface BalloonProps {
  setBalloons: SetStateAction<any>;
  balloons: Balloon[];
  balloon: Balloon;
}

const Balloon: FC<BalloonProps> = ({ setBalloons, balloons, balloon }) => {
 

  function handleClickBalloon(balloonId: string) {
    try {
      const balloonIndex = balloons.findIndex(
        (balloon) => balloon._id === balloonId
      );
      if (balloonIndex === -1) throw new Error("balloon not found");
      const newBalloons = [...balloons];

      newBalloons[balloonIndex].score++;
      console.log(newBalloons)

      //   newBalloons.splice(balloonIndex, 1);
      setBalloons(newBalloons);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <img
        onClick={() => handleClickBalloon(balloon._id)}
        className="balloon"
        key={balloon._id}
        src={balloon.image}
        alt="balloon"
      />
    </div>
  );
};

export default Balloon;
