"use strict";
var Dana = {
    firstName: "Dana",
    lastName: "cohen",
    age: 22
};
var Maya = {
    firstName: "Maya",
    lastName: "Levi",
    age: 30
};
var America = {
    name: "America",
    price: 15,
    whoRent: "Dana"
};
var Forest = {
    name: "Forest",
    price: 10,
    whoRent: "Maya"
};
//create a function that gets a video object and returns the price in shekels
function usdToNis(Video) {
    try {
        return 3.53 * Video;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var enter = prompt("Please enter your user name:");
if (enter == " " || !enter) {
    alert("You cant rent without a user name");
}
console.log("username: " + enter);
var ThankYou = alert("Hi " + enter + ", thank you for coming");
var movie = prompt("What movie?");
if (movie == "" || !movie) {
    var movie_1 = alert("You have to choose");
}
else if (movie == "America") {
    var movie_2 = alert("You chose to watch " + America.name + ", please give me " + usdToNis(America.price) + " NIS");
}
else if (movie == "Forest") {
    var movie_3 = alert("You chose to watch " + Forest.name + ", please give me " + usdToNis(Forest.price) + " NIS");
}
