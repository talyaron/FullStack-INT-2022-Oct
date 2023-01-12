var Video = /** @class */ (function () {
    function Video(movieName, price) {
        this.movieName = movieName;
        this.price = price;
    }
    Video.prototype.toNIS = function () {
        return this.price * 3.45;
    };
    return Video;
}());
;
var Xman = new Video("Xman", 5);
var piterpan = new Video("piterpan", 6);
var ironman = new Video("ironman", 5);
console.log(Xman.toNIS());
console.log(piterpan.movieName);
