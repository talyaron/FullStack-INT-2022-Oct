var Balloons = /** @class */ (function () {
    function Balloons(color, img, exploded) {
        this.color = color;
        this.img = img;
        this.exploded = exploded;
    }
    return Balloons;
}());
var balloons = [];
var xPos;
var yPos;
var xVel = 1;
var yVel = 2;
