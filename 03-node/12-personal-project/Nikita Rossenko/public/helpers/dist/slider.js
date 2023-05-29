var index = 0;
function sentensesSlide() {
    var sentenses = document.querySelectorAll(".sentensesSlide");
    for (var i = 0; i < sentenses.length; i++) {
        sentenses[i].style.display = "none";
    }
    index++;
    if (index > sentenses.length) {
        index = 1;
    }
    sentenses[index - 1].style.display = "block";
    setTimeout(sentensesSlide, 9000);
}
sentensesSlide();
