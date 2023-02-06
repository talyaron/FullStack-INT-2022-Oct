var Buyer = /** @class */ (function () {
    function Buyer(id, name) {
        this.id = id;
        this.name = name;
        this.cart = [];
        this.owned = [];
    }
    return Buyer;
}());
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var Cart = /** @class */ (function () {
    function Cart(buyer) {
        this.buyer = buyer;
        this.created = new Date();
    }
    return Cart;
}());
var productsInStore = [];
//collections
var carts = []; //store all users that has products in a cart.
var buyers = [];
//give all the new carts from last 24 hours
var lastDay = new Date().getTime() - 24 * 60 * 60 * 1000;
var lastDayCarts = carts.filter(function (cart) { return cart.created.getTime() > lastDay; });
//give me the cart of user with spesific ID
var id = '3423534';
var buyerCart = carts.find(function (cart) { return cart.buyer.id === id; });
