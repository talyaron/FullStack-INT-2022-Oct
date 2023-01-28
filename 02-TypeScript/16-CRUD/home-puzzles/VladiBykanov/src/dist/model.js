var circleArray = [];
var mouseLocation = { x: 0, y: 0 };
var Circle = /** @class */ (function () {
    // private lineWidth: number;
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
        // this.lineWidth = 0;
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
        var index = circleArray.findIndex(function (circle) { return circle.uid == _this.uid; });
        if (this.color != newColor) {
            score++;
            liveScore.textContent = score.toString();
            tinkAudio.currentTime = 0;
            tinkAudio.play();
            return (this.color = newColor);
        }
        handleSecondClickOnCircle(index);
    };
    return Circle;
}());
