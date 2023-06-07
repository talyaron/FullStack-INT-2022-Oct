import { motion } from "framer-motion";
import { useState } from "react";
import { handleBalloonClick } from "../App";

interface OneBalloonProps {
  color: string;
  radius: number;
  id: string;
}

const root = document.querySelector("#root") as HTMLDivElement;
const rootWidth = root.clientWidth;
const randomX = () => Math.floor(Math.random() * rootWidth);

const OneBalloon = ({ color, radius, id }: OneBalloonProps) => {
  const [speed, setSpeed] = useState(10);
  const xLocation = randomX();
  const spawnLocation =
    xLocation + radius < 0
      ? xLocation + radius
      : xLocation && xLocation + radius > rootWidth
      ? xLocation - radius
      : xLocation;

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

export default OneBalloon;
