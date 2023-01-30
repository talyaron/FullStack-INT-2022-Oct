function startIt() {
    var creatBox = document.createElement("div");
    document.body.appendChild(creatBox);
    creatBox.innerHTML = "click me";
    creatBox.addEventListener("click", function () {
        return alert("This Box Is Been Clicked");
    });
    creatBox.addEventListener("mouseover", function () {
        var newpop = document.createElement("p");
        creatBox.appendChild(newpop);
        newpop.innerHTML = "You Hover Me";
        creatBox.addEventListener("mouseleave", function () {
            creatBox.removeChild(newpop);
        });
    });
}
