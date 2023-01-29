// Buttons Events
function renderScreenScore() {
    var happyNewYearsWelcome = document.querySelector('.happyNewYearsWelcome');
    if (happyNewYearsWelcome.style.display = "flex") {
        happyNewYearsWelcome.style.display = "none";
    }
    var scoreInput = document.querySelector('.score');
    scoreInput.textContent = "Score : " + score;
}
