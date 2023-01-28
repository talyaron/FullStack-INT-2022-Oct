window.addEventListener("click", (e) => {
    [mouseLocation.x, mouseLocation.y] = [e.x, e.y];
    circleArray.forEach((circle) => {
      if (isIntersect(mouseLocation, circle)) {
        circle.handleClick();
        circle.speedDirectionX = circle.speedDirectionX * 2;
        circle.speedDirectionY = circle.speedDirectionY * 2;
      }
    });
  });


generateCircles(10);
animate();