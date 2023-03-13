function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
var Product = /** @class */ (function () {
    function Product(name, type, price, size, color, img) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.size = size;
        this.color = color;
        this.id = uid();
        if (!img) {
            if (this.type == "Hat") {
                this.img = Product.imgHat;
            }
            else if (this.type == "Pants") {
                this.img = Product.imgPants;
            }
            else if (this.type == "Shirt") {
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
    Product.img = "./photos/cart.png";
    Product.imgShirt = "./photos/shirt.png";
    Product.imgPants = "./photos/pants.png";
    Product.imgHat = "./photos/hat.png";
    return Product;
}());
