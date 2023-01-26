//DATA BASE


 //Sounds
// const newBallonSound = new Audio() 
// newBallonSound.src = "./imgs/sounds/level-up.wav"

// const burstBallonSound = new Audio();
// burstBallonSound.src ='./imgs/sounds/balloon-small-burst.wav'

// const gameOverSound = new Audio()
// gameOverSound.src = './imgs/sounds/gameOver.wav';

// const annoyingSound = new Audio()
// annoyingSound.src = './imgs/sounds/annoying.wav'

// const startSound = new Audio()
// startSound.src ='./imgs/sounds/start-sound.wav'


function levels(on:boolean){
    try {
    if(on === false) throw new Error("The Level Function OFF");
    
    } catch (error) {
        console.warn(error);
    }
    
    }