// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram,
//  and the number of followers.
// 2. based on question number one, create a method to set the number of followers and another method to get the
// number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
var influencers = /** @class */ (function () {
    function influencers(name, genre, tiktokAccount, igAccount, followersNum) {
        this.name = name;
        this.genre = genre;
        this.tiktokAccount = tiktokAccount;
        this.igAccount = igAccount;
        this.followersNum = followersNum;
    }
    influencers.prototype.setFollowersNum = function (followers) {
        this.followersNum = followers;
    };
    influencers.prototype.getFollowersNum = function () {
        return this.followersNum;
    };
    return influencers;
}());
var noaKirel = new influencers('noa kirel', 'songer', 'noa_kirel', 'noa.kirel10', 2000000);
var chrisB = new influencers('chris brown', 'songer', 'chrisB', 'chris.brown', 10000000);
var bibi = new influencers('benjamin netanyahu', 'prime minister', 'bibi10', 'bibi', 400000);
// noaKirel.setFollowersNum(20)
// console.log(noaKirel.getFollowersNum());
// 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs,
// ordered by their number of followers.
var celebs = [noaKirel, chrisB, bibi];
var mostFollowers = celebs.sort(function (a, b) { return a.followersNum - b.followersNum; });
console.log(mostFollowers);
console.log(mostFollowers[celebs.length - 1].name + " has the most followers on tiktok ,they have " + mostFollowers[celebs.length - 1].followersNum);
// 4. Create a class for dates. the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss"
// for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past
//  from that date"
