function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
var Product = /** @class */ (function () {
    function Product(name, type, price, size, img) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.size = size;
        this.id = uid();
        if (!img) {
            if (this.type = "Hat") {
                this.img = Product.imgHat;
            }
            else if (this.type = "Pants") {
                this.img = Product.imgPants;
            }
            else if (this.type = "Shirt") {
                this.img = Product.imgShirt;
            }
            else {
                this.img = Product.img;
            }
        }
        else {
            this.img = img;
        }
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getSize = function () {
        return this.size;
    };
    Product.prototype.getType = function () {
        return this.type;
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.setType = function (type) {
        this.type = type;
    };
    Product.prototype.setSize = function (size) {
        this.size = size;
    };
    Product.img = "./photos/cart.png";
    Product.imgShirt = "./photos/shirt.png";
    Product.imgPants = "./photos/pants.png";
    Product.imgHat = "./photos/hat.png";
    return Product;
}());
