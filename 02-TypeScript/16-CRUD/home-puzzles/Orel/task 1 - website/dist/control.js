function giveStar(index) {
    var stars = "";
    for (var i = 0; i < index; i++) {
        stars += "<i class=\"fa-solid fa-star\"></i>";
    }
    return stars;
}
renderMovies();
// handler Functions
// BUTTONS -----------------------------
function handlerClickBurger() {
    var adminMenuCollapse = document.querySelector('.admin-collapse');
    var adminView = document.querySelector('.admin-menu');
    if (adminMenuCollapse.classList.contains("active")) {
        adminMenuCollapse.classList.remove("active");
        adminView.classList.remove('active');
    }
    else {
        adminMenuCollapse.classList.add("active");
        adminView.classList.add('active');
    }
}
//CLICK
//ADD
function handlerClickAddMovie() {
    try {
        var adminView_1 = document.querySelector('.admin-menu');
        var adminMenuDivs = document.querySelectorAll(".admin-menu-divs");
        adminMenuDivs.forEach(function (e) {
            if (e.classList.contains("add-movie")) {
                e.classList.add("active");
                adminView_1.classList.add('active');
            }
            else {
                e.classList.remove("active");
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
//REMOVE
function handlerClickRemoveMovie() {
    try {
        var adminView = document.querySelector('.admin-menu');
        var adminMenuDivs = document.querySelectorAll(".admin-menu-divs");
        adminMenuDivs.forEach(function (e) {
            if (e.classList.contains("remove-movie")) {
                e.classList.add("active");
            }
            else {
                e.classList.remove("active");
            }
        });
        adminView.classList.add('active');
    }
    catch (error) {
        console.log(error);
    }
}
//UPDATE
function handlerClickUpdateMovie() {
    try {
        var adminView = document.querySelector('.admin-menu');
        var adminMenuDivs = document.querySelectorAll(".admin-menu-divs");
        adminMenuDivs.forEach(function (e) {
            if (e.classList.contains("update-movie")) {
                e.classList.add("active");
            }
            else {
                e.classList.remove("active");
            }
        });
        adminView.classList.add('active');
    }
    catch (error) {
        console.log(error);
    }
}
// SUBMIT ------------------------------
//ADD
function handlerSubmitAdd(ev) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, url = _a.url, name = _a.name, stars = _a.stars, des = _a.des, release = _a.release;
        console.log(release.value);
        movies.push(new Movies(url.value, name.value, des.value, stars.value, Number(release.value)));
        renderToLocalStorage(movies);
        return renderMovies();
    }
    catch (error) {
        console.log(error);
    }
}
//REMOVE
function handlerSubmitRemove(ev) {
    try {
        ev.preventDefault();
        var allMovie = document.querySelectorAll('.container-movies .movie');
        allMovie.forEach(function (movie) {
            var m = movie;
            if (m.style.display === "block") {
                var nameMovie_1 = movie.getAttribute('data');
                var index = movies.forEach(function (m, index) {
                    if (m.name === nameMovie_1) {
                        movies.splice(index, 1);
                    }
                });
                renderMovies();
                ev.target.reset();
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
function handlerSubmitUpdate(ev) {
    try {
        ev.preventDefault();
        var value_1 = ev.target.elements.nameToChance.value;
        var allMovie = document.querySelectorAll('.container-movies .movie');
        allMovie.forEach(function (movie) {
            var m = movie;
            if (m.style.display === "block") {
                var nameMovie_2 = movie.getAttribute('data');
                var index = movies.forEach(function (m, index) {
                    if (m.name === nameMovie_2) {
                        movies[index].name = value_1;
                    }
                });
                renderMovies();
                ev.target.reset();
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
//Chance 
//REMOVE
function handlerChanceRemove(ev) {
    try {
        var value_2 = ev.target.value.toLowerCase();
        var allMovie = document.querySelectorAll('.container-movies .movie');
        allMovie.forEach(function (element) {
            var _a;
            var DATA = (_a = element.getAttribute('DATA')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            var el = element;
            if (DATA.includes(value_2)) {
                el.style.display = "block";
            }
            else {
                el.style.display = "none";
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
//UPDATE
function handlerChanceUpdate(ev) {
    try {
        var value_3 = ev.target.value.toLowerCase();
        var allMovie = document.querySelectorAll('.container-movies .movie');
        allMovie.forEach(function (element) {
            var _a;
            var DATA = (_a = element.getAttribute('DATA')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            var el = element;
            if (DATA.includes(value_3)) {
                el.style.display = "block";
            }
            else {
                el.style.display = "none";
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
