/*
1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.

2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
   Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.

3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers.

4. Create a class for dates. the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past from that date"
*/
var Celebs = /** @class */ (function () {
    function Celebs(name, genre, accountInTiktok, accountInInstagram, numberOfFollower) {
        name = this.name;
        genre = this.genre;
        accountInTiktok = this.accountInTiktok;
        accountInInstagram = this.accountInInstagram;
        numberOfFollower = this.numberOfFollower;
    }
    Celebs.prototype.setNumOfFollowers = function () {
        var numberOfFollower = null;
        while (!numberOfFollower || !isNaN(numberOfFollower)) {
            prompt("enter the number of follower of this celeb:");
        }
        this.numberOfFollower = parseInt(numberOfFollower);
        console.log(this.numberOfFollower);
        return this.numberOfFollower;
    };
    Celebs.prototype.getNumOfFollowers = function () {
        return this.numberOfFollower;
    };
    return Celebs;
}());
var shlomiShabat = new Celebs("hlomi Shabat", "singer", "shlomi123", "shlomi123", 200);
shlomiShabat.setNumOfFollowers();
