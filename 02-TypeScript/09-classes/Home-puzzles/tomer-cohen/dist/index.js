var Celeb = /** @class */ (function () {
    function Celeb(name, genre, tiktok, insta, numberFollowers) {
        this.name = name;
        this.genre = genre;
        this.tiktok = tiktok;
        this.insta = insta;
        this.numberFollowers = numberFollowers;
    }
    Celeb.prototype.setNumFollowers = function (number) {
        return (this.numberFollowers = number);
    };
    Celeb.prototype.getNumFollowers = function () {
        return this.numberFollowers;
    };
    return Celeb;
}());
var kendalljenner = new Celeb("kendall jenner", "model", "kendalljenner", "kendalljenner", 269000000);
var tomer = new Celeb("Tomer", "Male", "TomerTiktok", "tomerInsta", 1000000);
var messi = new Celeb("messi", "male", "leomessi", "leomessi", 460000000);
var r9 = new Celeb("ronaldo", "male", "r9", "r9", 11000000);
console.log(tomer);
console.dir(kendalljenner);
console.dir(messi);
console.dir(r9);
var sortby = [tomer, messi, kendalljenner, r9];
var lol = [tomer, kendalljenner, r9];
console.log(sortby[0].numberFollowers);
function sortfollowers(arry) {
    var mostfollowers = 0;
    var celebrty;
    for (var i = 0; i < arry.length; i++) {
        if (arry[i].numberFollowers > mostfollowers) {
            mostfollowers = arry[i].numberFollowers;
            celebrty = arry[i].name;
        }
    }
    return celebrty;
}
console.log(sortfollowers(sortby));
console.log(sortfollowers(lol));
