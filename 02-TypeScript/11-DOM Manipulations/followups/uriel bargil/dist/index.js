console.dir(document);
document.body.style.backgroundColor = "wheat";
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
var root = document.querySelector("#shmulik");
if (root) {
    console.dir(root);
    root.style.backgroundColor = getRandomColor();
}