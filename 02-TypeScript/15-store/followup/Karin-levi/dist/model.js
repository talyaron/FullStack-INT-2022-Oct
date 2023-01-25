var Item = /** @class */ (function () {
    function Item(name, shape, color, price, serialNumber) {
        this.name = name;
        this.shape = shape;
        this.color = color;
        this.price = price;
        this.serialNumber = serialNumber;
        this.uid = uid();
    }
    return Item;
}());
var items = [];
items.push(new Item('sunglasses', 'oval', 'black', 100, '537fn68'));
console.log(items);
