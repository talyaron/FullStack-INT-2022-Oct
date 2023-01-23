var box = document.querySelector(".box");
if (box) {
    box.addEventListener("click", function (event) {
        box.style.backgroundColor = 'black';
    });
    box.addEventListener("click", function (event) {
        box.innerText = "you presed me";
    });
}
