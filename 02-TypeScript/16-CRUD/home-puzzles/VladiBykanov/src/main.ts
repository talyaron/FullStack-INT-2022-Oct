window.addEventListener("resize", () => {
  canvas.width = window.innerWidth - 10;
  canvas.height = window.innerHeight - 10;
});

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

newGame();
animate();

