// task 1
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
    // task 2
    Celebs.prototype.setFollowers = function (followers) {
        this.followers = followers;
    };
    Celebs.prototype.getFollowers = function () {
        return this.followers;
    };
    return Celebs;
}());
var yodaLevi = new Celebs("Yoda Levi", 43, true, false, 150000, 0, 148);
var fiftiCent = new Celebs("50cent", 47, true, true, 1500000, 3000000, 100);
var barrefaeli = new Celebs("Bar Refaeli", 33, true, true, 2500000, 15000000, 1875);
var bibi = new Celebs("Bibi netanyaho", 74, true, true, 35000000, 12000000, 12000);
var persons = [yodaLevi, fiftiCent, barrefaeli, bibi];
console.log(yodaLevi);
console.log(fiftiCent);
// console.log(`we add new ${yodaLevi.followers} follwers to ${yodaLevi.name}`);
yodaLevi.followers = 100 + 500;
console.log(yodaLevi.followers);
"--";
// task 3
persons.sort(function (a, b) { return b.followers - a.followers; });
console.log(persons);
