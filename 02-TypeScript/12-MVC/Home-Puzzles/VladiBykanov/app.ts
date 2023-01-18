let copyDeck = CardsDeck();
let playerCards: NewCard[] = [];
let houseCards: NewCard[] = [];
let sumPlayer: number, sumHouse: number;
let isAlive = true;
let hasBlackJack = false;

// Event listeners
startNewGameBtn.addEventListener("click", newGame);
giveUserAnotherCardBtn.addEventListener("click", getCard);
userHoldBtn.addEventListener("click", compTurn);
