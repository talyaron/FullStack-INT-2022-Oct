import { useEffect, useState } from "react";
import axios from "axios";
import Balloons from "./components/Balloons";

export interface BalloonInterface {
  color: string;
  radius: string;
  _id: string;
}

function App() {
  const [ballons, setBallons] = useState<BalloonInterface[]>([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(7);

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

  const handleBalloonClick = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLDivElement;
    const balloonId = target.id;
    target.remove();
    await axios.delete(`http://localhost:3000/api/v1/ballons/${balloonId}`);
    setScore((prev) => prev + 1);
    if (score % 2 === 0) {
      setSpeed((prev) => prev - 1);
    }
  };

  const handleStartNewGame = async () => {
    [...Array(30)].map(
      async () => await axios.post("http://localhost:3000/api/v1/ballons")
    );
    const { data } = await axios.get("http://localhost:3000/api/v1/ballons");
    setBallons(data.ballons);
    setIsStarted((prev) => (prev = !prev));
    setTimeout(() => {
      setIsFinished(true);
    }, speed * 900);
  };

  useEffect(() => {
    (async () => {
      await axios.delete("http://localhost:3000/api/v1/ballons/deleteAll");
    })();
  }, [isFinished]);

  return (
    <>
      {isFinished ? <div className="score">Score: {score}</div> : ""}
      {isStarted ? (
        <Balloons
          ballons={ballons}
          handleBalloonClick={handleBalloonClick}
          speed={speed}
        />
      ) : (
        <div className="buttonDiv">
          <button onClick={handleStartNewGame}>
            <span>start game</span>
          </button>
        </div>
      )}
    </>
  );
}

export default App;
