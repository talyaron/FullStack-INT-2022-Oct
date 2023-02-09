function getRandomBalloons() {
    try {
        var myBox = document.querySelector('.balloon');
        if (myBox) {
            myBox.addEventListener('click', function (event) { });
        }
        var balloon = document.querySelectorAll(".balloon");
        balloon.forEach(function (div) {
            div.addEventListener('click', function (event) {
                div.style.backgroundColor = getRandomColor();
            });
            div.addEventListener('dblclick', function (event) {
                div.remove(event);
            });
        });
    }
    catch (error) { }
}
for (var i = 0; i < 33; i++) {
    caterBalloons();
}
var card = document.querySelector('.balloon');
function caterBalloons() {
    var _a;
    var balloonSpeed = randomNumber(22, 56);
    var balloonSize = randomNumber(45, getViewportWidth() / 5);
    var balloonPosition = randomNumber(0 - balloonSize / 2, getViewportWidth() - balloonSize / 2 - 120);
    var randomBalloon = document.createElement("div");
    randomBalloon.classList.add("balloon");
    randomBalloon.style.left = Math.random() * 950 + 'px';
    randomBalloon.style.top = Math.random() * 250 + 'px';
    randomBalloon.style.backgroundColor = getRandomColor();
    randomBalloon.style.animation = "floatUp " + balloonSpeed + "s linear 1, wobble " + randomNumber(4, 12) + "s ease-in-out alternate";
    // randomBalloon.addEventListener(`click`, pop);
    (_a = document.querySelector(".wrapper")) === null || _a === void 0 ? void 0 : _a.appendChild(randomBalloon);
    PopUpBalloons.push = function (randomBalloon) {
        throw new Error('Method not implemented.');
    };
    getRandomBalloons();
}
