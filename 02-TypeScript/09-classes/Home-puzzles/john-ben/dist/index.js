var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Celebs = /** @class */ (function () {
    function Celebs(name, genre, account_tiktok, account_instagram, followers) {
        this.name = name;
        this.genre = genre;
        this.account_tiktok = account_tiktok;
        this.account_instagram = account_instagram;
        this.followers = followers;
    }
    Celebs.prototype.setFollowers = function (num) {
        this.followers = num;
    };
    Celebs.prototype.getFollowers = function () {
        return this.followers;
    };
    return Celebs;
}());
var messi = new Celebs("Messi", "male", "leo10", "leomessi", 248000000);
var neymar = new Celebs("Neymar", "male", "ney_jr", "neymarjr", 168000000);
var ronaldo = new Celebs("Ronaldo", "male", "cr7", "cristiano", 368000000);
console.log(neymar);
console.log(neymar.followers);
neymar.setFollowers(10);
console.log(neymar.followers);
var CelebsList = [neymar, messi, ronaldo];
function rateCelebs() {
    return __spreadArrays(CelebsList).sort(function (a, b) { return b.followers - a.followers; });
}
console.log(CelebsList);
console.log(rateCelebs());
