var Item = /** @class */ (function () {
    function Item(name, color, price, category, sn) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.category = category;
        this.sn = sn;
        this.uid = name + color + price + category + sn;
    }
    return Item;
}());
var items = [];
//items.push(new Item('Vanilla Chocolate','pink',150, 'Mousse Cake',"fgdfgsdg543534t345"))
