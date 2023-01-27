

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
burstBallonSound.src ='./imgs/sounds/balloon-small-burst.wav'

const gameOverSound = new Audio()
gameOverSound.src = './imgs/sounds/gameOver.wav';

const annoyingSound = new Audio()
annoyingSound.src = './imgs/sounds/annoying.wav'

const startSound = new Audio()
startSound.src ='./imgs/sounds/start-sound.wav'


function startGame() {
    heart = 3
    startSound.play()
    addLives(heart)
    renderGame()
    renderScreenScore()
}

function renderScreenScore(){
    const happyNewYearsWelcome = document.querySelector('.happyNewYearsWellcom') as HTMLDivElement;
    happyNewYearsWelcome.style.display = "none";
    const scoreInput = document.querySelector('.score') as HTMLElement;
    scoreInput.innerText = `Score : ${score}`
    const speedSpawn = document.querySelector('.speedSpawn') as HTMLElement;
    speedSpawn.innerText = `speedSpawn : ${createBallonSpeed}`
}
function makeNewBallon() {
    newBallonSound.play()
    const containerBallons = document.querySelector('.container-ballons');
    let newSpan = document.createElement('span');
    let newBallon = document.createElement('img');
    //random number between  1 - 3
    let randomNumber = Math.ceil(Math.random() * 3)
    //random number between 1 - 100;
    let randomNumber2 = Math.ceil((Math.random() * 90 - 10) + 10)

    newBallon.setAttribute('src', `./imgs/ballon${randomNumber}.png`)
    containerBallons?.appendChild(newSpan)
    newSpan.appendChild(newBallon);

    //make Position to the parent Balloon 
    newSpan.style.left = `${randomNumber2.toString()}%`


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

    timer(newSpan, 1)

    newBallon.addEventListener('click', () => {
        burstBallonSound.play()
        newBallon.parentElement!.remove()
        const scoresBalloon = Number(newBallon.getAttribute('score'));
        score += scoresBalloon
        const scoreInput = document.querySelector('.score') as HTMLElement;
        scoreInput.innerText = `Score : ${score}`
        const speedSpawn = document.querySelector('.speedSpawn') as HTMLElement;
        speedSpawn.innerText = `speedSpawn : ${createBallonSpeed}`
    })

    speedInput.innerText = `Speed : ${speed}`

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
    const lives = document.querySelectorAll('.lives img');
    lives[lives.length - 1].remove()
}
function timer(parent: HTMLSpanElement, i: number) {
    (function renderBySec() {
        i++;
        parent.style.bottom = `${i}% `
        if (i < 99) {
            setTimeout(renderBySec, speed);
            speedInput.innerText = `Speed : ${speed}`
        } else {
            parent.remove()
            return
        }
    }());
}
function renderGame() {
    let makeNewBallonI = setInterval(makeNewBallon, createBallonSpeed);
    let ifLose = setInterval(ifLoseInt, speed)
    ifLoseInt(ifLose , makeNewBallonI)
    checkLose(ifLose , makeNewBallonI)
    
}
function ifLoseInt(inter1:any , inter2:any){
    difficulty()
    speedRender = speed -0.5

    const startOver = document.getElementById('startOver') as HTMLButtonElement;
    const startGameBtn = document.getElementById('startGameBtn') as HTMLButtonElement;

startGameBtn.addEventListener('click', ()=>{
clearInterval(inter1)
clearInterval(inter2)
})  
startOver.addEventListener('click', ()=>{
clearInterval(inter1)
clearInterval(inter2)
})  

checkLose(inter1 , inter2)

}
function checkLose(inter:any , inter2:any){
    const containerBallonsChild = document.querySelectorAll('.container-ballons span');
let index = 0;
        containerBallonsChild.forEach(c => {
            if (c instanceof HTMLElement) {
            if (c.style.bottom == "80%") {
                index++
                if (heart > 1 && index > 0) {
                    annoyingSound.play()
                    heart--
                    removeLives()
                } else
                    if (heart === 1) {
                        const happyNewYearsWelcome = document.querySelector('.happyNewYearsWellcom') as HTMLDivElement;
                        happyNewYearsWelcome.style.display = "flex"
                        const imgHappyNewYears = document.getElementById('imgNewYear');
                        imgHappyNewYears?.setAttribute('src', './imgs/gameover.png')
                        const h4NewYear = document.getElementById('h4NewYear');
                        h4NewYear!.innerHTML = `Good Game! <br><hr> Your Score: <strong style="font-size:40px;"> <br>${score}!</strong> ; `
                        const startGameBtn = document.getElementById('startGameBtn')! as HTMLElement;
                        startGameBtn.textContent = "Try Again" 
                        const containerBallonsChild = document.querySelectorAll('.container-ballons span');
                        containerBallonsChild.forEach(balloon => {
                            balloon.remove()
                        });
                        gameOverSound.play()
                        removeLives()
                        clearInterval(inter)
                        clearInterval(inter2)

                    } else {
                        clearInterval(inter)
                        clearInterval(inter2)
                    }
            } }
        })
}
function endGame(inter1:any , inter2:any){
    clearInterval(inter1)
    clearInterval(inter2)
}
// Levels 
function difficulty(){
    if(score <= 100){
        speed = 55
    } else if (score > 100 && score < 200){
        speed = 50
    } else if(score >= 200 && score <300){
        speed = 45
    } else if(score >= 300 && score < 400){
        speed = 40
    } else if(score >= 400 && score < 500){
        speed = 35
    } else if(score >= 500 && score < 600){
        speed = 30
    } else if(score >= 600 && score < 700){
        speed = 25
    } else if(score >= 700 && score < 800){
        speed = 20
    } else if(score >= 800 && score < 1000){
        speed = 15
    } else if(score >= 1000 && score < 1100){
        speed = 13
    } else if(score >= 1100 && score < 1200){
        speed = 11
    }  else {
        speed = 10
    }
}
function time(){
    setInterval(()=>{
        let timeRN = new Date()
        let seconds = timeRN.getSeconds();
        let min = timeRN.getMinutes();
        let hours = timeRN.getHours();
        const time = document.querySelector('.time h2')! as HTMLElement;
        if(seconds < 10 ){
            time.innerHTML = `${hours}:${min}:0${seconds}`

        } else
        if(min < 10 ){
            time.innerHTML = `${hours}:0${min}:${seconds}`
        }else{
            time.innerHTML = `${hours}:${min}:${seconds}`
        }
    },1000)
}
time()
// Buttons Events
const resetButton = document.getElementById('resetP')! as HTMLButtonElement;
resetButton.addEventListener('click', (e) => {
    const scoreInput = document.querySelector('.score') as HTMLElement;
    score = 0;
    scoreInput.innerText = `Score : ${score}`
})

const startGameBtn = document.getElementById('startGameBtn')! as HTMLButtonElement;
startGameBtn.addEventListener('click', startGame)


const startOver = document.getElementById('startOver')! as HTMLButtonElement;
startOver.addEventListener('click', startGame)


