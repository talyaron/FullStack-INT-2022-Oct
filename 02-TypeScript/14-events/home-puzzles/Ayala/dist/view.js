//1) create a box. When the user press on the, an alert show "You pressed me"
var box1 = document.querySelector('.box1');
box1.addEventListener("click", function (event) {
    alert("You pressed me");
});
// 2) create a 3 by 3 board of light blue color. when a box is pressed, the color is changed to black. even better, an image of a chess pawn appear.
var boxes = document.querySelectorAll('.box');
boxes.forEach(function (box) {
    box.addEventListener("click", function (event) {
        // box.style.backgroundColor ="black";
        box.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Chess_piece_-_White_pawn.JPG/261px-Chess_piece_-_White_pawn.JPG')";
        box.style.backgroundSize = "contain";
        // box.style.backgroundSize ="cover";
    });
});
//  3) create tick tac toe game
var isX = true;
var boxes2 = document.querySelectorAll('.box2');
boxes2.forEach(function (box) {
    box.addEventListener("click", function (event) {
        box.innerHTML = isX ? "X" : "O";
        isX = !isX;
    });
});
