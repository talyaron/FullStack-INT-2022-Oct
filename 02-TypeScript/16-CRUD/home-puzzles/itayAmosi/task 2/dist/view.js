var myBox = document.querySelector(".balloons");
if (myBox) {
    myBox.addEventListener("click", function (event) {
        console.log(event);
    });
}
var balloon = document.querySelectorAll(".balloons, .box");
// console.dir(boxes);
balloon.forEach(function (box) {
    box.addEventListener("click", function (event) {
        box.style.backgroundColor = getRandomColor();
    });
    box.addEventListener("dblclick", function (event) {
        box.remove(event);
    });
});
