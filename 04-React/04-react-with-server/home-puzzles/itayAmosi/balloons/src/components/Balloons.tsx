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
  delay: number;
}

const BalloonComponent: FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const fetchBalloons = async () => {
      try {
        const { data } = await axios.get("/api/balloons/get-balloons");
        const { balloonDB } = data;

        // Add a random position and delay for each balloon rendering
        const modifiedBalloons = balloonDB.map((balloon: Balloon) => ({
          ...balloon,
          position: {
            x: Math.floor(Math.random() * 1500), // Random x position within 0-500 range
            y: Math.floor(Math.random() * 300) + 600, // Random y position within 600-900 range
          },
          delay: Math.floor(Math.random() * 2000) + 500, // Random delay between 500ms and 2500ms
        }));

        setBalloons(modifiedBalloons);
      } catch (error) {
        console.error("Error fetching balloons:", error);
      }
    };

    fetchBalloons();
  }, []);

  const handleBalloonAnimationEnd = (index: number) => {
    setBalloons((prevBalloons) => {
      const updatedBalloons = [...prevBalloons];
      updatedBalloons.splice(index, 1);
      return updatedBalloons;
    });
  };

  return (
    <div className="balloon-container">
      {balloons.map((balloon: Balloon, i: number) => (
        <div
          key={i}
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