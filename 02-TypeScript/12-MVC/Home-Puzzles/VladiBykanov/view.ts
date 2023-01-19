const userScore = document.getElementById("userScore") as HTMLSpanElement;
const houseScore = document.getElementById("houseScore") as HTMLSpanElement;
const userMessage = document.querySelector(
  ".gameContainer__title__userMessage"
) as HTMLHeadElement;
const userCardsDiv = document.querySelector("#userCards") as HTMLDivElement;
const houseFirstCard = document.querySelector(
  "#houseFirstCard"
) as HTMLImageElement;
const houseSecondCard = document.querySelector(
  "#houseSecondCard"
) as HTMLImageElement;
const houseCardsDiv = document.querySelector(
  ".houseCardsDiv"
) as HTMLDivElement;
// Buttons
const startNewGameBtn = document.querySelector(
  "#newGameBtn"
) as HTMLButtonElement;

const giveUserAnotherCardBtn = document.querySelector(
  "#getCardButton"
) as HTMLButtonElement;
const userHoldBtn = document.querySelector("#holdBtn") as HTMLButtonElement;
