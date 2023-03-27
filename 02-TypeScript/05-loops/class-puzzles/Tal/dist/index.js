// puzzle 1
// for (var bottle = 99; bottle > 0; bottle--) {
//   console.log(
//     `${bottle} on the wall.... one fell done ... ${bottle - 1} left...`
//   );
// }
//puzle 2
// var n = 10;
// var sum = 0;
// while (n > 0) {
//   sum += n;
//   console.log(sum);
//   n--;
// }
// console.log(sum);
//puzle 3
var sum = 0; //global variable
for (var j = 0; j < 5; j++) {
    var n = 10; //local varaible
    console.log(j);
    while (n > 0) {
        sum += n;
        console.log(sum);
        n--;
    }
}
console.log(sum);
