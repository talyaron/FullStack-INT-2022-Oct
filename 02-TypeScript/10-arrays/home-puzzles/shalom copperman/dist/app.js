var product = /** @class */ (function () {
    function product(name, brand, department, price) {
        this.name = name;
        this.brand = brand;
        this.department = department;
        this.price = price;
    }
    return product;
}());
var shirt;
new product("shirt", "zara", "man", 120);
var pants;
new product('pants', 'mark', 'women', 170);
var coat;
new product('coat', 'shein', 'unisex', 249);
