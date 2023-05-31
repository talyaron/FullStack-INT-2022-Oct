class Game {
  public currentGameStatus: GameStatus = { board: [], playerHand: [] };
  public sets: Array<HTMLDivElement>[] = [];
  constructor(
    public players: Player[],
    public board: Board,
    public deck: Deck
  ) {
    if (this.players[0].divsArray.length === 0) {
      this.givePlayersTiles();
    }
  }

  startGame() {
    try {
      renderBoard(this.board.divArr);

      const findActivePlayer = this.players.find(
        (player) => player.isActive === true
      );

      if (findActivePlayer) currentPlayer = findActivePlayer;

      renderPlayers(this.players);

      activatePlayer(currentGame.players.indexOf(currentPlayer));
    } catch (error) {
      console.error(error);
    }
  }

  givePlayersTiles() {
    try {
      this.players.forEach((player) => player.getNewHand(this.deck));
    } catch (error) {
      console.error(error);
    }
  }

  async saveGameToDB() {
    try {
      const playerIdArr = this.players.map((player) => player.id);
      const user = await getUser();

      const createdGameId = await fetch(`${gameAPI}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          players: playerIdArr,
          boardId: this.board.id,
          deckId: this.deck.id,
        }),
      })
        .then((res) => res.json())
        .then(({ gameId }) => gameId)
        .catch((error) => console.error(error));

      await fetch("api/v1/games/saveGameCookie", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gameId: createdGameId }),
      }).catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  }

  saveCurrentGameStatus() {
    try {
      this.currentGameStatus = {
        board: [...this.board.divArr],
        playerHand: [...currentPlayer.divsArray],
      };
    } catch (error) {
      console.error(error);
    }
  }

  async updateGameInDB() {
    try {
      this.players.forEach((player) => player.updatePlayerInDB());
      this.board.updateBoardInDB();
      this.deck.updateDeckInDB();
    } catch (error) {
      console.error(error);
    }
  }
}
