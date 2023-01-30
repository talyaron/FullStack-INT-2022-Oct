var movies = [];
try {
    if (!form)
        throw new Error("Form is empty");
    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var category = ev.target.elements.category.value;
        var date = ev.target.elements.date.value;
        movies.push(new Movie(name, date, category));
        ev.target.reset();
        render(movies, output);
    });
}
catch (error) {
    console.error(Error);
}
function render(movies, output) {
    try {
        if (!movies)
            throw new Error("array empty");
        output.innerHTML = "";
        var html = movies.map(function (mv) {
            return "\n            <div class=\"output__card\">\n                <h2>" + mv.getName() + "</h2>\n                <h3>" + mv.getCategory() + "</h3>\n                <p>" + mv.getDate() + "</p>\n                <button onclick=\"deleteMovie(" + mv.getId() + ")\">Delete</button>\n                <button onclick=\"editMovie(" + mv.getId() + ")\">Edit</button>\n            </div>\n            ";
        });
        html.forEach(function (ele) {
            output.innerHTML += ele;
        });
    }
    catch (error) {
        console.error(Error);
        return "";
    }
}
function editMovie(id) {
    try {
        if (!movies)
            throw new Error("movies empty");
        var index = movies.findIndex(function (mv) { return mv.getId() === id; });
        if (index == -1)
            throw new Error("movie not found");
        output.innerHTML = "\n        <form id=\"theEditForm\">\n            <input type=\"text\" name=\"name\" placeholder=\"Name of movie\" required>\n            <input type=\"text\" name=\"category\" placeholder=\"Category\" required>\n            <input type=\"date\" name=\"date\" required>\n            <input type=\"submit\" value=\"Submit\">\n        </form>\n        ";
        var form = document.getElementById("theEditForm");
        if (!form)
            throw new Error("form empty");
        form.addEventListener('submit', function (ev) {
            ev.preventDefault();
            var index = movies.findIndex(function (mv) { return mv.getId() === id; });
            if (id == -1)
                throw new Error("movie not found");
            var name = ev.target.elements.name.value;
            var category = ev.target.elements.category.value;
            var date = ev.target.elements.date.value;
            movies[index].setName(name);
            movies[index].setDate(date);
            movies[index].setCategory(category);
            ev.target.reset();
            render(movies, output);
        });
    }
    catch (error) {
        console.error(Error);
    }
}
function deleteMovie(id) {
    try {
        if (!movies)
            throw new Error("movies empty");
        var index = movies.findIndex(function (mv) { return mv.getId() === id; });
        if (id == -1)
            throw new Error("movie not found");
        movies.splice(index, 1);
        render(movies, output);
    }
    catch (error) {
        console.error(Error);
    }
}
