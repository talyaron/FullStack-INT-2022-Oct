var x = 5;
if (x > 5) {
    //block code
    console.log('x is larger than 5');
}
// var result = confirm('Do you agree');
// console.log(result);
// if(result){
//     alert("I hacked your bank account")
// } else {
//     alert("Yor bank acount was saved!!!!")
// };
var donationStr = prompt("How much will you donate?");
console.log(donationStr, typeof donationStr);
if (donationStr) {
    var donation = parseInt(donationStr);
    console.log(donation, typeof donation);
    if (!isNaN(donation)) {
        if (donation > 100) {
            alert("You are awsome!!!");
        }
        else {
            alert('thanks!');
        }
    }
    else {
        alert("You didnt put a number");
    }
}
else {
    alert('you should enter a number');
}
