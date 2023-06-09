const board: HTMLDivElement | null = document.querySelector(".board");

const playerNamesForm: HTMLFormElement | null =
  document.querySelector("#playerNamesForm");

// page areas
const activePlayerArea = document.querySelector(
  ".activePlayerArea"
) as HTMLDivElement;

const playersInGameArea = document.querySelector(
  ".playersInGameArea"
) as HTMLDivElement;

// buttons
const sortByColorBtn = document.querySelector(
  "#sortByColorBtn"
) as HTMLButtonElement;

const sortByNumbersBtn = document.querySelector(
  "#sortByNumbersBtn"
) as HTMLButtonElement;

const endTurnBtn = document.querySelector("#endTurnBtn") as HTMLButtonElement;

const resetTurnBtn = document.querySelector(
  "#resetTurnBtn"
) as HTMLButtonElement;

// current entities
let currentPlayer: Player;
let currentGame: Game;
let currentTile: HTMLDivElement | undefined;

const deckAPI = "api/v1/decks";
const boardAPI = "api/v1/boards";
const playerAPI = "api/v1/players";
const gameAPI = "api/v1/games";
const userAPI = "api/v1/users";

function createActivePlayerArr(
  playerOne: string,
  playerTwo: string,
  playerThree: string,
  playerFour: string
) {
  try {
    const playerArr = [playerOne, playerTwo, playerThree, playerFour]
      .filter((player) => player != "")
      .map((player) => new Player(player));

    const index = Math.floor(Math.random() * playerArr.length);
    playerArr[index].isActive = true;

    return playerArr;
  } catch (error) {
    console.error(error);
  }
}

