const pacman = new Pacman();

startGame();
checkGameStatus();

window.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  switch (e.key) {
    case "ArrowLeft":
      movePacman(directions.moveLeft);
      break;

    case "ArrowRight":
      movePacman(directions.moveRight);
      break;

    case "ArrowUp":
      movePacman(directions.moveUp);
      break;
    case "ArrowDown":
      movePacman(directions.movdeDown);
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