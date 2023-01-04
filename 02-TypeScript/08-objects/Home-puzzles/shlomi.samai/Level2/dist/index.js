function pricOfVideo(obj) {
    try {
        console.log(obj.price * 3.5);
        return obj.price * 3.5;
    }
    catch (error) {
        console.error("error");
        return false;
    }
}
function videoRenter(videoObj, userObj) {
    try {
        videoObj.renter = userObj.name;
        console.log(videoObj);
        return videoObj;
    }
    catch (error) {
        console.error("error");
        return false;
    }
}
var TheCurrier = {
    name: "TheCurrier",
    price: 50
};
var Lorem1 = {
    name: "TheCurrier",
    price: 20
};
var Lorem2 = {
    name: "TheCurrier",
    price: 30
};
var Lorem3 = {
    name: "TheCurrier",
    price: 40
};
var Dudu = {
    name: "Dudu",
    age: 40
};
var Tom = {
    name: "Tom",
    age: 30
};
var userSelectionVideo = prompt("please select a movie, the options are:TheCurrier,Lorem1,Lorem2,Lorem3");
var userSelectionUser = prompt("please select a movie, the options are:Dudu,Tom");
if (userSelectionVideo === null || userSelectionUser === null || userSelectionVideo === " " || userSelectionUser === " ") {
    console.log("Not movie/User in the list, null or space");
    console.log(userSelectionVideo);
}
else if (userSelectionVideo === "TheCurrier" && userSelectionUser === "Dudu") {
    var videoPrice = pricOfVideo(TheCurrier);
    var referenceObj = videoRenter(TheCurrier, Dudu);
}
else if (userSelectionVideo === "Lorem2") {
    var videoPrice = pricOfVideo(Lorem2);
}
else if (userSelectionVideo === "Lorem3") {
    var videoPrice = pricOfVideo(Lorem3);
}
else if (userSelectionVideo === "Lorem1") {
    var videoPrice = pricOfVideo(Lorem1);
}
else {
    console.log("Not movie in the list");
    console.log(userSelectionVideo);
}
