var itemProprties = /** @class */ (function () {
    function itemProprties(brand, color, price, category, size) {
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.category = category;
        this.size = size;
    }
    return itemProprties;
}());
var storeItems = [];
function addStoreItems(ev) {
    try {
        var brand = ev.target.elements.name.value;
        var color = ev.target.elements.color.value;
        var price = ev.target.elements.price.valueAsNumber;
        var category = ev.target.elements.category.value;
        var size = ev.target.elements.size.valueAsNumber;
        storeItems.push(new itemProprties(brand, color, price, category, size));
        console.log(storeItems);
    }
    catch (error) {
        console.error(error);
    }
}
console.log(storeItems);
