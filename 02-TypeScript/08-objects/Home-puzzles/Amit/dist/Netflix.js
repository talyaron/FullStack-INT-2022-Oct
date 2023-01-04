/////////////////////////////////////////interfaces////////////////////////////////////////////////
/////////////////////////////////////////functions////////////////////////////////////////////////
function historyOfUsers(obj) {
    try {
        return obj.usersOrdered;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function logIn() {
    try {
        var repeat = true;
        while (repeat === true) {
            var userName = prompt("Welcome to Amitflix! \n\nWhat is your user name?\n");
            if ((userName !== null)) {
                if ((isNaN(Number(userName))) && (userName !== "")) {
                    repeat = false;
                    var user = {
                        name: userName,
                        userID: 2,
                        videosOrdered: []
                    };
                    usersList.push(user);
                    return userName;
                }
                else {
                    alert("You didn't enter any letters");
                }
            }
            else {
                alert("Type in your user name");
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function newOrder(videoSN) {
    try {
        var video = videosList.find(function (video) { return video.SN === videoSN; });
        if (video === undefined) {
            throw new Error("could not find video by SN: " + videoSN);
        }
        else {
            var user = loggedInUser();
            validateNewVideoOnWatchlist(video, user);
            video.usersOrdered.push(user.name);
            var orderedBy = historyOfUsers(video);
            console.log("The users who ordered " + video.name + " are " + orderedBy);
        }
    }
    catch (error) {
        console.error(error.message);
    }
}
function loggedInUser() {
    var user = usersList.find(function (user) { return user.userID === 2; });
    if (user === undefined) {
        throw new Error("could not find logged in user");
    }
    else {
        return user;
    }
}
function addVideoToWatchlist(video) {
    var _a;
    try {
        var user = loggedInUser();
        var newVideoOnWatchlistId = "watchlistItem-" + video.name;
        validateNewVideoOnWatchlist(video, user);
        user === null || user === void 0 ? void 0 : user.videosOrdered.push(video);
        var newVideoOnWatchlist = document.createElement("div");
        newVideoOnWatchlist.innerHTML = "\n            <div id=\"" + newVideoOnWatchlistId + "\" class=\"watchlist__item\">" + video.name + "\n                <div class=\"watchlist__item__removeIcon\">\n                    <i type= \"button\" onclick=\"removeVideoFromWatchlist('" + video.name + "')\" class=\"fa-sharp fa-solid fa-xmark\"></i>\n                </div> \n            </div>\n        ";
        (_a = document.getElementById("watchlistItems")) === null || _a === void 0 ? void 0 : _a.appendChild(newVideoOnWatchlist);
    }
    catch (error) {
        console.error(error.message);
        alert("this video is already on your watchlist");
    }
}
function removeVideoFromWatchlist(videoName) {
    try {
        var user = loggedInUser();
        var index = user.videosOrdered.findIndex(function (video) { return video.name === videoName; });
        if (index !== undefined && index > -1) {
            user === null || user === void 0 ? void 0 : user.videosOrdered.splice(index, 1);
        }
        var newVideoOnWatchlistId = "watchlistItem-" + videoName;
        var watchlistVideo = document.getElementById(newVideoOnWatchlistId);
        if (watchlistVideo !== null) {
            watchlistVideo.remove();
        }
    }
    catch (error) {
        console.error(error.message);
    }
}
function showSlides() {
    try {
        var slides = document.getElementsByClassName("videoSlides");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 10000);
    }
    catch (error) {
        console.error(error.message);
    }
}
function validateNewVideoOnWatchlist(newVideo, user) {
    var index = user.videosOrdered.findIndex(function (video) { return video.name === newVideo.name; });
    if (index !== undefined && index > -1) {
        throw new Error("this video is already on your watchlist");
    }
}
/////////////////////////////////////////videos////////////////////////////////////////////////
var xMen = {
    name: "X-Men",
    genre: "action",
    SN: 4120,
    usersOrdered: [
        "Wolverine",
        "Storm"
    ]
};
var avengers = {
    name: "Avengers",
    genre: "action",
    SN: 4274,
    usersOrdered: [
        "Michaelangelo",
        "Leonardo",
        "Raphael",
        "Donatelo"
    ]
};
var frozen = {
    name: "Frozen",
    genre: "action",
    SN: 4285,
    usersOrdered: [
        "Gamora",
        "Groot",
        "Rocket"
    ]
};
var fightClub = {
    name: "Fight Club",
    genre: "thriller",
    SN: 1050,
    usersOrdered: [
        "Michaelangelo",
        "Leonardo",
        "Raphael",
        "Donatelo",
        "Wolverine",
        "Storm",
        "Gamora",
        "Groot",
        "Rocket",
        "Tyler",
    ]
};
var videosList = [
    xMen,
    avengers,
    frozen,
    fightClub
];
/////////////////////////////////////////users////////////////////////////////////////////////
var usersList = [
    {
        name: "Michaelangelo",
        userID: 170889,
        videosOrdered: [avengers, fightClub]
    },
    {
        name: "Leonardo",
        userID: 230193,
        videosOrdered: [avengers, fightClub]
    },
    {
        name: "Raphael",
        userID: 281092,
        videosOrdered: [avengers, fightClub]
    },
    {
        name: "Donatelo",
        userID: 240663,
        videosOrdered: [avengers, fightClub]
    },
    {
        name: "Wolverine",
        userID: 110764,
        videosOrdered: [xMen, fightClub]
    },
    {
        name: "Storm",
        userID: 170838,
        videosOrdered: [xMen, fightClub]
    },
    {
        name: "Gamora",
        userID: 211963,
        videosOrdered: [frozen, fightClub]
    },
    {
        name: "Groot",
        userID: 250289,
        videosOrdered: [frozen, fightClub]
    },
    {
        name: "Rocket",
        userID: 111111,
        videosOrdered: [frozen, fightClub]
    },
    {
        name: "Tyler",
        userID: 170896,
        videosOrdered: [fightClub]
    }
];
//////////////////////////////////////////////////////main/////////////////////////////////////////////////////
var activeUser = logIn();
console.log("the logged in user is " + activeUser);
var slideIndex = 0;
showSlides();
