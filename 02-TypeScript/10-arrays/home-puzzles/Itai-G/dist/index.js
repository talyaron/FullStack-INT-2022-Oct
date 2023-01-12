var GameShop = /** @class */ (function () {
    function GameShop(name, price, department, types) {
        this.name = name;
        this.price = price;
        this.department = department;
        this.types = types;
    }
    return GameShop;
}());
var uncharted = new GameShop("Uncharted", 60.9, "adventure-game", "Game");
var watchdogs = new GameShop("Watchdogs", 29.9, "hacking-game", "Game");
var godOfWar2 = new GameShop("God of War2", 80.9, "action-game", "Game");
var xboxcontroller = new GameShop("Xbox sieris x controller", 88.9, "Controller", "computer");
var wirelessmuose = new GameShop("logitech wireless gameing mouse", 10.9, "Kits", "computer");
var ps5controller = new GameShop("Play Station 5 Controller", 85.9, "Controller", "consoles");
var headphones = new GameShop("Headphones", 120.9, "Kits", "audio");
var hdmiCable = new GameShop("HDMI 2.1 120 Hz cable", 16.9, "cable", "Multimedia");
var lgTv = new GameShop("Lg Tv", 3000.9, "screens", "multimedia");
var samsungTv = new GameShop("Samsung TV", 1359.9, "screens", "multimedia");
var items = [
    uncharted,
    watchdogs,
    godOfWar2,
    xboxcontroller,
    wirelessmuose,
    ps5controller,
    headphones,
    hdmiCable,
    lgTv,
    samsungTv,
];
// task 1
function getTypes(item) {
    console.log(item.types);
}
items.forEach(getTypes);
// task 2
var min = Math.min.apply(Math, items.map(function (item) { return item.price; }));
console.log("the the most least expensive product costs " + min);
// task 3
items.sort(function (a, b) { return a.price - b.price; });
console.log(items);
