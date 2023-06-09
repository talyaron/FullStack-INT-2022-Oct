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
var test = document.querySelector("#box");
if (test) {
    console.dir(test);
    test.style.backgroundColor = getRandomColor();
}
