console.log(someFunction(3));
function someFunction(arg) {
    var result = 2 * arg;
    return result;
}
//anonymous function//
var someFunction2 = function (arg) {
    var result = 2 * arg;
    return result;
};
// arrow function (lamda) =>
var someFunction3 = function (arg) {
    var result = 2 * arg;
    return result;
};
console.log(someFunction2(3));
console.log(someFunction3(4));
console.log(someFunction3(5));
console.log(someFunction3(6));
console.log(someFunction3(7));
