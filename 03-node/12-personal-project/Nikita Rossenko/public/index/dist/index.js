function randomNumberColors() {
    var numbers = document.querySelectorAll(".number");
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
}
randomNumberColors();
