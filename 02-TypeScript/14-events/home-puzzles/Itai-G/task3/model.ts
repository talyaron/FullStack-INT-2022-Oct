let player1 = { name: prompt("Player 1 name:"),
 symbol: "X",
  score: 0 
};
let player2 = { name: prompt("Player 2 name:"),
 symbol: "O",
  score: 0 
};

let currentPlayer = player1;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];