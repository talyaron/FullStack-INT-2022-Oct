import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import axios from "axios";

interface OneBalloonProps {
  color: string;
  radius: number;
  id: string;
  speed: number;
  handleBalloonClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => Promise<void>;
}

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const OneBalloon = ({
  color,
  radius,
  id,
  speed,
  handleBalloonClick,
}: OneBalloonProps) => {
  const randomX = () => {
    const locationX = Math.floor(Math.random() * screenWidth);
    const spawnLocation =
      locationX + radius < 0
        ? locationX + radius
        : locationX && locationX + radius > screenWidth
        ? locationX - radius
        : locationX;
    return spawnLocation;
  };

  const animationControl = useAnimation();

  const startAnimation = async () => {
    animationControl.set({
      x: randomX(),
      y: screenHeight + randomX() * 2,
      backgroundColor: color,
      width: radius,
    });
    await animationControl.start({
      y: -200,
      transition: { type: "tween", duration: speed },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <motion.div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        handleBalloonClick(e);
      }}
      className="ballon"
      id={id}
      animate={animationControl}
    ></motion.div>
  );
};

export default OneBalloon;
