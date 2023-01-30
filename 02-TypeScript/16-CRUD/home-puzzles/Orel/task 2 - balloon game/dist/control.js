function makeNewBallon() {
    newBallonSound.play();
    var containerBalloons = document.querySelector('.container-balloons');
    var newSpan = document.createElement('span');
    var newBallon = document.createElement('img');
    //random number between  1 - 3
    var randomNumber = Math.ceil(Math.random() * 3);
    //random number between 1 - 100;
    var randomNumber2 = Math.ceil((Math.random() * 90 - 10) + 10);
    newBallon.setAttribute('src', "./imgs/ballon" + randomNumber + ".png");
    containerBalloons === null || containerBalloons === void 0 ? void 0 : containerBalloons.appendChild(newSpan);
    newSpan.appendChild(newBallon);
    giveScore(newBallon, randomNumber);
    //make Position to the parent Balloon 
    newSpan.style.left = randomNumber2.toString() + "%";
    //Give a Scores To each balloon
    timer(newSpan, 1);
    newBallon.addEventListener('click', function () {
        burstBallonSound.play();
        newBallon.parentElement.remove();
        // Math score from balloon
        var scoresBalloon = Number(newBallon.getAttribute('score'));
        score += scoresBalloon;
        //inner text in dom
        var scoreInput = document.querySelector('.score');
        scoreInput.innerText = "Score : " + score;
    });
    speedInput.innerText = "Speed : " + speed;
}
// function checkLose(inter: number, inter2: number) {
//     const containerBalloonsChild = document.querySelectorAll('.container-balloons span');
//     let index = 0;
//     containerBalloonsChild.forEach(c => {
//         if (c instanceof HTMLElement) {
//             if (c.style.bottom == "85%") {
//                 index++
//                 if (heart > 1 && index > 0) {
//                     annoyingSound.play()
//                     heart--
//                     removeLives()
//                 } else
//                     if (heart === 1) {
//                         makeAnotherTry()
//                         const containerBalloonsChild = document.querySelectorAll('.container-balloons span');
//                         containerBalloonsChild.forEach(balloon => {
//                             balloon.remove()
//                             endGame(inter, inter2)
//                         });
//                         gameOverSound.play()
//                         removeLives()
//                     } else {
//                         endGame(inter, inter2)
//                     }
//             }
//         }
//     })
// }
// function ifLoseInt(inter1: number, inter2: number) {
//     difficulty()
//     checkLose(inter1, inter2)
//     speedRender = speed 
//     const startOver = document.getElementById('startOver') as HTMLButtonElement;
//     const startGameBtn = document.getElementById('startGameBtn') as HTMLButtonElement;
//     startGameBtn.addEventListener('click', () => {
//         clearInterval(inter1); clearInterval(inter2)
//     })
//     startOver.addEventListener('click', () => {
//         clearInterval(inter1); clearInterval(inter2)
//     })
// }
function renderGame() {
    var makeNewBallonI = setInterval(makeNewBallon, createBallonSpeed);
    var ifLoseInt = setInterval(function () {
        difficulty();
        speedRender = speed;
        var containerBalloonsChild = document.querySelectorAll('.container-balloons span');
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
        containerBalloonsChild.forEach(function (c) {
            if (c instanceof HTMLElement) {
                if (c.style.bottom == "80%") {
                    index++;
                    if (heart >= 1 && index > 0) {
                        annoyingSound.play();
                        heart--;
                        removeLives();
                    }
                    else if (heart <= 0) {
                        var happyNewYearsWelcome = document.querySelector('.happyNewYearsWelcome');
                        happyNewYearsWelcome.style.display = "flex";
                        var imgHappyNewYears = document.getElementById('imgNewYear');
                        imgHappyNewYears === null || imgHappyNewYears === void 0 ? void 0 : imgHappyNewYears.setAttribute('src', './imgs/gameOver.png');
                        var h4NewYear = document.getElementById('h4NewYear');
                        h4NewYear.innerHTML = "Good Game! <br><hr> Your Score: <strong style=\"font-size:40px;\"> <br>" + score + "!</strong> ; ";
                        var startGameBtn_1 = document.getElementById('startGameBtn');
                        startGameBtn_1.textContent = "Try Again";
                        var containerBalloonsChild_1 = document.querySelectorAll('.container-balloons span');
                        containerBalloonsChild_1.forEach(function (b) {
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
function addLives(spin) {
    var lives = document.querySelector('.lives');
    lives.innerHTML = '';
    for (var i = 0; i < spin; i++) {
        var newHeart = document.createElement('img');
        var newSpan = document.createElement('span');
        lives.appendChild(newSpan);
        newSpan.appendChild(newHeart);
        newHeart.setAttribute('src', './imgs/heart.png');
        newHeart.setAttribute('width', '35px');
    }
}
function removeLives() {
    heart--;
    var lives = document.querySelectorAll('.lives img');
    lives[lives.length - 1].remove();
}
function makeAnotherTry() {
    var happyNewYearsWelcome = document.querySelector('.happyNewYearsWelcome');
    happyNewYearsWelcome.style.display = "flex";
    var imgHappyNewYears = document.getElementById('imgNewYear');
    imgHappyNewYears === null || imgHappyNewYears === void 0 ? void 0 : imgHappyNewYears.setAttribute('src', './imgs/gameOver.png');
    var h4NewYear = document.getElementById('h4NewYear');
    h4NewYear.innerHTML = "Good Game! <br><hr> Your Score: <strong style=\"font-size:40px;\"> <br>" + score + "!</strong> ; ";
    var startGameBtn = document.getElementById('startGameBtn');
    startGameBtn.textContent = "Try Again";
}
function endGame(inter1, inter2) {
    clearInterval(inter1);
    clearInterval(inter2);
}
