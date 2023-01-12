var root = document.querySelector("#root");
if (root) {
    console.dir(root);
    root.style.backgroundColor = getRandomColor();
}
function getRandomDice() {
    var randomImage = Math.floor(Math.random() * arr.length);
    document.querySelector("#dice") = myPix[randomImage];
    var box = document.querySelector(".box");
    if (box) {
        console.dir(box);
        box.style.backgroundColor = "black";
    }
}
