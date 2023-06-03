if (playerNamesForm) {
  playerNamesForm.addEventListener("submit", handlePlayerForm);
}

endTurnBtn.addEventListener("click", moveToNextPlayer);
sortByNumbersBtn.addEventListener("click", sortHandByNumber);
sortByColorBtn.addEventListener("click", sortHandByColor);
resetTurnBtn.addEventListener("click", resetMoves);

activePlayerArea.addEventListener("click", activatePlayerArea);

function handlePlayerForm(e: Event) {
  try {
    e.preventDefault();

    if (!playerNamesForm) return;

    const playerOne = playerNamesForm.playerOne.value;
    const playerTwo = playerNamesForm.playerTwo.value;
    const playerThree = playerNamesForm.playerThree.value;
    const playerFour = playerNamesForm.playerFour.value;

    const playerArr = createActivePlayerArr(
      playerOne,
      playerTwo,
      playerThree,
      playerFour
    );
    if (!playerArr) return;

    const newBoard = new Board();
    newBoard.buildEmptyBoard();

    const newDeck = new Deck();
    newDeck.createDeck();

    currentGame = new Game(playerArr, newBoard, newDeck);

    currentGame.startGame();

    saveNewGameToDB(playerArr, newBoard, newDeck);

    playerNamesForm.style.display = "none";
  } catch (error) {
    console.error(error);
  }
}

async function saveNewGameToDB(playerArr: Player[], board: Board, deck: Deck) {
  try {
    playerArr.forEach(async (player) => {
      player.savePlayerToDB();
    });

    board.saveBoardToDB();

    deck.saveDeckToDB();

    currentGame.saveGameToDB();
  } catch (error) {
    console.error(error);
  }
}

async function getUser() {
  try {
    const fetchUser = await fetch(`${userAPI}/getUser`)
      .then((res) => res.json())
      .then(({ user }) => user)
      .catch((error) => console.error(error));

    return fetchUser;
  } catch (error) {
    console.error(error);
  }
}
