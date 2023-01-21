const boxes = document.querySelectorAll(".box") as NodeListOf<HTMLDivElement>;
let playerOneTurn = true;
let playerTwoTurn = false;

boxes.forEach((box) => box.addEventListener("click", togglePress));

function togglePress() {
  const i = document.createElement("i") as HTMLIFrameElement;
  if (playerOneTurn) {
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
  } else {
    i.classList.add("fa-solid");
    i.classList.add("fa-check");
  }
  this.append(i);
  playerOneTurn = playerTwoTurn;
  playerTwoTurn = !playerOneTurn;
}
