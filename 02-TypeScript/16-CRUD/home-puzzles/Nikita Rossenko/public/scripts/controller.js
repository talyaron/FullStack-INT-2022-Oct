var newBalls = new Balls();
var numOfBalls = 10;
newBalls.drawBalls(numOfBalls);
var balls = document.querySelectorAll('.ball');
balls.forEach(function (ball) {
    try {
        console.dir(ball);
        var containerWidth = ballsContainer === null || ballsContainer === void 0 ? void 0 : ballsContainer.offsetWidth;
        var containerHeight = ballsContainer === null || ballsContainer === void 0 ? void 0 : ballsContainer.offsetHeight;
        var getRandomWidth = function (min, max) { return Math.random() * max; };
        var getRandomHeight = function (min, max) { return Math.random() * max; };
        var randomNum = Math.floor(Math.random() * 5 + 1);
        var randomSize = Math.random() * 100 + 20;
        ball.style.width = randomSize.toString() + "px";
        ball.style.height = randomSize.toString() + "px";
        ball.style.backgroundColor = getRandomColor();
        if (containerWidth != undefined && containerHeight != undefined) {
            ball.style.left = getRandomWidth(0, containerWidth - 600) + 'px';
            ball.style.top = getRandomHeight(0, containerHeight - 300) + 'px';
        }
        ball.innerText = randomNum.toString();
        ball.addEventListener("click", function (e) {
            var numOfLives = ball.innerText;
            ball.innerText = (parseInt(numOfLives) - 1).toString();
            ball.style.backgroundColor = getRandomColor();
            if (parseInt(numOfLives) <= 1) {
                ball.remove();
                numOfBalls -= 1;
                console.log(numOfBalls);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
});
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
