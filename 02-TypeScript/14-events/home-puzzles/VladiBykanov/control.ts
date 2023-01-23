function newGame() {
  messages.forEach((message) => (message.style.display = "none"));
  boxes.forEach((box) => {
    box.addEventListener("click", handleBoxClick);
    box.innerHTML = "";
    box.classList.remove(playerO);
    box.classList.remove(playerX);
  });
}

function resetScore() {
  playerOScoreSpan.innerHTML = "0";
  playerXScoreSpan.innerHTML = "0";
  messages.forEach((message) => (message.style.display = "none"));
  boxes.forEach((box) => {
    box.addEventListener("click", handleBoxClick);
    box.innerHTML = "";
    box.classList.remove(playerO);
    box.classList.remove(playerX);
  });
}

function handleBoxClick(e) {
  const box = e.target;
  if (box.innerHTML != "") return;
  const currentClass = isPlayerOTurn ? playerO : playerX;
  placeMark(box, currentClass);
  if (checkWin(currentClass)) {
    boxes.forEach((box) => box.removeEventListener("click", handleBoxClick));
    if (currentClass == playerO) {
      playerOScore++;
      playerOScoreSpan.innerHTML = playerOScore.toString();
      playerOWinMessage.style.display = "flex";
    } else {
      playerXScore++;
      playerXScoreSpan.innerHTML = playerXScore.toString();
      playerXWinMessage.style.display = "flex";
    }
  } else if (isDraw()) {
    drawMessage.style.display = "flex";
  } else {
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
  return winnigCombinations.some((combination) => {
    return combination.every((index) => boxes[index].classList.contains(currentClass));
  });
}

function isDraw() {
  return [...boxes].every((box) => {
    return box.classList.contains(playerX) || box.classList.contains(playerO);
  });
}
