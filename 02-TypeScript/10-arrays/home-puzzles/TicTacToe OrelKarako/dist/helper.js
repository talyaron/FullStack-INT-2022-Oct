"use strict";
const opinionToWin = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [2, 4, 6], [0, 4, 8]
];
const player1Sound = new Audio();
player1Sound.src = "./sound/player1.mp3";
const player2Sound = new Audio();
player2Sound.src = "./sound/player2.mp3";
const gameOver = new Audio();
gameOver.src = "./sound/gameOver.mp3";
