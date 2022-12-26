function product(the_product) {
    switch (the_product) {
        case "ice cream":
            console.log("the price of an ice cream is 8 shekels");
            break;
        case "cake":
            console.log("the price of a cake is 70 shekels");
            break;
        case "cookie":
            console.log("the price of a cookie is 5 shekels");
            break;
        default:
            console.log("your choice is wrong!");
    }
}
var answer = prompt("which product you want?");
var result = product(answer);
// if (result && !isNaN(result)) {
//     alert(`Your number returned as ${result}`);
//   } else {
//     alert("we have an error");
//   }
