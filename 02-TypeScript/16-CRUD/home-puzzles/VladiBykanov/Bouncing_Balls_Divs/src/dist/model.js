var circleArray = [];
var explosionArr = [];
var mouseLocation = { x: 0, y: 0 };
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
        this.boxShadow = "0 0 10px white";
    }
    Circle.prototype.draw = function () {
        var newBall = document.createElement("div");
        newBall.classList.add("ball");
        newBall.style.left = this.lastX + "px";
        newBall.style.top = this.lastY + "px";
        newBall.style.width = this.radius + "px";
        newBall.style.background = "" + this.color;
        newBall.style.boxShadow = "" + this.boxShadow;
        wrapper.append(newBall);
        return this;
    };
    Circle.prototype.update = function () {
        if (this.lastX + this.radius > wrapper.offsetWidth || this.lastX < 0) {
            this.speedDirectionX = -this.speedDirectionX;
        }
        if (this.lastY + this.radius > wrapper.offsetHeight || this.lastY < 0) {
            this.speedDirectionY = -this.speedDirectionY;
        }
        this.lastX += this.speedDirectionX;
        this.lastY += this.speedDirectionY;
    };
    Circle.prototype.handleClick = function () {
        var _this = this;
        var newColor = "radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(255, 0, 0, 1) 52%)";
        var index = circleArray.findIndex(function (circle) { return circle.uid == _this.uid; });
        if (this.color != newColor) {
            tinkAudio.play();
            this.boxShadow = "0 0 30px black";
            return (this.color = newColor);
        }
        handleSecondClickOnCircle(index);
        generateCircles(50, this.lastX, this.lastY, explosionArr, true);
        setTimeout(function () { return explosionArr.splice(0); }, 500);
    };
    return Circle;
}());
