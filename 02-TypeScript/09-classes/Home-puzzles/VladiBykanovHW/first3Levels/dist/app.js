var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var celebrityList = [];
var Celebrity = /** @class */ (function () {
    function Celebrity(name, ganre, tiktok, instagram, followersAmount) {
        if (followersAmount === void 0) { followersAmount = 0; }
        this.name = name;
        this.ganre = ganre;
        this.tiktok = tiktok;
        this.instagram = instagram;
        this.followersAmount = followersAmount;
    }
    Object.defineProperty(Celebrity.prototype, "NumberOffFollowers", {
        get: function () {
            return this.followersAmount;
        },
        set: function (num) {
            this.followersAmount = num;
        },
        enumerable: false,
        configurable: true
    });
    return Celebrity;
}());
var eminem = new Celebrity("Marshall Mathers", "Male", true, true);
var cristianoJr = new Celebrity("Cristiano Ronaldo", "Male", false, true);
var rihanna = new Celebrity("Rihanna", "Female", true, true);
var jenniferAni = new Celebrity("Jennifer Aniston", "Female", false, true);
var ryanRynolds = new Celebrity("Ryan Reynolds", "Male", true, true);
eminem.NumberOffFollowers = 4200000 + 37700000;
cristianoJr.NumberOffFollowers = 529000000;
rihanna.NumberOffFollowers = 6900000 + 139000000;
jenniferAni.NumberOffFollowers = 41100000;
ryanRynolds.NumberOffFollowers = 4720000 + 21100000;
var addCelebsToList = function (celeb) { return celebrityList.push(celeb); };
addCelebsToList(eminem);
addCelebsToList(cristianoJr);
addCelebsToList(rihanna);
addCelebsToList(jenniferAni);
addCelebsToList(ryanRynolds);
//sort celebrities from most followers to least followers
function rateCelebs() {
    return __spreadArrays(celebrityList).sort(function (a, b) { return b.followersAmount - a.followersAmount; });
}
console.log(celebrityList); //original list
console.log(rateCelebs()); //sorted list
console.log(celebrityList); //original list
