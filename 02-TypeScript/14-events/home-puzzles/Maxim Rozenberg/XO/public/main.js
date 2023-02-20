"use strict";
let xSymbol = "X", oSymbol = "O";
let header = document.querySelector("h1");
let winner = "WINNER: ";
let player1 = "Player 1", player2 = "Player 2";
let score = document.querySelector("#scorePl1").textContent;
let count = Number(score);
let score2 = document.querySelector("#scorePl2").textContent;
let count2 = Number(score2);
let tablePlayer1 = document.querySelector("#pl1");
let tablePlayer2 = document.querySelector("#pl2");
let playerName1 = document.querySelector("#input1");
let playerName2 = document.querySelector("#input2");
let btnPlayer1 = document.querySelector("#game");
let btnPlayer2 = document.querySelector("#player2");
//......writing name from input to table
btnPlayer1.addEventListener("click", (e) => {
    click();
    document.querySelector("p").style.visibility = "hidden";
    document.querySelector("h2").style.visibility = "visible";
    document.querySelector("h3").style.visibility = "visible";
    document.querySelector("h1").style.visibility = "visible";
    document.querySelector(".scoreCss").style.visibility = "visible";
    e.preventDefault();
    if (playerName1.value != "" && playerName2.value != "") {
        tablePlayer1.textContent = playerName1.value + " - (X) ";
        tablePlayer2.textContent = playerName2.value + " - (O) ";
    }
    else {
        tablePlayer1.textContent = "Player 1" + " - (X) ";
        tablePlayer2.textContent = "Player 2" + " - (O) ";
    }
    document.getElementById("game").style.display = "none";
    document.getElementById("input1").style.display = "none";
    document.getElementById("input2").style.display = "none";
});
// btnPlayer2.addEventListener("click", (e) => {
//     e.preventDefault()
//     tablePlayer2.textContent = playerName2.value
//     document.getElementById("player2")!.style.display = "none"
//     document.getElementById("input2")!.style.display = "none"
// })
let btns = document.getElementsByName("button");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
//...clicking on the buttons and writing x/o
function click() {
    for (let i = 0; i < 9; i++) {
        //  let player1 = "Player 1", player2= "Player 2"
        btns[i].addEventListener("click", () => {
            if (btns[i].textContent != "") {
                return;
            }
            if (header.textContent == player1) {
                btns[i].textContent = xSymbol;
                header.textContent = player2;
                winnerChek();
            }
            else if (header.textContent == player2) {
                btns[i].textContent = oSymbol;
                header.textContent = player1;
                winnerChek();
            }
        });
    }
}
// click()
//...checking the winner
function winnerChek() {
    //......................btn1..................
    if (btn1.textContent != "" && btn1.textContent == btn2.textContent && btn1.textContent == btn3.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn1.textContent != "" && btn1.textContent == btn4.textContent && btn1.textContent == btn7.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn1.textContent != "" && btn1.textContent == btn5.textContent && btn1.textContent == btn9.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    //......................btn2..................
    if (btn2.textContent != "" && btn2.textContent == btn1.textContent && btn2.textContent == btn3.textContent) {
        nameOfWinner();
        return;
    }
    if (btn2.textContent != "" && btn2.textContent == btn5.textContent && btn2.textContent == btn8.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    //......................btn3..................
    if (btn3.textContent != "" && btn3.textContent == btn2.textContent && btn3.textContent == btn1.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn3.textContent != "" && btn3.textContent == btn6.textContent && btn3.textContent == btn9.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn3.textContent != "" && btn3.textContent == btn5.textContent && btn3.textContent == btn7.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    //......................btn4..................
    if (btn4.textContent != "" && btn4.textContent == btn1.textContent && btn4.textContent == btn7.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn4.textContent != "" && btn4.textContent == btn5.textContent && btn4.textContent == btn6.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    //......................btn5..................
    if (btn5.textContent != "" && btn5.textContent == btn4.textContent && btn5.textContent == btn6.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn5.textContent != "" && btn5.textContent == btn2.textContent && btn5.textContent == btn8.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn5.textContent != "" && btn5.textContent == btn7.textContent && btn5.textContent == btn3.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn5.textContent != "" && btn5.textContent == btn1.textContent && btn5.textContent == btn9.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    //......................btn6..................
    if (btn6.textContent != "" && btn6.textContent == btn3.textContent && btn6.textContent == btn9.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn6.textContent != "" && btn6.textContent == btn5.textContent && btn6.textContent == btn4.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    //......................btn7..................
    if (btn7.textContent != "" && btn7.textContent == btn4.textContent && btn7.textContent == btn1.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn7.textContent != "" && btn7.textContent == btn8.textContent && btn7.textContent == btn9.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn7.textContent != "" && btn7.textContent == btn5.textContent && btn7.textContent == btn3.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    //......................btn8..................
    if (btn8.textContent != "" && btn8.textContent == btn7.textContent && btn8.textContent == btn9.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn8.textContent != "" && btn8.textContent == btn5.textContent && btn8.textContent == btn2.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    //......................btn9..................
    if (btn9.textContent != "" && btn9.textContent == btn8.textContent && btn9.textContent == btn7.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn9.textContent != "" && btn9.textContent == btn6.textContent && btn9.textContent == btn3.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    if (btn9.textContent != "" && btn9.textContent == btn5.textContent && btn9.textContent == btn1.textContent) {
        nameOfWinner();
        header.textContent = player1;
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
        return;
    }
    tie();
}
//.......Alert the winner +counter
function nameOfWinner() {
    if (header.textContent == "Player 2") {
        count += 1;
        document.querySelector("#scorePl1").textContent = String(count);
        alert(winner + tablePlayer1.textContent);
        return;
    }
    if (header.textContent == "Player 1") {
        count2 += 1;
        document.querySelector("#scorePl2").textContent = String(count2);
        alert(winner + tablePlayer2.textContent);
        return;
    }
}
function tie() {
    if (btns[0].textContent != "" && btns[1].textContent != "" && btns[2].textContent != "" && btns[3].textContent != "" && btns[4].textContent != "" && btns[5].textContent != "" && btns[6].textContent != "" && btns[7].textContent != "" && btns[8].textContent != "") {
        header.textContent = player1;
        alert("tie");
        for (let i = 0; i < 9; i++) {
            document.querySelectorAll(".btn")[i].textContent = "";
        }
    }
}
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    window.location.reload();
});
