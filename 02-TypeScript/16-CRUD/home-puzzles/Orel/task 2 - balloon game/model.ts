
// Start Game Settings
let speed = 50;
let speedRender = speed - 1
let createBallonSpeed = 1500;
let score = 0;
let heart = 3;

// sounds 
const speedInput = document.querySelector('.speed') as HTMLElement;

const newBallonSound = new Audio()
newBallonSound.src = "./imgs/sounds/level-up.wav"

const burstBallonSound = new Audio();
burstBallonSound.src = './imgs/sounds/balloon-small-burst.wav'

const gameOverSound = new Audio()
gameOverSound.src = './imgs/sounds/gameOver.wav';

const annoyingSound = new Audio()
annoyingSound.src = './imgs/sounds/annoying.wav'

const startSound = new Audio()
startSound.src = './imgs/sounds/start-sound.wav'


