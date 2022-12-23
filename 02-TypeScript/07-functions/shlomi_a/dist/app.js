function count(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            sum = sum + (i + j);
        }
    }
    return sum;
}
console.log(count(2));
