console.dir(document);
var btn = document.querySelector("#btn");
function generateColor() {
    var hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var code = "";
    for (var i = 0; i < 6; i++) {
        code += hexArray[Math.floor(Math.random() * 15)];
    }
    return "#" + code;
}
btn.addEventListener('click', function () {
    document.body.style.backgroundColor = generateColor();
});
