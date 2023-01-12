var _a, _b;
var tomer = {
    Name: "tomer6633",
    userPassword: "tomer1"
};
var noa = {
    Name: "noa532",
    userPassword: "noa1"
};
var fastAndFurious9 = {
    nameOfMovie: "fastAndFurious9",
    price: 9.99,
    rent: tomer
};
var avengersEndaGame = {
    nameOfMovie: "avengers EndaGame",
    price: 24.99
};
var avatar2 = {
    nameOfMovie: "Avatar 2",
    price: 49.99,
    rent: noa
};
function dolarToShekel(video) {
    try {
        return 3.53 * video;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function videoPriceInDolars(priceDolar) {
    var priceInShekel = dolarToShekel(priceDolar);
    if (typeof priceInShekel === "number") {
        return priceInShekel;
    }
    else {
        return false;
    }
}
var login = prompt("Welcome to my website\nEnter a username");
if (login == " " || !login) {
    alert("It is not possible to get to the website without a username\n  ");
}
console.log("username: " + login);
var Thanks = alert("Hi " + login + ", thanks for signing up");
var movieAllow = prompt("what movie do you want to rent? we have\nfastAndFurious9\navengersEndaGame\navatar2");
if (movieAllow == " " || !movieAllow) {
    var movieAllow_1 = alert("please enter a movie");
}
else if (movieAllow == "fastAndFurious9") {
    var movieAllow_2 = alert(((_a = fastAndFurious9.rent) === null || _a === void 0 ? void 0 : _a.Name) + " take the movie");
}
else if (movieAllow == "avatar2") {
    alert("the price for avatar 2 is " + avatar2.price + "in shekels is " + dolarToShekel(avatar2.price) + " but " + ((_b = avatar2.rent) === null || _b === void 0 ? void 0 : _b.Name) + " rent this one");
}
else if (movieAllow == "avengersEndaGame") {
    alert("the price for avengersEndaGame is " + avengersEndaGame.price + "in shekels is " + dolarToShekel(avengersEndaGame.price));
}
else {
    alert("Only For The Names In The Qustion (You Can Copy Paste)");
}
