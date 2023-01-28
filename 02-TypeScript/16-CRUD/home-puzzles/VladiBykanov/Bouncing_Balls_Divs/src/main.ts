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


generateCircles(10, midScreenX, midScreenY, circleArray);
animate();