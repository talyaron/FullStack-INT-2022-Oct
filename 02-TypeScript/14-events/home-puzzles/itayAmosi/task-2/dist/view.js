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
        box.style.backgroundImage = "url(https://img.lovepik.com/free-png/20211105/lovepik-chess-png-image_400298812_wh1200.png)";
        box.style.backgroundSize = "100px 100px";
    });
});
