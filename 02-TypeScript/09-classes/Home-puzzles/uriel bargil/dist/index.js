var Influencer = /** @class */ (function () {
    function Influencer(name, genre, tikTokAccount, instagramAccount, followers) {
        this.name = name;
        this.genre = genre;
        this.tikTokAccount = tikTokAccount;
        this.instagramAccount = instagramAccount;
        this.followers = followers;
    }
    return Influencer;
}());
var influencer1 = new Influencer('Influencer 1', 'Music', '@influencer1', '@influencer1', 1000000);
var influencer2 = new Influencer('Influencer 2', 'Fashion', '@influencer2', '@influencer2', 2000000);
console.log(influencer1.name);
console.log(influencer1.genre);
console.log(influencer1.tikTokAccount);
console.log(influencer1.instagramAccount);
console.log(influencer1.followers);
