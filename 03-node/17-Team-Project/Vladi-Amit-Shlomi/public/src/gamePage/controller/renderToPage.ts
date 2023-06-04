function createEmptyBoard(array: Array<HTMLDivElement>) {
  try {
    if (!board) throw new Error("Board div not found.");

  for (let i = 1; i <= 160; i++) {
    const squareDiv: HTMLDivElement = document.createElement("div");
    squareDiv.classList.add("square");
    // squareDiv.innerHTML = `<i class="fa-regular fa-circle-down"></i>`;
    array.push(squareDiv);

    toggleTileActive(squareDiv, array);
  }
  renderBoard(array);
  } catch (error) {
    console.error(error);
  }
  
}

function renderBoard(divsArray: Array<HTMLDivElement>) {
  try {
   if (!board) throw new Error("Can't find board div.");

  board.innerHTML = "";

  divsArray.forEach((div) => board.append(div)); 
  } catch (error) {
    console.error(error);
  }
}

function renderPlayers(playersArray: Player[]) {
  try {
   const html = playersArray
    .map(
      (player) => `<div class="player" id="${player.id}"">${player.name}</div>`
    )
    .join("");

  playersInGameArea.innerHTML = html; 
  } catch (error) {
    console.error(error);
  }
}

// function expandBoard() {
//   if (
//     currentGame.board.filter((div) => div.innerHTML !== "").length > 50 &&
//     currentGame.board.length === 105
//   ) {
//     alert("Resizing board.");
//     for (let i = 1; i <= 55; i++) {
//       const squareDiv: HTMLDivElement = document.createElement("div");
//       squareDiv.classList.add("square");
//       if (i < 22) {
//         currentGame.board.push(squareDiv);
//       } else {
//         currentGame.board.unshift(squareDiv);
//       }

//       toggleTileActive(squareDiv, currentGame.board);
//     }
//     if (!board) return;
//     board.style.width = "97%";
//     board.style.height = "97%";
//     board.style.gridTemplateColumns = "repeat(20, 1fr)";
//     board.style.gridTemplateRows = "repeat(8, 1fr)";
//     renderBoard(currentGame.board);
//   }

//   if (
//     currentGame.board.filter((div) => div.innerHTML !== "").length > 80 &&
//     currentGame.board.length === 160
//   ) {
//     alert("Resizing board.");
//     for (let i = 1; i <= 47; i++) {
//       const squareDiv: HTMLDivElement = document.createElement("div");
//       squareDiv.classList.add("square");
//       if (i < 20) {
//         currentGame.board.push(squareDiv);
//       } else {
//         currentGame.board.unshift(squareDiv);
//       }

//       toggleTileActive(squareDiv, currentGame.board);
//     }
//     if (!board) return;
//     board.style.width = "97%";
//     board.style.height = "97%";
//     board.style.gridTemplateColumns = "repeat(23, 1fr)";
//     board.style.gridTemplateRows = "repeat(9, 1fr)";
//     renderBoard(currentGame.board);
//   }
// }
