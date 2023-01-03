var glassOnionAKnivesOutMystery = {
    name: "Glass Onion A Knives Out Mystery",
    price: 25.99
};
var blackPantherWakandaForever = {
    name: "Black Panther Wakanda Forever",
    price: 15.99
};
var uncharted = {
    name: "uncharted",
    price: 10.99
};
function dollarToShekel(rentAmovie) {
    try {
        if (rentAmovie.name == "Glass Onion A Knives Out Mystery") {
            return rentAmovie.price * 3.5;
        }
        if (rentAmovie.name == "Black Panther Wakanda Forever") {
            return rentAmovie.price * 3.5;
        }
        if (rentAmovie.name == "uncharted") {
            return rentAmovie.price * 3.5;
        }
    }
    catch (error) {
        console.error("we ha got an error on our hands");
    }
}
function getMovieByName(movieName) {
    try {
        if (movieName === glassOnionAKnivesOutMystery.name) {
            return glassOnionAKnivesOutMystery;
        }
        if (movieName === blackPantherWakandaForever.name) {
            return blackPantherWakandaForever;
        }
        if (movieName === uncharted.name) {
            return uncharted;
        }
    }
    catch (error) {
        console.error('failed to get movie from library');
    }
}
var userInput = prompt("please enter a movie name to rent:\n  Glass Onion A Knives Out Mystery\n  Black Panther Wakanda Forever\n  uncharted");
if (typeof userInput === "undefined") {
    alert("error input");
}
var movieObject = getMovieByName(userInput);
var moviePrice = dollarToShekel(movieObject);
alert("thank you for choosing the movie " + userInput + "and it's price in nis is " + moviePrice);
