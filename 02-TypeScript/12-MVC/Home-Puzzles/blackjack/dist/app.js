var copyDeck = CardsDeck();
var playerCards = [];
var houseCards = [];
var sumPlayer, sumHouse;
var isAlive = true;
var hasBlackJack = false;
var userScore = document.getElementById("userScore");
var houseScore = document.getElementById("houseScore");
var userMessage = document.querySelector(".gameContainer__title__userMessage");
var userCardsDiv = document.querySelector("#userCards");
var houseFirstCard = document.querySelector("#houseFirstCard");
var houseSecondCard = document.querySelector("#houseSecondCard");
var houseCardsDiv = document.querySelector(".houseCardsDiv");
// Buttons 
var startNewGameBtn = document.querySelector("#newGameBtn");
var giveUserAnotherCardBtn = document.querySelector("#getCardButton");
var userHoldBtn = document.querySelector("#holdBtn");
// Event listeners 
startNewGameBtn.addEventListener("click", newGame);
giveUserAnotherCardBtn.addEventListener("click", getCard);
userHoldBtn.addEventListener("click", compTurn);
// On click starting new game
function newGame() {
    resetGame();
    processPlayerCard(2);
    userScore.textContent = sumPlayer.toString();
    if (sumPlayer == 22) {
        sumPlayer = 12;
        playerCards[1].cardValue = 1;
    }
    else if (sumPlayer == 21) {
        hasBlackJack = true;
        userMessage.textContent = "BLACKJACK you win!";
        userMessage.style.backgroundColor = "blue";
        userMessage.style.textShadow = "none";
        return;
    }
    userMessage.textContent = "Get another card or Hold";
    //rendering houses first card, second card remains downside
    houseSecondCard.src = "./PNG-cards-1.3/card_back_red.png";
    var houseFirstDraw = new NewCard();
    houseFirstCard.src = houseFirstDraw.cardImageLink;
    houseCardsDiv.append(houseFirstCard);
    houseCardsDiv.append(houseSecondCard);
    sumHouse = houseFirstDraw.cardValue;
    houseScore.textContent = sumHouse.toString();
    houseCards.push(houseFirstDraw);
}
//Initiating computer's turn when pushing HOLD button
function compTurn() {
    if (hasBlackJack == true || isAlive == false) {
        return;
    }
    var houseSecondDraw = new NewCard();
    houseSecondCard.src = houseSecondDraw.cardImageLink;
    houseCardsDiv.append(houseSecondCard);
    houseCards.push(houseSecondDraw);
    sumHouse += houseSecondDraw.cardValue;
    // Keeping taking cards until beating or losing against user score
    while (sumHouse < sumPlayer) {
        processHouseCard(1);
        if (sumHouse > 21) {
            for (var i = 0; i < houseCards.length; i++) {
                if (houseCards[i].cardValue == 11) {
                    houseCards[i].cardValue = 1;
                    sumHouse -= 10;
                    houseScore.textContent = sumHouse.toString();
                }
            }
        }
    }
    houseScore.textContent = sumHouse.toString();
    if ((sumHouse <= 21 && sumHouse > sumPlayer) ||
        (sumHouse < 21 && houseCards.length == 5)) {
        isAlive = false;
        userMessage.textContent = "Game over House wins";
        userMessage.style.backgroundColor = "black";
        userMessage.style.textShadow = "none";
        return;
    }
    else if (sumHouse == sumPlayer) {
        isAlive = false;
        userMessage.textContent = "It's a tie";
        userMessage.style.backgroundColor = "green";
        userMessage.style.textShadow = "none";
        return;
    }
    else {
        hasBlackJack = true;
        userMessage.textContent = "YOU WIN!";
        userMessage.style.backgroundColor = "blue";
        userMessage.style.textShadow = "none";
        return;
    }
}
// Giving user another card when clicked 'get a card'
function getCard() {
    if (hasBlackJack == true || isAlive == false) {
        // userMessage.textContent = "Please start new game"
        return;
    }
    else if (userScore.textContent == "0") {
        userMessage.textContent = "Start game first";
        return;
    }
    processPlayerCard(1);
    userScore.textContent = sumPlayer.toString();
    if (sumPlayer > 21) {
        isAlive = false;
        for (var i = 0; i < playerCards.length; i++) {
            if (playerCards[i].cardValue == 11) {
                playerCards[i].cardValue = 1;
                sumPlayer -= 10;
                userScore.textContent = sumPlayer.toString();
                isAlive = true;
                if (sumPlayer == 21 || playerCards.length == 5) {
                    hasBlackJack = true;
                    userMessage.textContent = "YOU WIN!";
                    userMessage.style.backgroundColor = "blue";
                    userMessage.style.textShadow = "none";
                    return;
                }
            }
        }
        if (sumPlayer > 21) {
            userMessage.textContent = "Game over House wins";
            userMessage.style.backgroundColor = "black";
            userMessage.style.textShadow = "none";
        }
    }
    else if (sumPlayer == 21 || playerCards.length == 5) {
        hasBlackJack = true;
        userMessage.textContent = "YOU WIN!";
        userMessage.style.backgroundColor = "blue";
        userMessage.style.textShadow = "none";
        return;
    }
}
function processPlayerCard(amount) {
    while (amount > 0) {
        var newCard = new NewCard();
        playerCards.push(newCard);
        sumPlayer += newCard.cardValue;
        var newImg = new Image();
        newImg.src = newCard.cardImageLink;
        newImg.classList.add("displayedCard");
        userCardsDiv.append(newImg);
        amount--;
    }
}
function processHouseCard(amount) {
    while (amount > 0) {
        var newCard = new NewCard();
        houseCards.push(newCard);
        sumHouse += newCard.cardValue;
        var newImg = new Image();
        newImg.src = newCard.cardImageLink;
        newImg.classList.add("displayedCard");
        houseCardsDiv.append(newImg);
        amount--;
    }
}
function resetGame() {
    copyDeck = CardsDeck();
    sumHouse = 0;
    houseScore.textContent = sumHouse.toString();
    sumPlayer = 0;
    isAlive = true;
    hasBlackJack = false;
    userCardsDiv.innerHTML = "";
    playerCards = [];
    houseCardsDiv.innerHTML = "";
    houseCards = [];
    userMessage.style.backgroundColor = "";
}
function CardsDeck() {
    return [
        "2d",
        "3d",
        "4d",
        "5d",
        "6d",
        "7d",
        "8d",
        "9d",
        "10d",
        "jd",
        "qd",
        "kd",
        "ad",
        "2s",
        "3s",
        "4s",
        "5s",
        "6s",
        "7s",
        "8s",
        "9s",
        "10s",
        "js",
        "qs",
        "ks",
        "as",
        "2h",
        "3h",
        "4h",
        "5h",
        "6h",
        "7h",
        "8h",
        "9h",
        "10h",
        "jh",
        "qh",
        "kh",
        "ah",
        "2c",
        "3c",
        "4c",
        "5c",
        "6c",
        "7c",
        "8c",
        "9c",
        "10c",
        "jc",
        "qc",
        "kc",
        "ac",
    ];
}
