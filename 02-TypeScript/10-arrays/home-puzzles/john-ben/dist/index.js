var Cars = /** @class */ (function () {
    function Cars(name, price, model) {
        this.name = name;
        this.price = price;
        this.model = model;
    }
    return Cars;
}());
var tesla_model_s = new Cars("Tesla", 170000, "3");
var tesla_model_3 = new Cars("Tesla", 370000, "s");
var tesla_model_x = new Cars("Tesla", 270000, "x");
var tesla_model_y = new Cars("Tesla", 470000, "y");
var myCars = [
    tesla_model_s,
    tesla_model_3,
    tesla_model_x,
    tesla_model_y,
];
var companyCars = [];
function cheapest_price(items) {
    try {
        if (!Array.isArray(items))
            throw new Error("Items is not an array");
        if (items.length === 0)
            throw new Error("array is empty");
        var minPrice = items[0].price;
        var minIndex = 0;
        for (var i = 0; i < items.length; i++) {
            if (items[i].price < minPrice) {
                minPrice = items[i].price;
                minIndex = i;
            }
        }
        return items[minIndex];
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var cheapestCar = cheapest_price(myCars);
console.log(cheapestCar);
console.log('hi');
// function rateCars() {
//   return [...items].sort((a, b) => a.price - b.price);
// }
// console.log(rateCars());
