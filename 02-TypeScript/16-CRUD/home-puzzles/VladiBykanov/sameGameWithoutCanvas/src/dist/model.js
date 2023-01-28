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
        var newBall = document.createElement("div");
        newBall.classList.add("ball");
        newBall.style.left = this.lastX + "px";
        newBall.style.top = this.lastY + "px";
        newBall.style.width = this.radius + "px";
        newBall.style.backgroundColor = "" + this.color;
        wrapper.append(newBall);
        return this;
    };
    Circle.prototype.update = function () {
        if (this.lastX + this.radius > window.innerWidth || this.lastX < 0) {
            this.speedDirectionX = -this.speedDirectionX;
        }
        if (this.lastY + this.radius > window.innerHeight || this.lastY < 0) {
            this.speedDirectionY = -this.speedDirectionY;
        }
        this.lastX += this.speedDirectionX;
        this.lastY += this.speedDirectionY;
    };
    return Circle;
}());
