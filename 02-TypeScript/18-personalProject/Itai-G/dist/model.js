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
        if (keysPressed[keyUp]) {
            this.pos.y -= this.velocity.y;
        }
        if (keysPressed[keyDown]) {
            this.pos.y += this.velocity.y;
        }
    };
    Paddle.prototype.draw = function () {
        ctx.fillStyle = "#ggff00";
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    };
    return Paddle;
}());
var ball = new Ball(vec2(200, 200), vec2(5, 5), 20);
var paddle1 = new Paddle(vec2(0, 50), vec2(0, 0), 20, 160);
var paddle2 = new Paddle(vec2(canvas.width - 20, 80), vec2(0, 0), 20, 160);
var keysPressed = [];
var keyUp = 38;
var keyDown = 40;
window.addEventListener("keyup", function (e) {
    keysPressed[e.key] = false;
});
window.addEventListener("keydown", function (e) {
    keysPressed[e.key] = true;
});
