// task 1
var Celebs = /** @class */ (function () {
    function Celebs(name, age, instagram, tiktok, followersIsntagram, followersTiktok) {
        this.name = name;
        this.age = age;
        this.instagram = instagram;
        this.tiktok = tiktok;
        this.followersIsntagram = followersIsntagram;
        this.followersTiktok = followersTiktok;
    }
    return Celebs;
}());
var yodaLevi = new Celebs("Yoda Levi", 43, true, false, 150000, 0);
var fiftiCent = new Celebs("50cent", 47, true, true, 1500000, 3000000);
console.log(yodaLevi);
console.log(fiftiCent);
// task 2
