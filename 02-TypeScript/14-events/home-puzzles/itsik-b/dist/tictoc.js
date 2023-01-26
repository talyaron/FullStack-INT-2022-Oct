var playerOne = "X";
var playerTwo = "O";
var turn = true;
var boxes = document.querySelectorAll(".box");
boxes.forEach(function (box) {
    box.addEventListener("click", gameStart);
});
function gameStart() {
    if (this.textContent != "")
        return;
    if (turn)
        this.textContent = playerOne;
    else
        this.textContent = playerTwo;
    turn = !turn;
    var checkwin = chachWin();
    if (checkwin != "") {
    }
}
// check for win
function chachWin() {
    var whoWin = "";
    var boxWin = document.querySelectorAll(".box");
    var checkWhoIsWinner = [
        { one: 0, two: 1, three: 2 },
        { one: 3, two: 4, three: 5 },
        { one: 6, two: 7, three: 8 },
        { one: 0, two: 3, three: 6 },
        { one: 1, two: 4, three: 7 },
        { one: 2, two: 5, three: 8 },
        { one: 0, two: 4, three: 8 },
        { one: 2, two: 4, three: 6 },
    ];
    for (var i = 0; i < checkWhoIsWinner.length; i++) {
        if ((boxWin[checkWhoIsWinner[i].one].innerHTML ==
            boxWin[checkWhoIsWinner[i].two].innerHTML) &&
            (boxWin[checkWhoIsWinner[i].one].innerHTML ==
                boxWin[checkWhoIsWinner[i].three].innerHTML)) {
            whoWin = ("" + checkWhoIsWinner[i].one + checkWhoIsWinner[i].two + checkWhoIsWinner[i].three + boxWin[checkWhoIsWinner[i].three].innerHTML);
            return (whoWin);
        }
    }
    return (whoWin);
}
