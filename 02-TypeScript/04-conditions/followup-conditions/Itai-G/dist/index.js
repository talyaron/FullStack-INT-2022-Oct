// conditions
var x = 20;
console.log(x === 9);
console.log(x >= 20);
console.log(x !== 15);
// logical operators
var x = 10;
var y = 20;
console.log(x > 5 && y > 10);
console.log(x >= 10 || y >= 20);
var donationStr = prompt("how much will you donate?");
console.log(donationStr);
if (donationStr == !isNaN) {
    var donation = parseInt(donationStr);
    console.log(donation, typeof donation);
    if (typeof donation === 'number') {
        if (donation > 100) {
            console.log('you are awsme!!');
        }
        else {
            console.log('cheap!!!');
        }
    }
}
else {
    alert('you shuld put a number');
}
