function handleGetJokes() {
    console.log("test");
    try {
        fetch("/api/get-jokes")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var jokes = _a.jokes;
            try {
                if (!jokes)
                    throw new Error("didnt find jokes");
                console.log(jokes);
                renderJokes(jokes);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
handleGetJokes();
function renderJokes(jokes) {
    try {
        if (!jokes)
            throw new Error("No jokes");
        var html = jokes
            .map(function (joke) {
            return renderJoke(joke);
        })
            .join(" ");
        var jokesElement = document.querySelector("#root");
        if (!jokesElement)
            throw new Error("coundnt find jokes element on DOM");
        jokesElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderJoke(joke) {
    try {
        return "<div class=\"jokeCard\">\n              <h1>" + joke.name + "</h1>\n              <p " + joke.joke + "</p>\n              <button onclick='handleDeleteUser(\"" + joke.uid + "\")'>DELETE</button>\n              </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
