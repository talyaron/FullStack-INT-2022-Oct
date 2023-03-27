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
function dollar_to_shekel(userInput) {
    try {
        switch (userInput) {
            case "train to busan": return train_to_busan.price * 3.53;
            case "fight club": return fight_club.price * 3.53;
            case "i am legend": return I_Am_Legend.price * 3.53;
        }
    }
    catch (error) {
        console.error("error");
    }
}
var randomName = Math.floor(Math.random() * renter.length);
var wellcome = alert("wellcome to blockbuster");
var userInput = prompt("current available movies are: train to busan,fight club,i am legend");
if (userInput == " " || !userInput) {
    var userInput_1 = alert("please enter a movie");
}
else {
    var dts = dollar_to_shekel(userInput);
    var user = alert(userInput + " costs " + dts + ", also " + renter[randomName] + " rented it ");
}
