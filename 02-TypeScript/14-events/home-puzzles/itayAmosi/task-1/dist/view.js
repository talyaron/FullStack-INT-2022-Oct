var myBox = document.querySelector("#myBox");
if (myBox) {
    myBox.addEventListener("click", function (event) {
        console.log(event);
    });
}
var boxs = document.querySelectorAll(".box");
boxs.forEach(function (box) {
    box.addEventListener("click", function (event) {
        box.innerHTML = alert("Turn up the volume...!\n      That's the sound of the police");
        box.innerText = "Is The Sound Of The Police";
    });
    box.addEventListener("click", function (event) {
        audio.play();
    });
    box.addEventListener("mouseenter", function (event) {
        box.style.backgroundColor = 'red';
    });
    box.addEventListener("mouseout", function (event) {
        box.style.backgroundColor = 'blue';
    });
});
