const ballsCount = parseInt(prompt('Eneter how many balls you want to pop') as string)

window.addEventListener("click", (e) => {
    [mouseLocation.x, mouseLocation.y] = [e.x, e.y];
    circleArray.forEach((circle) => {
      if (isIntersect(mouseLocation, circle)) {
        circle.handleClick();
        circle.speedDirectionX = 8;
        circle.speedDirectionY = 8;
      }
    });
  });


generateCircles(ballsCount, midScreenX, midScreenY, circleArray, false);
animate();