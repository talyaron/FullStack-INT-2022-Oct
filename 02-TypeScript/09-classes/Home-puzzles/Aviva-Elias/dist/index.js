var Celeb = /** @class */ (function () {
    function Celeb(name, genre, instagramAccount, tiktokAccount, follower) {
        this.name = name;
        this.genre = genre;
        this.instagramAccount = instagramAccount;
        this.tiktokAccount = tiktokAccount;
        this.follower = follower;
    }
    Celeb.prototype.setFollower = function (number) {
        return this.follower = number;
    };
    Celeb.prototype.getFollwer = function () {
        return this.follower;
    };
    Celeb.prototype.whoHasAccount = function () {
        if (this.tiktokAccount !== "") {
            return this.tiktokAccount;
        }
        else {
            return "unknown";
        }
    };
    return Celeb;
}());
var messi = new Celeb("messi", "sport", "messi_num1", "messi_still-num1", 1000000);
var bibi = new Celeb("Benjamin Netanyahu ", "politics", "bibi_Still_rule", "bibi_123", 200000);
var rachel = new Celeb("rachel imenu", "holiness", "", "", 17000000);
console.log(messi.name + " have " + messi.getFollwer() + " followers");
var newFollower = messi.setFollower(3000000);
console.log(messi.name + " update is followers and now they are " + newFollower + " ");
console.log("Tiktok acount of " + messi.name + " is: " + messi.whoHasAccount());
console.log("Tiktok acount of " + rachel.name + " is: " + rachel.whoHasAccount());
var celebsArray = [messi, bibi, rachel];
function clebHightesFollowers() {
    for (var i = 0; i < celebsArray.length; i++) {
        if (celebsArray[0].follower > (celebsArray[1].follower) && celebsArray[0].follower > (celebsArray[2].follower)) {
            return celebsArray[0].name;
        }
        else if (celebsArray[1].follower > (celebsArray[2].follower) && (celebsArray[1].follower > celebsArray[0].follower)) {
            return celebsArray[1].name;
        }
        else {
            return celebsArray[2].name;
        }
    }
}
var result = clebHightesFollowers();
console.log(result + " have The hightes num of followers :" + celebsArray[2].follower);
