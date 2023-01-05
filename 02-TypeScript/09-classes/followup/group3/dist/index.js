var movie = /** @class */ (function () {
    function movie(name, price) {
        this.name = name;
        this.price = price;
    }
    movie.prototype.priceToNIS = function () {
        return this.price * 3.5;
    };
    return movie;
}());
var shrek = new movie('shrek', 10);
var ironMan = new movie('Iron Man', 7);
var tired = new movie('tired', 666);
console.log(shrek.priceToNIS());
console.log(ironMan.priceToNIS());
console.log(tired.priceToNIS());
