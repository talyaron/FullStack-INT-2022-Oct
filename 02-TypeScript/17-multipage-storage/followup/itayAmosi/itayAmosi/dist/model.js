var Item = /** @class */ (function () {
    function Item(name, color, price, category, sn, img) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.category = category;
        this.sn = sn;
        this.img = img;
        this.uid = uid();
    }
    return Item;
}());
var items = [];
// items.push(new Item('addias z45','blue',120,"shoes",44,"fgdfgsdg543534t345")
console.log(items);
