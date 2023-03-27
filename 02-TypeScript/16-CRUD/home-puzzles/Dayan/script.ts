//-----Game elements
const scoreboard = document.querySelector("#scoreboard") as HTMLElement
const startScreen = document.querySelector("#start-screen") as HTMLElement
const gameOverScreen = document.querySelector("#gameover-screen") as HTMLElement
const scoreEl = document.querySelectorAll("#scoreboard > span")[0] as HTMLElement
const livesEl = document.querySelectorAll("#scoreboard > span")[1] as HTMLElement

//-----Default game state
const DEFAULT_STATE = {
    balloonPoolSize: 50,
    entrySpeed: 0.5,
    increaseScoreBy: 10,
    score: 0,
    lives: 3,
    balloons: null,
    balloonTimer: null,
    gameTimer: null,
}
    
//-----The actual game state is populated when the game starts
let state = {}
    
//-----Balloon counter
let balloonNum: number = 0
    
//-----Returns the calculated viewport width
const getViewportWidth = () => {
    //The getComputedStyle() method gets the computed CSS properties and values of an HTML element.
    return parseInt(getComputedStyle(document.body, null).width, 10)
}
    
//-----Returns a random number between min and max
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}
    
//-----Updates the scoreboard
const updateScoreboard = (newScore) => {
    const { score, lives } = state
  
    //-----update the score if this is not game over
      if(lives > 0) {
        if(scoreboard.classList.contains("hide")){
            scoreboard.classList.toggle("hide")
        }
        
        //-----Update the scoreboard
        state.score += (typeof newScore === 'number') ? newScore : state.increaseScoreBy
        scoreEl.textContent = state.score;
        
        //-----Update lives
        livesEl.innerHTML = "&hearts;".repeat(state.lives)
    }else{
        scoreboard.classList.toggle("hide")
    }
      
    if(!livesEl.classList.contains("blink") && state.lives <= 2 && state.lives >= 1){
        livesEl.classList.add("blink")
    }else{
        livesEl.classList.remove("blink")
    }
};

//-----Event - Pop Balloon
const popBalloon = () => {
    const balloonIndex = state.balloons.indexOf(event.target)
    const balloon = state.balloons[balloonIndex]
      
    replaceBalloon(balloon, balloonIndex)
    updateScoreboard()
    
}

//-----Create a balloon element
const createBalloon = () => {
    const balloonImage = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/16696/red-balloon-clipart-md.png"
    const balloonSpeed = randomNumber(8, 16)
    const balloonSize = randomNumber(45, getViewportWidth() / 5)
    const balloonPosition = randomNumber(0 - (balloonSize / 2), getViewportWidth() - balloonSize/2 - 120)
      
    const balloon = document.createElement("img")
    balloon.src = balloonImage
    balloon.setAttribute('draggable', false)
    balloon.setAttribute('id', `bubble-${balloonNum}`)
    balloon.style.width = `${balloonSize}px`
    balloon.style.left = `${balloonPosition}px`
    balloon.style.animation = `floatUp ${balloonSpeed}s linear 1, wobble ${randomNumber(4, 12)}s ease-in-out alternate`
      
    //-----Add a click event
    balloon.addEventListener('click', popBalloon, true)
    balloonNum++
    return balloon
}
    
const replaceBalloon = (balloon, index) => {
    //-----Remove from the DOM
    balloon.parentNode.removeChild(balloon)
      
    //-----Remove event listener
    balloon.removeEventListener('click', popBalloon, true)
      
    //-----Remove from the balloons array and replace with a new balloon
    state.balloons.splice(index, 1, createBalloon())
}
    
const updateBalloonPositions = () => {
      if(state.balloons){
        state.balloons = state.balloons.map(balloon => {
            const balloonSize = balloon.style.width
            const balloonPosition = randomNumber(0 - (balloonSize / 2), getViewportWidth() - balloonSize/2 - 120)
            balloon.style.left = `${balloonPosition}px`

            return balloon
        })
    }
}
    
const initGame = () => {
    //The assign() method loads a new document.
    state = Object.assign({}, DEFAULT_STATE)
    updateScoreboard(0)
      
    if(!startScreen.classList.contains("hide")){
        startScreen.classList.add("hide")
    }
      
    if(!gameOverScreen.classList.contains("hidden")){
        gameOverScreen.classList.remove("dialogue")
        gameOverScreen.classList.add("hidden")
    }
      
    //-----Balloon pool to store/recycle balloon elements
    state.balloons = new Array(DEFAULT_STATE.balloonPoolSize)
      
    //-----Populate the array of balloons
    for(let i=0; i < state.balloons.length; i++){
        state.balloons[i] = createBalloon()
    }
}
    
const startGame = () =>  {
    //-----Set the initial game state
    initGame()
      
    //-----Display balloons on the screen
    let i = 0
    //The setInterval() method calls a function at specified intervals (in milliseconds).
    state.balloonTimer = setInterval(() => {
        i = i >= state.balloons.length ? 0 : i
        document.body.appendChild(state.balloons[i])
        i++
    }, state.entrySpeed * 1000)
      
    //-----Check if balloons have left the screen and recycle them into the balloons array
    state.gameTimer = setInterval(() => {
        state.balloons.forEach((balloon, index) => {
            if(balloon && parseInt(balloon.style.width, 10) + parseInt(getComputedStyle(balloon, null).top, 10) <= 0){
            replaceBalloon(balloon, index)
            
            //-----Remove a life
            state.lives--
            updateScoreboard(state.score)
            
            if(state.lives <= 0){
              endGame()
            }}
        })
    }, 60)
}
    
const endGame = () => {
    clearInterval(state.balloonTimer)
    clearInterval(state.gameTimer)
      
    state.balloonTimer = null;
    state.gameTimer = null;
      
    state.balloons.forEach((balloon) => {
        //-----Remove from the DOM
        if(balloon.parentNode){
            balloon.parentNode.removeChild(balloon)
        }
        
        //-----Remove event listener
        balloon.removeEventListener("click", popBalloon, true)
    })
      
    state.balloons = null
      
    gameOverScreen.classList.toggle("hidden")
    gameOverScreen.classList.toggle("dialogue")
}
    
document.querySelector("#startGame").addEventListener("click", startGame)
document.querySelector("#tryAgain").addEventListener("click", startGame)
window.addEventListener("resize", updateBalloonPositions)

