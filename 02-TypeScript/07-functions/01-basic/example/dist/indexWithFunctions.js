//function sayThankYou(argument){
function priceWithVat(price) {
    return price * 1.17;
}
for (var i = 0; i < 7; i++) {
    var userName = prompt("What is your name?");
}
function sayThankYou(name) {
    if (name) {
        name = name.toUpperCase();
        return "Thank you " + name + " for registering";
    }
    else {
        return "";
    }
}
// userName = prompt("What is your name?");
// console.log(sayThankYou(userName));
// const userPrice = prompt("what is the price?");
// if (userPrice) {
//   const _userPrice = parseInt(userPrice);
//   const withVat = priceWithVat(_userPrice);
//   console.log(`Your price with vat is ${withVat}`);
// }
