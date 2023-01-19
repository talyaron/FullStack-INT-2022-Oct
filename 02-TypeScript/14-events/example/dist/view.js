var myBox = document.querySelector("#myBox");
if (myBox) {
    myBox.addEventListener("click", function (event) {
        console.log(event);
    });
    myBox.addEventListener("mousemove", function (event) {
        myBox.innerText = "(" + event.x + "," + event.y + ")";
    });
}
var boxes = document.querySelectorAll(".box, .box2");
// console.dir(boxes);
boxes.forEach(function (box) {
    box.addEventListener("mousemove", function (event) {
        box.innerText = "(" + event.x + "," + event.y + ")";
    });
    box.addEventListener("mouseenter", function (event) {
        box.style.backgroundColor = 'red';
    });
    box.addEventListener("mouseout", function (event) {
        box.style.backgroundColor = 'teal';
    });
});
// console.dir([]);
