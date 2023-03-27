// get all the boxes
var boxes = document.querySelectorAll(".boxes");
boxes.forEach(function (box) {
    box.addEventListener("mouseover", function () {
        box.style.backgroundColor = "gold";
    });
    box.addEventListener("mouseout", function () {
        box.style.backgroundColor = "black";
    });
});
// use mousein / mouseout on box .one
var numone = document.querySelector("#one");
numone.addEventListener("mouseover", function (event) {
    numone.style.backgroundColor = "red";
    numone.addEventListener("mouseout", function () {
        numone.style.backgroundColor = "black";
    });
});
