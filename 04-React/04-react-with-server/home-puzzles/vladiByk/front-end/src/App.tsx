import { useEffect, useState } from "react";
import axios from "axios";
import Balloons from "./components/Balloons";

export interface BalloonInterface {
  color: string;
  radius: string;
  _id: string;
}

export const handleBalloonClick = async (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const target = e.target as HTMLDivElement;
  await axios.delete(`http://localhost:3000/api/v1/ballons/${target.id}`);
  target.remove();
};

function App() {
  const [ballons, setBallons] = useState<Balloon[]>([]);
  const [isStarted, setIsStarted] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/ballons"
        );
        setBallons(data.ballons);
        if (ballons.length === 0) {
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const hadleContinueBtn = () => {
    setScore;
  };

  return (
    <>
      {isStarted ? (
        <Balloons ballons={ballons} />
      ) : (
        <div className="btnDiv">
          <button>
            <span>start new game</span>
          </button>
          <button onClick={hadleContinueBtn}>
            <span>continue</span>
          </button>
        </div>
      )}
    </>
  );
}

export default App;
