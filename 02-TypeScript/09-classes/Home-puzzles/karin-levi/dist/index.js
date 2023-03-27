var celeb = /** @class */ (function () {
    function celeb(name, gender, tikTokAccount, instagramAccount, numberOfFollowers) {
        this.name = name;
        this.gender = gender;
        this.tikTokAccount = tikTokAccount;
        this.instagramAccount = instagramAccount;
        this.numberOfFollowers = numberOfFollowers;
    }
    celeb.prototype.setFollowers = function (numberOfFollowers) {
        this.numberOfFollowers = numberOfFollowers;
    };
    celeb.prototype.getFollowers = function () {
        return this.numberOfFollowers;
    };
    celeb.prototype.getName = function () {
        return this.name;
    };
    return celeb;
}());
var karin = new celeb("karin", "female", "karinLevi.tiktok", "karinLevi@instagram", 123666);
var nir = new celeb("nir", "male", "nirLevi.tiktok", "nirLevi@instagram", 137866);
var romi = new celeb("romi", "female", "romiLevi.tiktok", "romiLevi@instagram", 3666);
var or = new celeb("or", "male", "orLevi.tiktok", "orLevi@instagram", 47566);
var celebs = [karin, nir, romi, or];
function mostFollowers(celebs) {
    var celebWithMostFollowers = 0;
    var mostFollowers = 0;
    for (var i = 0; i < celebs.length; i++) {
        if (celebs[i].getFollowers() > mostFollowers) {
            mostFollowers = celebs[i].getFollowers();
            celebWithMostFollowers = i;
        }
    }
    return celebs[celebWithMostFollowers].getName();
}
function sortByFollowers(celebs) {
    var a = celebs.sort(function (a, b) { return b.getFollowers() - a.getFollowers(); });
    //console.log(a)
    return a;
}
console.log("Here are all the celebrities: ", celebs);
console.log("The celebrity with the most followers is " + mostFollowers(celebs));
console.log("The celebrities sorted by the number of followers:", sortByFollowers(celebs));
