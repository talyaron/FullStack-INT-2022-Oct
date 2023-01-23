var xSymbol = "X";
var oSymbol = "O";
var playerX = true;
var boxes = document.querySelectorAll(".box");
boxes.forEach(function (box) {
    box.addEventListener("click", startPlayGame);
});
function startPlayGame() {
    if (this.textContent != "")
        return;
    if (playerX) {
        this.textContent = xSymbol;
        this.style.color = "red";
    }
    else {
        this.textContent = oSymbol;
        this.style.color = "green";
    }
    playerX = !playerX;
    var chackWin = chachWin();
    theWinnerIs(chackWin);
    changePlayer(playerX);
}
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
                boxWin[checkWhoIsWinner[i].three].innerHTML) &&
            boxWin[checkWhoIsWinner[i].one].innerHTML != "") {
            whoWin = ("" + checkWhoIsWinner[i].one + checkWhoIsWinner[i].two + checkWhoIsWinner[i].three + boxWin[checkWhoIsWinner[i].three].innerHTML);
            return (whoWin);
        }
    }
    var chekTie = checkTie();
    if (chekTie) {
        whoWin = "999T";
    }
    return (whoWin);
}
function theWinnerIs(chackWin) {
    var arrayWinFromStr = chackWin;
    if (arrayWinFromStr.length < 4) {
        return;
    }
    if (arrayWinFromStr[3] != "T") {
        for (var i = 0; i < 3; i++) {
            var strWin = "box" + arrayWinFromStr[i];
            document.getElementById(strWin).style.backgroundColor = "blue";
        }
    }
    setInterval(theWinner, 1, (arrayWinFromStr[3]));
    setTimeout(function () { window.location.reload(); }, 3000);
}
function changePlayer(player) {
    var playerSymbol = document.getElementById("player");
    if (player) {
        playerSymbol.innerText = "Player 1";
        playerSymbol.style.color = "red";
    }
    else {
        playerSymbol.innerText = "Player 2";
        playerSymbol.style.color = "green";
    }
}
function theWinner(theWinner) {
    var playerWinner = document.getElementById("player");
    switch (theWinner) {
        case "X":
            theWinner = "Player 1";
            playerWinner.innerText = "The Winner is " + theWinner;
            playerWinner.style.color = "red";
            playerWinner.style.fontSize = "50px";
            break;
        case "O":
            theWinner = "Player 2";
            playerWinner.innerText = "The Winner is " + theWinner;
            playerWinner.style.color = "green";
            playerWinner.style.fontSize = "50px";
            break;
        case "T":
            playerWinner.innerText = "No Winner is Tie";
            playerWinner.style.color = "blue";
            playerWinner.style.fontSize = "50px";
            break;
    }
}
function checkTie() {
    var boxWin = document.querySelectorAll(".box");
    var checkTie = true;
    boxWin.forEach(function (box) {
        if (box.innerHTML == "") {
            checkTie = false;
        }
    });
    return (checkTie);
}
