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
    alert(`You win! Score: ${score}`);
    clearInterval(startTimer);
    return newGame();
  }
  if (time < 0) {
    alert(`you lose! Score: ${score}`);
    clearInterval(startTimer);
    circleArray.splice(0);
    seconds.textContent = "0";
    newGame();
  }
}

function handleSecondClickOnCircle(index: number) {
  score += 5;
  liveScore.textContent = score.toString();
  clapAudio.currentTime = 0;
  clapAudio.play();
  circleArray.splice(index, 1);
  time += 5; //add 5 seconds to timer when clicking circle for the second time
  seconds.textContent = time.toString();
}
