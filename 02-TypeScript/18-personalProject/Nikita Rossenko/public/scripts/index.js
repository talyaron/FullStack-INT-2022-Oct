function renderMovies() {
    try {
        var isLoggedInString = localStorage.getItem('isLoggedIn');
        var isLoggedIn = false;
        if (isLoggedInString) {
            var isLoggedInObject = JSON.parse(isLoggedInString);
            isLoggedIn = isLoggedInObject['isLoggedIn'];
        }
        else {
            isLoggedIn = false;
        }
        if (isLoggedIn) {
            if (isLoggedIn == true) {
                var moviesContainer = document.querySelector('.main__moviesContainer');
                if (moviesContainer) {
                    var moviesString = localStorage.getItem('movies');
                    if (moviesString) {
                        var moviesArray = JSON.parse(moviesString);
                        if (moviesArray) {
                            for (var i = 0; i < moviesArray.length; i++) {
                                var movieDivs = "<div class=\"main__moviesContainer__movie\">\n                                <div class=\"main__moviesContainer__movie__details\">\n                                    <h1>" + moviesArray[i].name + "</h1>\n                                    <button onclick=\"showMovieSeats(" + moviesArray[i].id + ")\" id=\"movie" + moviesArray[i].id + "\">Pick a Seat</button>\n                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dicta at officia facilis eligendi maiores, aperiam expedita nemo cumque, sequi explicabo. Quaerat nisi porro pariatur vitae, earum facilis obcaecati minus?</p>\n                                </div>\n                                <img src=\"" + moviesArray[i].image + "\" >\n                            </div>";
                                moviesContainer.insertAdjacentHTML('beforeend', movieDivs);
                            }
                        }
                    }
                }
            }
            else {
                location.href = 'login.html';
            }
        }
        else {
            location.href = 'login.html';
        }
        var logoutButton = document.querySelector('#logoutBtn');
        logoutButton === null || logoutButton === void 0 ? void 0 : logoutButton.addEventListener('click', function (e) {
            localStorage.removeItem('isLoggedIn');
            location.href = 'login.html';
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderUsername() {
    var usernameHtml = document.querySelector('.username');
    var usernameString = localStorage.getItem('isLoggedIn');
    if (usernameHtml && usernameString) {
        var username = JSON.parse(usernameString);
        usernameHtml.innerHTML = "<p>Welcome: " + username['username'] + "</p>";
    }
}
renderMovies();
renderUsername();
function showMovieSeats(movieId) {
}
