var Counter = /** @class */ (function () {
    function Counter(count) {
        if (count === void 0) { count = 0; }
        this.id = uid();
        this.count = count;
    }
    Counter.prototype.increment = function () {
        this.count++;
    };
    return Counter;
}());
var counter = new Counter();
console.log(counter);
