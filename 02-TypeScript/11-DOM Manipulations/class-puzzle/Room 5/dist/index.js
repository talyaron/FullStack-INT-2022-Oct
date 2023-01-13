var throwDice = function () {
    return Math.floor(Math.random() * 5);
};
var dice1 = 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg';
var dice2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/557px-Dice-2-b.svg.png';
var dice3 = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg';
var dice4 = 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg';
var dice5 = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg';
var dice6 = 'https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg';
var diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
var randomDice = document.querySelector("#randomDice");
if (randomDice && randomDice != null) {
    randomDice.innerHTML = "<img src=" + diceArray[throwDice()] + " />";
    // randomDice.innerHTML = 
}
