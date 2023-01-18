var copyDeck = CardsDeck();
var playerCards = [];
var houseCards = [];
var sumPlayer, sumHouse;
var isAlive = true;
var hasBlackJack = false;
// Event listeners
startNewGameBtn.addEventListener("click", newGame);
giveUserAnotherCardBtn.addEventListener("click", getCard);
userHoldBtn.addEventListener("click", compTurn);
