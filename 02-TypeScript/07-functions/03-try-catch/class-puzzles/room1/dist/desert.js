var desertPrice = function (desert) {
    try {
        switch (desert) {
            case "cake":
                alert("price is 70 shekels");
                break;
            case "ice-cream":
                alert("price is 8 shekels");
                break;
            case "cookie":
                alert("price is 5 shekels");
                break;
            default:
                alert("not available");
        }
    }
    catch (error) {
        return console.error(error);
    }
};
var input = prompt("enter your desert (cake / ice-cream / cookie):");
console.log(desertPrice(input));
