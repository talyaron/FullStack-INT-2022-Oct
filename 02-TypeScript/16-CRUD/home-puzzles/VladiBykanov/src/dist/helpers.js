function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function isIntersect(point, circle) {
    return (Math.sqrt(Math.pow((point.x - circle.lastX), 2) + Math.pow((point.y - circle.lastY), 2)) <
        circle.radius);
}
function checkForWin() {
    if (circleArray.length == 0) {
        alert("You win!");
        clearInterval(startTimer);
        return newGame();
    }
    if (time < 0) {
        alert("you lose");
        clearInterval(startTimer);
        circleArray.splice(0);
        seconds.textContent = "0";
        newGame();
    }
}
