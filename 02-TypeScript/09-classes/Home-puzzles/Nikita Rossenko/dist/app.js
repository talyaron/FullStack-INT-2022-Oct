// 1)
var influancer = /** @class */ (function () {
    function influancer(name, genre, tiktokUsername, instagramUsername, followers) {
        this.name = name;
        this.genre = genre;
        this.tiktokUsername = tiktokUsername;
        this.instagramUsername = instagramUsername;
        this.followers = followers;
    }
    // 2)
    influancer.prototype.addFollowers = function (setfollowers) {
        this.followers = this.followers + setfollowers;
    };
    influancer.prototype.getFollowers = function () {
        return this.followers;
    };
    return influancer;
}());
var sideman = new influancer("Sideman", "Intertament", "Sideman", "Sideman", 17500000);
var recrent = new influancer("Recrent", "Gaming", "Recrent", "Recrent", 570000);
var dudeperfect = new influancer("Dude Perfect", "Intertament", "DudePerfect", "DudePerfect", 58500000);
recrent.addFollowers(10);
sideman.addFollowers(100);
dudeperfect.addFollowers(1000);
console.log(recrent.name + "'s TikTok username is " + recrent.tiktokUsername);
console.log(sideman.name + "'s TikTok username is " + sideman.tiktokUsername);
console.log(dudeperfect.name + "'s TikTok username is " + dudeperfect.tiktokUsername);
