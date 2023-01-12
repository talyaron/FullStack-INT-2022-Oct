console.dir(document);
document.body.style.backgroundColor = "red";
console.log(navigator.onLine);
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
    console.dir(root);
    root.style.backgroundColor = getRandomColor();
}
