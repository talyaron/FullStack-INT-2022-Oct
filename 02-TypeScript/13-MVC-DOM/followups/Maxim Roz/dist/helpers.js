function getRandomBoxColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
}
var boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach(function (box) { return box.style.backgroundColor = getRandomBoxColor(); });
