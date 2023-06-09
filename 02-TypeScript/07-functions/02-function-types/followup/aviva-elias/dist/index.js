function pureFunction(arg) {
    var result = arg * 4;
    return result;
}
console.log(pureFunction(3));
var anonymousFunction = function (arg) {
    var result = arg * 4;
    return result;
};
console.log(anonymousFunction(3));
var arrowFunction = function (arg) {
    var result = arg * 4;
    return result;
};
console.log(arrowFunction(3));
