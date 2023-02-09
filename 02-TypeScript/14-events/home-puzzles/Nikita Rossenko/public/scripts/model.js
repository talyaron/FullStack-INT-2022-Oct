var boxesDivs = "";
for (var i = 0; i < 9; i++) {
    boxesDivs += "<div class='box'></div>";
}
if (boxContainer) {
    boxContainer.innerHTML = boxesDivs;
}
