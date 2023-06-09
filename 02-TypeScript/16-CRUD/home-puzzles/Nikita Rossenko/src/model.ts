class Balls {
    amount: number;
    constructor(){
    }

    drawBalls(amount) {
        for (let i = 1 ; i<amount ; i++){
            ballsContainer?.insertAdjacentHTML('beforeend', `<button class="ball" id="ball${i}"></button>`)
        }
    }
}

