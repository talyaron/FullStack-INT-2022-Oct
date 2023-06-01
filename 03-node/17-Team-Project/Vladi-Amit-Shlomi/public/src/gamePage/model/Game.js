"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Game {
    constructor(players, board, deck) {
        this.players = players;
        this.board = board;
        this.deck = deck;
        this.currentGameStatus = { board: [], playerHand: [] };
        this.sets = [];
        if (this.players[0].divsArray.length === 0) {
            this.givePlayersTiles();
        }
    }
    startGame() {
        try {
            renderBoard(this.board.divArr);
            const findActivePlayer = this.players.find((player) => player.isActive === true);
            if (findActivePlayer)
                currentPlayer = findActivePlayer;
            renderPlayers(this.players);
            activatePlayer(currentGame.players.indexOf(currentPlayer));
        }
        catch (error) {
            console.error(error);
        }
    }
    givePlayersTiles() {
        try {
            this.players.forEach((player) => player.getNewHand(this.deck));
        }
        catch (error) {
            console.error(error);
        }
    }
    saveGameToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const playerIdArr = this.players.map((player) => player.id);
                const user = yield getUser();
                const createdGameId = yield fetch(`${gameAPI}`, {
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
                yield fetch("api/v1/games/saveGameCookie", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ gameId: createdGameId }),
                }).catch((error) => console.error(error));
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    saveCurrentGameStatus() {
        try {
            this.currentGameStatus = {
                board: [...this.board.divArr],
                playerHand: [...currentPlayer.divsArray],
            };
        }
        catch (error) {
            console.error(error);
        }
    }
    updateGameInDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.players.forEach((player) => player.updatePlayerInDB());
                this.board.updateBoardInDB();
                this.deck.updateDeckInDB();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
