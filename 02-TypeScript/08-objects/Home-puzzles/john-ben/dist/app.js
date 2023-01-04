var avatar = {
    name: 'avatar',
    price: 10,
    rented_by: 'john'
};
var Novembre = {
    name: 'Novembre',
    price: 20,
    rented_by: 'salome'
};
function Shekels(video) {
    try {
        var new_price = video.price * 3.53;
        return new_price;
    }
    catch (error) {
        console.error("error");
    }
}
var movie = prompt("which movie do you want to rent?");
if (movie == " " || !movie) {
    alert("please enter a movie");
}
else if (movie == "avatar") {
    alert("john take the movie");
}
else if (movie == "Novembre") {
    alert("the price for novembre is " + Shekels(Novembre) + " shekels");
}
else {
    alert("enter a moovie that we have");
}
