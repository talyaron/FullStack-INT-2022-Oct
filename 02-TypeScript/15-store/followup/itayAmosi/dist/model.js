var Product = /** @class */ (function () {
    function Product(name, price, type, size, serial) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.size = size;
        this.serial = serial;
        this.uid = uid();
    }
    return Product;
}());
var products = [];
// products.push(new Product('Zara-pants',350,"pants",38,"54dfg545963sa"))
// console.log(products)
