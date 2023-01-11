var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var items = [tesla_model_s, tesla_model_3, tesla_model_x, tesla_model_y];
function cheapest_price() {
    var result = items[0].price;
    for (var i = 0; i < items.length; i++) {
        if (items[i].price < result) {
            result = items[i].price;
        }
    }
    console.log("Smallest number is: " + result);
}
cheapest_price();
function rateCars() {
    return __spreadArrays(items).sort(function (a, b) { return a.price - b.price; });
}
console.log(rateCars());
