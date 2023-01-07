var celeb = /** @class */ (function () {
    function celeb(name, genre, tiktokAccount, instagramAccount, follower) {
        this.name = name;
        this.genre = genre;
        this.tiktokAccount = tiktokAccount;
        this.instagramAccount = instagramAccount;
        this.follower = follower;
    }
    celeb.prototype.setTiktokFollowerCount = function (num) {
        this.follower = num;
    };
    celeb.prototype.getTiktokFollowerCount = function () {
        return this.follower;
    };
    celeb.prototype.setinstagramFollowerCount = function (num) {
        return this.follower = num;
    };
    ;
    celeb.prototype.getinstagramFollowerCount = function () {
        return this.follower;
    };
    celeb.prototype.tostring = function () {
        return this.name + " have " + this.follower + " on tiktok ";
    };
    return celeb;
}());
var bradPitt = new celeb("Brad Pitt", "actor", "none", 'none', 0);
var janeDoe = new celeb("jane doe", "singer", "jane_dow123", 'janie', 10005);
var personMini = new celeb("person mini", "author", "miniperson", 'none', 41000);
var celebs = [bradPitt, janeDoe, personMini];
function addedConsole(celebs) {
    for (var x in celebs) {
        console.log(celebs[x].tostring());
    }
}
addedConsole(celebs);
var mostFollowers = celebs.sort(function (a, b) { return a.follower - b.follower; })[celebs.length - 1];
console.log(mostFollowers.name + " has the most followers on tiktok ,they have " + mostFollowers.follower);
