var box = document.querySelector("#box");
box.addEventListener("click", function (event) {
    box.style.backgroundColor = "red";
});
box.addEventListener("click", function (event) {
    alert("you shuldnt have preesed");
});
