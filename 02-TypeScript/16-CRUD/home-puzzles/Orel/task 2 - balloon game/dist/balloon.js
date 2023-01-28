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
function startGame() {
    heart = 3;
    addLives(heart);
    startSound.play();
    renderScreenScore();
    renderGame();
}
