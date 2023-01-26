var canvas = document.querySelector(".bubbleContainer");
var ctx = canvas.getContext("2d");
// console.log(ctx);
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight - 10;
});
// canvas.addEventListener('mousemove', (e) => console.log(e.offsetX, e.offsetY));
var Circle = /** @class */ (function () {
    function Circle(lastX, lastY, direcXSpeed, directYSpeed, radius, color) {
        this.lastX = lastX;
        this.lastY = lastY;
        this.direcXSpeed = direcXSpeed;
        this.directYSpeed = directYSpeed;
        this.radius = radius;
        this.color = color;
        this.lastX = lastX;
        this.lastY = lastY;
        this.direcXSpeed = direcXSpeed;
        this.directYSpeed = directYSpeed;
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.lastX, this.lastY, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        return this;
    };
    Circle.prototype.update = function () {
        if (this.lastX + this.radius > window.innerWidth ||
            this.lastX - this.radius < 0) {
            this.direcXSpeed = -this.direcXSpeed;
        }
        if (this.lastY + this.radius > window.innerHeight ||
            this.lastX - this.radius < 0) {
            this.directYSpeed = -this.directYSpeed;
        }
        this.lastX += this.direcXSpeed;
        this.lastY += this.directYSpeed;
    };
    Circle.prototype.reverse = function () {
        if (this.direcXSpeed > 0 || this.direcXSpeed < 0) {
            this.direcXSpeed *= -1;
        }
        if (this.directYSpeed > 0 || this.directYSpeed < 0) {
            this.directYSpeed *= -1;
        }
        return this;
    };
    Circle.prototype.zoom = function () {
        this.radius += 5;
    };
    return Circle;
}());
function getDistance(x1, x2, y1, y2) {
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
}
var c2 = new Circle(canvas.width - 40, canvas.height / 2, 2, 0, 40, "black");
var c1 = new Circle(40, canvas.height / 2, 2, 0, 40, "black");
var mouse = {
    x: 0,
    y: 0
};
window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});
function mouseOverObj(x, y, radius) {
    return (mouse.x - x > 0 &&
        mouse.x - x < radius &&
        mouse.y - y > 0 &&
        mouse.y - y < radius);
}
var circleArray = [];
var colors = ["blue", "red", "black", "deeppink", "orange", "pink"];
function generateCircles(amount) {
    for (var i = 0; i < amount; i++) {
        var radius = Math.random() * 50 + 1;
        var locationX = Math.random() * (window.innerWidth - radius * 2) + radius;
        var locationY = Math.random() * (window.innerHeight - radius * 2) + radius;
        var direcXSpeed = Math.random() * 20;
        var directYSpeed = Math.random() * 20;
        var color = colors[Math.floor(Math.random() * colors.length)];
        circleArray.push(new Circle(locationX, locationY, direcXSpeed, directYSpeed, radius, color));
    }
}
function animate() {
    var myReq = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    circleArray.forEach(function (circle) {
        circle.draw().update();
        if (getDistance(circle.lastX, c2.lastX, circle.lastY, c2.lastY) <
            c1.radius + c2.radius) {
            c1.reverse().update();
            c2.reverse().update();
        }
    });
    if (mouseOverObj(c1.lastX, c1.lastY, c1.radius)) {
        c1.zoom();
    }
    if (mouseOverObj(c2.lastX, c2.lastY, c2.radius)) {
        c2.zoom();
    }
}
generateCircles(5);
animate();
