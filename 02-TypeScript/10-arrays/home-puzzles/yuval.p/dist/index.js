var product = /** @class */ (function () {
    function product(name, department, type, price) {
        this.name = name;
        this.department = department;
        this.type = type;
        this.price = price;
    }
    return product;
}());
var cbr650 = new product("CBR650", "Motorcycle", "Honda", 100);
var cbr500 = new product("CBR650", "Motorcycle", "Honda", 80);
var cbr1000 = new product("CBR650", "Motorcycle", "Honda", 200);
var cbr250 = new product("CBR650", "Motorcycle", "Honda", 30);
var ninja650 = new product("CBR650", "Motorcycle", "kawasaki", 100);
var ninja500 = new product("CBR650", "Motorcycle", "kawasaki", 80);
var ninja1000 = new product("CBR650", "Motorcycle", "kawasaki", 200);
var ninja250 = new product("CBR650", "Motorcycle", "kawasaki", 30);
var PartushMotors = [
    cbr1000, cbr250, cbr500, cbr650, ninja1000, ninja650, ninja500, ninja250,
];
// Exercise #1
var kawasaki = PartushMotors.filter(function (product) { return product.type === "kawasaki"; });
console.log(kawasaki);
// Exercise #2
var cheapest = PartushMotors.filter(function (motorcycle) {
    return motorcycle.price <= 30;
});
console.log(cheapest);
// Exercise #3 - I did Type instead of department
var sortedbyprice = PartushMotors.filter(function (motorcycle) { return motorcycle.type === "Honda"; })
    .sort(function (a, b) { return a.price - b.price; });
console.log(sortedbyprice);
