var Clothes = /** @class */ (function () {
    function Clothes(name, price, department, type) {
        this.department = department;
        this.name = name;
        this.price = price;
        this.type = type;
    }
    Clothes.prototype.getName = function () {
        return this.name;
    };
    Clothes.prototype.getPrice = function () {
        return this.price;
    };
    Clothes.prototype.getDepartment = function () {
        return this.department;
    };
    Clothes.prototype.getType = function () {
        return this.type;
    };
    return Clothes;
}());
var shirt1 = new Clothes("shirt", 10, "man's shirt", "shirt");
var shirt2 = new Clothes("shirt", 20, "man's shirt", "shirt");
var shirt3 = new Clothes("shirt", 30, "man's shirt", "shirt");
var shirt4 = new Clothes("shirt", 70, "man's shirt", "shirt");
var shirt5 = new Clothes("shirt", 25, "man's shirt", "shirt");
var shirt6 = new Clothes("shirt", 4, "man's shirt", "shirt");
var pants1 = new Clothes("pants", 50, "man's pants", "pants");
var arr1 = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, pants1];
//Only shirts
var allShirts = arr1.filter(function (person) {
    return person.getType() == "shirt";
});
//Cheapest item
arr1.sort(function (person1, person2) {
    return person1.getPrice() - person2.getPrice();
});
console.log("Cheapest item is " + arr1[0].getName() + " and it costs " + arr1[0].getPrice() + "$");
