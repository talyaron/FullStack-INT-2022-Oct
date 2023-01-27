function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function isIntersect(point: MouseCoordinates, circle: Circle) {
  return (
    Math.sqrt((point.x - circle.lastX) ** 2 + (point.y - circle.lastY) ** 2) <
    circle.radius
  );
}

function checkForWin() {
  if (circleArray.length == 0) {
    alert("You win!");
    return newGame();
  }
  if (time < 0) {
    alert("you lose");
    clearInterval(startTimer);
    newGame();
  }
}

