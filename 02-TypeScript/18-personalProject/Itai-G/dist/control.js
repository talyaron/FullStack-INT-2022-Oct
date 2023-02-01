var lastTime = 0;
function gameUpdate(time) {
    var timeMargin = time - lastTime;
    lastTime = time;
    window.requestAnimationFrame(gameUpdate);
    console.log(timeMargin);
}
// gameUpdate(1600)
