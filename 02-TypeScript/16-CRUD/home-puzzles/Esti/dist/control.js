var balloonCanvas = document.getElementById("balloon");
var mainDiv = document.getElementById("main");
var sorce = document.getElementById("sorce");
var btn = document.getElementById("btn");
var ctx = balloonCanvas.getContext('2d');
var widthScreen = window.innerWidth;
var heightScreen = window.innerHeight;
var hue = 0;
var indexCatch = true;
var pos = 0;
var posR = 0;
var builtDivTrue = false;
var live = 0;
var indexBalloon = 0;
var moveImg = null;
var playImg = null;
var balloonPlay = null;
var start = false;
var timeOut = null;
// const audioElement = new Audio("/public/lib/song.mp3");
// גודל מסך
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
mainDiv.addEventListener("click", function () {
    if (indexCatch) {
        console.log(hue + " 1");
        hue += 200;
        builtDiv();
        indexCatch = false;
    }
    else {
        console.log(hue + " 2");
        indexCatch = true;
        mainDiv.hidden = true;
        indexBalloon++;
        sorceB();
    }
});
function startGame() {
    cleanScreen();
    clearInterval(balloonPlay);
    balloonPlay = setInterval(ballonPlay, 3000);
}
function builtDiv() {
    var balloon1 = new Balloon(30, 30, 30, "hsl(" + hue + ",100%, 50%)");
    balloon1.draw(0);
    indexCatch = true;
}
// balloon pop
function ballonPlay() {
    mainDiv.hidden = false;
    hue = Math.floor(Math.random() * 1000);
    builtDiv();
    var posB = windowHeight * -1 + 150;
    var posR = (Math.random() * windowWidth);
    clearInterval(moveImg);
    moveImg = setInterval(moveBalloon, 10);
    function moveBalloon() {
        var balloonMove = document.getElementById("main");
        if (posB == 1000) {
            clearInterval(moveImg);
        }
        else {
            posB++;
            balloonMove.style.bottom = posB + "px";
            if (posR < windowWidth / 2) {
                posR++;
            }
            else {
                posR--;
            }
            balloonMove.style.left = posR + "px";
        }
    }
}
function cleanScreen() {
    pos = 0;
    posR = 0;
    builtDivTrue = false;
    live = 0;
    moveImg = null;
    playImg = null;
    balloonPlay = null;
    indexCatch = true;
}
function sorceB() {
    sorce.innerHTML = indexBalloon.toString();
}
btn.addEventListener("click", function () {
    console.log("DDD");
    clearInterval(moveImg);
    clearInterval(balloonPlay);
});
