var train_to_busan = {
    name: "train to busan",
    price: 9.99
};
var fight_club = {
    name: "fight club",
    price: 14.99
};
var I_Am_Legend = {
    name: "i Am Legend",
    price: 5.50
};
var renter = ['john', 'amelia', 'luke', 'dan', 'lily', 'luna'];
function dollar_to_shekel(video) {
    try {
        if (video.name == "train to busan") {
            return video.price * 3.53;
        }
        if (video.name == "fight club") {
            return video.price * 3.53;
        }
        if (video.name == "i am legend") {
            return video.price * 3.53;
        }
    }
    catch (error) {
        console.error("error");
    }
}
var randomName = Math.floor(Math.random() * renter.length);
// console.log(randomname, renter[random]);
var wellcome = alert("wellcome to blockbuster");
var userInput = prompt("currnt available movies are: train to busan,fight club,i am legend");
if (userInput == " " || !userInput) {
    var userInput_1 = alert("please enter a movie");
}
else {
    var user = alert(dollar_to_shekel(userInput) + "} cost ,also " + renter[randomName] + " rented it");
}
