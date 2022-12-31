function DollerToShekels(video) {
    try {
        return video.price * 3.53;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
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
var movieAllow = prompt("what movie do you want to rent? we have FastAndFurious9,AvengersEndGame,Avater2 ");
if (movieAllow == " " || !movieAllow) {
    var movieAllow_1 = alert("please enter a movie");
}
if (fastAndFurious9) {
    var movieAllow_2 = alert("tomer take the movie");
}
else {
    var user = alert(dollar_to_shekel(movieAllow) + "cost");
}
