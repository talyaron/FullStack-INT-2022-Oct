function togglePress() {
  if (this.classList.contains("marked")) return;
  const i = document.createElement("i") as HTMLIFrameElement;
  if (playerOneTurn) {
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
  } else {
    i.classList.add("fa-solid");
    i.classList.add("fa-check");
  }
  this.classList.add("marked");
  this.append(i);
  playerOneTurn = playerTwoTurn;
  playerTwoTurn = !playerOneTurn;
}

function newGame() {
  boxes.forEach((box) => {
    box.replaceChildren();
    box.classList.remove("marked");
  });
}
