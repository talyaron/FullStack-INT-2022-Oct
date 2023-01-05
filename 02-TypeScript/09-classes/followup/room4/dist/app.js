var Video = /** @class */ (function () {
    function Video(name, price, yearOfRelease) {
        if (yearOfRelease === void 0) { yearOfRelease = 2000; }
        this.name = name;
        this.price = price;
        this.yearOfRelease = yearOfRelease;
    }
    Video.prototype.priceNis = function () {
        return this.price * 3.5;
    };
    Video.prototype.age = function () {
        return new Date().getFullYear() - this.yearOfRelease;
    };
    return Video;
}());
var jamesBond = new Video("james", 5.8, 1985);
var lordOfTheRings = new Video("lord of the rings", 3.5, 2005);
var matrix = new Video("matrix", 6.2, 2021);
console.log(jamesBond.age());
console.log(lordOfTheRings.age());
console.log(matrix.age());
