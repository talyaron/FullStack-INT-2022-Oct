const boxes = document.querySelectorAll(".box") as NodeListOf<HTMLDivElement>;
const newGameBtn = document.querySelector(".newGameBtn") as HTMLButtonElement;
const resetScoreBtn = document.querySelector(
  ".resetScoreBtn"
) as HTMLButtonElement;
const playerXScoreSpan = document.querySelector(
  ".playerXScore"
) as HTMLSpanElement;
const playerOScoreSpan = document.querySelector(
  ".playerOScore"
) as HTMLSpanElement;

const playerX = "X";
const playerO = "O";

const playerOWinMessage = document.querySelector(
  ".playerOWin"
) as HTMLDivElement;
const playerXWinMessage = document.querySelector(
  ".playerXWin"
) as HTMLDivElement;
const drawMessage = document.querySelector(".draw") as HTMLDivElement;
const messages = document.querySelectorAll(
  ".message"
) as NodeListOf<HTMLDivElement>;
