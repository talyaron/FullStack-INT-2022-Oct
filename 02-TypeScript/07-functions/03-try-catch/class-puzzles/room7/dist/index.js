var desert = prompt("Enter the desert you want to order:");
if (desert == " " || !desert) {
    console.log("you don't enter a value");
}
else {
    var price = priceOfDesert(desert);
    if (price != false) {
        console.log("the price for a " + desert + " is " + price);
    }
    else {
        console.log("We dont serve this desert.");
    }
}
function priceOfDesert(desert) {
    try {
        switch (desert) {
            case "ice-cream":
                return 8;
            case "cake":
                return 70;
            case "cookie":
                return 5;
        }
        throw new Error('We dont serve this desert.');
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
