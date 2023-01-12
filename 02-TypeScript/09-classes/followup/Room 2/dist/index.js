//create classes for video, with method which convert price from dollars to NIS
//create several video object
var Video = /** @class */ (function () {
    function Video(name, price, dateOfCreation) {
        this.name = name;
        this.price = price;
        this.dateOfCreation = dateOfCreation;
    }
    Video.prototype.dollarToShekel = function () {
        return this.price * 3.56;
    };
    return Video;
}());
var avatar = new Video("avatar", 20, 2008);
console.log(avatar.dollarToShekel());
