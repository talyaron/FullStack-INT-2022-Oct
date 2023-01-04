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
const TheCurrier = {
    name: "TheCurrier",
    price: 50,
};
const Lorem1 = {
    name: "TheCurrier",
    price: 20,
};
const Lorem2 = {
    name: "TheCurrier",
    price: 30,
};
const Dudu = {
    name: "Dudu",
    age: 40,
};
const Tom = {
    name: "Tom",
    age: 30,
};
const userSelectionVideo = prompt("please select a movie, the options are:TheCurrier,Lorem1,Lorem2");
const userSelectionUser = prompt("please select a movie, the options are:Dudu,Tom");
if (userSelectionVideo === null || userSelectionUser === null || userSelectionVideo === " " || userSelectionUser === " ") {
    console.log("Not movie/User in the list, null or space");
    console.log(userSelectionVideo);
}
else if (userSelectionVideo === "TheCurrier" && userSelectionUser === "Dudu") {
    const videoPrice = pricOfVideo(TheCurrier);
    const referenceObj = videoRenter(TheCurrier, Dudu);
}
else if (userSelectionVideo === "TheCurrier" && userSelectionUser === "Tom") {
    const videoPrice = pricOfVideo(TheCurrier);
    const referenceObj = videoRenter(TheCurrier, Tom);
}
else if (userSelectionVideo === "Lorem1" && userSelectionUser === "Dudu") {
    const videoPrice = pricOfVideo(TheCurrier);
    const referenceObj = videoRenter(TheCurrier, Tom);
}
else if (userSelectionVideo === "Lorem1" && userSelectionUser === "Tom") {
    const videoPrice = pricOfVideo(TheCurrier);
    const referenceObj = videoRenter(TheCurrier, Tom);
}
else if (userSelectionVideo === "Lorem2" && userSelectionUser === "Dudu") {
    const videoPrice = pricOfVideo(TheCurrier);
    const referenceObj = videoRenter(TheCurrier, Tom);
}
else if (userSelectionVideo === "Lorem2" && userSelectionUser === "Tom") {
    const videoPrice = pricOfVideo(TheCurrier);
    const referenceObj = videoRenter(TheCurrier, Tom);
}
else {
    console.log("Not movie in the list");
    console.log(userSelectionVideo);
}
