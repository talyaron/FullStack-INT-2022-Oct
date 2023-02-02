function checkForPoint() {
  if (squares[pacman.currentIndex].classList.contains("point")) {
    score++;
    palletsLeft--;
    scoreEl.textContent = score.toString();
    squares[pacman.currentIndex].classList.remove("point");
    squares[pacman.currentIndex].classList.add("pacman");
  }
}

function checkForCherry() {
  if (squares[pacman.currentIndex].classList.contains("cherry")) {
    score += 10;
    scoreEl.textContent = score.toString();
    squares[pacman.currentIndex].classList.remove("cherry");
    squares[pacman.currentIndex].classList.add("pacman");
    ghosts.forEach((ghost) => (ghost.isScared = true));
    setTimeout(unScareGhosts, 10000);
  }
}

function unScareGhosts() {
  ghosts.forEach((ghost) => (ghost.isScared = false));
}

function checkForGamneOver() {
  if (
    squares[pacman.currentIndex].classList.contains("ghost") &&
    !squares[pacman.currentIndex].classList.contains("scaredGhost")
  ) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    loseMessage.style.opacity = "1";
    clearInterval(glide);
  }
}

function checkForWin() {
  if (palletsLeft == 0) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    clearInterval(glide);
    setTimeout(() => {
      winMessage.style.opacity = "1";
    }, 200);
  }
}

function checkForScaredGhost() {
  ghosts.forEach((ghost) => {
    if (
      squares[pacman.currentIndex].classList.contains(ghost.className) &&
      ghost.isScared
    ) {
      squares[pacman.currentIndex].classList.remove(
        ghost.className,
        "ghost",
        "scaredGhost"
      );
      squares[pacman.currentIndex].innerHTML = "";
      squares[pacman.currentIndex].append(eye);
      squares[pacman.currentIndex].append(mouth);
      ghost.currentIndex = ghost.startIndex;
      squares[ghost.currentIndex].classList.add("ghost", ghost.className);
      score += 100;
      scoreEl.textContent = score.toString();
    }
  });
}

function checkForWall(currentIndex: number, direction: number) {
  return !squares[currentIndex + direction].classList.contains("wall");
}
