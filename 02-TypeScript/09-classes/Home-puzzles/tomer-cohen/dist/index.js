var Celebs = /** @class */ (function () {
    function Celebs(name, genre, nameTikTok, nameInstagram, numOfFollowers) {
        name = this.name;
        genre = this.genre;
        nameTikTok = this.nameTikTok;
        nameInstagram = this.nameInstegram;
        numOfFollowers = this.numOfFollowers;
    }
    Celebs.prototype.setNumOfFollowrs = function () {
        var numberOfFollower = null;
        while (!numberOfFollower || !isNaN(numberOfFollower)) {
            prompt("enter the number of the followers");
        }
        this.numOfFollowers = parseInt(numberOfFollower);
        console.log(numberOfFollower);
        return this.numOfFollowers;
    };
    Celebs.prototype.getNumOfFollowrs = function () {
        return this.numOfFollowers;
    };
    return Celebs;
}());
var kendalljenner = new Celebs("kendall jenner", "model", "kendalljenner", "kendalljenner", 269);
kendalljenner.setNumOfFollowrs();
var messi = new Celebs("messi", "football", "leomessi", "leomessi", 416);
messi.setNumOfFollowrs();
