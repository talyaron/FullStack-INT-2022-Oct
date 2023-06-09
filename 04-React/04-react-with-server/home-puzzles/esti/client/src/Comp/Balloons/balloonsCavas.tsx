

import React, { useEffect, useRef, useState } from 'react';



const BalloonCanvas: React.FC = () => {
  try {
   const canvasRef = useRef<HTMLCanvasElement>(null);
  const [position, setPosition] = useState({ x: 150, y: 150 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let animationFrameId: number;

    if(!canvas) throw new Error("The canvas is null")
    const moveBalloon = () => {
      if (ctx) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw balloon body
        ctx.beginPath();
        ctx.arc(position.x, position.y, 100, 0, 2 * Math.PI);
        ctx.fillStyle = '#F44336';
        ctx.fill();

        // Draw balloon string
        ctx.beginPath();
        ctx.moveTo(position.x, position.y + 100);
        ctx.lineTo(position.x, position.y + 200);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#212121';
        ctx.stroke();

        if (isMoving) {
          setPosition((prevPosition) => ({
            x: prevPosition.x + 1,
            y: prevPosition.y,
          }));
        }
      }

      animationFrameId = requestAnimationFrame(moveBalloon);
    };

    moveBalloon();

    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMoving]);

  const handleMouseDown = () => {
    setIsMoving(true);
  };

  const handleMouseUp = () => {
    setIsMoving(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
     
} catch (error) {
  console.error(error)    
}

};

export default BalloonCanvas;
