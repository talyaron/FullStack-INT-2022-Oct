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
function addStoreItems(obj) {
    try {
        var brand = obj.target.elements.name.value;
        var color = obj.target.elements.color.value;
        var price = obj.target.elements.price.valueAsNumber;
        var category = obj.target.elements.category.value;
        var size = obj.target.elements.size.valueAsNumber;
        storeItems.push(new itemProprties(brand, color, price, category, size));
        var write = document.querySelector(".popup");
        if (write) {
            write.innerHTML = "<div class=\"popup\" \n        <p>" + storeItems + "</p>\n        </div>";
        }
        console.log(storeItems);
    }
    catch (error) {
        console.error(error);
    }
}
addStoreItems();
