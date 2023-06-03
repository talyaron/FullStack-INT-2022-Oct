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
if (playerNamesForm) {
    playerNamesForm.addEventListener("submit", handlePlayerForm);
}
endTurnBtn.addEventListener("click", moveToNextPlayer);
sortByNumbersBtn.addEventListener("click", sortHandByNumber);
sortByColorBtn.addEventListener("click", sortHandByColor);
resetTurnBtn.addEventListener("click", resetMoves);
activePlayerArea.addEventListener("click", activatePlayerArea);
function handlePlayerForm(e) {
    try {
        e.preventDefault();
        if (!playerNamesForm)
            return;
        const playerOne = playerNamesForm.playerOne.value;
        const playerTwo = playerNamesForm.playerTwo.value;
        const playerThree = playerNamesForm.playerThree.value;
        const playerFour = playerNamesForm.playerFour.value;
        const playerArr = createActivePlayerArr(playerOne, playerTwo, playerThree, playerFour);
        if (!playerArr)
            return;
        const newBoard = new Board();
        newBoard.buildEmptyBoard();
        const newDeck = new Deck();
        newDeck.createDeck();
        currentGame = new Game(playerArr, newBoard, newDeck);
        currentGame.startGame();
        saveNewGameToDB(playerArr, newBoard, newDeck);
        playerNamesForm.style.display = "none";
    }
    catch (error) {
        console.error(error);
    }
}
function saveNewGameToDB(playerArr, board, deck) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            playerArr.forEach((player) => __awaiter(this, void 0, void 0, function* () {
                player.savePlayerToDB();
            }));
            board.saveBoardToDB();
            deck.saveDeckToDB();
            currentGame.saveGameToDB();
        }
        catch (error) {
            console.error(error);
        }
    });
}
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchUser = yield fetch(`${userAPI}/getUser`)
                .then((res) => res.json())
                .then(({ user }) => user)
                .catch((error) => console.error(error));
            return fetchUser;
        }
        catch (error) {
            console.error(error);
        }
    });
}
