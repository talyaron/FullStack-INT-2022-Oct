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

const winnigCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
