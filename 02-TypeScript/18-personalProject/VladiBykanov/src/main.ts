console.log("Start");

let glide: number;

window.addEventListener("keydown", ({ key }) => {
  switch (key) {
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
