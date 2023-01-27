var canvas = document.querySelector(".playground");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight - 10;
});
var Circle = /** @class */ (function () {
    function Circle(lastX, lastY, speedDirectionX, speedDirectionY, radius, color) {
        this.lastX = lastX;
        this.lastY = lastY;
        this.speedDirectionX = speedDirectionX;
        this.speedDirectionY = speedDirectionY;
        this.radius = radius;
        this.color = color;
        this.lastX = lastX;
        this.lastY = lastY;
        this.speedDirectionX = speedDirectionX;
        this.speedDirectionY = speedDirectionY;
        this.radius = radius;
        this.color = color;
        this.uid = Math.random() * 1000000;
        this.lineWidth = 0;
    }
    Circle.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.lastX, this.lastY, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "rgba(0, 0, 0, 0.236)";
        ctx.lineWidth = this.lineWidth;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        return this;
    };
    Circle.prototype.update = function () {
        if (this.lastX + this.radius > window.innerWidth ||
            this.lastX - this.radius < 0) {
            this.speedDirectionX = -this.speedDirectionX;
        }
        if (this.lastY + this.radius > window.innerHeight ||
            this.lastY - this.radius < 0) {
            this.speedDirectionY = -this.speedDirectionY;
        }
        this.lastX += this.speedDirectionX;
        this.lastY += this.speedDirectionY;
    };
    Circle.prototype.handleClick = function () {
        var _this = this;
        var newColor = "red";
        if (this.color != newColor) {
            this.color = newColor;
            return (this.lineWidth = 10);
        }
        var index = circleArray.findIndex(function (circle) { return circle.uid == _this.uid; });
        circleArray.splice(index, 1);
    };
    return Circle;
}());
var mouseLocation = { x: 0, y: 0 };
window.addEventListener("click", function (e) {
    var _a;
    _a = [e.x, e.y], mouseLocation.x = _a[0], mouseLocation.y = _a[1];
    circleArray.forEach(function (circle) {
        if (isIntersect(mouseLocation, circle)) {
            circle.handleClick();
            circle.speedDirectionX += 10;
            circle.speedDirectionY += 10;
        }
    });
});
function isIntersect(point, circle) {
    return (Math.sqrt(Math.pow((point.x - circle.lastX), 2) + Math.pow((point.y - circle.lastY), 2)) <
        circle.radius);
}
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
    circleArray.forEach(function (circle) {
        circle.draw().update();
    });
    requestAnimationFrame(animate);
}
generateCircles(10);
animate();
