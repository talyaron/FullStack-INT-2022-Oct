function someFunction(child) {
    var result = 3 * child;
    return result;
}
var someFunction2 = function (child) {
    var result = 3 * child;
    return result;
};
var someFunction3 = function (child) {
    var result = 3 * child;
    return result;
};
console.log(someFunction2(3));
console.log(someFunction3(4));
console.log(someFunction3(5));
