var section = document.querySelector("section");
var playerLivesCount = document.querySelector("span");
var randomize = function () {
    var carData = getData();
    carData.sort(function () { return Math.random() - 0.5; });
    console.log(carData);
    return carData;
};
randomize();
var catdGenrator = function () {
    var cardData = randomize();
    //html
    cardData.forEach(function (item) {
        var card = document.createElement("div");
        var fase = document.createElement("img");
        var back = document.createElement("div");
        card.classList = "card";
        fase.classList = "fase";
        back.classList = "back";
        //add img
        fase.src = item.imgSrc;
        card.setAttribute("name", item.name);
        // add div
        section.appendChild(card);
        // add to div back && fase
        card.appendChild(fase);
        card.appendChild(back);
        //rotate card
        card.addEventListener("click", function (e) {
            card.classList.toggle("toggleCard");
            checkCards(e);
            enterdiv.play();
        });
    });
};
var ChangerColor = function (event) {
    var colorBody = event.target.value;
    document.body.style.background = "linear-gradient( 45deg, " + colorBody + " 26.8%, rgba(192,229,246,1) 64% )";
};
var ChangerColor2 = function (event) {
    var colorleft = document.querySelector(".left").value;
    var colorBody2 = event.target.value;
    console.log(colorBody2);
    document.body.style.background = "linear-gradient( 45deg," + colorleft + "  26.8%,  " + colorBody2 + " 64%)";
};
