var cells = document.querySelectorAll(".cell");
var resetButton = document.querySelector("#resetButton");
function handleClick(event) {
    try {
        var cell = event.target;
        if (cell.textContent !== "") {
            return;
        }
        cell.textContent = currentPlayer.symbol;
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
    catch (error) {
        console.error(error);
    }
}
function resetGame() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
}
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener("click", resetGame);
