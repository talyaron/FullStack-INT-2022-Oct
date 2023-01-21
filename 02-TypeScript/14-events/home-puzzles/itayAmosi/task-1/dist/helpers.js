var audio = new Audio("./KRS-One - Sound of da Police (Official Video).mp3");
var box = document.querySelectorAll(".box");
box.forEach(function (box) {
    box.addEventListener("click", function () {
        audio.play();
    });
});
