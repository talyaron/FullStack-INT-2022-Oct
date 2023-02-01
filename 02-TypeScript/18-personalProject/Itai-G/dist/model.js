var GameState = /** @class */ (function () {
    function GameState(canvas) {
        if (canvas) {
            this.x = canvas.width / 2;
            this.y = canvas.height - 30;
            this.dx = 2;
            this.dy = -2;
            this.paddleHeight = 10;
            this.paddleWidth = 75;
            this.paddleX = (canvas.width - this.paddleWidth) / 2;
        }
    }
    return GameState;
}());
var GameDisplay = /** @class */ (function () {
    function GameDisplay(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.paddleWidth = 75;
    }
    GameDisplay.prototype.clear = function () {
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };
    GameDisplay.prototype.drawBall = function (x, y, ballRadius) {
        if (this.ctx) {
            this.ctx.beginPath();
            this.ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = "#0095DD";
            this.ctx.fill();
            this.ctx.closePath();
        }
    };
    GameDisplay.prototype.drawPaddle = function (x, y, paddleWidth, paddleHeight) {
        if (this.ctx) {
            this.ctx.beginPath();
            this.ctx.rect(x, y, paddleWidth, paddleHeight);
            this.ctx.fillStyle = "#0095DD";
            this.ctx.fill();
            this.ctx.closePath();
        }
    };
    return GameDisplay;
}());
var GameEngine = /** @class */ (function () {
    function GameEngine(display) {
        this.display = display;
        this.ballX = 50;
        this.ballY = 50;
        this.ballRadius = 10;
        this.xSpeed = 1;
        this.ySpeed = 1;
    }
    GameEngine.prototype.run = function () {
        this.display.clear();
        this.display.drawPaddle(this.leftPaddle, 'left', this.paddleWidth, this.paddleHeight);
        this.display.drawPaddle(this.rightPaddle, 'right', this.paddleWidth, this.paddleHeight);
        this.display.drawBall(this.ballX, this.ballY, this.ballRadius);
        this.updateBallPosition();
        requestAnimationFrame(this.run.bind(this));
    };
    GameEngine.prototype.updateBallPosition = function () {
        this.ballX += this.xSpeed;
        this.ballY += this.ySpeed;
    };
    return GameEngine;
}());
