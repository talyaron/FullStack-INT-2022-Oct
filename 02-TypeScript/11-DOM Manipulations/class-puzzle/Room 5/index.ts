let throwDice = () => {
    return Math.floor(Math.random() * 5)
};
const dice1:string = 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg' 
const dice2:string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/557px-Dice-2-b.svg.png' 
const dice3:string = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg' 
const dice4:string = 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg' 
const dice5:string = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg' 
const dice6:string = 'https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg' 

const diceArray = [dice1,dice2,dice3,dice4,dice5,dice6]

const randomDice:HTMLDivElement | null = document.querySelector("#randomDice");

if (randomDice && randomDice != null){
    randomDice.innerHTML = `<img src=${diceArray[throwDice()]} />`;
// randomDice.innerHTML = 
}   

5