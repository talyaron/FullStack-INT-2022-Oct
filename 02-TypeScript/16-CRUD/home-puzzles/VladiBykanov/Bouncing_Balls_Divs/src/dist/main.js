window.addEventListener("click", function (e) {
    var _a;
    _a = [e.x, e.y], mouseLocation.x = _a[0], mouseLocation.y = _a[1];
    circleArray.forEach(function (circle) {
        if (isIntersect(mouseLocation, circle)) {
            circle.handleClick();
            circle.speedDirectionX = 8;
            circle.speedDirectionY = 8;
        }
    });
});
generateCircles(10, midScreenX, midScreenY, circleArray, false);
animate();
