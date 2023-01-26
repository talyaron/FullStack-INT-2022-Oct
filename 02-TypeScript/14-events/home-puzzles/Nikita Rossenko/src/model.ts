let boxesDivs = "";
for (let i = 0; i < 9; i++) {
    boxesDivs += "<div class='box'></div>";
}

if (boxContainer) {
  boxContainer.innerHTML = boxesDivs;
}
