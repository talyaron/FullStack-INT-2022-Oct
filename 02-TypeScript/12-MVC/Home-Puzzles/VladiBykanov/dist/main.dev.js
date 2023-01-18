"use strict";

var cardImg = [['2d', './PNG-cards-1.3/2_of_diamonds.png'], ['3d', './PNG-cards-1.3/3_of_diamonds.png'], ['4d', './PNG-cards-1.3/4_of_diamonds.png'], ['5d', './PNG-cards-1.3/5_of_diamonds.png'], ['6d', './PNG-cards-1.3/6_of_diamonds.png'], ['7d', './PNG-cards-1.3/7_of_diamonds.png'], ['8d', './PNG-cards-1.3/8_of_diamonds.png'], ['9d', './PNG-cards-1.3/9_of_diamonds.png'], ['10d', './PNG-cards-1.3/10_of_diamonds.png'], ['jd', './PNG-cards-1.3/jack_of_diamonds2.png'], ['qd', './PNG-cards-1.3/queen_of_diamonds2.png'], ['kd', './PNG-cards-1.3/king_of_diamonds2.png'], ['ad', './PNG-cards-1.3/ace_of_diamonds.png'], ['2h', './PNG-cards-1.3/2_of_hearts.png'], ['3h', './PNG-cards-1.3/3_of_hearts.png'], ['4h', './PNG-cards-1.3/4_of_hearts.png'], ['5h', './PNG-cards-1.3/5_of_hearts.png'], ['6h', './PNG-cards-1.3/6_of_hearts.png'], ['7h', './PNG-cards-1.3/7_of_hearts.png'], ['8h', './PNG-cards-1.3/8_of_hearts.png'], ['9h', './PNG-cards-1.3/9_of_hearts.png'], ['10h', './PNG-cards-1.3/10_of_hearts.png'], ['jh', './PNG-cards-1.3/jack_of_hearts2.png'], ['qh', './PNG-cards-1.3/queen_of_hearts2.png'], ['kh', './PNG-cards-1.3/king_of_hearts2.png'], ['ah', './PNG-cards-1.3/ace_of_hearts.png'], ['2s', './PNG-cards-1.3/2_of_spades.png'], ['3s', './PNG-cards-1.3/3_of_spades.png'], ['4s', './PNG-cards-1.3/4_of_spades.png'], ['5s', './PNG-cards-1.3/5_of_spades.png'], ['6s', './PNG-cards-1.3/6_of_spades.png'], ['7s', './PNG-cards-1.3/7_of_spades.png'], ['8s', './PNG-cards-1.3/8_of_spades.png'], ['9s', './PNG-cards-1.3/9_of_spades.png'], ['10s', './PNG-cards-1.3/10_of_spades.png'], ['js', './PNG-cards-1.3/jack_of_spades2.png'], ['qs', './PNG-cards-1.3/queen_of_spades2.png'], ['ks', './PNG-cards-1.3/king_of_spades2.png'], ['as', './PNG-cards-1.3/ace_of_spades.png'], ['2c', './PNG-cards-1.3/2_of_clubs.png'], ['3c', './PNG-cards-1.3/3_of_clubs.png'], ['4c', './PNG-cards-1.3/4_of_clubs.png'], ['5c', './PNG-cards-1.3/5_of_clubs.png'], ['6c', './PNG-cards-1.3/6_of_clubs.png'], ['7c', './PNG-cards-1.3/7_of_clubs.png'], ['8c', './PNG-cards-1.3/8_of_clubs.png'], ['9c', './PNG-cards-1.3/9_of_clubs.png'], ['10c', './PNG-cards-1.3/10_of_clubs.png'], ['jc', './PNG-cards-1.3/jack_of_clubs2.png'], ['qc', './PNG-cards-1.3/queen_of_clubs2.png'], ['kc', './PNG-cards-1.3/king_of_clubs2.png'], ['ac', './PNG-cards-1.3/ace_of_clubs.png']];
var copyDeck = resetCardDeck();
var playerCards = [];
var houseCards = [];
var nextCard, valueNextCard, sumPlayer, sumHouse, houseFirstDraw, houseSecondDraw;
var isAlive = true;
var hasBlackJack = false;
var userScore = document.getElementById("user-score");
var houseScore = document.getElementById('house-score');
var userMessage = document.getElementById('user-message'); //Setting two jokers on the table for user as starting screen 

var jokerImg1 = document.createElement("img");
var jokerImg2 = document.createElement("img");
var userCardsDiv = document.getElementById('user-cards');
jokerImg1.setAttribute('src', './PNG-cards-1.3/card_back_red.png');
userCardsDiv.append(jokerImg1);
jokerImg2.setAttribute('src', './PNG-cards-1.3/card_back_red.png');
userCardsDiv.append(jokerImg2);
jokerImg1.setAttribute('class', 'cards');
jokerImg2.setAttribute('class', 'cards');
var houseFirstCard = document.getElementById('house-card-1');
var houseSecondCard = document.getElementById('house-card-2');
var houseCardsDiv = document.getElementById('house-cards-grid');

function resetGame() {
  isAlive = true;
  hasBlackJack = false;

  while (userCardsDiv.firstChild) {
    userCardsDiv.removeChild(userCardsDiv.lastChild);
    playerCards = [];
  }

  while (houseCardsDiv.firstChild) {
    houseCardsDiv.removeChild(houseCardsDiv.lastChild);
    houseCards = [];
  }

  userMessage.style.backgroundColor = "";
}

