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
const Lorem3 = {
    name: "TheCurrier",
    price: 40,
};
const userSelection = prompt("please select a movie, the options are:TheCurrier,Lorem1,Lorem2,Lorem3");
if (userSelection === null || userSelection === " ") {
    console.log("Not movie in the list, null or space");
    console.log(userSelection);
}
else if (userSelection === "TheCurrier") {
    const videoPrice = pricOfVideo(TheCurrier);
}
else if (userSelection === "Lorem2") {
    const videoPrice = pricOfVideo(Lorem2);
}
else if (userSelection === "Lorem3") {
    const videoPrice = pricOfVideo(Lorem3);
}
else if (userSelection === "Lorem1") {
    const videoPrice = pricOfVideo(Lorem1);
}
else {
    console.log("Not movie in the list");
    console.log(userSelection);
}
