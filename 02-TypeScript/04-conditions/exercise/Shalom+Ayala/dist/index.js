// exercise No. 1
// var sisma:string = prompt ('Pleas insert your password');
// if (sisma=='sisma'){
//     alert ('You have enetered the cave');
// } else {
//     alert ('you are done');
// }
// exercise No. 2
var pricestr = prompt('Please enter the price');
if (pricestr) {
    var price = parseInt(pricestr);
    console.log(price, typeof price);
    if (isNaN(price)) {
        alert('You did not enter a number');
    }
    else {
        var vat = price * .17;
        console.log("The vat is " + vat);
    }
}
else {
    alert('You didnt enter a number');
}
