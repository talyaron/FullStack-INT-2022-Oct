function generateBalloon() {
    try {
        var balloon = document.createElement("div");
        balloon.classList.add("balloon");
        xPos = Math.random() * (gameWidth - 50);
        yPos = Math.random() * (gameHeight - 80);
        balloon.style.left = xPos + "px";
        balloon.style.top = yPos + "px";
        balloon.addEventListener("click", pop);
        document.querySelector("#game").appendChild(balloon);
        balloons.push(balloon);
    }
    catch (error) {
    }
}
function pop() {
    try {
        this.style.display = "none";
        score++;
        document.querySelector("#score").innerHTML = score;
        var index = balloons.indexOf(this);
        balloons.splice(index, 1);
    }
    catch (error) {
        console.error(error);
    }
}
for (var i = 0; i < 20; i++) {
    generateBalloon();
}
function moveBalloons() {
    try {
        for (var i = 0; i < balloons.length; i++) {
            var balloon = balloons[i];
            var xPos = parseInt(balloon.style.left);
            var yPos = parseInt(balloon.style.top);
            if (xPos + 50 >= gameWidth || xPos <= 0) {
                balloon.xVel = -balloon.xVel;
            }
            if (yPos + 80 >= gameHeight || yPos <= 0) {
                balloon.yVel = -balloon.yVel;
            }
            xPos += xVel;
            yPos += yVel;
            balloon.style.left = xPos + "px";
            balloon.style.top = yPos + "px";
        }
    }
    catch (error) {
        console.error(error);
    }
}
