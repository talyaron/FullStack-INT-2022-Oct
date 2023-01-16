var products = /** @class */ (function () {
    function products(name, brand, department, price) {
        this.name = name;
        this.brand = brand;
        this.department = department;
        this.price = price;
    }
    return products;
}());
var zaraShirts;
new products("shirt", "zara", "man", 120);
var markPants;
new products('pants', 'mark', 'women', 170);
var sheinCoats;
new products('coat', 'shein', 'unisex', 249);
var mystore = [
    zaraShirts,
    markPants,
    sheinCoats
];
