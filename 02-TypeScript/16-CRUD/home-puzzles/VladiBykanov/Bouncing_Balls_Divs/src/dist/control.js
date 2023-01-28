function animate() {
    wrapper.replaceChildren();
    circleArray.forEach(function (circle) {
        circle.draw().update();
    });
    requestAnimationFrame(animate);
}
function generateCircles(amount, locX, locY, arr) {
    for (var i = 0; i < amount; i++) {
        var radius = Math.random() * 50 + 20;
        var locationX = locX;
        var locationY = locY;
        var speedDirectionX = Math.random() * 5 * randomDirection();
        var speedDirectionY = Math.random() * 5 * randomDirection();
        var color = randomColor();
        arr.push(new Circle(locationX, locationY, speedDirectionX, speedDirectionY, radius, color));
    }
}
