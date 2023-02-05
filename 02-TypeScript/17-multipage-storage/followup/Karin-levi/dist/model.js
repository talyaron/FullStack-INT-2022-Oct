var items = [];
var Item = /** @class */ (function () {
    function Item(name, price, category, sn) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.sn = sn;
        this.uid = uid();
    }
    return Item;
}());
items.push(new Item("magnesium", 60, "supplements", "fgdfgsdg543534t345"));
console.log(items);
