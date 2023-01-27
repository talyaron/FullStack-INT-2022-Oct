var canvas = document.querySelector(".playground");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
var seconds = document.querySelector(".timer__timeLeft");
var time = 100;
var startTimer;
