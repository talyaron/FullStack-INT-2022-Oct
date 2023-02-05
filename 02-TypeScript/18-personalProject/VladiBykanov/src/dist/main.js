var pacman = new Pacman();
startGame();
checkGameStatus();
window.addEventListener("keydown", function (e) {
    if (e.repeat)
        return;
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
backToStartingPageBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        window.location.href = "startPage.html";
        localStorage.removeItem('userChoice');
    });
});
tryAgainBtn.forEach(function (btn) { return btn.addEventListener('click', startGame); });
