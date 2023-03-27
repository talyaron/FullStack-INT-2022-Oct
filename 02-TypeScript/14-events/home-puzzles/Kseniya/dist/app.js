// level 2
var button = document.getElementById("ss");
console.log(25);
button === null || button === void 0 ? void 0 : button.addEventListener("click", function (event) {
    console.log(36);
    var box = document.getElementById("box");
    if (box != undefined) {
        box.style.backgroundColor = "red";
    }
});
