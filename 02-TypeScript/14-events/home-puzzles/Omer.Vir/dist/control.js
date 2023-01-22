var change = -1;
var counter = 0;
var game = false;
var _loop_1 = function (i) {
    if (mat[i] < 0) {
        var box_1 = boxes[i];
        box_1.addEventListener("click", function () {
            var x = document.createElement("i");
            x.className = "fa-solid fa-x fa-2xl";
            var o = document.createElement("i");
            o.className = "fa-regular fa-circle fa-2xl";
            if (change == -1) {
                box_1.append(x);
                change *= -1;
                mat[i] = 1;
            }
            else {
                box_1.append(o);
                change *= -1;
                mat[i] = 0;
            }
            box_1.style.pointerEvents = "none";
            counter++;
            if (mat[0] == 0 && mat[1] == 0 && mat[2] == 0 || mat[3] == 0 && mat[4] == 0 && mat[5] == 0 || mat[6] == 0 && mat[7] == 0 && mat[8] == 0 || mat[0] == 0 && mat[4] == 0 && mat[8] == 0 || mat[2] == 0 && mat[4] == 0 && mat[6] == 0 || mat[0] == 0 && mat[3] == 0 && mat[6] == 0 || mat[1] == 0 && mat[4] == 0 && mat[7] == 0 || mat[2] == 0 && mat[5] == 0 && mat[8] == 0) {
                alert("O won!");
                stopGame(i);
            }
            if (mat[0] == 1 && mat[1] == 1 && mat[2] == 1 || mat[3] == 1 && mat[4] == 1 && mat[5] == 1 || mat[6] == 1 && mat[7] == 1 && mat[8] == 1 || mat[0] == 1 && mat[4] == 1 && mat[8] == 1 || mat[2] == 1 && mat[4] == 1 && mat[6] == 1 || mat[0] == 1 && mat[3] == 1 && mat[6] == 1 || mat[1] == 1 && mat[4] == 1 && mat[7] == 1 || mat[2] == 1 && mat[5] == 1 && mat[8] == 1) {
                alert("X won!");
                stopGame(i);
            }
            if (isEndGame() && counter == 9 && !game) {
                alert("Tie game...");
            }
        });
    }
};
for (var i = 0; i < boxes.length; i++) {
    _loop_1(i);
}
function isEndGame() {
    for (var i = 0; i < mat.length; i++) {
        if (mat[i] < 0)
            return false;
    }
    return true;
}
function stopGame(i) {
    for (var j = i; j < boxes.length; j++) {
        var box = boxes[j];
        box.style.pointerEvents = "none";
    }
    game = true;
}
