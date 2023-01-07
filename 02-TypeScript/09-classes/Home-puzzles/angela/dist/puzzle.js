var celeb = /** @class */ (function () {
    function celeb(name, genre, tiktokAccount, instagramAccount) {
        this.name = name;
        this.genre = genre;
        this.tiktokAccount = tiktokAccount;
        this.instagramAccount = instagramAccount;
    }
    celeb.prototype.tiktokFollowerCount = function () {
    };
    celeb.prototype.instagramFollowerCount = function (max) {
        return Math.floor(Math.random() * max);
    };
    ;
    return celeb;
}());
var bradPitt = new celeb("Brad Pitt", "actor", "none", 'none');
