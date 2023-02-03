console.log("Start");

window.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  switch (e.key) {
    case "ArrowLeft":
      movePacman("left");
      break;

    case "ArrowRight":
      movePacman("right");
      break;

    case "ArrowUp":
      movePacman("up");
      break;
    case "ArrowDown":
      movePacman("down");
      break;
  }
});

startGame();

const interval = setInterval(checkForScaredGhost, 1);
const anotherInterval = setInterval(checkForGamneOver, 1);
