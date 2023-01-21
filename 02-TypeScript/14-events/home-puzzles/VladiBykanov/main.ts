const boxes = document.querySelectorAll(".box") as NodeListOf<HTMLDivElement>;
const newGameBtn = document.querySelector(".newGameBtn") as HTMLButtonElement;
let playerOneTurn = true;
let playerTwoTurn = false;

boxes.forEach((box) => box.addEventListener("click", togglePress));

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

newGameBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.replaceChildren();
    box.classList.remove("marked");
  });
});
