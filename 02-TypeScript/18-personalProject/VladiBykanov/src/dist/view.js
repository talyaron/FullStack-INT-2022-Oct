var maze = document.querySelector(".maze");
var squareSize = maze.offsetHeight / 21;
var scoreEl = document.querySelector("#score");
var chosenMap = localStorage.getItem("userChoice");
var palletsThisGame;
var glide; //pacman glide interval
var score = 0;
var palletsMapOne = 144;
var palletsMapTwo = 161;
var width = 21;
var winMessage = document.querySelector(".winMessage");
var loseMessage = document.querySelector(".loseMessage");
var eye = document.createElement("div");
eye.classList.add("eye");
var mouth = document.createElement("div");
mouth.classList.add("mouth");
