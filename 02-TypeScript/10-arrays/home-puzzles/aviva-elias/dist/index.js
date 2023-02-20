var ClothingStore = /** @class */ (function () {
    function ClothingStore(name, price, department, type) {
        this.name = name;
        this.price = price;
        this.department = department;
        this.type = type;
    }
    return ClothingStore;
}());
var Raincoat = new ClothingStore("pink raincoat", 50, "girls", "coat");
var highBoots = new ClothingStore("blue high boots", 100, "women shoes", "shoe");
var sweatSuit = new ClothingStore("adidas black sweat suit", 70, "sport", "suit");
var tShirt = new ClothingStore("superman T-shirt", 40, "boys", "shirt");
var longShirt = new ClothingStore("yello long shirt", 40, "men", "shirt");
var jeans = new ClothingStore("levis jeans 501", 80, "men", "trousers");
var leatherJacket = new ClothingStore("leather jacket", 120, "men", "jacket");
var clothing = [Raincoat, highBoots, sweatSuit, tShirt, longShirt, jeans, leatherJacket];
//task 1:
var allShirts = clothing.filter(function (item) { return item.type === "shirt"; });
function listOfShirt(type) {
    console.log(type.name, type.price);
}
console.log("list of shirts in the store:");
allShirts.forEach(listOfShirt);
//task 2:
clothing.sort(function (a, b) { return a.price - b.price; });
function chipestItem() {
    return clothing[0].name;
}
console.log("the chipest item in the store is " + chipestItem());
//task 3:
var menDipartment = clothing.filter(function (dip) { return dip.department === "men"; });
menDipartment.sort(function (a, b) { return a.price - b.price; });
function dipartmentList(index) {
    console.log(index.name, index.price);
}
console.log("list of clothing in men dipartment:");
menDipartment.forEach(dipartmentList);
//task 4:
var Name = clothing.map(function (item) { return item.name; });
console.log(Name);
