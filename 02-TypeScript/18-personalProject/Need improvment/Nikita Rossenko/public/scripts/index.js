function renderMovies() {
    try {
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
function showMovieSeats(id) {
    var moviesContainer = document.querySelector(".main__moviesContainer");
    var main = document.querySelector(".main");
    var moviesString = localStorage.getItem('movies');
    var seatStatus = '';
    if (moviesContainer && main && moviesString) {
        var movies = JSON.parse(moviesString);
        moviesContainer.style.display = 'none';
        var seatsString = localStorage.getItem('moviesSeats');
        if (seatsString) {
            var seats = JSON.parse(seatsString);
            var seatsId = seats[id - 1];
            var seatsDiv = '<div class="SeatsContainer"><div class="SeatsContainer__screen"></div>';
            var seatIndex = 0;
            // console.log(seatsId)
            var seatsRows = (seatsId['seatsArray'].length - 1) / 8;
            for (var k = 1; k <= seatsRows; k++) {
                seatsDiv += '<div class="SeatsContainer__row">';
                for (var i = 1; i <= (seatsId['seatsArray'].length - 1) / 6; i++) {
                    seatIndex += 1;
                    if (seatsId['seatsArray'][seatIndex]['isFree'] == false) {
                        seatStatus = 'occupied';
                    }
                    else {
                        seatStatus = '';
                    }
                    seatsDiv += "<div onclick=\"chooseSeats(this.id)\" class=\"SeatsContainer__seat " + seatStatus + "\" id=\"" + id + ":" + seatIndex + "\"></div>";
                }
                seatsDiv += '</div>';
            }
            seatsDiv += '</div>';
            main.style.flexDirection = 'column';
            main.insertAdjacentHTML('beforebegin', "<div class=\"movieShowcase\"><h1>" + movies[id - 1].name + "</h1><img src=\"" + movies[id - 1].image + "\"><p>" + movies[id - 1].description + "</p></div>");
            main.insertAdjacentHTML('afterbegin', seatsDiv);
            main.insertAdjacentHTML('afterbegin', '<ul class="showcase"><li><div class="SeatsContainer__seat"></div><small>Available</small></li><li><div class="SeatsContainer__seat selected"></div><small>Selected</small></li><li><div class="SeatsContainer__seat occupied"></div><small>Occupied</small></li></ul>');
        }
    }
}
function chooseSeats(info) {
    var seatNumber = parseInt((info.split(':'))[1]);
    var seatIdString = "" + info;
    var movieIdIndex = (info.split(':'))[0] - 1;
    var seatId = document.getElementById(seatIdString);
    var moviesSeatsIdString = localStorage.getItem('moviesSeats');
    var userIndex = null;
    var allUsersString = localStorage.getItem('allUsers');
    var userMovieId = false;
    if (moviesSeatsIdString && allUsersString) {
        var moviesSeatsIdObject = JSON.parse(moviesSeatsIdString);
        if (seatId && moviesSeatsIdObject) {
            var allUsersObject = JSON.parse(allUsersString);
            for (var i in allUsersObject) {
                if (allUsersObject[i].username.toLowerCase() == loggedInUser.toLowerCase()) {
                    userIndex = parseInt(i);
                }
            }
            var movieId = (moviesSeatsIdObject[movieIdIndex])['id'];
            // console.log(movieId['seatsArray'][seatNumber])
            if (userIndex != null) {
                var userMovies = allUsersObject[userIndex]['movies'];
                for (var i = 0; i < userMovies.length; i++) {
                    if (userMovies[i]['movieId'] == movieId) {
                        userMovieId = true;
                    }
                }
                if (!userMovieId) {
                    var movieObject = { 'movieId': "" + movieId, 'seatNumber': [] };
                    userMovies.push(movieObject);
                }
                for (var i = 0; i < userMovies.length; i++) {
                    if (parseInt(userMovies[i]['movieId']) == movieId) {
                        if (!(userMovies[i]['seatNumber']).includes(seatNumber)) {
                            userMovies[i]['seatNumber'].push(seatNumber);
                            localStorage.setItem('allUsers', JSON.stringify(allUsersObject));
                        }
                    }
                }
            }
            // if (movieId[(info.split(':'))[1]] ){
            // }
            // if(moviesSeatsIdObject)
            var movieSeatsArray = moviesSeatsIdObject[movieIdIndex]['seatsArray'];
            if (movieSeatsArray[seatNumber]['isFree']) {
                movieSeatsArray[seatNumber]['isFree'] = false;
                localStorage.setItem('moviesSeats', JSON.stringify(moviesSeatsIdObject));
                seatId.style.backgroundColor = '#2ecc71';
            }
            // for ()
        }
    }
}
function isAdmin() {
    if (allUsersString) {
        var allUsersObject = JSON.parse(allUsersString);
        console.log(allUsersObject);
        for (var i = 0; i < allUsersObject.length; i++) {
            if (allUsersObject[i].username == loggedInUser && allUsersObject[i].isAdmin == true) {
                var goHome = document.querySelector('#goHome');
                if (goHome) {
                    goHome.insertAdjacentHTML('afterend', '<button onclick="addNewMovieContainer()" id="addNewMovie">Add New Movie</button>');
                }
                break;
            }
        }
    }
}
function addNewMovieContainer() {
    var moviesContainer = document.querySelector('.moviesContainer');
    if (moviesContainer) {
        moviesContainer.insertAdjacentHTML('beforebegin', '<div class="addNewMovieContainer"><div class="closeAddMovie"></div><div class="addNewMovieContainer__info"><h1>Add New Movie</h1><form action="#" onsubmit="addNewMovie(event)"><input type="text"name="name"id="newMovieName"placeholder="Movie Name"/><input type="text"name="image"id="newMovieImage"placeholder="Image URL"/><select id="newMovieCategory" name="category" ><option value="Comedy">Comedy</option><option value="Action">Action</option><option value="Drama">Drama</option><option value="Fantasy">Fantasy</option><option value="Horror">Horror</option><option value="Mystery">Mystery</option><option value="Romance">Romance</option><option value="Thriller">Thriller</option></select><input type="submit"name="submit"id="addMovie"value="ADD"/></form></div></div>');
    }
    var addNewMovieContainer = document.querySelector('.addNewMovieContainer');
    var closeAddMovie = document.querySelector('.closeAddMovie');
    if (addNewMovieContainer && closeAddMovie) {
        closeAddMovie.addEventListener('click', function (e) {
            addNewMovieContainer.remove();
        });
    }
}
function addNewMovie(info) {
    info.preventDefault();
    var newMovieName = info.target.elements.name.value;
    var newMovieImage = info.target.elements.image.value;
    var newMoviecategory = info.target.elements.category.value;
    var moviesString = localStorage.getItem('movies');
    var moviesSeatsString = localStorage.getItem('moviesSeats');
    if (moviesString && moviesSeatsString) {
        var movies = JSON.parse(moviesString);
        var moviesSeats = JSON.parse(moviesSeatsString);
        var id = movies.length + 1;
        var movie = new Movie(newMovieName, id, newMovieImage, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dicta at officia facilis eligendi maiores, aperiam expedita nemo cumque, sequi explicabo. Quaerat nisi porro pariatur vitae, earum facilis obcaecati minus?", newMoviecategory);
        var newMovieSeats = new MovieSeats(id, 48);
        movies.push(movie);
        moviesSeats.push(newMovieSeats);
        localStorage.setItem('movies', JSON.stringify(movies));
        localStorage.setItem('moviesSeats', JSON.stringify(moviesSeats));
        renderMovies();
        location.href = 'index.html';
    }
}
isAdmin();
renderMovies();
renderUsername();
