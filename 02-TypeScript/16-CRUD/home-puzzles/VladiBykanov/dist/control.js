function generateCircles(amount) {
    for (var i = 0; i < amount; i++) {
        var radius = Math.random() * 50 + 20;
        var locationX = Math.random() * (window.innerWidth - radius * 2) + radius;
        var locationY = Math.random() * (window.innerHeight - radius * 2) + radius;
        var speedDirectionX = Math.random() * 1;
        var speedDirectionY = Math.random() * 1;
        var color = randomColor();
        circleArray.push(new Circle(locationX, locationY, speedDirectionX, speedDirectionY, radius, color));
    }
}
function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    checkForWin();
    circleArray.forEach(function (circle) {
        circle.draw().update();
    });
    requestAnimationFrame(animate);
}
function newGame() {
    time = 10;
    startTimer = setInterval(function () {
        time--;
        seconds.textContent = time.toString();
    }, 1000);
    var amountOfCircles = prompt("How many circles you want to generate?");
    if (!amountOfCircles || /[a-zA-Z]/.test(amountOfCircles))
        return newGame();
    generateCircles(parseInt(amountOfCircles));
}
