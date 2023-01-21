var ticTacToeGame = document.querySelector(".box");
var TicTacToe = document.querySelectorAll(".box");
function switchPlayer() {
    if (turn === player1) {
        turn = player2;
        TicTacToe.forEach(function (box) {
            box.addEventListener("click", function (event) {
                box.innerText = "X";
            });
            box.addEventListener("click", function (event) {
                box.innerText = "O";
            });
        });
    }
    else {
        turn = player1;
    }
}
// const ticTacToe = document.querySelector(`.box`)
// if (ticTacToe) {
//    ticTacToe.addEventListener(`click`,(play) => {
//     console.log(play)
//  });{
// }}
