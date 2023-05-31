"use strict";
const board = document.querySelector(".board");
const playerNamesForm = document.querySelector("#playerNamesForm");
// page areas
const activePlayerArea = document.querySelector(".activePlayerArea");
const playersInGameArea = document.querySelector(".playersInGameArea");
// buttons
const sortByColorBtn = document.querySelector("#sortByColorBtn");
const sortByNumbersBtn = document.querySelector("#sortByNumbersBtn");
const endTurnBtn = document.querySelector("#endTurnBtn");
const resetTurnBtn = document.querySelector("#resetTurnBtn");
// current entities
let currentPlayer;
let currentGame;
let currentTile;
const deckAPI = "api/v1/decks";
const boardAPI = "api/v1/boards";
const playerAPI = "api/v1/players";
const gameAPI = "api/v1/games";
const userAPI = "api/v1/users";
function createActivePlayerArr(playerOne, playerTwo, playerThree, playerFour) {
    try {
        const playerArr = [playerOne, playerTwo, playerThree, playerFour]
            .filter((player) => player != "")
            .map((player) => new Player(player));
        const index = Math.floor(Math.random() * playerArr.length);
        playerArr[index].isActive = true;
        return playerArr;
    }
    catch (error) {
        console.error(error);
    }
}
