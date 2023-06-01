function moveTile(clickedOnSquare: HTMLDivElement) {
  try {
    if (!currentTile) return;

    if (!board) throw new Error("Can't find board div.");

    // if currentTile in player's hand and clicked div is on board
    if (
      currentPlayer.divsArray.includes(currentTile) &&
      currentGame.board.divArr.includes(clickedOnSquare)
    ) {
      moveFromPlayerHandToBoard(clickedOnSquare);
    }

    // currentTile is on board and clicked tile is in player's hand
    else if (
      currentPlayer.divsArray.includes(clickedOnSquare) &&
      currentGame.board.divArr.includes(currentTile)
    ) {
      switchTileFromBoardToHand(clickedOnSquare);
    }

    // moving tile on board from one square to another
    else {
      const indexOfcurrentTile = currentGame.board.divArr.indexOf(currentTile);

      const indexOfNewLocation =
        currentGame.board.divArr.indexOf(clickedOnSquare);

      currentGame.board.divArr[indexOfcurrentTile] = clickedOnSquare;
      currentGame.board.divArr[indexOfNewLocation] = currentTile;

      renderBoard(currentGame.board.divArr);
      resetCurrentTile();
    }

    // expandBoard();
  } catch (error) {
    console.error(error);
  }
}

function moveFromPlayerHandToBoard(clickedOnSquare: HTMLDivElement) {
  try {
    if (!currentTile) return;

    //if clicked on square is a tile
    if (clickedOnSquare.classList.contains("tile")) {
      if (!tileBelongesToPlayer(clickedOnSquare)) {
        return alert("Tile does not belong to current player.");
      }

      const indexOfNewLocation =
        currentGame.board.divArr.indexOf(clickedOnSquare);
      const indexOfcurrentTile = currentPlayer.divsArray.indexOf(currentTile);

      currentGame.board.divArr[indexOfNewLocation] = currentTile;
      currentPlayer.divsArray[indexOfcurrentTile] = clickedOnSquare;

      currentPlayer.addTileToHand(clickedOnSquare);
      currentPlayer.removeTileFromHand(currentTile.id);

      renderBoard(currentGame.board.divArr);
      currentPlayer.renderHandToScreen(currentPlayer.divsArray);

      resetCurrentTile();
    }

    // if clicked on square is an empty square
    else {
      const indexOfNewLocation =
        currentGame.board.divArr.indexOf(clickedOnSquare);

      currentGame.board.divArr[indexOfNewLocation] = currentTile;

      const index = currentPlayer.divsArray.indexOf(currentTile);

      currentPlayer.divsArray.splice(index, 1);
      currentPlayer.removeTileFromHand(currentTile.id);

      renderBoard(currentGame.board.divArr);
      currentPlayer.renderHandToScreen(currentPlayer.divsArray);

      resetCurrentTile();
    }
  } catch (error) {
    console.error(error);
  }
}

function switchTileFromBoardToHand(clickedOnSquare: HTMLDivElement) {
  try {
    if (!currentTile) return;

    if (!tileBelongesToPlayer(currentTile)) {
      return alert("Tile does not belong to current player.");
    }
    const indexOfNewLocation = currentPlayer.divsArray.indexOf(clickedOnSquare);
    const indexOfcurrentTile = currentGame.board.divArr.indexOf(currentTile);

    currentGame.board.divArr[indexOfcurrentTile] = clickedOnSquare;
    currentPlayer.divsArray[indexOfNewLocation] = currentTile;

    currentPlayer.addTileToHand(currentTile);
    currentPlayer.removeTileFromHand(clickedOnSquare.id);

    renderBoard(currentGame.board.divArr);
    currentPlayer.renderHandToScreen(currentPlayer.divsArray);

    resetCurrentTile();
  } catch (error) {
    console.error(error);
  }
}

function resetMoves() {
  try {
    currentPlayer.renderHandToScreen(currentGame.currentGameStatus.playerHand);
    renderBoard(currentGame.currentGameStatus.board);
    currentGame.board.divArr = [...currentGame.currentGameStatus.board];
    currentPlayer.divsArray = [...currentGame.currentGameStatus.playerHand];
  } catch (error) {
    console.error(error);
  }

}
