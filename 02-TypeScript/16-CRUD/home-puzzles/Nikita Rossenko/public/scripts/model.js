var Balls = /** @class */ (function () {
    function Balls() {
    }
    Balls.prototype.drawBalls = function (amount) {
        for (var i = 1; i < amount; i++) {
            ballsContainer === null || ballsContainer === void 0 ? void 0 : ballsContainer.insertAdjacentHTML('beforeend', "<button class=\"ball\" id=\"ball" + i + "\"></button>");
        }
    };
    return Balls;
}());
