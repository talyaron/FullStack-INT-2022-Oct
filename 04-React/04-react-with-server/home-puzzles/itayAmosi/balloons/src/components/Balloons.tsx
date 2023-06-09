import { FC, useEffect, useState } from "react";
import axios from "axios";
import "./balloon.scss";

interface Key {
  id: string | number;
}

interface Balloon {
  _id: Key | null | undefined;
  name: string;
  src: string;
  position: {
    x: number;
    y: number;
  };
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => Promise<void>;
  delay: number;
}

const BalloonComponent: FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  // useEffect(() => {
  //   const fetchBalloons = async () => {
  //     try {
  //       const { data } = await axios.get("/api/balloons/get-balloons");
  //       const { balloonDB } = data;
  //       const modifiedBalloons = balloonDB.map((balloon: Balloon) => ({
  //         ...balloon,
  //         position: {
  //           x: Math.floor(Math.random() * 1500),
  //           y: Math.floor(Math.random() * 300) + 600,
  //         },
  //         delay: Math.floor(Math.random() * 2000) + 500,
  //       }));
  //       setBalloons(modifiedBalloons);
  //     } catch (error) {
  //       console.error("Error fetching balloons:", error);
  //     }
  //   };

  //   fetchBalloons();
  // }, []);

  const handleBalloonAnimationEnd = (index: number) => {
    setBalloons((prevBalloons) => {
      const updatedBalloons = [...prevBalloons];
      updatedBalloons.splice(index, 1);
      return updatedBalloons;
    });
  };
  const handleBalloonClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLDivElement;
    target.remove();
  };
  return (
    <div className="balloon-container">
      {balloons.map((balloon: Balloon, i: number) => (
        <div
          key={i}
          onClick={handleBalloonClick}
          className="balloon-wrapper"
          style={{
            top: `${balloon.position.y}px`,
            left: `${balloon.position.x}px`,
            animationDelay: `${balloon.delay}ms`,
          }}
          onAnimationEnd={() => handleBalloonAnimationEnd(i)}
        >
          <img className="balloon-image" src={balloon.src} alt={balloon.name} />
        </div>
      ))}
    </div>
  );
};

export default BalloonComponent;
