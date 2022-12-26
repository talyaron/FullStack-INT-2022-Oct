var nStr = prompt("Enter a number:");
var n;
if (nStr) {
    n = parseInt(nStr);
}
console.log("your number is " + n);
console.log("the result is " + zeroToN(n));
function zeroToN(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
