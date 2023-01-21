var boxes = document.querySelectorAll(".box");
var playerOneTurn = true;
var playerTwoTurn = false;
boxes.forEach(function (box) { return box.addEventListener("click", togglePress); });
function togglePress() {
    var i = document.createElement("i");
    if (playerOneTurn) {
        i.classList.add("fa-solid");
        i.classList.add("fa-xmark");
    }
    else {
        i.classList.add("fa-solid");
        i.classList.add("fa-check");
    }
    this.append(i);
    playerOneTurn = playerTwoTurn;
    playerTwoTurn = !playerOneTurn;
}
