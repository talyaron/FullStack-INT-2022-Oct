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
function startGame() {
    heart = heart;
    startSound.play();
    addLives(heart);
    render();
    var happyNewYearsWelcome = document.querySelector('.happyNewYearsWellcom');
    happyNewYearsWelcome.style.display = "none";
    var scoreInput = document.querySelector('.score');
    scoreInput.innerText = "Score : " + score;
    var speedSpawn = document.querySelector('.speedSpawn');
    speedSpawn.innerText = "speedSpawn : " + createBallonSpeed;
}
function makeNewBallon() {
    newBallonSound.play();
    var containerBallons = document.querySelector('.container-ballons');
    var newSpan = document.createElement('span');
    var newBallon = document.createElement('img');
    //random number between  1 - 3
    var randomNumber = Math.ceil(Math.random() * 3);
    //random number between 1 - 100;
    var randomNumber2 = Math.ceil((Math.random() * 90 - 10) + 10);
    newBallon.setAttribute('src', "./imgs/ballon" + randomNumber + ".png");
    containerBallons === null || containerBallons === void 0 ? void 0 : containerBallons.appendChild(newSpan);
    newSpan.appendChild(newBallon);
    //make Position to the parent Balloon 
    newSpan.style.left = randomNumber2.toString() + "%";
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
    newBallon.addEventListener('click', function () {
        burstBallonSound.play();
        newBallon.parentElement.remove();
        var scoresBalloon = Number(newBallon.getAttribute('score'));
        score += scoresBalloon;
        var scoreInput = document.querySelector('.score');
        scoreInput.innerText = "Score : " + score;
        var speedSpawn = document.querySelector('.speedSpawn');
        speedSpawn.innerText = "speedSpawn : " + createBallonSpeed;
    });
    speedInput.innerText = "Speed : " + speed;
}
function addLives(spin) {
    var lives = document.querySelector('.lives');
    lives.innerHTML = '';
    for (var i = 0; i < spin; i++) {
        var newHeart = document.createElement('img');
        var newSpan = document.createElement('span');
        lives.appendChild(newSpan);
        newSpan.appendChild(newHeart);
        newHeart.setAttribute('src', './imgs/heart.png');
        newHeart.setAttribute('width', '20px');
    }
}
function removeLives() {
    var lives = document.querySelectorAll('.lives img');
    lives[lives.length - 1].remove();
}
function timer(parent, i) {
    (function renderBySec() {
        i++;
        parent.style.bottom = i + "% ";
        if (i < 99) {
            setTimeout(renderBySec, speed);
            speedInput.innerText = "Speed : " + speed;
        }
        else {
            parent.remove();
            return;
        }
    }());
}
function render() {
    var makeNewBallonI = setInterval(makeNewBallon, createBallonSpeed);
    var ifLoseInt = setInterval(function () {
        difficulty();
        speedRender = speed - 1;
        var containerBallonsChild = document.querySelectorAll('.container-ballons span');
        var startOver = document.getElementById('startOver');
        var startGameBtn = document.getElementById('startGameBtn');
        startGameBtn.addEventListener('click', function () {
            clearInterval(ifLoseInt);
            clearInterval(makeNewBallonI);
        });
        startOver.addEventListener('click', function () {
            clearInterval(ifLoseInt);
            clearInterval(makeNewBallonI);
        });
        var index = 0;
        containerBallonsChild.forEach(function (c) {
            if (c instanceof HTMLElement) {
                if (c.style.bottom == "80%") {
                    index++;
                    if (heart > 1 && index > 0) {
                        annoyingSound.play();
                        heart--;
                        removeLives();
                    }
                    else if (heart === 1) {
                        var happyNewYearsWelcome = document.querySelector('.happyNewYearsWellcom');
                        happyNewYearsWelcome.style.display = "flex";
                        var imgHappyNewYears = document.getElementById('imgNewYear');
                        imgHappyNewYears === null || imgHappyNewYears === void 0 ? void 0 : imgHappyNewYears.setAttribute('src', './imgs/gameover.png');
                        var h4NewYear = document.getElementById('h4NewYear');
                        h4NewYear.innerHTML = "Good Game! <br><hr> Your Score: <strong style=\"font-size:40px;\"> <br>" + score + "!</strong> ; ";
                        var startGameBtn_1 = document.getElementById('startGameBtn');
                        startGameBtn_1.textContent = "Try Again";
                        var containerBallonsChild_1 = document.querySelectorAll('.container-ballons span');
                        containerBallonsChild_1.forEach(function (b) {
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
        speed = 55;
    }
    else if (score > 100 && score < 200) {
        speed = 50;
    }
    else if (score >= 200 && score < 300) {
        speed = 45;
    }
    else if (score >= 300 && score < 400) {
        speed = 40;
    }
    else if (score >= 400 && score < 500) {
        speed = 35;
    }
    else if (score >= 500 && score < 600) {
        speed = 30;
    }
    else if (score >= 600 && score < 700) {
        speed = 25;
    }
    else if (score >= 700 && score < 800) {
        speed = 20;
    }
    else if (score >= 800 && score < 1000) {
        speed = 15;
    }
    else if (score >= 1000 && score < 1100) {
        speed = 13;
    }
    else if (score >= 1100 && score < 1200) {
        speed = 11;
    }
    else {
        speed = 10;
    }
}
// Buttons Events
var resetButton = document.getElementById('resetP');
resetButton.addEventListener('click', function (e) {
    var scoreInput = document.querySelector('.score');
    score = 0;
    scoreInput.innerText = "Score : " + score;
});
var startGameBtn = document.getElementById('startGameBtn');
startGameBtn.addEventListener('click', startGame);
var startOver = document.getElementById('startOver');
startOver.addEventListener('click', startGame);
function time() {
    setInterval(function () {
        var timeRN = new Date();
        var seconds = timeRN.getSeconds();
        var min = timeRN.getMinutes();
        var hours = timeRN.getHours();
        var time = document.querySelector('.time h2');
        if (seconds < 10) {
            time.innerHTML = hours + ":" + min + ":0" + seconds;
        }
        else if (min < 10) {
            time.innerHTML = hours + ":0" + min + ":" + seconds;
        }
        else {
            time.innerHTML = hours + ":" + min + ":" + seconds;
        }
    }, 1000);
}
time();
