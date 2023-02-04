var Ball = /** @class */ (function () {
    function Ball(pos, velocity, radius) {
        this.pos = pos;
        this.velocity = velocity;
        this.radius = radius;
        this.pos = pos;
        this.velocity = velocity;
        this.radius = radius;
    }
    Ball.prototype.Update = function () {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
    };
    Ball.prototype.draw = function () {
        ctx.fillStyle = "#33ff00";
        ctx.strokeStyle = "#33ff00";
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    };
    return Ball;
}());
var Paddle = /** @class */ (function () {
    function Paddle(pos, velocity, width, height) {
        this.pos = pos;
        this.velocity = velocity;
        this.width = width;
        this.height = height;
        this.pos = pos;
        this.velocity = velocity;
        this.width = width;
        this.height = height;
    }
    Paddle.prototype.Update = function () {
        if (isDownKeyPressed) {
            this.pos.y -= this.velocity.y;
        }
        if (isUpKeyPressed) {
            this.pos.y += this.velocity.y;
        }
    };
    Paddle.prototype.draw = function () {
        ctx.fillStyle = "#ggff00";
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    };
    return Paddle;
}());
var ball = new Ball({ x: 200, y: 200 }, { x: 5, y: 5 }, 20);
var paddle1 = new Paddle({ x: 0, y: 50 }, { x: 0, y: 10 }, 20, 160);
var paddle2 = new Paddle({ x: canvas.width - 20, y: 80 }, { x: 0, y: 10 }, 20, 160);
var isUpKeyPressed = false;
var isDownKeyPressed = false;
window.addEventListener("keydown", function (e) {
    if (e.keyCode === 38) {
        isUpKeyPressed = true;
        isDownKeyPressed = false;
    }
    else if (e.keyCode === 40) {
        isUpKeyPressed = false;
        isDownKeyPressed = true;
    }
});
window.addEventListener("keyup", function (e) {
    if (e.keyCode === 38) {
        isUpKeyPressed = false;
    }
    else if (e.keyCode === 40) {
        isDownKeyPressed = false;
    }
});
