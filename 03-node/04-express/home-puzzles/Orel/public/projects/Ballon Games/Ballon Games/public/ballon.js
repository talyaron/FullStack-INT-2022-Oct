"use strict";
// Start Game Settings
let speed = 10;
let speedRender = speed - 1;
let createBallonSpeed = 1500;
let score = 0;
let heart = 3;
// sounds 
const speedInput = document.querySelector('.speed');
const newBallonSound = new Audio('./imgs/sounds/level-up.wav');
const burstBallonSound = new Audio('./imgs/sounds/balloon-small-burst.wav');
const gameOverSound = new Audio('./imgs/sounds/gameover.wav');
const annoyingSound = new Audio('./imgs/sounds/annoying.wav');
const startSound = new Audio('./imgs/sounds/start-sound.wav');
function startGame() {
    heart = 3;
    startSound.play();
    addLives(heart);
    render();
    const happyNewYearsWelcome = document.querySelector('.happyNewYearsWellcom');
    happyNewYearsWelcome.style.display = "none";
    const scoreInput = document.querySelector('.score');
    scoreInput.innerText = `Score : ${score}`;
    const speedSpawn = document.querySelector('.speedSpawn');
    speedSpawn.innerText = `speedSpawn : ${createBallonSpeed}`;
}
function makeNewBallon() {
    newBallonSound.play();
    const containerBallons = document.querySelector('.container-ballons');
    let newSpan = document.createElement('span');
    let newBallon = document.createElement('img');
    //random number between  1 - 3
    let randomNumber = Math.ceil(Math.random() * 3);
    //random number between 1 - 100;
    let randomNumber2 = Math.ceil((Math.random() * 90 - 10) + 10);
    newBallon.setAttribute('src', `./imgs/ballon${randomNumber}.png`);
    containerBallons === null || containerBallons === void 0 ? void 0 : containerBallons.appendChild(newSpan);
    newSpan.appendChild(newBallon);
    //make Position to the parent Balloon 
    newSpan.style.left = `${randomNumber2.toString()}%`;
    //Give a Scores To each balloon
    if (randomNumber === 1) {
        newBallon.setAttribute('score', "40");
    }
    if (randomNumber === 2) {
        newBallon.setAttribute('score', "30");
    }
    if (randomNumber === 3) {
        newBallon.setAttribute('score', "20");
    }
    timer(newSpan, 0);
    newBallon.addEventListener('click', () => {
        burstBallonSound.play();
        newBallon.parentElement.remove();
        const scoresBalloon = Number(newBallon.getAttribute('score'));
        score += scoresBalloon;
        const scoreInput = document.querySelector('.score');
        scoreInput.innerText = `Score : ${score}`;
        const speedSpawn = document.querySelector('.speedSpawn');
        speedSpawn.innerText = `speedSpawn : ${createBallonSpeed}`;
    });
    speedInput.innerText = `Speed : ${speed}`;
}
function addLives(spin) {
    const lives = document.querySelector('.lives');
    lives.innerHTML = '';
    for (let i = 0; i < spin; i++) {
        const newHeart = document.createElement('img');
        const newSpan = document.createElement('span');
        lives.appendChild(newSpan);
        newSpan.appendChild(newHeart);
        newHeart.setAttribute('src', './imgs/heart.png');
        newHeart.setAttribute('width', '20px');
    }
}
function removeLives() {
    const lives = document.querySelectorAll('.lives img');
    lives[lives.length - 1].remove();
}
function timer(parent, i) {
    (function renderBySec() {
        i++;
        parent.style.bottom = `${i}% `;
        if (i < 99) {
            setTimeout(renderBySec, speed);
            speedInput.innerText = `Speed : ${speed}`;
        }
        else if (parent.style.bottom = `100%`) {
            parent.remove();
            return;
        }
    }());
}
function render() {
    let makeNewBallonI = setInterval(makeNewBallon, createBallonSpeed);
    let ifLoseInt = setInterval(() => {
        difficulty();
        speedRender = speed;
        const containerBallonsChild = document.querySelectorAll('.container-ballons span');
        const startOver = document.getElementById('startOver');
        const startGameBtn = document.getElementById('startGameBtn');
        startGameBtn.addEventListener('click', () => {
            clearInterval(ifLoseInt);
            clearInterval(makeNewBallonI);
        });
        startOver.addEventListener('click', () => {
            clearInterval(ifLoseInt);
            clearInterval(makeNewBallonI);
        });
        let index = 0;
        containerBallonsChild.forEach(c => {
            if (c instanceof HTMLElement) {
                if (c.style.bottom == "80%") {
                    index++;
                    if (heart > 1 && index > 0) {
                        annoyingSound.play();
                        heart--;
                        removeLives();
                    }
                    else if (heart === 1) {
                        const happyNewYearsWelcome = document.querySelector('.happyNewYearsWellcom');
                        happyNewYearsWelcome.style.display = "flex";
                        const imgHappyNewYears = document.getElementById('imgNewYear');
                        imgHappyNewYears === null || imgHappyNewYears === void 0 ? void 0 : imgHappyNewYears.setAttribute('src', './imgs/gameover.png');
                        const h4NewYear = document.getElementById('h4NewYear');
                        h4NewYear.innerHTML = `Good Game! <br><hr> Your Score: <strong style="font-size:40px;"> <br>${score}!</strong> ; `;
                        const startGameBtn = document.getElementById('startGameBtn');
                        startGameBtn.textContent = "Try Again";
                        const containerBallonsChild = document.querySelectorAll('.container-ballons span');
                        containerBallonsChild.forEach(b => {
                            b.remove();
                        });
                        gameOverSound.play();
                        removeLives();
                        clearInterval(ifLoseInt);
                        clearInterval(makeNewBallonI);
                    }
                    else {
                        clearInterval(ifLoseInt);
                        clearInterval(makeNewBallonI);
                    }
                }
            }
        });
    }, speed);
}
function difficulty() {
    if (score <= 100) {
        speed = 45;
    }
    else if (score > 100 && score < 200) {
        speed = 40;
    }
    else if (score >= 200 && score < 300) {
        speed = 35;
    }
    else if (score >= 300 && score < 400) {
        speed = 30;
    }
    else if (score >= 400 && score < 500) {
        speed = 25;
    }
    else if (score >= 500 && score < 600) {
        speed = 20;
    }
    else if (score >= 600 && score < 700) {
        speed = 15;
    }
    else if (score >= 700 && score < 800) {
        speed = 15;
        createBallonSpeed = 1000;
    }
    else if (score >= 800 && score < 1000) {
        speed = 15;
        createBallonSpeed = 750;
    }
    else if (score >= 1000 && score < 1100) {
        speed = 13;
        createBallonSpeed = 700;
    }
    else if (score >= 1100 && score < 1200) {
        speed = 11;
        createBallonSpeed = 680;
    }
    else {
        speed = 10;
    }
}
// Buttons Events
const resetButton = document.getElementById('resetP');
resetButton.addEventListener('click', (e) => {
    const scoreInput = document.querySelector('.score');
    score = 0;
    scoreInput.innerText = `Score : ${score}`;
});
const startGameBtn = document.getElementById('startGameBtn');
startGameBtn.addEventListener('click', startGame);
const startOver = document.getElementById('startOver');
startOver.addEventListener('click', startGame);
function time() {
    setInterval(() => {
        let timeRN = new Date();
        let seconds = timeRN.getSeconds();
        let min = timeRN.getMinutes();
        let hours = timeRN.getHours();
        const time = document.querySelector('.time h2');
        if (seconds < 10) {
            time.innerHTML = `${hours}:${min}:0${seconds}`;
        }
        else if (min < 10) {
            time.innerHTML = `${hours}:0${min}:${seconds}`;
        }
        else {
            time.innerHTML = `${hours}:${min}:${seconds}`;
        }
    }, 1000);
}
time();
