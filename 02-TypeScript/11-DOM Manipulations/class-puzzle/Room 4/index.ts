const dice = () =>{
    return Math.floor(Math.random() * 6)
};


const dice1 =   `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/836px-Dice-1-b.svg.png?20121130115708`
const dice2 =   `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/836px-Dice-2-b.svg.png?20121130115708`
const dice3 =   `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/836px-Dice-3-b.svg.png?20121130115712`
const dice4 =   `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/836px-Dice-4-b.svg.png?20121130115712`
const dice5 =   `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/836px-Dice-5-b.svg.png?20121130115716`
const dice6 =   `https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/836px-Dice-6-b.svg.png?20121130115716`

const diceArr =[
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
];

const rollRandomDice:HTMLDivElement | null = document.querySelector(`#dice`);
if (rollRandomDice && rollRandomDice != null){
    rollRandomDice.innerHTML= `<img src=${diceArr[dice()]} />`;
}  


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = `#`;
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }
  const dices: HTMLDivElement | null = document.querySelector("#dice");

if (dices) {
  console.dir(dices);
  dices.style.backgroundColor = getRandomColor();
}