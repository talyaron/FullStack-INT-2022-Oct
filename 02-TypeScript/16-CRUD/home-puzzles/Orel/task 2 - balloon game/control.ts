function makeNewBallon() {
    newBallonSound.play()
    const containerBalloons = document.querySelector('.container-balloons');
    const newSpan = document.createElement('span');
    const newBallon = document.createElement('img');
    //random number between  1 - 3
    const randomNumber = Math.ceil(Math.random() * 3)
    //random number between 1 - 100;
    const randomNumber2 = Math.ceil((Math.random() * 90 - 10) + 10)


    newBallon.setAttribute('src', `./imgs/ballon${randomNumber}.png`)
    containerBalloons?.appendChild(newSpan)
    newSpan.appendChild(newBallon);
    giveScore(newBallon, randomNumber)
    //make Position to the parent Balloon 
    newSpan.style.left = `${randomNumber2.toString()}%`


    //Give a Scores To each balloon

    timer(newSpan, 1)

    newBallon.addEventListener('click', () => {
        burstBallonSound.play()
        newBallon.parentElement!.remove()
        // Math score from balloon
        const scoresBalloon = Number(newBallon.getAttribute('score'));
        score += scoresBalloon
        //inner text in dom
        const scoreInput = document.querySelector('.score') as HTMLElement;
        scoreInput.innerText = `Score : ${score}`

    })

    speedInput.innerText = `Speed : ${speed}`

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
    let makeNewBallonI = setInterval(makeNewBallon, createBallonSpeed);
    let ifLoseInt = setInterval(() => {
        difficulty();
        speedRender = speed;
        const containerBalloonsChild = document.querySelectorAll('.container-balloons span');
        const startOver = document.getElementById('startOver') as HTMLButtonElement;
        const startGameBtn = document.getElementById('startGameBtn') as HTMLButtonElement;
        startGameBtn.addEventListener('click', () => {
            clearInterval(ifLoseInt);
            clearInterval(makeNewBallonI);
        });
        startOver.addEventListener('click', () => {
            clearInterval(ifLoseInt);
            clearInterval(makeNewBallonI);
        });
        let index = 0;
        containerBalloonsChild.forEach(c => {
            if (c instanceof HTMLElement) {
                if (c.style.bottom == "80%") {
                    index++;
                    if (heart >= 1 && index > 0) {
                        annoyingSound.play();
                        heart--;
                        removeLives();
                    }
                    else if (heart <= 0) {
                        const happyNewYearsWelcome = document.querySelector('.happyNewYearsWelcome') as HTMLElement;
                        happyNewYearsWelcome.style.display = "flex";
                        const imgHappyNewYears = document.getElementById('imgNewYear');
                        imgHappyNewYears === null || imgHappyNewYears === void 0 ? void 0 : imgHappyNewYears.setAttribute('src', './imgs/gameOver.png');
                        const h4NewYear = document.getElementById('h4NewYear') as HTMLElement;
                        h4NewYear.innerHTML = `Good Game! <br><hr> Your Score: <strong style="font-size:40px;"> <br>${score}!</strong> ; `;
                        const startGameBtn = document.getElementById('startGameBtn') as HTMLElement;
                        startGameBtn.textContent = "Try Again";
                        const containerBalloonsChild = document.querySelectorAll('.container-balloons span');
                        containerBalloonsChild.forEach(b => {
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

function addLives(spin: number) {
    const lives = document.querySelector('.lives') as HTMLDivElement;
    lives!.innerHTML = ''
    for (let i = 0; i < spin; i++) {
        const newHeart = document.createElement('img');
        const newSpan = document.createElement('span')
        lives!.appendChild(newSpan);
        newSpan.appendChild(newHeart)
        newHeart.setAttribute('src', './imgs/heart.png')
        newHeart.setAttribute('width', '35px')
    }
}
function removeLives() {
    heart--
    const lives = document.querySelectorAll('.lives img');
    lives[lives.length - 1].remove()
}
function makeAnotherTry() {
    const happyNewYearsWelcome = document.querySelector('.happyNewYearsWelcome') as HTMLDivElement;
    happyNewYearsWelcome.style.display = "flex"
    const imgHappyNewYears = document.getElementById('imgNewYear');
    imgHappyNewYears?.setAttribute('src', './imgs/gameOver.png')
    const h4NewYear = document.getElementById('h4NewYear');
    h4NewYear!.innerHTML = `Good Game! <br><hr> Your Score: <strong style="font-size:40px;"> <br>${score}!</strong> ; `
    const startGameBtn = document.getElementById('startGameBtn')! as HTMLElement;
    startGameBtn.textContent = "Try Again"
}

function endGame(inter1: number, inter2: number) {
    clearInterval(inter1)
    clearInterval(inter2)
}