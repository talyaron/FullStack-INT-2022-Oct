function checkForPoint() {
  if (squares[pacman.currentIndex].classList.contains("point")) {
    score++;
    palletsThisGame--;
    scoreEl.textContent = score.toString();
    squares[pacman.currentIndex].classList.remove("point");
    squares[pacman.currentIndex].classList.add("pacman");
    squares[pacman.currentIndex].classList.add("road");
  }
}

function checkForCherry() {
  if (squares[pacman.currentIndex].classList.contains("cherry")) {
    if (scaredGhostsTime) clearTimeout(scaredGhostsTime);
    cherryIndex = [
      ...cherryIndex.filter((value) => value !== pacman.currentIndex),
    ];
    squares[pacman.currentIndex].innerHTML = "";
    pacman.draw();

    score += 10;
    scoreEl.textContent = score.toString();
    squares[pacman.currentIndex].classList.remove("cherry");
    squares[pacman.currentIndex].classList.add("pacman");
    ghosts.forEach((ghost) => (ghost.isScared = true));
    scaredGhostsTime = setTimeout(unScareGhosts, 10000);
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
    gameOver = true;
    squares[pacman.currentIndex].classList.remove("pacman");
    if (score > currentUser.highScore) {
      currentUser.highScore = score;
    }
    resetGhosts();
    loseMessage.style.transform = "translateY(0)";
    finalScore[1].textContent = score.toString();
    clearInterval(glide);
  }
}

function checkForWin() {
  if (palletsThisGame == 0) {
    resetGhosts();
    squares[pacman.currentIndex].classList.remove("pacman");
    clearInterval(glide);
    if (score > currentUser.highScore) {
      currentUser.highScore = score;
    }
    winMessage.style.transform = "translateY(0)";
    finalScore[0].textContent = score.toString();
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
      pacman.draw();
      ghost.currentIndex = ghost.resetIndex;
      squares[ghost.currentIndex].classList.add("ghost", ghost.className);
      score += 100;
      scoreEl.textContent = score.toString();
    }
  });
}

function checkForWall(currentIndex: number, direction: number) {
  return !squares[currentIndex + direction].classList.contains("wall");
}

function drawCherryOnIndex(index: number) {
  squares[index].classList.add("cherry");
  squares[index].innerHTML = `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512">
    <path d="M428.3 3c11.6-6.4 26.2-2.3 32.6 9.3l4.8 8.7c19.3 34.7 19.8 75.7 3.4 110C495.8 159.6 512 197.9 512 240c0 18.5-3.1 36.3-8.9 52.8c-6.1 17.3-28.5 16.3-36.8-.1l-11.7-23.4c-4.1-8.1-12.4-13.3-21.5-13.3H360c-13.3 0-24-10.7-24-24V152c0-13.3-10.7-24-24-24l-17.1 0c-21.3 0-30-23.9-10.8-32.9C304.7 85.4 327.7 80 352 80c28.3 0 54.8 7.3 77.8 20.2c5.5-18.2 3.7-38.4-6-55.8L419 35.7c-6.4-11.6-2.3-26.2 9.3-32.6zM171.2 345.5L264 160l40 0v80c0 26.5 21.5 48 48 48h76.2l23.9 47.8C372.3 443.9 244.3 512 103.2 512H44.4C19.9 512 0 492.1 0 467.6c0-20.8 14.5-38.8 34.8-43.3l49.8-11.1c37.6-8.4 69.5-33.2 86.7-67.7z"/>
    </svg>`;
}

function removeUserChoiceFromLocalStorage() {
  localStorage.removeItem("userChoice");
}

function addNewUserToLocalStorage() {
  if (userNameInput.value == "" || passwordInput.value == "")
    return alert("Missing Input Field");

  if (checkIfUserExists(userNameInput.value))
    return alert("user name is taken");

  const newUser = new User(userNameInput.value, passwordInput.value);
  currentUser = newUser;
  usersList.push(newUser);
  localStorage.setItem("users", JSON.stringify(usersList));
  moveToWelcomePage();
}

function checkIfUserExists(name: string) {
  return usersList.some((user) => user.userName == name);
}

function checkPassword(): boolean {
  const findUser = usersList.find(
    (user) =>
      user.userName === userNameInput.value &&
      user.password === passwordInput.value
  );
  if (findUser) {
    currentUser = findUser;
    return true;
  }

  return false;
}

function moveToWelcomePage() {
  userNameInput.value = "";
  passwordInput.value = "";
  loginPage.style.transform = "translateX(-100vw)";
  welcomePage.style.transform = "translateY(0)";
}

function resetGhosts() {
  ghosts.forEach((ghost) => {
    squares[ghost.currentIndex].innerHTML = "";
    squares[ghost.currentIndex].classList.remove(
      ghost.className,
      "ghost",
      "scaredGhost"
    );
    clearInterval(ghost.timerId);
  });
}
