var n = 10;
var result = 0;
for (var i = 1; i <= n; i++) {
    result += i;
}
console.log(result);
var n2 = 10;
var result2 = 0;
for (var i = 1; i <= n2; i++) {
    result2 += i;
    for (var j = 1; j <= n2; j++) {
        result2 += j;
    }
}
console.log(result2);
//test1 
for (var i = 99; i >= 1; i--) {
    console.log(i + " Bottles of Beer. take one down pass it aroundand " + (i - 1) + " on the wall");
}
