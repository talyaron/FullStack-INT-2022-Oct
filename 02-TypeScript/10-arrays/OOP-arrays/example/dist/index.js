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
var id = "3423534";
var buyerCart = carts.find(function (cart) { return cart.buyer.id === id; });
//localstorage
var tal = new Buyer("1234", "Tal");
buyers.push(tal);
carts.push(new Cart(tal));
//save to local storage;
localStorage.setItem("buyers", JSON.stringify(buyers));
localStorage.setItem("carts", JSON.stringify(carts));
//add buyer
buyers.push(new Buyer("2334", "nikita"));
localStorage.setItem("buyers", JSON.stringify(buyers));
var _buyers = localStorage.getItem("buyers");
if (_buyers) {
    _buyers = JSON.parse(_buyers);
    console.log(_buyers);
}
