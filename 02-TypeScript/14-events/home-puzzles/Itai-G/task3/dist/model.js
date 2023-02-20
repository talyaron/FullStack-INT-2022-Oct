var player1 = { name: prompt("Player 1 name:"),
    symbol: "X",
    score: 0
};
var player2 = { name: prompt("Player 2 name:"),
    symbol: "O",
    score: 0
};
var currentPlayer = player1;
var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
