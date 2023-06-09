var cell = document.querySelector(".cell");
if (cell) {
    cell.addEventListener("click", function (event) {
        console.log(event);
    });
}
var boxs = document.querySelectorAll(".cell");
boxs.forEach(function (box) {
    box.addEventListener("click", function (event) {
        box.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Chess_pawn_0968.jpg/1200px-Chess_pawn_0968.jpg)";
        box.style.backgroundSize = "100px 100px";
    });
});
