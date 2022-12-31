var fastAndFurious9 = {
    nameOfMovie: "fastAndFurious9",
    price: 9.99
};
var avengersEndaGame = {
    nameOfMovie: "avengers EndaGame",
    price: 24.99
};
var avatar2 = {
    nameOfMovie: "Avatar 2",
    price: 49.99
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
var movieAllow = prompt("what movie do you want to rent? we have\nFast-And-Furious-9\nAvengers-EndGame\nAvater2");
if (movieAllow == " " || !movieAllow) {
    var movieAllow_1 = alert("please enter a movie");
    if (fastAndFurious9) {
        var movieAllow_2 = alert("tomer take the movie");
    }
    if (avatar2) {
        alert("the price for avatar 2 is " + avatar2.price + "in shekels is " + DollerToShekels(avatar2.price));
    }
    if (avengersEndaGame) {
        alert("the price for avengersEndaGame is " + avengersEndaGame.price + "in shekels is " + DollerToShekels(avengersEndaGame.price));
    }
    else {
        alert("why you dont take movie");
    }
}
