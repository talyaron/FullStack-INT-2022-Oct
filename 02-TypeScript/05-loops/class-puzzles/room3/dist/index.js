// var apples:number = 10;
// while (apples>0) {
//     console.log(`${apples} apples. take one down pass it around, and ${apples-1} on the wall`);
//     apples -=1;
// }
// var n:number = 19;
// var x:number = 0;
// var sidra:number = 0;
// while (x<n) {
//     x = x + 1;
//     sidra = sidra + x;
//     console.log (`${x}+${sidra-x}= ${sidra}`)
// }
var n = 19;
var j = 19;
var x = 0;
var y = 0;
var sidra = 0;
var box = 0;
while (y < j) {
    while (x < n) {
        x = x + 1;
        sidra = sidra + x;
        box = sidra * y;
        console.log(x + "+" + (sidra - x) + "= " + sidra + " --- " + box);
    }
    y = y + 1;
}
