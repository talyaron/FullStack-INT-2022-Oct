var xo = document.querySelector(".box");
if (xo) {
    xo.addEventListener("click", function (play) {
        console.log(play);
    });
    {
    }
}
var XO = document.querySelectorAll(".box");
XO.forEach(function (box) {
    box.addEventListener("click", function (event) {
        box.innerText = "X";
    });
    box.addEventListener("click", function (event) {
        box.innerText = "O";
    });
    //    box.addEventListener("mouseout", (event) => {
    //      box.style.backgroundColor = 'teal';
    //    });
});
