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
        switch (dollar_to_shekel) {
            case "train to busan": return video.price * 3.53;
            case "fight club ": return video.price * 3.53;
            case "i am legend": return video.price * 3.53;
            default: return "you choose an unavailable movie";
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
