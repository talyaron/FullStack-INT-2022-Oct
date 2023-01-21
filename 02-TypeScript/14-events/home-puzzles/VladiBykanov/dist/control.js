var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function newGame() {
    messages.forEach(function (message) { return (message.style.display = "none"); });
    boxes.forEach(function (box) {
        box.addEventListener("click", handleBoxClick);
        box.innerHTML = "";
        box.classList.remove(playerO);
        box.classList.remove(playerX);
    });
}
function resetScore() {
    playerOScoreSpan.innerHTML = "0";
    playerXScoreSpan.innerHTML = "0";
    messages.forEach(function (message) { return (message.style.display = "none"); });
    boxes.forEach(function (box) {
        box.addEventListener("click", handleBoxClick);
        box.innerHTML = "";
        box.classList.remove(playerO);
        box.classList.remove(playerX);
    });
}
function handleBoxClick(e) {
    var box = e.target;
    if (box.innerHTML != "")
        return;
    var currentClass = isPlayerOTurn ? playerO : playerX;
    placeMark(box, currentClass);
    if (checkWin(currentClass)) {
        boxes.forEach(function (box) { return box.removeEventListener("click", handleBoxClick); });
        if (currentClass == playerO) {
            playerOScore++;
            playerOScoreSpan.innerHTML = playerOScore.toString();
            playerOWinMessage.style.display = "flex";
        }
        else {
            playerXScore++;
            playerXScoreSpan.innerHTML = playerXScore.toString();
            playerXWinMessage.style.display = "flex";
        }
    }
    else if (isDraw()) {
        drawMessage.style.display = "flex";
    }
    else {
        swapTurns();
    }
}
function placeMark(box, currentClass) {
    box.classList.add(currentClass);
    box.innerHTML = currentClass;
}
function swapTurns() {
    isPlayerOTurn = !isPlayerOTurn;
}
function checkWin(currentClass) {
    return winnigCombinations.some(function (combination) {
        return combination.every(function (index) {
            return boxes[index].classList.contains(currentClass);
        });
    });
}
function isDraw() {
    return __spreadArrays(boxes).every(function (box) {
        return box.classList.contains(playerX) || box.classList.contains(playerO);
    });
}
