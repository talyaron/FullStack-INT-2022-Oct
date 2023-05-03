function loggedInUser() {
    try {
        fetch("/api/users/get-user")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var user = _a.user;
            try {
                if (!user) {
                    var newUrl = "../register";
                    window.location.replace(newUrl);
                }
                else {
                    renderLoggedInUserName(user.name);
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function movieCookie(movieId) {
    try {
        var movie = { movieId: movieId };
        fetch("/api/movies/enter-movie", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            redirectToTheatrePage();
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function redirectToTheatrePage() {
    try {
        var newUrl = "../theatre";
        window.location.replace(newUrl);
    }
    catch (error) {
        console.error(error);
    }
}
