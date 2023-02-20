"use strict";
//1. create a class of celebs
//with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
var Celeb = /** @class */ (function () {
    function Celeb(name, genre, tiktokAccount, instagramAccount, followers) {
        this.name = name;
        this.genre = genre;
        this.tiktokAccount = tiktokAccount;
        this.instagramAccount = instagramAccount;
        this.followers = followers;
    }
    //2:
    Celeb.prototype.setFollowers = function (followers) {
        this.followers = followers;
    };
    Celeb.prototype.getFollowers = function () {
        return this.followers;
    };
    return Celeb;
}());
var noaKirel = new Celeb("Noa Kirel", "singer", "NoaK", "noakirel", 1300000);
var annazak = new Celeb("Anna Zak", "singer", "AnnaZ", "annazak", 900000);
var ninetTayeb = new Celeb("Ninet Tayeb", "singer", "", "ninettayeb", 600000);
var harelSkaat = new Celeb("Harel Skaat", "singer", "HarelS", "harelskaat", 400000);
noaKirel.setFollowers(800);
console.log(noaKirel.getFollowers());
