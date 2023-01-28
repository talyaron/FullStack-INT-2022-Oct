// Start Game Settings
var speed = 50;
var speedRender = speed - 1;
var createBallonSpeed = 1500;
var score = 0;
var heart = 3;
// sounds 
var speedInput = document.querySelector('.speed');
var newBallonSound = new Audio();
newBallonSound.src = "./imgs/sounds/level-up.wav";
var burstBallonSound = new Audio();
burstBallonSound.src = './imgs/sounds/balloon-small-burst.wav';
var gameOverSound = new Audio();
gameOverSound.src = './imgs/sounds/gameOver.wav';
var annoyingSound = new Audio();
annoyingSound.src = './imgs/sounds/annoying.wav';
var startSound = new Audio();
startSound.src = './imgs/sounds/start-sound.wav';
