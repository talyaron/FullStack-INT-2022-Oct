var Celeb = /** @class */ (function () {
    function Celeb(name, genre, tiktok, insta, numberFollowers) {
        this.name = name;
        this.genre = genre;
        this.tiktok = tiktok;
        this.insta = insta;
        this.numberFollowers = numberFollowers;
    }
    Celeb.prototype.setNumFollowers = function (number) {
        return this.numberFollowers = number;
    };
    Celeb.prototype.getNumFollowers = function () {
        return this.numberFollowers;
    };
    return Celeb;
}());
var kendalljenner = new Celeb("kendall jenner", "model", "kendalljenner", "kendalljenner", 269);
var tomer = new Celeb('Tomer', 'Male', 'TomerTiktok', 'tomerInsta', 1000000);
console.dir(kendalljenner);
console.log(tomer);
