var Balloons = /** @class */ (function () {
    function Balloons(color, img, exploded) {
        this.color = color;
        this.img = img;
        this.exploded = exploded;
    }
    return Balloons;
}());
var balloons = [];
var xVel = 1;
var yVel = 2;
var score = 0;
var xPos;
var yPos;
