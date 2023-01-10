var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Product = /** @class */ (function () {
    function Product(price, name, department, type) {
        this.price = price;
        this.name = name;
        this.department = department;
        this.type = type;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getDepartment = function () {
        return this.department;
    };
    Product.prototype.getType = function () {
        return this.type;
    };
    return Product;
}());
var products = [];
var nikeShoes = new Product(100, "Air Jordan 1", "Shoes", "Sneakers");
products.push(nikeShoes);
var adidasShoes = new Product(75, "Stan Smith", "Shoes", "Sneakers");
products.push(adidasShoes);
var drMarten = new Product(150, "1460", "Shoes", "Boots");
products.push(drMarten);
var timberland = new Product(220, "6 Inch Premium", "Shoes", "Boots");
products.push(timberland);
var leviesJeans = new Product(85, "511", "Clothing", "Jeans");
products.push(leviesJeans);
var jackAndJonesJeans = new Product(32, "JJiliam", "Clothing", "Jeans");
products.push(jackAndJonesJeans);
var bershakaJeans = new Product(30, "Vintage", "Clothing", "Jeans");
products.push(bershakaJeans);
var gStarShirt = new Product(40, "Dunda", "Clothing", "Shirt");
products.push(gStarShirt);
var forsbergShirt = new Product(20, "Stoltson", "Clothing", "Shirt");
products.push(forsbergShirt);
var leviesShirt = new Product(22, "Original Tee", "Clothing", "Shirt");
products.push(leviesShirt);
var tommyHilShirt = new Product(60, "Regular", "Clothing", "Shirt");
products.push(tommyHilShirt);
var filteredByType = function (type) {
    return products.filter(function (ele) { return ele.getType() == type; });
};
var findCheapestItem = function () {
    return products.reduce(function (prev, current) {
        return prev.price < current.price ? prev : current;
    });
};
var sortProductsByPrice = function () {
    return __spreadArrays(products).sort(function (a, b) { return a.price - b.price; });
};
// HW level 1
console.log(filteredByType("Sneakers"));
// HW level 2
console.log(findCheapestItem());
// HW level 3
console.log(sortProductsByPrice());
