"use strict";
function startGame() {
    btnStart.addEventListener('click', () => {
        gameStart.style.display = "none";
        resetGame();
        gamesRules();
        resetButton();
        resetScore();
    });
}
// getNameFromPlayers()
startGame();
