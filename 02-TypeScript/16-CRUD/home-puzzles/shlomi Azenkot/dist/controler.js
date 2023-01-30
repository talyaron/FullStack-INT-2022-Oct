var playerLives = 10;
var checkCards = function (e) {
    var clickedCard = e.target;
    clickedCard.classList.add("flipped");
    var flippedCard = document.querySelectorAll(".flipped");
    var toggleCard = document.querySelectorAll(".toggleCard");
    if (flippedCard.length === 2) {
        if (flippedCard[0].getAttribute("name") ===
            flippedCard[1].getAttribute("name")) {
            console.log("match");
            flippedCard.forEach(function (card) {
                card.classList.remove("flipped");
                card.classList.add("reversedCard");
            });
        }
        else {
            console.log("worng");
            flippedCard.forEach(function (card) {
                card.classList.remove("flipped");
                setTimeout(function () { return card.classList.remove("toggleCard"); }, 2000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives.toString();
            console.log(playerLives);
            if (playerLives === 0) {
                gameOver.play();
                var loses = document.querySelector(".loses");
                loses.style.display = "block";
                loses.style.display = "flex";
                restart();
            }
        }
    }
    if (toggleCard.length === 16) {
        var winer = document.querySelector(".Winner");
        songWin.play();
        winer.style.display = "block";
        winer.style.display = "flex";
    }
};
var restart = function () {
    var cardD = randomize();
    var faces = document.querySelectorAll(".fase");
    var cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardD.forEach(function (item, index) {
        cards[index].classList.remove("toggleCard");
        setTimeout(function () {
            cards[index].classList.add("new_game");
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 10;
    playerLivesCount.textContent = playerLives.toString();
    setTimeout(function () { }, 100);
};
playerLivesCount.textContent = playerLives.toString();
