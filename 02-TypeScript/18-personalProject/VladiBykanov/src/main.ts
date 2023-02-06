const pacman = new Pacman();


startGame();
checkGameStatus();

window.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  switch (e.key) {
    case "ArrowLeft":
      pacman.move(directions.moveLeft);
      break;

    case "ArrowRight":
      pacman.move(directions.moveRight);
      break;

    case "ArrowUp":
      pacman.move(directions.moveUp);
      break;
    case "ArrowDown":
      pacman.move(directions.movdeDown);
      break;
  }
});

backToStartingPageBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "startPage.html";
    localStorage.removeItem("userChoice");
  });
});

tryAgainBtn.forEach((btn) => btn.addEventListener("click", startGame));

scoreboardBtn.forEach((btn) =>
  btn.addEventListener(
    "click",
    () => (window.location.href = "scoreBoard.html")
  )
);
