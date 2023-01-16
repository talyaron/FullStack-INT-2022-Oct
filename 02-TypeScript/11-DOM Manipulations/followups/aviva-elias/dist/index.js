console.dir(document);
document.body.style.backgroundColor = "wheat";
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}
var box = document.querySelector(".box");
debugger;
if (box) {
    box.addEventListener('click', function onClick() {
        console.dir(box);
        box.style.backgroundColor = getRandomColor();
    });
}
var box1 = document.querySelector(".box1");
if (box1 && box) {
    box.addEventListener('click', function onClick() {
        box1.style.backgroundColor = box.style.backgroundColor;
    });
}
