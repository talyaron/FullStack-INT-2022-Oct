var _a, _b;
var tomer = {
    Name: "tomer",
    userPassword: "tomer1"
};
var noa = {
    Name: "noa",
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
function DollerToShekels(video) {
    try {
        return 3.53 * video;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var movieAllow = prompt("what movie do you want to rent? we have\nFastAndFurious9\nAvengersEndGame\nAvater2");
if (movieAllow == " " || !movieAllow) {
    var movieAllow_1 = alert("please enter a movie");
}
else if (movieAllow == "fastAndFurious9") {
    var movieAllow_2 = alert(((_a = fastAndFurious9.rent) === null || _a === void 0 ? void 0 : _a.Name) + " take the movie");
}
else if (movieAllow == "avatar2") {
    alert("the price for avatar 2 is " + avatar2.price + "in shekels is " + DollerToShekels(avatar2.price) + " but " + ((_b = avatar2.rent) === null || _b === void 0 ? void 0 : _b.Name));
}
else if (movieAllow == "avengersEndaGame") {
    alert("the price for avengersEndaGame is " + avengersEndaGame.price + "in shekels is " + DollerToShekels(avengersEndaGame.price));
}
else {
    alert("why you dont take movie");
}
