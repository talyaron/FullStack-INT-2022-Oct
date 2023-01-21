var boxes = document.querySelectorAll(".box");
var newGameBtn = document.querySelector(".newGameBtn");
var resetScoreBtn = document.querySelector(".resetScoreBtn");
var playerXScoreSpan = document.querySelector(".playerXScore");
var playerOScoreSpan = document.querySelector(".playerOScore");
var playerX = "X";
var playerO = "O";
var winnigCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
var playerOWinMessage = document.querySelector(".playerOWin");
var playerXWinMessage = document.querySelector(".playerXWin");
var drawMessage = document.querySelector(".draw");
var messages = document.querySelectorAll(".message");
