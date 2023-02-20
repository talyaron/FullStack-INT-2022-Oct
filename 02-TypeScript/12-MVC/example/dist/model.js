//Model = data;
var Picture = /** @class */ (function () {
    function Picture(imgUrl) {
        this.imgUrl = imgUrl;
        this.id = uid();
    }
    return Picture;
}());
var pictures = [];
