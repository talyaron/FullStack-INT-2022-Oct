async function checkIfGameStarted() {
  try {
    const game = await fetch("api/v1/games/getGame")
      .then((res) => res.json())
      .then(({ game }) => game)
      .catch((error) => console.error(error));

    if (!game) return console.info("No game found. Please start new game.");

    if (!playerNamesForm) return;
    playerNamesForm.style.display = "none";

    const playersArr: Player[] = game.players.map((player: PlayerDB) => {
      const hand = player.hand.map(
        (tile: TileDB) => new Tile(tile.color, tile.value, tile.id)
      );
      return new Player(player.name, [], player._id, hand, player.active);
    });

    // const index = Math.floor(Math.random() * playersArr.length);
    // playersArr[index].isActive = true;

    playersArr.forEach((player) => player.activateHand());

    const convertedBoardArr: Tile[] = game.board.tileArr.map(
      (tile: TileDB) => new Tile(tile.color, tile.value, tile.id)
    );

    const convertedDeckArr: Tile[] = game.deck.deck.map(
      (tile: TileDB) => new Tile(tile.color, tile.value, tile.id)
    );

    const deck = new Deck(convertedDeckArr);

    const board = new Board(convertedBoardArr, game.board._id);
    board.updateDivArr();

    currentGame = new Game(playersArr, board, deck);
    currentGame.startGame();
  } catch (error) {
    console.error(error)
  }
}

function toggleTileActive(
  clickedDiv: HTMLDivElement,
  divArray: Array<HTMLDivElement>
) {
  try {
    clickedDiv.addEventListener("click", () => {
      if (!currentTile) {
        if (clickedDiv.className === "square") {
          return console.log("Not activating empty square");
        }

        if (clickedDiv.classList.contains("active")) {
          resetCurrentTile();
        } else {
          const findEle = divArray.find((ele) =>
            ele.classList.contains("active")
          );

          if (findEle) findEle.classList.remove("active");

          clickedDiv.classList.add("active");

          currentTile = clickedDiv;
        }
      } else moveTile(clickedDiv);
    });
  } catch (error) {
    console.error(error)
  }

}

function moveToNextPlayer() {
  try {
    if (!validateBoard()) return;

    if (checkIfPlayerWon()) return;

    checkIfPlayerMadeAMove();

    alert("Pass the screen to next player.");

    const numOfPlayers = currentGame.players.length;

    const indexCurrentPlayer = currentGame.players.indexOf(currentPlayer);

    // if current player is last player on array of players
    if (indexCurrentPlayer === numOfPlayers - 1) activatePlayer(0);
    else activatePlayer(indexCurrentPlayer + 1);
  } catch (error) {
    console.error(error)
  }
}

function activatePlayer(index: number) {
  try {
    const playersArray: NodeListOf<HTMLDivElement> | null =
      playersInGameArea.querySelectorAll(".player");

    currentPlayer.isActive = false;

    currentPlayer = currentGame.players[index];
    currentPlayer.isActive = true;

    currentPlayer.renderHandToScreen(currentPlayer.divsArray);
    currentPlayer.initializeStartHend();
    currentGame.saveCurrentGameStatus();

    playersArray.forEach((player) => {
      player.classList.remove("active");
      if (player.id === currentPlayer.id) {
        player.classList.add("active");
      }
    });

    currentGame.updateGameInDB();
  } catch (error) {
    console.error(error)
  }
}

function activatePlayerArea() {
  try {
    if (!currentTile || !board) return;

    if (currentGame.board.divArr.includes(currentTile)) {
      if (!tileBelongesToPlayer(currentTile)) {
        return alert("Tile does not belong to current player.");
      }

      //create empty div to replace tile
      const emptySquare = document.createElement("div");
      emptySquare.classList.add("square");
      emptySquare.style.background =
        "url('../../img/tileBack.png')no-repeat center / cover";

      // find the index on the tile in board array
      const index = currentGame.board.divArr.indexOf(currentTile);

      // replace empty div with current tile at board and board array
      board.replaceChild(emptySquare, currentTile);
      currentGame.board.divArr[index] = emptySquare;
      toggleTileActive(emptySquare, currentGame.board.divArr);

      // add tile back to player's hand
      currentPlayer.divsArray.push(currentTile);
      currentPlayer.addTileToHand(currentTile);

      currentPlayer.renderHandToScreen(currentPlayer.divsArray);

      resetCurrentTile();
    }
  } catch (error) {
    console.error(error)
  }
}

function sortHandByNumber() {
  try {
    currentPlayer.divsArray.sort((a, b) => {
      const x = a.dataset.value as string;
      const y = b.dataset.value as string;
      return parseInt(x) - parseInt(y);
    });
    currentPlayer.renderHandToScreen(currentPlayer.divsArray);
  } catch (error) {
    console.error(error)
  }
}

function sortHandByColor() {
  try {
    //first sort by number
    currentPlayer.divsArray.sort((a, b) => {
      const x = a.dataset.value as string;
      const y = b.dataset.value as string;
      return parseInt(x) - parseInt(y);
    });

    currentPlayer.divsArray.sort((a, b) => {
      const x = a.dataset.color as string;
      const y = b.dataset.color as string;
      return x.localeCompare(y);
    });
    currentPlayer.renderHandToScreen(currentPlayer.divsArray);
  } catch (error) {
    console.error(error)
  }
}

function checkIfPlayerWon() {
  try {
    if (currentPlayer.divsArray.length === 0) {
      deleteGameFromDB();
      alert(`${currentPlayer.name} wins!`);

      endTurnBtn.removeEventListener("click", moveToNextPlayer);
      sortByNumbersBtn.removeEventListener("click", sortHandByNumber);
      sortByColorBtn.removeEventListener("click", sortHandByColor);
      resetTurnBtn.removeEventListener("click", resetMoves);

      return true;
    }

    return false;
  } catch (error) {
    console.error(error)
  }
}

async function deleteGameFromDB() {
  await fetch("api/v1/games/deleteThisGame", { method: "DELETE" }).catch(
    (error) => console.error(error)
  )
}
