import React, { useState, useEffect } from 'react';
import './balloon.css'
interface Balloon {
  id: number;
  image: string;
}

const BalloonGame: React.FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const initialBalloons: Balloon[] = Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      image: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Balloons-PNG/Blue_Single_Balloon_PNG_Clipart.png?m=1584441121', // Replace with your balloon image URL
    }));

    setBalloons(initialBalloons);
  }, []);

  const popBalloon = (id: number) => {
    setBalloons(prevBalloons => {
      const updatedBalloons = prevBalloons.filter(balloon => balloon.id !== id);
      return updatedBalloons;
    });
  };

  return (
    <div className='container'>
      {balloons.map(balloon => (
        <div
          key={balloon.id}
          style={{
            position: 'absolute',
            bottom: '0',
            left: `${Math.random() * 90 + 5}%`,
            transform: 'translate(-50%, 100%)',
            animation: 'balloonAnimation 5s linear infinite',
          }}
          onClick={() => popBalloon(balloon.id)}
        >
          <img
            src={balloon.image}
            alt="Balloon"
            style={{ width: '80px', height: 'auto' }}
          />
        </div>
      ))}

      <style>
        {`
        @keyframes balloonAnimation {
          0% { transform: translate(-50%, 100%); }
          100% { transform: translate(-50%, -200%); }
        }
        `}
      </style>
    </div>
  );
};

export default BalloonGame;
