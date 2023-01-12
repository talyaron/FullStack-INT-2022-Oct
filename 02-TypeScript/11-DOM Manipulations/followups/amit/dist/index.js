function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}
var root = document.querySelector("#root");
if (root) {
    root.style.backgroundColor = getRandomColor();
}
var box = document.querySelector(".box");
if (box && root) {
    box.style.backgroundColor = root.style.backgroundColor;
    //   box.style.backgroundColor = getRandomColor();
}
function printToElement(element) {
    if (element) {
        for (var i = 0; i < 10; i++) {
            element.innerText += i;
        }
    }
}
printToElement(box);
