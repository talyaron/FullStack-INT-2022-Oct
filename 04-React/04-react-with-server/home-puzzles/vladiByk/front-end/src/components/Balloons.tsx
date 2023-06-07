import OneBalloon from "./OneBalloon";
import { BalloonInterface } from "../App";

interface BalloonsProps {
  ballons: BalloonInterface[];
  speed: number;
  handleBalloonClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => Promise<void>;
}

const Balloons = ({
  ballons,
  speed,
  handleBalloonClick,
}: BalloonsProps) => {
  return (
    <div className="Balloons">
      {ballons.map((ballon) => (
        <OneBalloon
          key={ballon._id}
          color={ballon.color}
          radius={parseInt(ballon.radius)}
          id={ballon._id}
          handleBalloonClick={handleBalloonClick}
          speed={speed}
        />
      ))}
    </div>
  );
};

export default Balloons;
