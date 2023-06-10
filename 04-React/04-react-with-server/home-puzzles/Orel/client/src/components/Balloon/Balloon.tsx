import React, { useState, useEffect } from 'react';
import './Balloon.scss';

export interface IBalloon {
  name: string;
  src: string;
  score: number;
  _id: number;
}

interface BalloonProps {
  balloons: Array<IBalloon> | [];
  setBalloons: React.Dispatch<React.SetStateAction<Array<IBalloon> | []>>;
  speed:number
}

const Balloon = ({ balloons, setBalloons , speed}: BalloonProps) => {
  const [randomBall, setRandomBall] = useState<IBalloon | null>(null);
  const [style,setStyle] = useState<any>({
    left:'50%' ,
    animationDuration: `${speed}s`
  })
  useEffect(() => {
    try {
      
      const newBalloon = [...balloons];
      const randomIndex = Math.floor(Math.random() * newBalloon.length);
      setRandomBall(newBalloon[randomIndex]);
    } catch (error) {
      console.error(error);
    }
  }, [balloons]);
  

  function handleClickBalloon() {
    try {
      if (!randomBall) throw new Error('No random balloon found');
      const copyBalloon = [...balloons];
      const randomIndex = Math.ceil((Math.random() * 80)-20)+20;
      const updateBalloons = copyBalloon.filter(b => b._id !== randomBall?._id)
      setRandomBall(null)
      setStyle({
        left:`${randomIndex}%` ,
        animationDuration: `${speed}s`
      })
      setBalloons(updateBalloons);
      
    } catch (error) {
      console.error(error);
    }
  }

  return (randomBall &&
    <div
    style={style}
    className="balloon-container">
      
        <img
          width="150px"
          src={randomBall.src}
          alt={randomBall.name}
          onClick={handleClickBalloon}
          className="container-balloon__balloon"
        />
      
    </div>
  );
};

export default Balloon;
