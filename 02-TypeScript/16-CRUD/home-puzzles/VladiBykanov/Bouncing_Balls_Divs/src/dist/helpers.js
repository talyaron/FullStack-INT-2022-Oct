function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function isIntersect(point, circle) {
    return (Math.sqrt(Math.pow((point.x - circle.lastX), 2) + Math.pow((point.y - circle.lastY), 2)) <
        circle.radius);
}
function handleSecondClickOnCircle(index) {
    clapAudio.play();
    circleArray.splice(index, 1);
}
var randomDirection = function () {
    if (Math.random() > 0.5) {
        return 1;
    }
    else {
        return -1;
    }
};
