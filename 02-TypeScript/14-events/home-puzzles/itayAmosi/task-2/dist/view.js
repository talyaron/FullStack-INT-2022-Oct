var myBox = document.querySelector("#myBox");
if (myBox) {
    myBox.addEventListener("click", function (event) {
        console.log(event);
    });
}
var boxs = document.querySelectorAll(".box");
var img = document.querySelector("img");
boxs.forEach(function (box) {
    box.addEventListener("click", function (event) {
        box.style.img = "https://picsum.photos/200/301";
    });
});
