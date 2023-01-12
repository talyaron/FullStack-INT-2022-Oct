var lorem3 = {
    title: "lorem3",
    year: 1990,
    price: 100,
    toShekels: function () {
        return this.price * 3.5;
        console.dir(this.price * 3.5);
    }
};
console.log(lorem3.toShekels());
var Video = /** @class */ (function () {
    function Video(neme, year, mainActor) {
    }
    return Video;
}());
