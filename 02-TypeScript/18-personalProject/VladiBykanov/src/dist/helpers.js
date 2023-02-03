function checkForPoint() {
    if (squares[pacman.currentIndex].classList.contains("point")) {
        score++;
        palletsThisGame--;
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
        ghosts.forEach(function (ghost) { return (ghost.isScared = true); });
        setTimeout(unScareGhosts, 10000);
    }
}
function unScareGhosts() {
    ghosts.forEach(function (ghost) { return (ghost.isScared = false); });
}
function checkForGamneOver() {
    if (squares[pacman.currentIndex].classList.contains("ghost") &&
        !squares[pacman.currentIndex].classList.contains("scaredGhost")) {
        ghosts.forEach(function (ghost) { return clearInterval(ghost.timerId); });
        loseMessage.style.opacity = "1";
        clearInterval(glide);
    }
}
function checkForWin() {
    if (palletsThisGame == 0) {
        ghosts.forEach(function (ghost) { return clearInterval(ghost.timerId); });
        clearInterval(glide);
        setTimeout(function () {
            winMessage.style.opacity = "1";
        }, 200);
    }
}
function checkForScaredGhost() {
    ghosts.forEach(function (ghost) {
        if (squares[pacman.currentIndex].classList.contains(ghost.className) &&
            ghost.isScared) {
            squares[pacman.currentIndex].classList.remove(ghost.className, "ghost", "scaredGhost");
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
function checkForWall(currentIndex, direction) {
    return !squares[currentIndex + direction].classList.contains("wall");
}
