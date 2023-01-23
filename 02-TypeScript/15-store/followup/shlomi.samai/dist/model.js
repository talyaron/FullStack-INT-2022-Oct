var Item = /** @class */ (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }
    return Item;
}());
var items = [];
items.push(new Item('shirt', 45));
console.log(items);
