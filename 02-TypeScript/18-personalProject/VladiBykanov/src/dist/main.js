var pacman = new Pacman();
startGame();
checkGameStatus();
window.addEventListener("keydown", function (e) {
    if (e.repeat)
        return;
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
backToStartingPageBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        window.location.href = "startPage.html";
        localStorage.removeItem('userChoice');
    });
});
tryAgainBtn.forEach(function (btn) { return btn.addEventListener('click', startGame); });
