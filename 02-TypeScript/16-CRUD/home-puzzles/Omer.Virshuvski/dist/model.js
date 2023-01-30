var id = 1;
var Movie = /** @class */ (function () {
    function Movie(name, date, category) {
        this.name = name;
        this.date = date;
        this.category = category;
        this.id = id;
        id++;
    }
    Movie.prototype.getName = function () {
        return this.name;
    };
    Movie.prototype.getCategory = function () {
        return this.category;
    };
    Movie.prototype.getDate = function () {
        return this.date;
    };
    Movie.prototype.getId = function () {
        return this.id;
    };
    Movie.prototype.setName = function (name) {
        this.name = name;
    };
    Movie.prototype.setCategory = function (category) {
        this.category = category;
    };
    Movie.prototype.setDate = function (date) {
        this.date = date;
    };
    return Movie;
}());
