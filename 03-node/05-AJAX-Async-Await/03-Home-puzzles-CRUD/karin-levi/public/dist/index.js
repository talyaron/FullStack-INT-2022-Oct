function handleGetJokes() {
    try {
        fetch("/jokes")
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
function renderJokes(jokes) {
    try {
        if (!jokes)
            throw new Error("No jokes");
        var html = jokes
            .map(function (joke) {
            return renderJoke(joke);
        })
            .join(" ");
        var jokesElement = document.querySelector("#jokes");
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
        return "<div class=\"joke\">\n              <p contenteditable oninput=\"handleJokeValueUpdate(event, '" + joke.uid + "')\">" + joke.value + "</p>\n              <button onclick='handleDeleteJoke(\"" + joke.uid + "\")'>DELETE</button>\n              </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
function handleJokeValueUpdate(ev, uid) {
    try {
        var value = ev.target.textContent;
        fetch("/joke", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ value: value, uid: uid })
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddJokes(ev) {
    try {
        ev.preventDefault();
        var value = ev.target.elements.value.value;
        if (!value)
            throw new Error("No value");
        var newJoke = {
            value: value
        };
        //send to server:
        fetch("/joke", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJoke)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteJoke(uid) {
    try {
        console.log(uid);
        fetch("/joke", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ uid: uid })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var jokes = _a.jokes;
            renderJokes(jokes);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
