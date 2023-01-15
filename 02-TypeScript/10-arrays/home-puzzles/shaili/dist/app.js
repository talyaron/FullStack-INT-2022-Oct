"use strict";
var Product = /** @class */ (function () {
    function Product(department, name, price, type) {
        this.department = department;
        this.name = name;
        this.price = price;
        this.type = type;
    }
    return Product;
}());
var pants = new Product("mans bottoms", "blue pants", 30, "clothes");
var shirt = new Product("womans tops", "black top", 25, "clothes");
var neckless = new Product("womans jewelry", "pearl neckless", 50, "accessories");
var underwear = new Product("mans underwear", "gray underwear", 13, "clothes");
var shoes = new Product("womans shoes", "high hills", 50, "shoes");
var bracelet = new Product("mans jewelry", "nice bracelet", 27, "accessories");
var hat = new Product("mans hat", "green hat", 17, "accessories");
var products = [
    pants,
    shirt,
    neckless,
    underwear,
    shoes,
    bracelet,
    hat,
];
console.log(products);
// 1. get all the items in a type (all "shirts")
console.log(products.filter(function (Product) { return Product.type === "accessories"; }));
// 2. find the cheapest item.
var products = [
    pants.price,
    shirt.price,
    neckless.price,
    underwear.price,
    shoes.price,
    bracelet.price,
    hat.price,
];
console.log(products);
var cheapest = products[0];
// console.log(cheapest);
for (var i = 0; i < products.length; i++) {
    if (cheapest > products[i]) {
        cheapest = products[i];
    }
}
console.log("The cheapest price is: " + cheapest);
