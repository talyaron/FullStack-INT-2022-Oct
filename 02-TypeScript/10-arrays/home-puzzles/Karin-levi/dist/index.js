var Product = /** @class */ (function () {
    function Product(price, name, department, type) {
        this.price = price;
        this.name = name;
        this.department = department;
        this.type = type;
    }
    return Product;
}());
var Shop = /** @class */ (function () {
    function Shop(products) {
        this.products = products;
    }
    Shop.prototype.getProductByType = function (type) {
        return products.filter(function (product) { return product.type === type; });
    };
    Shop.prototype.cheepestItem = function () {
        return products.reduce(function (prev, current) { return (prev.price > current.price) ? current : prev; });
    };
    Shop.prototype.sortByPriceAsc = function () {
        return products.sort(function (a, b) { return a.price - b.price; });
    };
    Shop.prototype.findProduct = function (searchTerm) {
        return products.filter(function (product) { return product.name.includes(searchTerm); });
    };
    return Shop;
}());
var shirt = new Product(50, "TShirt", "men", "men shirts");
var skirt = new Product(60, "white", "female", "womens skirts");
var sweater = new Product(70, "blue", "men", "men sweaters");
var womentop = new Product(570, "sport-top", "female", "womens tops");
var underwear = new Product(560, "black", "men", "men underwear");
var pants = new Product(550, "skini", "female", "womens pants");
var products = [shirt, skirt, sweater, womentop, underwear, pants];
var shop = new Shop(products);
console.log("here are all the products: ", products);
console.log("cheepest product is: ", shop.cheepestItem());
console.log("sorted by price ascending: ", shop.sortByPriceAsc());
console.log("products that contain \"rt\": ", shop.findProduct("rt"));
