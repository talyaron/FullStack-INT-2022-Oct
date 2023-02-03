console.log("Start");
var glide;
window.addEventListener("keydown", function (_a) {
    var key = _a.key;
    switch (key) {
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
startGame();
var interval = setInterval(checkForScaredGhost, 1);
var anotherInterval = setInterval(checkForGamneOver, 1);
