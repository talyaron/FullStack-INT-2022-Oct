var Item = /** @class */ (function () {
    function Item(name, color, price, category, size, sn) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.category = category;
        this.size = size;
        this.sn = sn;
        this.uid = uid();
    }
    return Item;
}());
var items = [];
// items.push(
//   new Item("addias z45", "blue", 120, "shoes", 44, "fgdfgsdg543534t345")
// );
console.log(items);
