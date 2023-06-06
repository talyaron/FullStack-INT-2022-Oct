import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

interface BalloonProps {
  color: string;
  radius: number;
  id: string;
}

const root = document.querySelector("#root") as HTMLDivElement;
const rootWidth = root.clientWidth;
const randomX = () => Math.floor(Math.random() * rootWidth);

const Balloon = ({ color, radius, id }: BalloonProps) => {
  const [speed, setSpeed] = useState(10);
  const xLocation = randomX();
  const spawnLocation =
    xLocation + radius < 0
      ? xLocation + radius
      : xLocation && xLocation + radius > rootWidth
      ? xLocation - radius
      : xLocation;

  const handleBalloonClick = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLDivElement;
    console.log(target.id);
    await axios.delete(
      `http://localhost:3000/api/v1/ballons/${target.id}`
    );
    target.remove();
  };

  return (
    <motion.div
      onClick={(e) => handleBalloonClick(e)}
      className="ballon"
      id={id}
      initial={{
        x: spawnLocation,
        y: 500,
        backgroundColor: color,
        width: radius,
      }}
      animate={{ y: -200 }}
      transition={{ duration: speed }}
    ></motion.div>
  );
};

export default Balloon;
