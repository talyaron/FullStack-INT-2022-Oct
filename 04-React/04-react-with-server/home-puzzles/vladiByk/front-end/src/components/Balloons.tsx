import OneBalloon from "./OneBalloon";
import { BalloonInterface } from "../App";

interface BalloonsProps {
  ballons: BalloonInterface[];
}

const Balloons = ({ ballons }: BalloonsProps) => {
  return (
    <div className="Balloons">
      {ballons.map((ballon) => (
        <OneBalloon
          key={ballon._id}
          color={ballon.color}
          radius={parseInt(ballon.radius)}
          id={ballon._id}
        />
      ))}
    </div>
  );
};

export default Balloons;
