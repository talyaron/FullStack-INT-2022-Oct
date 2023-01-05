//חיפוש לראות מיהאדם שצפה ברטון לפי  id
var videos = [
    {
        title: "harry potter",
        price: 40,
        rentBy: "id-1"
    },
    {
        title: "lord of the rings",
        price: 20,
        rentBy: "id-2"
    }
];
var persons = [
    {
        firstName: "David",
        lastName: "Levi",
        id: "id-1"
    },
    {
        firstName: "Or",
        lastName: "Paz",
        id: "id-2"
    }
];
//מקבל וידאו מסוג וידאו וידפיס את המחיר של הסרטון  בשקלים
function priceInNis(video) {
    console.log(video.price * 3.53);
}
priceInNis(videos[0]);
function isRented(video, id) {
    if (video.rentBy === id) {
        var user = persons.find(function (person) { return id === person.id; });
        console.log((user === null || user === void 0 ? void 0 : user.firstName) + " " + (user === null || user === void 0 ? void 0 : user.lastName) + " rent the video " + video.title);
    }
    else {
        console.log("Video wasn't rent by user with id: " + id);
    }
}
isRented(videos[1], 'id-1');
