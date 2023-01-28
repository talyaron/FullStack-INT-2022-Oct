// Buttons Events

function renderScreenScore() {
    const happyNewYearsWelcome = document.querySelector('.happyNewYearsWelcome') as HTMLDivElement;
    if (happyNewYearsWelcome.style.display = "flex") {
        happyNewYearsWelcome.style.display = "none";
    }
    const scoreInput = document.querySelector('.score') as HTMLElement;
    scoreInput.textContent = `Score : ${score}`
}
