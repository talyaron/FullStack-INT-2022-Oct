function startGame() {
  if (chosenMap) {
    console.log(chosenMap);
    if (chosenMap === "mapOne") {
      creatMaze(mapOne);
      palletsThisGame = palletsMapOne
    } else {
      creatMaze(mapTwo);
      palletsThisGame = palletsMapTwo
    }
  }
  pacman.draw();
  // draw ghosts to grid
  ghosts.forEach((ghost) => {
    ghost.draw();
    moveGhost(ghost);
  });
}

function creatMaze(map: number[]) {
  map.forEach((value, index) => {
    const square = document.createElement("div") as HTMLDivElement;
    maze.appendChild(square);
    squares.push(square);

    switch (value) {
      case 0:
        squares[index].classList.add("wall");
        break;
      case 1:
        squares[index].classList.add("point");
        break;
      case 2:
        squares[index].classList.add("cherry");
        break;
      case 3:
        squares[index].classList.add("lair");
        break;
    }
  });
}

function movePacman(direction: string) {
  squares[pacman.currentIndex].classList.remove("pacman");
  switch (direction) {
    case "left":
      if (checkForWall(pacman.currentIndex, -1)) {
        clearInterval(glide);
        squares[pacman.currentIndex].removeAttribute("style"); //removing the style attribute from square that pacman leaves
        pacman.currentIndex -= 1;
        squares[pacman.currentIndex].style.transform = "scaleX(-1)";
        glide = setInterval(movePacman, pacman.velocity, "left");
      } else if (pacman.currentIndex == 210) {
        squares[pacman.currentIndex].removeAttribute("style");
        pacman.currentIndex = 230;
        squares[pacman.currentIndex].style.transform = "scaleX(1)";
      }
      break;

    case "right":
      if (checkForWall(pacman.currentIndex, 1)) {
        clearInterval(glide);
        squares[pacman.currentIndex].removeAttribute("style");
        pacman.currentIndex += 1;
        squares[pacman.currentIndex].style.transform = "scaleX(1)";
        glide = setInterval(movePacman, pacman.velocity, "right");
      } else if (pacman.currentIndex == 230) {
        squares[pacman.currentIndex].removeAttribute("style");
        pacman.currentIndex = 210;
        squares[pacman.currentIndex].style.transform = "scaleX(1)";
      }
      break;

    case "up":
      if (checkForWall(pacman.currentIndex, -width)) {
        clearInterval(glide);
        squares[pacman.currentIndex].removeAttribute("style");
        pacman.currentIndex -= width;
        squares[pacman.currentIndex].style.transform = "rotate(-90deg)";
        glide = setInterval(movePacman, pacman.velocity, "up");
      }
      break;

    case "down":
      if (
        checkForWall(pacman.currentIndex, width) &&
        !squares[pacman.currentIndex + width].classList.contains("lair")
      ) {
        clearInterval(glide);
        squares[pacman.currentIndex].removeAttribute("style");
        pacman.currentIndex += width;
        squares[pacman.currentIndex].style.transform = "rotate(90deg)";
        glide = setInterval(movePacman, pacman.velocity, "down");
      }
      break;
  }
  pacman.draw();

  checkForPoint();
  checkForCherry();
  checkForGamneOver();
  checkForWin();
}

//move ghost function
function moveGhost(ghost: Ghost) {
  const directions = [-1, 1, -width, width];
  let direction = directions[Math.floor(Math.random() * directions.length)];

  ghost.timerId = setInterval(function test() {
    // if the square in the direction the ghost is going not containing another ghost or a wall => then he can move here
    if (
      checkForWall(ghost.currentIndex, direction) &&
      !squares[ghost.currentIndex + direction].classList.contains("ghost")
    ) {
      squares[ghost.currentIndex].innerHTML = "";
      squares[ghost.currentIndex].classList.remove(
        ghost.className,
        "ghost",
        "scaredGhost"
      );
      ghost.currentIndex += direction;
      ghost.draw();
    }
    //else => find another direction
    else {
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    //Change ghost color if scared
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scaredGhost");
    }
  }, ghost.speed);
}