function processPlayerCard(num) {
  while (num > 0) {
    nextCard = getRndmCard();
    valueNextCard = cardValue(nextCard);
    playerCards.push(valueNextCard);
    sumPlayer += valueNextCard;
    var newImg = document.createElement("img");
    newImg.setAttribute('src', returnImg(nextCard));
    newImg.setAttribute('class', 'cards');
    userCardsDiv.append(newImg);
    num--;
  }
}

function processHouseCard(num) {
  while (num > 0) {
    nextCard = getRndmCard();
    valueNextCard = cardValue(nextCard);
    houseCards.push(valueNextCard);
    sumHouse += valueNextCard;
    var newImg = document.createElement("img");
    newImg.setAttribute('src', returnImg(nextCard));
    newImg.setAttribute('class', 'cards');
    houseCardsDiv.append(newImg);
    num--;
  }
}

function newGame() {
  resetGame();
  copyDeck = resetCardDeck();
  sumHouse = 0;
  houseScore.textContent = sumHouse;
  sumPlayer = 0;
  processPlayerCard(2);
  userScore.textContent = sumPlayer;

  if (sumPlayer == 22) {
    sumPlayer = 12;
    playerCards[1] = 1;
  } else if (sumPlayer == 21) {
    hasBlackJack = true;
    userMessage.textContent = "BLACKJACK you win!";
    userMessage.style.backgroundColor = "blue";
    userMessage.style.textShadow = "none";
    return;
  }

  userMessage.textContent = "Get another card or Hold"; //rendering houses first card and joker as second card

  houseSecondCard.setAttribute('src', './PNG-cards-1.3/card_back_red.png');
  houseFirstDraw = getRndmCard();
  houseFirstCard.setAttribute('src', returnImg(houseFirstDraw));
  houseCardsDiv.append(houseFirstCard);
  houseCardsDiv.append(houseSecondCard);
  sumHouse = cardValue(houseFirstDraw);
  houseScore.textContent = sumHouse;
  houseCards.push(sumHouse);
}

function compTurn() {
  if (hasBlackJack == true || isAlive == false) {
    return;
  }

  houseSecondDraw = getRndmCard();
  houseSecondCard.setAttribute('src', returnImg(houseSecondDraw));
  houseCardsDiv.append(houseSecondCard);
  houseCards.push(cardValue(houseSecondDraw));
  sumHouse += cardValue(houseSecondDraw);

  while (sumHouse < sumPlayer) {
    processHouseCard(1);

    if (sumHouse > 21) {
      for (var i = 0; i < houseCards.length; i++) {
        if (houseCards[i] == 11) {
          houseCards[i] = 1;
          sumHouse -= 10;
          houseScore.textContent = sumHouse;
        }
      }
    }
  }

  houseScore.textContent = sumHouse;

  if (sumHouse <= 21 && sumHouse > sumPlayer || sumHouse < 21 && houseCards.length == 5) {
    isAlive = false;
    userMessage.textContent = "Game over House wins";
    userMessage.style.backgroundColor = "black";
    userMessage.style.textShadow = "none";
    return;
  } else if (sumHouse == sumPlayer) {
    isAlive = false;
    userMessage.textContent = "It's a tie";
    userMessage.style.backgroundColor = "green";
    userMessage.style.textShadow = "none";
    return;
  } else {
    hasBlackJack = true;
    userMessage.textContent = "YOU WIN!";
    userMessage.style.backgroundColor = "blue";
    userMessage.style.textShadow = "none";
    return;
  }
}

function getCard() {
  if (hasBlackJack == true || isAlive == false) {
    // userMessage.textContent = "Please start new game"
    return;
  } else if (userScore == 0) {
    userMessage.textContent = "Start game first";
    return;
  }

  processPlayerCard(1);
  console.log(playerCards);
  console.log(playerCards.length);
  userScore.textContent = sumPlayer;

  if (sumPlayer > 21) {
    isAlive = false;

    for (var i = 0; i < playerCards.length; i++) {
      if (playerCards[i] == 11) {
        playerCards[i] = 1;
        sumPlayer -= 10;
        userScore.textContent = sumPlayer;
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
  } else if (sumPlayer == 21 || playerCards.length == 5) {
    hasBlackJack = true;
    userMessage.textContent = "YOU WIN!";
    userMessage.style.backgroundColor = "blue";
    userMessage.style.textShadow = "none";
    return;
  }
}

function resetCardDeck() {
  return [['2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', 'jd', 'qd', 'kd', 'ad'], ['2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', 'js', 'qs', 'ks', 'as'], ['2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', 'jh', 'qh', 'kh', 'ah'], ['2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', 'jc', 'qc', 'kc', 'ac']];
}

function cardValue(card) {
  //checks if the drown card is a 10 (second char at card is 0)
  if (card[1] == 0) {
    return 10;
  } else if (card[0] == 'j' || card[0] == 'q' || card[0] == 'k') {
    return 10;
  } else if (card[0] == 'a') {
    return 11;
  } else {
    return parseInt(card[0]);
  }
}

function returnImg(aCard) {
  for (var i = 0; i < cardImg.length; i++) {
    if (aCard == cardImg[i][0]) {
      return cardImg[i][1];
    }
  }
}

function getRndmCard() {
  //get rdm number from 0 to 3
  var x = Math.floor(Math.random() * 4); //get rdm number from 0 to 12

  var y = Math.floor(Math.random() * copyDeck[x].length); // set z to card chosen from deck

  var z = copyDeck[x][y]; //remove chosen card from deck x

  copyDeck[x].splice(y, 1);
  return z;
}