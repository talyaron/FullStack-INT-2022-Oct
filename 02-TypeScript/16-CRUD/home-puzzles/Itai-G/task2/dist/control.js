var score = 0;
var xPos;
var yPos;
var gameWidth = document.querySelector("#game").clientWidth;
var gameHeight = document.querySelector("#game").clientHeight;
function generateBalloon() {
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
function pop() {
    this.style.display = "none";
    score++;
    document.querySelector("#score").innerHTML = score;
    var index = balloons.indexOf(this);
    balloons.splice(index, 1);
}
for (var i = 0; i < 20; i++) {
    generateBalloon();
}
function moveBalloons() {
    for (var i = 0; i < balloons.length; i++) {
        var balloon = balloons[i];
        var xPos_1 = parseInt(balloon.style.left);
        var yPos_1 = parseInt(balloon.style.top);
        if (xPos_1 + 50 >= gameWidth || xPos_1 <= 0) {
            balloon.xVel = -balloon.xVel;
        }
        if (yPos_1 + 80 >= gameHeight || yPos_1 <= 0) {
            balloon.yVel = -balloon.yVel;
        }
        xPos_1 += xVel;
        yPos_1 += yVel;
        balloon.style.left = xPos_1 + "px";
        balloon.style.top = yPos_1 + "px";
    }
}
setInterval(generateBalloon, 2000);
setInterval(moveBalloons, 50);
