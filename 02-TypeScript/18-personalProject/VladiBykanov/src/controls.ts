function startGame() {
  try {
    getCurrentUserFromStorage();
    gameOver = false;
    score = 0;
    scoreEl.textContent = "0";
    winMessage.style.transform = "translateY(100vh)";
    loseMessage.style.transform = "translateY(100vh)";
    if (chosenMap) {
      if (chosenMap === "mapOne") {
        mazeOne.createMaze();
        palletsThisGame = palletsMapOne;
      } else {
        mazeTwo.createMaze();
        palletsThisGame = palletsMapTwo;
      }
    }
    pacman.currentIndex = pacman.pacmanStrartingIndex;
    pacman.draw();
    // draw ghosts to grid
    ghosts.forEach((ghost) => {
      ghost.isScared = false;
      ghost.currentIndex = ghost.startIndex;
      ghost.draw();
      ghost.move();
    });
  } catch (error) {
    console.error(error);
  }
}

function checkGameStatus() {
  checkForPoint();
  checkForCherry();
  checkForScaredGhost();
  checkForGamneOver();
  checkForWin();
  requestAnimationFrame(checkGameStatus);
}

// function creatMaze(map: number[]) {
//   map.forEach((value, index) => {
//     const square = document.createElement("div") as HTMLDivElement;
//     mazeDiv.appendChild(square);
//     squares.push(square);

//     switch (value) {
//       case 0:
//         squares[index].classList.add("wall", "square");
//         break;
//       case 1:
//         squares[index].classList.add("point", "square");
//         break;
//       case 2:
//         cherryIndex.push(index);
//         squares[index].classList.add("cherry", "square");
//         squares[index].innerHTML = `<svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 512 512">
//         <path d="M428.3 3c11.6-6.4 26.2-2.3 32.6 9.3l4.8 8.7c19.3 34.7 19.8 75.7 3.4 110C495.8 159.6 512 197.9 512 240c0 18.5-3.1 36.3-8.9 52.8c-6.1 17.3-28.5 16.3-36.8-.1l-11.7-23.4c-4.1-8.1-12.4-13.3-21.5-13.3H360c-13.3 0-24-10.7-24-24V152c0-13.3-10.7-24-24-24l-17.1 0c-21.3 0-30-23.9-10.8-32.9C304.7 85.4 327.7 80 352 80c28.3 0 54.8 7.3 77.8 20.2c5.5-18.2 3.7-38.4-6-55.8L419 35.7c-6.4-11.6-2.3-26.2 9.3-32.6zM171.2 345.5L264 160l40 0v80c0 26.5 21.5 48 48 48h76.2l23.9 47.8C372.3 443.9 244.3 512 103.2 512H44.4C19.9 512 0 492.1 0 467.6c0-20.8 14.5-38.8 34.8-43.3l49.8-11.1c37.6-8.4 69.5-33.2 86.7-67.7z"/>
//         </svg>`;
//         break;
//       case 9:
//         squares[index].classList.add("square");
//         break;
//     }
//   });
// }

// function movePacman(direction: number) {
//   if (gameOver) return;
//   switch (direction) {
//     case directions.moveLeft:
//       if (checkForWall(pacman.currentIndex, directions.moveLeft)) {
//         pacman.update(direction);
//       } else if (pacman.currentIndex == 210) {
//         pacman.update(direction);
//       }
//       break;

//     case directions.moveRight:
//       if (checkForWall(pacman.currentIndex, directions.moveRight)) {
//         pacman.update(direction);
//       } else if (pacman.currentIndex == 230) {
//         pacman.update(direction);
//       }
//       break;

//     case directions.moveUp:
//       if (checkForWall(pacman.currentIndex, directions.moveUp)) {
//         pacman.update(direction);
//       }
//       break;

//     case directions.movdeDown:
//       if (checkForWall(pacman.currentIndex, directions.movdeDown)) {
//         pacman.update(direction);
//       }
//       break;
//   }
// }

//move ghost function
// function moveGhost(ghost: Ghost) {
//   if (gameOver) return;
//   let direction = randomDirection();

//   ghost.timerId = setInterval(() => {
//     // if the square in the direction the ghost is going not containing another ghost or a wall => then he can move here
//     if (
//       checkForWall(ghost.currentIndex, direction) &&
//       !squares[ghost.currentIndex + direction].classList.contains("ghost")
//     ) {
//       ghost.update(direction)
//     }
//     //else => find another direction
//     else {
//       direction = randomDirection();
//     }

//     //Change ghost color if scared
//     if (ghost.isScared) {
//       squares[ghost.currentIndex].classList.add("scaredGhost");
//     }
//   }, ghost.speed);
// }
