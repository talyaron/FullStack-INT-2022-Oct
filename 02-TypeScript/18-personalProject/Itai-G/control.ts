let lastTime = 0;
function gameUpdate(time){
    const timeMargin = time - lastTime
    lastTime = time
    window.requestAnimationFrame(gameUpdate);
    console.log(timeMargin)
}

// gameUpdate(1600)