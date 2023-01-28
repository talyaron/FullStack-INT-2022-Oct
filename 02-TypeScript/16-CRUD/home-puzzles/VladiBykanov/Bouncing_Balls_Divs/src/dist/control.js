function animate() {
    wrapper.replaceChildren();
    circleArray.forEach(function (circle) {
        circle.draw().update();
    });
    requestAnimationFrame(animate);
}
function generateCircles(amount) {
    for (var i = 0; i < amount; i++) {
        var radius = Math.random() * 50 + 20;
        var locationX = Math.random() * (window.innerWidth - radius * 2) + radius;
        var locationY = Math.random() * (window.innerHeight - radius * 2) + radius;
        var speedDirectionX = Math.random() * 5;
        var speedDirectionY = Math.random() * 5;
        var color = randomColor();
        circleArray.push(new Circle(locationX, locationY, speedDirectionX, speedDirectionY, radius, color));
    }
}
