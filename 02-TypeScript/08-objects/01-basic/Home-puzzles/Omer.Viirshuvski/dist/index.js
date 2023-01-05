var omer = {
    name: "Omer"
};
var guy = {
    name: "Guy"
};
var dorit = {
    name: "Dorit"
};
var video = {
    name: "Spiderman",
    price: 5,
    people: omer
};
function toShekel(obj) {
    return obj.price * 3.53;
}
console.log("The movie " + video.name + " will cost " + video.price + "$ in dollars and will cost " + toShekel(video) + " in nis");
//didnt understand the problem
function whosRenting(obj) {
    return obj.people;
}
console.log("The movie " + video.name + " is rented by " + whosRenting(video).name);
var vid = {
    name: "Aladin",
    people: [
        omer,
        guy,
        dorit
    ]
};
function whosRentingNetflix(obj) {
    for (var key in vid) {
        if (key == "people") {
            for (var i in vid.people) {
                console.log("The name of someone who's renting it: " + vid.people[i].name);
            }
        }
        else {
            console.log("The name of the movie is: " + vid[key]);
        }
    }
}
whosRentingNetflix(vid);
