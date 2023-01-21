const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector("#resetButton");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleClick);
}

function handleClick(event) {
  try {
    const cell = event.target;
    if (cell.textContent !== "") {
      return;
    }
    cell.textContent = currentPlayer.symbol;
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  } catch (error) {
    console.error(error);
  }
}

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}

resetButton?.addEventListener("click", resetGame);


