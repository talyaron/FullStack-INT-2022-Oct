var Celebs = /** @class */ (function () {
    function Celebs(name, genre, nameTikTok, nameInstagram, numOfFollowers) {
        name = this.name;
        genre = this.genre;
        nameTikTok = this.nameTikTok;
        nameInstagram = this.nameInstegram;
        numOfFollowers = this.numOfFollowers;
    }
    Celebs.prototype.setFollowers = function (followers) {
        this.numOfFollowers = followers;
    };
    Celebs.prototype.getFollowers = function () {
        return this.numOfFollowers;
    };
    return Celebs;
}());
var kendalljenner = new Celebs("kendall jenner", "model", "kendalljenner", "kendalljenner", 269);
var tomer = new Celebs("tomer", "tomer", "tpmer", "tomer", 421);
console.dir(kendalljenner);
console.log(tomer);
