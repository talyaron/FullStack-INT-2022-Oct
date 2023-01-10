var GameShop = /** @class */ (function () {
    function GameShop(name, price, department, types) {
        this.name = name;
        this.price = price;
        this.department = department;
        this.types = types;
    }
    return GameShop;
}());
var fifa2022 = new GameShop("Fifa2022", 159.9, "sport-game", "game");
var fortnite = new GameShop("Fortnite", 29.9, "survival-game", "game");
var godOfWar = new GameShop("God of War", 199.9, "action-game", "game");
var keyboard = new GameShop("Keyboard", 15.9, "Kits", "computer");
var muose = new GameShop("Muose", 10.9, "Kits", "computer");
var controller = new GameShop("Controller", 99.9, "Kits", "consoles");
var headphones = new GameShop("Headphones", 99.9, "Kits", "computer");
var hdmiCable = new GameShop("HDMI cable", 6.9, "cable", "Multimedia");
var lgTv = new GameShop("LG TV", 1259.9, "screens", "multimedia");
var samsungTv = new GameShop("Samsung TV", 1359.9, "screens", "multimedia");
var items = [
    fifa2022,
    fortnite,
    godOfWar,
    keyboard,
    muose,
    controller,
    headphones,
    hdmiCable,
    lgTv,
    samsungTv,
];
// task 1
console.log(items); // To delete!
function getTypes(item) {
    console.log(item.name, item.types); // To delete!
}
items.forEach(getTypes);
// task 2
function getPrices(item) {
    console.log(item.price); // To delete!
}
items.forEach(getPrices);
var min = Math.min.apply(Math, items.map(function (item) { return item.price; }));
console.log(min);
// task 3
items.sort(function (a, b) { return a.price - b.price; });
console.log(items); // To delete!
// task 4
