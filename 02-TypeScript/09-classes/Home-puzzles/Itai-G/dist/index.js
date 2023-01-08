// task 1-2
var Celebs = /** @class */ (function () {
    function Celebs(name, age, instagram, tiktok, followersIsntagram, followersTiktok, followers) {
        this.name = name;
        this.age = age;
        this.instagram = instagram;
        this.tiktok = tiktok;
        this.followersIsntagram = followersIsntagram;
        this.followersTiktok = followersTiktok;
        this.followers = followers;
    }
    Celebs.prototype.setFollowers = function (followers) {
        this.followers = followers;
    };
    Celebs.prototype.getFollowers = function () {
        return this.followers;
    };
    return Celebs;
}());
var yodaLevi = new Celebs("Yoda Levi", 43, true, false, 150000, 0, 234);
var fiftiCent = new Celebs("50cent", 47, true, true, 1500000, 3000000, 2346);
console.log(yodaLevi);
console.log(fiftiCent);
