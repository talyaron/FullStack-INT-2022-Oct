// 1) create a box. When the user press on the, an alert show "You pressed me"
// const box= document.querySelector(".box")
// box?.addEventListener("click",()=>{
//     alert("you press me")
// })
// 2) create a 3 by 3 board of light blue color. when a box is pressed, the color
// is changed to black.
// even better, an image of a chess pawn appear.
// const boxs = document.querySelectorAll(".box");
// boxs?.forEach((box) =>
//   box.addEventListener("click", () => {
//     box.style.backgroundColor =
//       box.style.backgroundColor === "black" ? "blue" : "black";
//       box.innerHTML=box.innerHTML===""?`<img src="https://bit.ly/3WvTBOX" alt="" style="height: 5vh; width: 5vw;"> `:""
//     })
// );
// 3) create tick tac toe game
var globalSign = "";
function getSign() {
    var setButton = document.getElementById("sign");
    setButton === null || setButton === void 0 ? void 0 : setButton.addEventListener("click", function () {
        globalSign = globalSign === "X" ? "O" : "X";
    });
}
function renderSign() {
    var box = document.querySelectorAll(".box");
    box.forEach(function (box) {
        return box.addEventListener("click", function () {
            box.innerHTML = box.innerHTML === "" ? globalSign : "";
        });
    });
}
function winner() {
    var box1 = document.getElementById("0");
    var box2 = document.getElementById("1");
    var box3 = document.getElementById("2");
    var box4 = document.getElementById("3");
    var box5 = document.getElementById("4");
    var box6 = document.getElementById("5");
    var box7 = document.getElementById("6");
    var box8 = document.getElementById("7");
    var box9 = document.getElementById("8");
    // checking who won
    if ((box1 === null || box1 === void 0 ? void 0 : box1.innerHTML) != "") {
        if (((box1 === null || box1 === void 0 ? void 0 : box1.innerHTML) === (box2 === null || box2 === void 0 ? void 0 : box2.innerHTML) && (box2 === null || box2 === void 0 ? void 0 : box2.innerHTML) === (box3 === null || box3 === void 0 ? void 0 : box3.innerHTML)) ||
            ((box1 === null || box1 === void 0 ? void 0 : box1.innerHTML) === (box5 === null || box5 === void 0 ? void 0 : box5.innerHTML) && (box5 === null || box5 === void 0 ? void 0 : box5.innerHTML) === (box9 === null || box9 === void 0 ? void 0 : box9.innerHTML)) ||
            ((box1 === null || box1 === void 0 ? void 0 : box1.innerHTML) === (box3 === null || box3 === void 0 ? void 0 : box3.innerHTML) && (box3 === null || box3 === void 0 ? void 0 : box3.innerHTML) === (box7 === null || box7 === void 0 ? void 0 : box7.innerHTML))) {
            alert("player " + globalSign + " won");
        }
    }
    if ((box3 === null || box3 === void 0 ? void 0 : box3.innerHTML) != "") {
        if (((box3 === null || box3 === void 0 ? void 0 : box3.innerHTML) === (box5 === null || box5 === void 0 ? void 0 : box5.innerHTML) && (box5 === null || box5 === void 0 ? void 0 : box5.innerHTML) === (box7 === null || box7 === void 0 ? void 0 : box7.innerHTML)) ||
            ((box3 === null || box3 === void 0 ? void 0 : box3.innerHTML) === (box6 === null || box6 === void 0 ? void 0 : box6.innerHTML) && (box6 === null || box6 === void 0 ? void 0 : box6.innerHTML) === (box9 === null || box9 === void 0 ? void 0 : box9.innerHTML))) {
            alert("player " + globalSign + " won");
        }
    }
    if ((box5 === null || box5 === void 0 ? void 0 : box5.innerHTML) != "") {
        if (((box4 === null || box4 === void 0 ? void 0 : box4.innerHTML) === (box5 === null || box5 === void 0 ? void 0 : box5.innerHTML) && (box5 === null || box5 === void 0 ? void 0 : box5.innerHTML) === (box6 === null || box6 === void 0 ? void 0 : box6.innerHTML)) ||
            ((box2 === null || box2 === void 0 ? void 0 : box2.innerHTML) === (box5 === null || box5 === void 0 ? void 0 : box5.innerHTML) && (box5 === null || box5 === void 0 ? void 0 : box5.innerHTML) === (box8 === null || box8 === void 0 ? void 0 : box8.innerHTML))) {
            alert("player " + globalSign + " won");
        }
    }
    if ((box7 === null || box7 === void 0 ? void 0 : box7.innerHTML) != "") {
        if ((box7 === null || box7 === void 0 ? void 0 : box7.innerHTML) === (box8 === null || box8 === void 0 ? void 0 : box8.innerHTML) && (box8 === null || box8 === void 0 ? void 0 : box8.innerHTML) === (box9 === null || box9 === void 0 ? void 0 : box9.innerHTML)) {
            alert("player " + globalSign + " won");
        }
    }
}
function restart() {
    var box = document.querySelectorAll(".box");
    box.forEach(function (box) { return (box.innerHTML = ""); });
}
