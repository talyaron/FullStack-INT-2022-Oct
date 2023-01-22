var boxes = document.querySelectorAll(".box");
var box1_1 = document.querySelector("#box-1_1");
var box1_2 = document.querySelector("#box-1_2");
var box1_3 = document.querySelector("#box-1_3");
var box2_1 = document.querySelector("#box-2_1");
var box2_2 = document.querySelector("#box-2_2");
var box2_3 = document.querySelector("#box-2_3");
var box3_1 = document.querySelector("#box-3_1");
var box3_2 = document.querySelector("#box-3_2");
var box3_3 = document.querySelector("#box-3_3");
var playerX = document.querySelector("#player_x");
var player0 = document.querySelector("#player_0");
var winner = document.querySelector(".nav_bar__winner");
boxes.forEach(function (box) {
    box.addEventListener("click", function (event) {
        if (player0.checked) {
            box.style.backgroundColor = "pink";
            playerX.checked = true;
            box.style.pointerEvents = "none";
            didIWin();
        }
        else if (playerX.checked) {
            box.style.backgroundColor = "blue";
            player0.checked = true;
            box.style.pointerEvents = "none";
            didIWin();
        }
    });
});
