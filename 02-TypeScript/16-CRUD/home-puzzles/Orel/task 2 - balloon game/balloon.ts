const resetButton = document.getElementById('resetP')! as HTMLButtonElement;
resetButton.addEventListener('click', (e) => {
    const scoreInput = document.querySelector('.score') as HTMLElement;
    score = 0;
    scoreInput.innerText = `Score : ${score}`
})

const startGameBtn = document.getElementById('startGameBtn')! as HTMLButtonElement;
startGameBtn.addEventListener('click', startGame ,) 


const startOver = document.getElementById('startOver')! as HTMLButtonElement;
startOver.addEventListener('click', startGame)





function startGame() {
    heart = 3
    addLives(heart)
    startSound.play()
    renderScreenScore()
    renderGame()


}