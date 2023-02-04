const pacman = new Pacman();

startGame();
checkGameStatus();

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

backToStartingPageBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "startPage.html";
    localStorage.removeItem('userChoice')
  });
});

tryAgainBtn.forEach(btn => btn.addEventListener('click', startGame))