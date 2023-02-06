var balloonC = [];
var BalloonCalss = /** @class */ (function () {
    function BalloonCalss() {
        this.balloonC = new (BalloonCalss);
        this.x = Math.random() * balloonCanvas.width;
        this.y = Math.random() * balloonCanvas.height;
        this.radius = Math.floor(Math.random() * 30 + 25);
        this.color = "hsl(" + Math.floor(Math.random() * 1000) + ",100%, 50%)";
    }
    return BalloonCalss;
}());
